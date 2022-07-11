import * as SignalR from '@microsoft/signalr';
import { useUserStore } from '../store/modules/user';
import EventEmitter from 'events';
import { message } from 'ant-design-vue';

const defaultOptions = {
  log: false,
};

class SocketConnection extends EventEmitter {
  connection: any;
  options: any;
  listened: any[];
  toSend: any[];
  offline: boolean;
  socket: any;
  userStore: any;
  event: EventEmitter;
  constructor(connection: any, options = {}) {
    super();
    this.connection = connection;
    this.options = Object.assign(defaultOptions, options);
    this.listened = [];
    this.toSend = [];
    this.offline = false;
    this.socket = undefined;
    this.userStore = useUserStore();
    this.event = new EventEmitter();
  }

  /**
   * 同一种消息只定义一次
   *
   * @param {string| symbol} event
   * @param {(...args: any[]) => void} listener
   * @memberof SocketConnection
   */
  one(event: any, listener: any) {
    if (this.listeners(event).length === 0) {
      this.on(event, listener);
    }
  }

  async _initialize() {
    try {
      await this.socket.start();
      this.emit('onstart');
      if (this.offline) {
        this.emit('onrestart');
      }
      this.offline = false;
    } catch (error) {
      setTimeout(async () => {
        await this._initialize();
      }, 5000);
    }
  }

  async start(token: string | Promise<string>) {
    // 组件重新加载时, 如果 socket 存在, 不需要新建
    if (!this.socket) {
      this.socket = new SignalR.HubConnectionBuilder()
        .configureLogging(SignalR.LogLevel.Information)
        .withUrl(process.env.VUE_APP_API_BASE_URL + '/hubs/chathub', {
          accessTokenFactory: () => token,
          skipNegotiation: true,
          transport: SignalR.HttpTransportType.WebSockets,
        })
        .build();

      this.socket.on('ForceExist', () => {
        //可以做相关业务逻辑
        this.userStore
          .Logout()
          .then(() => {
            window.location.reload();
          })
          .catch((err: any) => {
            message.error(err.message);
          });
      });

      this.socket.on('AppendNotice', (notice: any) => {
        this.userStore.AddNotices(notice);
      });

      this.socket.onclose(async () => {
        this.offline = true;
        this.emit('onclose');
        await this._initialize();
      });

      await this._initialize();
    }
  }

  async authenticate(token: any) {
    await this.start(token);
  }

  listen(method: string) {
    if (this.offline) return;
    if (this.listened.some((v) => v === method)) return;
    this.listened.push(method);
    this.one('onstart', () => {
      this.listened.forEach((method) => {
        this.socket.on(method, (data: any) => {
          if (this.options.log) {
            console.log({
              type: 'receive',
              method,
              data,
            });
          }
          this.emit(method, data);
        });
      });
    });
  }

  send(methodName: any, ...args: any[]) {
    if (this.options.log) {
      console.log({
        type: 'send',
        methodName,
        args,
      });
    }
    if (this.offline) return;

    if (this.socket) {
      this.socket.send(methodName, ...args);
      return;
    }

    this.one('onstart', () => this.socket.send(methodName, ...args));
  }

  async invoke(methodName: string, ...args: any[]) {
    if (this.options.log) {
      console.log({
        type: 'invoke',
        methodName,
        args,
      });
    }
    if (this.offline) return false;

    if (this.socket) {
      return this.socket.invoke(methodName, ...args);
    }

    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve) =>
      this.one('onstart', () => resolve(this.socket.invoke(methodName, ...args))),
    );
  }
}

if (!SignalR) {
  throw new Error('[Vue-SignalR] Cannot locate signalr-client');
}

function install(Vue: any, connection: any) {
  if (!connection) {
    throw new Error('[Vue-SignalR] Cannot locate connection');
  }

  const Socket = new SocketConnection(connection);

  Vue.socket = Socket;
}

export default install;
