import { defHttp } from '/@/utils/http/axios';

enum Api {
  SysRoleStatus = '/SysRole/setRoleStatus',
  SysRoleListByPage = '/SysRole/page',
  SysRoleList = '/SysRole/list',
  SysRoleAdd = '/SysRole/add',
  SysRoleDelete = '/SysRole/delete',
  SysRoleDetail = '/SysRole/detail',
  SysRoleEdit = '/SysRole/edit',
}

/**
 * @description: Get user menu based on id
 */
export const setRoleStatus = (Id: string, newStatus: number) => {
  return defHttp.get({ url: Api.SysRoleStatus, params: { Id, newStatus } });
};

/**
 * @description: Get user Role based on id
 */
export const sysRoleListByPage = () => {
  return defHttp.get({ url: Api.SysRoleListByPage });
};

/**
 * @description: Get user Role based on id
 */
export const sysRoleList = () => {
  return defHttp.get({ url: Api.SysRoleList });
};

/**
 * @description: Get user Role based on id
 */
export const sysRoleAdd = (params: Recordable) => {
  return defHttp.post({ url: Api.SysRoleAdd, params });
};

/**
 * @description: Get user Role based on id
 */
export const sysRoleDelete = (params: Recordable) => {
  return defHttp.post({ url: Api.SysRoleDelete, params });
};

/**
 * @description: Get user Role based on id
 */
export const sysRoleDetail = (params: Recordable) => {
  return defHttp.post({ url: Api.SysRoleDetail, params });
};

/**
 * @description: Get user Role based on id
 */
export const sysRoleEdit = (params: Recordable) => {
  return defHttp.post({ url: Api.SysRoleEdit, params });
};
