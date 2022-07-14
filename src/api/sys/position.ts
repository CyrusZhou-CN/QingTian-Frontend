import { defHttp } from '/@/utils/http/axios';

enum Api {
  page = '/SysPosition/page',
  list = '/SysPosition/list',
  add = '/SysPosition/add',
  delete = '/SysPosition/delete',
  detail = '/SysPosition/detail',
  edit = '/SysPosition/edit',
}

/**
 * @description: 分页获取职位
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysPositionPage = () => {
  return defHttp.get({ url: Api.page });
};

/**
 * @description: 获取职位列表
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysPositionList = () => {
  return defHttp.get({ url: Api.list });
};

/**
 * @description: 增加职位
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysPositionAdd = (params: Recordable) => {
  return defHttp.post({ url: Api.add, params });
};

/**
 * @description: 删除职位
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysPositionDelete = (params: Recordable) => {
  return defHttp.post({ url: Api.delete, params });
};

/**
 * @description: 获取职位详情
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysPositionDetail = (params: Recordable) => {
  return defHttp.get({ url: Api.detail, params });
};

/**
 * @description: 更新职位
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysPositionEdit = (params: Recordable) => {
  return defHttp.post({ url: Api.edit, params });
};
