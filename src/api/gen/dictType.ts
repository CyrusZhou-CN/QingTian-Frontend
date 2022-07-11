import { defHttp } from '/@/utils/http/axios';

enum Api {
  Page = '/sysDictType/page',
  Add = '/sysDictType/add',
  Edit = '/sysDictType/edit',
  Delete = '/sysDictType/delete',
  ChangeStatus = '/sysDictType/changeStatus',
  Detail = '/sysDictType/detail',
  List = '/sysDictType/list',
  Tree = '',
}

/**
 * @description: 字典类型与字典值构造的字典树
 *
 */
export function sysDictTypeTree() {
  return defHttp.get({ url: Api.Tree });
}

/**
 * @description: 获取字典类型列表
 *
 */
export function sysDictTypeList() {
  return defHttp.get({ url: Api.List });
}

/**
 * @description: 分页查询字典类型
 *
 */
export function sysDictTypePage(params: any) {
  return defHttp.get({ url: Api.Page, params });
}

/**
 * @description: 字典类型详情
 *
 */
export function sysDictTypeDetail(params: any) {
  return defHttp.get({ url: Api.Detail, params });
}

/**
 * @description: 添加系统字典类型
 *
 */
export function sysDictTypeAdd(params: any) {
  return defHttp.post({ url: Api.Add, params });
}

/**
 * @description: 编辑系统字典类型
 *
 */
export function sysDictTypeEdit(params: any) {
  return defHttp.post({ url: Api.Edit, params });
}

/**
 * @description: 删除系统字典类型
 *
 */
export function sysDictTypeDelete(params: any) {
  return defHttp.post({ url: Api.Delete, params });
}

/**
 * @description: 修改字典类型状态
 *
 */
export function sysDictTypeChangeStatus(params: any) {
  return defHttp.post({ url: Api.ChangeStatus, params });
}
