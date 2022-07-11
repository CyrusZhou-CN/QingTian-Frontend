export interface DbColumnInfoResult {
  tableName: string;

  tableId: Number;

  dbColumnName: string;

  propertyName: string;

  dataType: string;

  length: Number;

  columnDescription: string;

  defaultValue: string;

  isNullable: Boolean;

  isIdentity: Boolean;

  isPrimarykey: Boolean;

  value: any;

  decimalDigits: Number;

  scale: Number;

  isArray: Boolean;

  isJson: Boolean;
}
