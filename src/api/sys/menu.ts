import { defHttp } from '/@/utils/http/axios';
import { sysMenuListResultModel } from './model/menuModel';

enum Api {
  userMenu = '/SysMenu/userMenu',
  list = '/SysMenu/list',
  tree = '/SysMenu/tree',
  add = '/SysMenu/add',
  delete = '/SysMenu/delete',
  detail = '/SysMenu/detail',
  edit = '/SysMenu/edit',
  treeForGrant = '/SysMenu/treeForGrant',
}

/**
 * @description: 获取用户菜单
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysUserMenu = () => {
  return defHttp.get<sysMenuListResultModel>({ url: Api.userMenu });
};

/**
 * @description: 获取菜单列表
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysMenuList = (params?: Recordable) => {
  return defHttp.get<sysMenuListResultModel>({ url: Api.list, params });
};

/**
 * @description: 获取菜单树
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysMenuTree = () => {
  return defHttp.get<sysMenuListResultModel>({ url: Api.tree });
};

/**
 * @description: 添加菜单
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysMenuAdd = (params: Recordable) => {
  return defHttp.post({ url: Api.add, params });
};

/**
 * @description: 删除菜单
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysMenuDelete = (params: Recordable) => {
  return defHttp.post({ url: Api.delete, params });
};

/**
 * @description: 获取菜单详情
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysMenuDetail = (params: Recordable) => {
  return defHttp.post({ url: Api.detail, params });
};

/**
 * @description: 更新菜单
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysMenuEdit = (params: Recordable) => {
  return defHttp.post({ url: Api.edit, params });
};
