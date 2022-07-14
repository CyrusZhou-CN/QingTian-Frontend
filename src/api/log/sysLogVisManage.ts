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
 * @description: 查询访问日志表
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysLogVisPage = (params: any) => {
  return defHttp.get<any>({ url: Api.page, params });
};

/**
 * @description: 访问日志表列表
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysLogVisList = (params: any) => {
  return defHttp.get<any>({ url: Api.list, params });
};

/**
 * @description: 访问日志详情
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysLogVisDetail = (params: any) => {
  return defHttp.get<any>({ url: Api.detail, params });
};
/**
 * @description: 添加访问日志表
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysLogVisAdd = (params: any) => {
  return defHttp.post({ url: Api.add, params });
};

/**
 * @description: 编辑访问日志表
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysLogVisEdit = (params: any) => {
  return defHttp.post({ url: Api.edit, params });
};

/**
 * @description: 删除访问日志表
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysLogVisDelete = (params: any) => {
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
