import { defHttp } from '/@/utils/http/axios';
enum Api {
  page = '/SysOnlineUser/page',
  forceExist = '/SysOnlineUser/forceExist',
}

/**
 * @description: 在线用户列表
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysOnlineUserPage = (params: any) => {
  return defHttp.get<any>({ url: Api.page, params });
};

/**
 * @description: 强制下线
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysOnlineUserForceExist = (params: any) => {
  return defHttp.post({ url: Api.forceExist, params });
};
