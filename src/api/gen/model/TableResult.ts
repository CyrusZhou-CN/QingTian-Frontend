/// <summary>
/// 数据库表列表参数
/// </summary>
export interface TableResult {
  /// <summary>
  /// 表名（字母形式的）
  /// </summary>
  tableName: string;

  /// <summary>
  /// 实体名称
  /// </summary>
  entityName: string;

  /// <summary>
  /// 创建时间
  /// </summary>
  createTime: string;

  /// <summary>
  /// 更新时间
  /// </summary>
  updateTime: string;

  /// <summary>
  /// 表名称描述（注释）（功能名）
  /// </summary>
  tableComment: string;
}
