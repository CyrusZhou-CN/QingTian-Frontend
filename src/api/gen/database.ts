import { CreateEntityParam } from './model/CreateEntityParam';
import { DbColumnInfoParam } from './model/DbColumnInfoParam';
import { DbColumnInfoResult } from './model/DbColumnInfoResult';
import { DeleteColumnParam } from './model/DeleteColumnParam';
import { DbTableInfo } from './model/DbTableInfo';
import { DbTableInfoParam } from './model/DbTableInfoParam';
import { EditColumnParam } from './model/EditColumnParam';
import { EditTableParam } from './model/EditTableParam';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  ColumnInfoList = '/DataBase/Table/Column/InfoList',
  TableInfoList = '/DataBase/Table/InfoList',
  TableAdd = '/DataBase/Table/add',
  TableEdit = '/DataBase/Table/edit',
  TableDelete = '/DataBase/Table/delete',
  ColumnAdd = '/DataBase/Table/Column/add',
  ColumnEdit = '/DataBase/Table/Column/edit',
  ColumnDelete = '/DataBase/Table/Column/delete',
  CreateEntity = '/DataBase/Table/createEntity',
}

/**
 * @description: 获取表字段
 *
 * @param {string} tableName 表名
 * @return {DbColumnInfoResult[]}
 */
export function getColumnInfoList(params: any) {
  return defHttp.get<DbColumnInfoResult[]>({ url: Api.ColumnInfoList, params });
}

/**
 * @description: 获取所有表
 *
 * @return {DbTableInfo[]}
 */
export function getTableInfoList(params: any) {
  return defHttp.get<DbTableInfo[]>({ url: Api.TableInfoList, params });
}

/**
 * @description: 新增表
 *
 * @param {DbTableInfoParam} params
 */
export function tableAdd(params: DbTableInfoParam) {
  return defHttp.post({ url: Api.TableAdd, params });
}

/**
 * @description: 编辑表
 *
 * @param {EditTableParam} params
 */
export function tableEdit(params: EditTableParam) {
  return defHttp.post({ url: Api.TableEdit, params });
}

/**
 * @description: 删除表
 *
 * @param {DbTableInfo} params
 */
export function tableDelete(params: DbTableInfo) {
  return defHttp.post({ url: Api.TableDelete, params });
}

/**
 * @description: 添加列
 *
 * @param {DbColumnInfoParam} params
 */
export function columnAdd(params: DbColumnInfoParam) {
  return defHttp.post({ url: Api.ColumnAdd, params });
}
/**
 * @description: 编辑列
 *
 * @param {EditColumnParam} params
 */
export function columnEdit(params: EditColumnParam) {
  return defHttp.post({ url: Api.ColumnEdit, params });
}
/**
 * @description: 删除列
 *
 * @param {DeleteColumnParam} params
 */
export function columnDelete(params: DeleteColumnParam) {
  return defHttp.post({ url: Api.ColumnDelete, params });
}
/**
 * @description: 生成实体
 *
 * @param {CreateEntityParam} params
 */
export function createEntity(params: CreateEntityParam) {
  return defHttp.post({ url: Api.CreateEntity, params });
}
