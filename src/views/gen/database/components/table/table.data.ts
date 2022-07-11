import { BasicColumn, FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '表名',
    dataIndex: 'name',
    width: 120,
    align: 'left',
  },
  {
    title: '描述',
    dataIndex: 'description',
    align: 'left',
    width: 120,
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'name',
    label: '表名',
    component: 'Input',
    colProps: { span: 23 },
    required: true,
  },
  {
    field: 'description',
    label: '描述',
    colProps: { span: 23 },
    component: 'Input',
  },
];

export const baseClassOptions = [
  { label: 'PrimaryKeyEntity', value: 'PrimaryKeyEntity' },
  { label: 'AutoIncrementEntity', value: 'AutoIncrementEntity' },
  { label: 'DbEntityBase', value: 'DbEntityBase' },
  { label: 'DbAutoIncrementEntityBase', value: 'DbAutoIncrementEntityBase' },
];
export const positionOption = [
  { label: 'QingTian.Application', value: 'QingTian.Application' },
  { label: 'QingTian.Core', value: 'QingTian.Core' },
];
export const createEntitySchema: FormSchema[] = [
  {
    field: 'entityName',
    label: '实体名称',
    component: 'Input',
    colProps: { span: 23 },
    required: true,
  },
  {
    field: 'baseClassName',
    label: '基类',
    colProps: { span: 23 },
    component: 'Select',
    defaultValue: 'DbEntityBase',
    componentProps: { options: baseClassOptions },
    required: true,
  },
  {
    field: 'position',
    label: '存放位置',
    colProps: { span: 23 },
    component: 'Select',
    defaultValue: 'QingTian.Application',
    dynamicDisabled: true,
    componentProps: { options: positionOption },
    required: true,
  },
];
