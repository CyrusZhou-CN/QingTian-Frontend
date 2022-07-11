import { defHttp } from '/@/utils/http/axios';
enum Api {
  page = '/SysOnlineUser/page',
  forceExist = '/SysOnlineUser/forceExist',
}

/**
 * 在线用户列表
 *
 * @author QingTian
 */
export function sysOnlineUserPage(params: any) {
  return defHttp.get<any>({ url: Api.page, params });
}

/**
 * 强制下线
 *
 * @author QingTian
 */
export function sysOnlineUserForceExist(params: any) {
  return defHttp.post({ url: Api.forceExist, params });
}
