import { defHttp } from '/@/utils/http/axios';

enum Api {
  SysPositionPage = '/SysPosition/page',
  SysPositionList = '/SysPosition/list',
  SysPositionAdd = '/SysPosition/add',
  SysPositionDelete = '/SysPosition/delete',
  SysPositionDetail = '/SysPosition/detail',
  SysPositionEdit = '/SysPosition/edit',
}

/**
 * @description: Get user Position based on id
 */
export const sysPositionPage = () => {
  return defHttp.get({ url: Api.SysPositionPage });
};

/**
 * @description: Get user Position based on id
 */
export const sysPositionList = () => {
  return defHttp.get({ url: Api.SysPositionList });
};

/**
 * @description: Get user Position based on id
 */
export const sysPositionAdd = (params: Recordable) => {
  return defHttp.post({ url: Api.SysPositionAdd, params });
};

/**
 * @description: Get user Position based on id
 */
export const sysPositionDelete = (params: Recordable) => {
  return defHttp.post({ url: Api.SysPositionDelete, params });
};

/**
 * @description: Get user Position based on id
 */
export const sysPositionDetail = (params: Recordable) => {
  return defHttp.get({ url: Api.SysPositionDetail, params });
};

/**
 * @description: Get user Position based on id
 */
export const sysPositionEdit = (params: Recordable) => {
  return defHttp.post({ url: Api.SysPositionEdit, params });
};
