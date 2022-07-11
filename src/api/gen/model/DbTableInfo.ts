export interface DbTableInfo {
  name: string;

  description: string;

  dbObjectType: DbObjectType;
}

export enum DbObjectType {
  Table,
  View,
  All,
}
