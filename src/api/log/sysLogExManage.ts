import { defHttp } from '/@/utils/http/axios';
enum Api {
  page = '/SysLogEx/page',
  list = '/SysLogEx/list',
  add = '/SysLogEx/add',
  edit = '/SysLogEx/edit',
  delete = '/SysLogEx/delete',
  detail = '/SysLogEx/detail',
  clearLog = '/SysLogEx/clearLog',
}

/**
 * 查询异常日志
 *
 * @author QingTian
 */
export function sysLogExPage(params: any) {
  return defHttp.get<any>({ url: Api.page, params });
}

/**
 * 异常日志列表
 *
 * @author QingTian
 */
export function sysLogExList(params: any) {
  return defHttp.get<any>({ url: Api.list, params });
}

/**
 * 异常日志详情
 *
 * @author QingTian
 */
export function sysLogExDetail(params: any) {
  return defHttp.get<any>({ url: Api.detail, params });
}
/**
 * 添加异常日志
 *
 * @author QingTian
 */
export function sysLogExAdd(params: any) {
  return defHttp.post({ url: Api.add, params });
}

/**
 * 编辑异常日志
 *
 * @author QingTian
 */
export function sysLogExEdit(params: any) {
  return defHttp.post({ url: Api.edit, params });
}

/**
 * 删除异常日志
 *
 * @author QingTian
 */
export function sysLogExDelete(params: any) {
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
