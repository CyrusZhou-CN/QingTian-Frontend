export interface CodeGenConfigModel {
  id?: string;
  codeGenId?: string;
  columnName?: string;
  columnComment?: string;
  netType?: string;
  effectType?: string;
  fkEntityName?: string;
  fkColumnName?: string;
  fkColumnNetType?: string;
  dictTypeCode?: string;
  whetherRetract?: boolean;
  whetherRequired?: boolean;
  queryWhether?: boolean;
  queryType?: string;
  whetherTable?: boolean;
  whetherAddUpdate?: boolean;
  columnKey?: boolean;
  dataType?: string;
  whetherCommon?: boolean;
  editable?: boolean;
}
