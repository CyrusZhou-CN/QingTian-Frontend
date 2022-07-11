import { defHttp } from '/@/utils/http/axios';
enum Api {
  page = '/SysLogVis/page',
  list = '/SysLogVis/list',
  add = '/SysLogVis/add',
  edit = '/SysLogVis/edit',
  delete = '/SysLogVis/delete',
  detail = '/SysLogVis/detail',
  clearLog = '/SysLogVis/clearLog',
}

/**
 * 查询访问日志表
 *
 * @author QingTian
 */
export function sysLogVisPage(params: any) {
  return defHttp.get<any>({ url: Api.page, params });
}

/**
 * 访问日志表列表
 *
 * @author QingTian
 */
export function sysLogVisList(params: any) {
  return defHttp.get<any>({ url: Api.list, params });
}

/**
 * 访问日志详情
 *
 * @author QingTian
 */
export function sysLogVisDetail(params: any) {
  return defHttp.get<any>({ url: Api.detail, params });
}
/**
 * 添加访问日志表
 *
 * @author QingTian
 */
export function sysLogVisAdd(params: any) {
  return defHttp.post({ url: Api.add, params });
}

/**
 * 编辑访问日志表
 *
 * @author QingTian
 */
export function sysLogVisEdit(params: any) {
  return defHttp.post({ url: Api.edit, params });
}

/**
 * 删除访问日志表
 *
 * @author QingTian
 */
export function sysLogVisDelete(params: any) {
  return defHttp.post({ url: Api.delete, params });
}

/**
 * 清空异常日志
 *
 * @author QingTian
 */
export function ClearLog() {
  return defHttp.post({ url: Api.clearLog });
}
