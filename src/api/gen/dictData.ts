import { defHttp } from '/@/utils/http/axios';

enum Api {
  Page = '/sysDictData/page',
  Add = '/sysDictData/add',
  Edit = '/sysDictData/edit',
  Delete = '/sysDictData/delete',
  ChangeStatus = '/sysDictData/changeStatus',
  Detail = '/sysDictData/detail',
  List = '/sysDictData/list',
  DictDataByCode = '/SysDictData/dict_data_by_code',
}

/**
 * @description: 获取某个字典类型下字典值列表
 *
 */
export function dictDataByCode(typeCode: string, netType: string) {
  return defHttp.get({ url: Api.DictDataByCode, params: { TypeCode: typeCode, NetType: netType } });
}

/**
 * @description: 获取某个字典类型下字典值列表
 *
 */
export function sysDictDataList(params: any) {
  return defHttp.get({ url: Api.List, params });
}

/**
 * @description: 分页查询字典值
 *
 */
export function sysDictDataPage(params: any) {
  return defHttp.get({ url: Api.Page, params });
}

/**
 * @description: 字典详情
 *
 */
export function sysDictDataDetail(params: any) {
  return defHttp.get({ url: Api.Detail, params });
}

/**
 * @description: 添加系统字典值
 *
 */
export function sysDictDataAdd(params: any) {
  return defHttp.post({ url: Api.Add, params });
}

/**
 * @description: 编辑系统字典值
 *
 */
export function sysDictDataEdit(params: any) {
  return defHttp.post({ url: Api.Edit, params });
}

/**
 * @description: 删除系统字典值
 *
 */
export function sysDictDataDelete(params: any) {
  return defHttp.post({ url: Api.Delete, params });
}

/**
 * @description: 修改字典值状态
 *
 */
export function sysDictDataChangeStatus(params: any) {
  return defHttp.post({ url: Api.ChangeStatus, params });
}
