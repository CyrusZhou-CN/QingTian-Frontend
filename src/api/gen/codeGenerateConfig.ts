import { CodeGenConfigModel } from './model/CodeGenConfigModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  list = '/sysCodeGenerateConfig/list',
  edit = '/sysCodeGenerateConfig/edit',
}
/**
 * @description: 代码生成详细配置列表
 */
export function sysCodeGenerateConfigList(params: CodeGenConfigModel) {
  return defHttp.get<CodeGenConfigModel[]>({ url: Api.list, params });
}

/**
 * @description: 更新代码生成详细配置
 */
export function sysCodeGenerateConfigEdit(params: CodeGenConfigModel[]) {
  return defHttp.post({ url: Api.edit, params });
}
