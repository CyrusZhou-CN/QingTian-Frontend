import { defHttp } from '/@/utils/http/axios';
enum Api {
  page = '/SysLogOp/page',
  list = '/SysLogOp/list',
  add = '/SysLogOp/add',
  edit = '/SysLogOp/edit',
  delete = '/SysLogOp/delete',
  detail = '/SysLogOp/detail',
  clearLog = '/SysLogOp/clearLog',
}

/**
 * 查询操作日志表
 *
 * @author QingTian
 */
export function sysLogOpPage(params: any) {
  return defHttp.get<any>({ url: Api.page, params });
}

/**
 * 操作日志表列表
 *
 * @author QingTian
 */
export function sysLogOpList(params: any) {
  return defHttp.get<any>({ url: Api.list, params });
}

/**
 * 操作日志详情
 *
 * @author QingTian
 */
export function sysLogOpDetail(params: any) {
  return defHttp.get<any>({ url: Api.detail, params });
}
/**
 * 添加操作日志表
 *
 * @author QingTian
 */
export function sysLogOpAdd(params: any) {
  return defHttp.post({ url: Api.add, params });
}

/**
 * 编辑操作日志表
 *
 * @author QingTian
 */
export function sysLogOpEdit(params: any) {
  return defHttp.post({ url: Api.edit, params });
}

/**
 * 删除操作日志表
 *
 * @author QingTian
 */
export function sysLogOpDelete(params: any) {
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
