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
 * 查询通知消息
 *
 * @author QingTian
 */
export function sysNoticePage(params: any) {
  return defHttp.get<any>({ url: Api.page, params });
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
/**
 * 通知消息列表
 *
 * @author QingTian
 */
export function sysNoticeList(params: any) {
  return defHttp.get<any>({ url: Api.list, params });
}

/**
 * 添加通知消息
 *
 * @author QingTian
 */
export function sysNoticeAdd(params: any) {
  return defHttp.post({ url: Api.add, params });
}

/**
 * 编辑通知消息
 *
 * @author QingTian
 */
export function sysNoticeEdit(params: any) {
  return defHttp.post({ url: Api.edit, params });
}
/**
 * 通知消息详情
 *
 * @author QingTian
 */
export function sysNoticeDetail(params: any) {
  return defHttp.get<any>({ url: Api.detail, params });
}
/**
 * 删除通知消息
 *
 * @author QingTian
 */
export function sysNoticeDelete(params: any) {
  return defHttp.post({ url: Api.delete, params });
}
/**
 * 修改状态
 *
 * @author QingTian
 */
export function sysNoticeChangeStatus(params: any) {
  return defHttp.post({ url: Api.changeStatus, params });
}
/**
 * 修改已读状态
 *
 * @author QingTian
 */
export function sysNoticeReadStatus(params: any) {
  return defHttp.post({ url: Api.setReadStatus, params });
}
