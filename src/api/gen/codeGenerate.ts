import {
  AddCodeGenParam,
  CodeGenPageParam,
  DeleteCodeGenParam,
  EditCodeGenParam,
} from './model/CodeGenModel';
import { SysCodeGenModel } from './model/SysCodeGenModel';
import { TableColumnResult } from './model/TableColumnResult';
import { TableParam } from './model/TableParam';
import { TableResult } from './model/TableResult';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  page = '/CodeGenerate/page',
  add = '/CodeGenerate/add',
  edit = '/CodeGenerate/edit',
  delete = '/CodeGenerate/delete',
  TableList = '/CodeGenerate/TableList',
  ColumnList = '/CodeGenerate/ColumnList',
  RunLocal = '/CodeGenerate/runLocal',
  RunDown = '/CodeGenerate/runDown',
}

/**
 * @description: 代码生成详细配置列表
 *
 * @param {CodeGenPageParam} params
 * @return {*}
 */
export function codeGeneratePage(params: CodeGenPageParam) {
  return defHttp.get<any>({ url: Api.page, params });
}

/**
 * @description: 添加代码生成详细配置
 *
 * @param {AddCodeGenParam} params
 * @return {*}
 */
export function codeGenerateAdd(params: AddCodeGenParam) {
  return defHttp.post({ url: Api.add, params });
}

/**
 * @description: 修改代码生成详细配置
 * @param {EditCodeGenParam} params
 * @return {*}
 */
export function codeGenerateEdit(params: EditCodeGenParam) {
  return defHttp.post({ url: Api.edit, params });
}

/**
 * @description: 删除代码生成详细配置
 *
 * @param {DeleteCodeGenParam[]} params
 * @return {*}
 */
export function codeGenerateDelete(params: DeleteCodeGenParam[]) {
  return defHttp.post({ url: Api.delete, params });
}

/**
 * @description: 获取数据库表(实体)集合
 *
 * @return {TableResult[]}
 */
export function getTableList() {
  return defHttp.get<TableResult[]>({ url: Api.TableList });
}

/**
 * @description: 根据表名获取列
 *
 * @param {TableParam} params
 * @return {TableColumnResult[]}
 */
export function codeGenerateColumnList(params: TableParam) {
  return defHttp.get<TableColumnResult[]>({ url: Api.ColumnList, params });
}

/**
 * @description: 删除代码生成详细配置
 *
 * @param {SysCodeGenModel} params
 * @return {*}
 */
export function codeGenerateRunLocal(params: SysCodeGenModel) {
  return defHttp.post({ url: Api.RunLocal, params }, { isTransformResponse: false });
}
