export interface DbColumnInfoParam {
  tableName: string;

  dbColumnName: string;

  dataType: string;

  length: Number;

  columnDescription: string;

  defaultValue: string;

  isNullable: Number;

  isIdentity: Number;

  isPrimarykey: Number;

  decimalDigits: Number;
}
