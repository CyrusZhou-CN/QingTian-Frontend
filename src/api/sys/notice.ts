import { defHttp } from '/@/utils/http/axios';
enum Api {
  page = '/SysNotice/page',
  list = '/SysNotice/list',
  add = '/SysNotice/add',
  edit = '/SysNotice/edit',
  delete = '/SysNotice/delete',
  detail = '/SysNotice/detail',
  changeStatus = '/SysNotice/changeStatus',
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
