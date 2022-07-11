/// <summary>
/// 代码生成表
/// </summary>
export interface SysCodeGenModel {
  /// <summary>
  /// 主键Id
  /// </summary>
  id?: string;

  /// <summary>
  /// 作者姓名
  /// </summary>
  authorName?: string;

  /// <summary>
  /// 是否移除表前缀
  /// </summary>
  tablePrefix?: string;

  /// <summary>
  /// 生成方式
  generateType?: number;

  /// <summary>
  /// 数据库表名
  /// </summary>
  tableName?: string;

  /// <summary>
  /// 命名空间
  /// </summary>
  nameSpace?: string;

  /// <summary>
  /// 业务名
  /// </summary>
  busName?: string;

  /// <summary>
  /// 菜单编码
  /// </summary>
  menuPid?: string;

  /// <summary>
  /// 创建时间
  /// </summary>
  createdTime?: Date;

  /// <summary>
  /// 更新时间
  /// </summary>
  modifyTime?: Date;

  /// <summary>
  /// 创建者Id
  /// </summary>
  createdUserId?: string;

  /// <summary>
  /// 创建者名称
  /// </summary>
  createdUserName?: string;

  /// <summary>
  /// 修改者Id
  /// </summary>
  ModifyUserId?: string;

  /// <summary>
  /// 修改者名称
  /// </summary>
  modifyUserName?: string;

  /// <summary>
  /// 软删除
  /// </summary>
  isDeleted?: boolean;
}
