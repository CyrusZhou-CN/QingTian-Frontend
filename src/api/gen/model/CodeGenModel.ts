import { BasicPageParams } from '../../model/baseModel';

export interface CodeGenModel {
  /// <summary>
  /// 作者姓名
  /// </summary>
  authorName: string;

  /// <summary>
  /// 类名
  /// </summary>
  className: string;

  /// <summary>
  /// 是否移除表前缀
  /// </summary>
  tablePrefix: string;

  /// <summary>
  /// 生成方式
  /// </summary>
  generateType: string;

  /// <summary>
  /// 数据库表名
  /// </summary>
  tableName: string;

  /// <summary>
  /// 命名空间
  /// </summary>
  nameSpace: string;

  /// <summary>
  /// 业务名（业务代码包名称）
  /// </summary>
  busName: string;

  /// <summary>
  /// 功能名（数据库表名称）
  /// </summary>
  tableComment: string;

  /// <summary>
  /// 菜单父级
  /// </summary>
  menuPid: string;
}

export interface AddCodeGenParam {
  className: string;
  tablePrefix: string;
  tableComment: string;
  menuPid: string;
  tableName: string;
  busName: string;
  nameSpace: string;
  authorName: string;
  generateType: string;
}
export interface EditCodeGenParam extends AddCodeGenParam {
  id: string;
}
export interface DeleteCodeGenParam {
  id: string;
}
export interface CodeGenPageParam extends BasicPageParams, AddCodeGenParam {
  id: string;
}
