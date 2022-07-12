import { createService } from '@dreamonkey/vue-signalr';
import { useUserStore } from '../store/modules/user';
import { message } from 'ant-design-vue';
import { HttpTransportType, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { useGlobSetting } from '../hooks/setting';

export default {
  setup(token: string) {
    const userStore = useUserStore();
    const globSetting = useGlobSetting();
    const connection = new HubConnectionBuilder()
      .configureLogging(LogLevel.Information)
      .withUrl(globSetting.apiUrl + '/hubs/chathub', {
        accessTokenFactory: () => token,
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets,
      })
      .build();
    connection.start();
    const signalr = createService({
      connection: connection,
      autoOffInsideComponentScope: true,
      failFn: (er) => {
        console.error(er);
      },
    });

    signalr.on('ForceExist', async () => {
      message.success('强制线下');
      await userStore.logout();
      window.location.reload();
    });
    signalr.on('AppendNotice', (notice: any) => {
      userStore.AddNotices(notice);
    });
  },
};
