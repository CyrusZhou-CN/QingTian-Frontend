import { defHttp } from '/@/utils/http/axios';
import { sysMenuListResultModel } from './model/menuModel';

enum Api {
  SysUserMenu = '/SysMenu/userMenu',
  Syslist = '/SysMenu/list',
  SysTree = '/SysMenu/tree',
  SysMenuAdd = '/SysMenu/add',
  SysMenuDelete = '/SysMenu/delete',
  SysMenuDetail = '/SysMenu/detail',
  SysMenuEdit = '/SysMenu/edit',
  SysMenuTreeForGrant = '/SysMenu/treeForGrant',
}

/**
 * @description: Get user menu based on id
 */
export const sysUserMenu = () => {
  return defHttp.get<sysMenuListResultModel>({ url: Api.SysUserMenu });
};

/**
 * @description: Get user menu based on id
 */
export const sysMenuList = (params?: Recordable) => {
  return defHttp.get<sysMenuListResultModel>({ url: Api.Syslist, params });
};

/**
 * @description: Get user menu based on id
 */
export const sysMenuTree = () => {
  return defHttp.get<sysMenuListResultModel>({ url: Api.SysTree });
};

/**
 * @description: Get user menu based on id
 */
export const sysMenuAdd = (params: Recordable) => {
  return defHttp.post({ url: Api.SysMenuAdd, params });
};

/**
 * @description: Get user menu based on id
 */
export const sysMenuDelete = (params: Recordable) => {
  return defHttp.post({ url: Api.SysMenuDelete, params });
};

/**
 * @description: Get user menu based on id
 */
export const sysMenuDetail = (params: Recordable) => {
  return defHttp.post({ url: Api.SysMenuDetail, params });
};

/**
 * @description: Get user menu based on id
 */
export const sysMenuEdit = (params: Recordable) => {
  return defHttp.post({ url: Api.SysMenuEdit, params });
};

/**
 * @description: Get user menu based on id
 */
export const sysMenuTreeForGrant = (params: Recordable) => {
  return defHttp.post({ url: Api.SysMenuTreeForGrant, params });
};
