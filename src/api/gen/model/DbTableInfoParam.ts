import { DbColumnInfoParam } from './DbColumnInfoParam';

export interface DbTableInfoParam {
  name: string;
  description: string;
  dbColumnInfoList: DbColumnInfoParam[];
}
