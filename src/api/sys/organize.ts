import { defHttp } from '/@/utils/http/axios';

enum Api {
  SysOrganizePage = '/SysOrganize/page',
  SysOrganizeTree = '/SysOrganize/tree',
  SysOrganizeList = '/SysOrganize/list',
  SysOrganizeAdd = '/SysOrganize/add',
  SysOrganizeDelete = '/SysOrganize/delete',
  SysOrganizeDetail = '/SysOrganize/detail',
  SysOrganizeEdit = '/SysOrganize/edit',
}

/**
 * @description: Get user Organize based on id
 */
export const sysOrganizePage = () => {
  return defHttp.get({ url: Api.SysOrganizePage });
};

/**
 * @description: Get user Organize based on id
 */
export const sysOrganizeTree = () => {
  return defHttp.get({ url: Api.SysOrganizeTree });
};

/**
 * @description: Get user Organize based on id
 */
export const sysOrganizeList = () => {
  return defHttp.get({ url: Api.SysOrganizeList });
};

/**
 * @description: Get user Organize based on id
 */
export const sysOrganizeAdd = (params: Recordable) => {
  return defHttp.post({ url: Api.SysOrganizeAdd, params });
};

/**
 * @description: Get user Organize based on id
 */
export const sysOrganizeDelete = (params: Recordable) => {
  return defHttp.post({ url: Api.SysOrganizeDelete, params });
};

/**
 * @description: Get user Organize based on id
 */
export const sysOrganizeDetail = (params: Recordable) => {
  return defHttp.post({ url: Api.SysOrganizeDetail, params });
};

/**
 * @description: Get user Organize based on id
 */
export const sysOrganizeEdit = (params: Recordable) => {
  return defHttp.post({ url: Api.SysOrganizeEdit, params });
};
