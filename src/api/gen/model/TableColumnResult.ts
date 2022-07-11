/// <summary>
/// 数据库表列
/// </summary>
export interface TableColumnResult {
  /// <summary>
  /// 字段名
  /// </summary>
  columnName: string;

  /// <summary>
  /// 数据库中类型
  /// </summary>
  dataType: string;

  /// <summary>
  /// .NET字段类型
  /// </summary>
  netType: string;

  /// <summary>
  /// 字段描述
  /// </summary>
  columnComment: string;

  /// <summary>
  /// 主外键
  /// </summary>
  columnKey: string;
}
