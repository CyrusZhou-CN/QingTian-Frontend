import { defHttp } from '/@/utils/http/axios';

enum Api {
  setRoleStatus = '/SysRole/setRoleStatus',
  page = '/SysRole/page',
  add = '/SysRole/add',
  delete = '/SysRole/delete',
  detail = '/SysRole/detail',
  edit = '/SysRole/edit',
}

/**
 * @description: 改变状态
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const setRoleStatus = (Id: string, newStatus: number) => {
  return defHttp.get({ url: Api.setRoleStatus, params: { Id, newStatus } });
};

/**
 * @description: 分页获取角色列表
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysRoleListByPage = () => {
  return defHttp.get({ url: Api.page });
};

/**
 * @description: 添加角色
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysRoleAdd = (params: Recordable) => {
  return defHttp.post({ url: Api.add, params });
};

/**
 * @description: 删除角色
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysRoleDelete = (params: Recordable) => {
  return defHttp.post({ url: Api.delete, params });
};

/**
 * @description: 获取角色详情
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysRoleDetail = (params: Recordable) => {
  return defHttp.post({ url: Api.detail, params });
};

/**
 * @description: 更新角色
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysRoleEdit = (params: Recordable) => {
  return defHttp.post({ url: Api.edit, params });
};
