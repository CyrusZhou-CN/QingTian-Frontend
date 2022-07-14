import { defHttp } from '/@/utils/http/axios';
enum Api {
  page = '/SysNotice/page',
  list = '/SysNotice/list',
  add = '/SysNotice/add',
  edit = '/SysNotice/edit',
  delete = '/SysNotice/delete',
  detail = '/SysNotice/detail',
  unread = '/sysNotice/unread',
  received = '/SysNotice/received',
  changeStatus = '/SysNotice/changeStatus',
  setReadStatus = '/SysNotice/setReadStatus',
}

/**
 * @description: 查询通知消息
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysNoticePage = (params: any) => {
  return defHttp.get<any>({ url: Api.page, params });
};

/**
 * @description: 查询我收到的系统通知消息
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysNoticeReceived = (params: any) => {
  return defHttp.get<any>({ url: Api.received, params });
};

/**
 * @description: 查询我收到的通知
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const unReadNotice = (params: any) => {
  return defHttp.get<any>({ url: Api.unread, params });
};
/**
 * @description: 通知消息列表
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysNoticeList = (params: any) => {
  return defHttp.get<any>({ url: Api.list, params });
};

/**
 * @description: 添加通知消息
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysNoticeAdd = (params: any) => {
  return defHttp.post({ url: Api.add, params });
};

/**
 * @description: 编辑通知消息
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysNoticeEdit = (params: any) => {
  return defHttp.post({ url: Api.edit, params });
};
/**
 * @description: 通知消息详情
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysNoticeDetail = (params: any) => {
  return defHttp.get<any>({ url: Api.detail, params });
};
/**
 * @description: 删除通知消息
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysNoticeDelete = (params: any) => {
  return defHttp.post({ url: Api.delete, params });
};
/**
 * @description: 修改状态
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysNoticeChangeStatus = (params: any) => {
  return defHttp.post({ url: Api.changeStatus, params });
};
/**
 * @description: 修改已读状态
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysNoticeReadStatus = (params: any) => {
  return defHttp.post({ url: Api.setReadStatus, params });
};
