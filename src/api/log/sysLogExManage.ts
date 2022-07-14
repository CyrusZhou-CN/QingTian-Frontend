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
 * @description: 查询异常日志
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysLogExPage = (params: any) => {
  return defHttp.get<any>({ url: Api.page, params });
};

/**
 * @description: 异常日志列表
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysLogExList = (params: any) => {
  return defHttp.get<any>({ url: Api.list, params });
};

/**
 * @description: 异常日志详情
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysLogExDetail = (params: any) => {
  return defHttp.get<any>({ url: Api.detail, params });
};
/**
 * @description: 添加异常日志
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysLogExAdd = (params: any) => {
  return defHttp.post({ url: Api.add, params });
};

/**
 * @description: 编辑异常日志
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysLogExEdit = (params: any) => {
  return defHttp.post({ url: Api.edit, params });
};

/**
 * @description: 删除异常日志
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysLogExDelete = (params: any) => {
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
