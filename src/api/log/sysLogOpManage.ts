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
 * @description: 查询操作日志表
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysLogOpPage = (params: any) => {
  return defHttp.get<any>({ url: Api.page, params });
};

/**
 * @description: 操作日志表列表
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysLogOpList = (params: any) => {
  return defHttp.get<any>({ url: Api.list, params });
};

/**
 * @description: 操作日志详情
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysLogOpDetail = (params: any) => {
  return defHttp.get<any>({ url: Api.detail, params });
};
/**
 * @description: 添加操作日志表
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysLogOpAdd = (params: any) => {
  return defHttp.post({ url: Api.add, params });
};

/**
 * @description: 编辑操作日志表
 * @date 2022-07-14 15:46:03
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysLogOpEdit = (params: any) => {
  return defHttp.post({ url: Api.edit, params });
};

/**
 * @description: 删除操作日志表
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysLogOpDelete = (params: any) => {
  return defHttp.post({ url: Api.delete, params });
};
/**
 * @description: 清空异常日志
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const ClearLog = () => {
  return defHttp.post({ url: Api.clearLog });
};
