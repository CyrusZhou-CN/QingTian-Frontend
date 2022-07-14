import { defHttp } from '/@/utils/http/axios';

enum Api {
  page = '/SysOrganize/page',
  tree = '/SysOrganize/tree',
  list = '/SysOrganize/list',
  add = '/SysOrganize/add',
  delete = '/SysOrganize/delete',
  detail = '/SysOrganize/detail',
  edit = '/SysOrganize/edit',
}

/**
 * @description: 分页查询组织机构
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysOrganizePage = () => {
  return defHttp.get({ url: Api.page });
};

/**
 * @description: 获取组织机构树
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysOrganizeTree = () => {
  return defHttp.get({ url: Api.tree });
};

/**
 * @description: 获取组织机构列表
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysOrganizeList = () => {
  return defHttp.get({ url: Api.list });
};

/**
 * @description: 增加组织机构
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysOrganizeAdd = (params: Recordable) => {
  return defHttp.post({ url: Api.add, params });
};

/**
 * @description: 删除组织机构
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysOrganizeDelete = (params: Recordable) => {
  return defHttp.post({ url: Api.delete, params });
};

/**
 * @description: 获取组织机构信息
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysOrganizeDetail = (params: Recordable) => {
  return defHttp.post({ url: Api.detail, params });
};

/**
 * @description: 更新组织机构
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysOrganizeEdit = (params: Recordable) => {
  return defHttp.post({ url: Api.edit, params });
};
