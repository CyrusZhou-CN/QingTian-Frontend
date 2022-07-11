import { defHttp } from '/@/utils/http/axios';
enum Api {
  received = '/sysNotice/received',
  unread = '/sysNotice/unread',
}

/**
 * 查询我收到的系统通知消息
 *
 * @author QingTian
 */
export function sysNoticeReceived(params: any) {
  return defHttp.get<any>({ url: Api.received, params });
}

/**
 * 查询我收到的通知
 *
 * @author QingTian
 */
export function unReadNotice(params: any) {
  return defHttp.get<any>({ url: Api.unread, params });
}
