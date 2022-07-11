import { BasicColumn, FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';

export const yesNoOptions = [
  {
    label: '是',
    value: 1,
  },
  {
    label: '否',
    value: 0,
  },
];
export declare type DataType = {
  value: string;
  hasLength: boolean;
  hasDecimalDigits: boolean;
  hasIsIdentity: boolean;
  defaultLength?: number;
  defaultDecimal?: number;
};
export const dataTypeSelectData: DataType[] = [
  {
    value: 'text',
    hasLength: false,
    hasDecimalDigits: false,
    hasIsIdentity: false,
  },
  {
    value: 'varchar',
    hasLength: true,
    hasDecimalDigits: false,
    hasIsIdentity: false,
    defaultLength: 255,
  },
  {
    value: 'nvarchar',
    hasLength: true,
    hasDecimalDigits: false,
    hasIsIdentity: false,
    defaultLength: 500,
  },
  {
    value: 'char',
    hasLength: true,
    hasDecimalDigits: false,
    hasIsIdentity: false,
    defaultLength: 25,
  },
  {
    value: 'nchar',
    hasLength: true,
    hasDecimalDigits: false,
    hasIsIdentity: false,
    defaultLength: 50,
  },
  {
    value: 'timestamp',
    hasLength: false,
    hasDecimalDigits: false,
    hasIsIdentity: false,
  },
  {
    value: 'int',
    hasLength: false,
    hasDecimalDigits: false,
    hasIsIdentity: true,
  },
  {
    value: 'smallint',
    hasLength: false,
    hasDecimalDigits: false,
    hasIsIdentity: true,
  },
  {
    value: 'tinyint',
    hasLength: false,
    hasDecimalDigits: false,
    hasIsIdentity: true,
  },
  {
    value: 'bigint',
    hasLength: false,
    hasDecimalDigits: false,
    hasIsIdentity: true,
  },
  {
    value: 'bit',
    hasLength: false,
    hasDecimalDigits: false,
    hasIsIdentity: false,
  },
  {
    value: 'decimal',
    hasLength: true,
    hasDecimalDigits: true,
    hasIsIdentity: false,
    defaultLength: 18,
    defaultDecimal: 3,
  },
  {
    value: 'datetime',
    hasLength: false,
    hasDecimalDigits: false,
    hasIsIdentity: false,
  },
];

export const columns: BasicColumn[] = [
  {
    title: '字段名',
    dataIndex: 'dbColumnName',
    width: 120,
    align: 'left',
  },
  {
    title: '描述',
    dataIndex: 'columnDescription',
    width: 120,
    align: 'left',
  },
  {
    title: '主键',
    dataIndex: 'isPrimarykey',
    width: 40,
    customRender: ({ record }) => {
      const status = record.isPrimarykey;
      const enable = ~~status === 1;
      const color = enable ? 'green' : 'red';
      const text = enable ? '是' : '否';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '自增',
    dataIndex: 'isIdentity',
    width: 40,
    customRender: ({ record }) => {
      const status = record.isIdentity;
      const enable = ~~status === 1;
      const color = enable ? 'green' : 'red';
      const text = enable ? '是' : '否';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '可空',
    dataIndex: 'isNullable',
    width: 40,
    customRender: ({ record }) => {
      const status = record.isNullable;
      const enable = ~~status === 1;
      const color = enable ? 'green' : 'red';
      const text = enable ? '是' : '否';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '类型',
    dataIndex: 'dataType',
    width: 120,
    align: 'left',
  },
  {
    title: '默认值',
    dataIndex: 'defaultValue',
    width: 80,
  },
  {
    title: '长度',
    dataIndex: 'length',
    width: 40,
  },
  {
    title: '小数',
    dataIndex: 'decimalDigits',
    width: 40,
  },
];

export const columnEditColumns: BasicColumn[] = [
  {
    title: '字段名',
    dataIndex: 'dbColumnName',
    editRow: true,
    editRule: true,
    width: 120,
  },
  {
    title: '默认值',
    dataIndex: 'defaultValue',
    editRow: true,
    editRule: true,
    width: 80,
  },
  {
    title: '描述',
    editRow: true,
    editRule: true,
    dataIndex: 'columnDescription',
    width: 120,
  },
  {
    title: '主键',
    dataIndex: 'isPrimarykey',
    width: 60,
    editRow: true,
    editRule: true,
    editComponent: 'Select',
    editComponentProps: ({ record }) => {
      return {
        options: yesNoOptions,
        onChange: () => {
          if (record.isPrimarykey) {
            record.isNullable = 0;
          }
        },
      };
    },
  },
  {
    title: '自增',
    dataIndex: 'isIdentity',
    width: 60,
    editRow: true,
    editRule: true,
    editComponent: 'Select',
    editComponentProps: {
      options: yesNoOptions,
    },
    editDynamicDisabled: ({ record }) => !getIsIdentity(record.dataType),
  },
  {
    title: '类型',
    dataIndex: 'dataType',
    width: 120,
    editRow: true,
    editRule: true,
    editComponent: 'Select',
    editComponentProps: ({ record }) => {
      return {
        options: dataTypeSelectData,
        onChange: (e: any) => {
          const dataType = getDataType(e);
          record.isIdentity = 0;
          record.length = 0;
          record.decimalDigits = 0;
          if (dataType.hasIsIdentity) {
            record.isIdentity = 1;
          }
          if (dataType.hasLength) {
            record.length = dataType.defaultLength;
          }
          if (dataType.hasDecimalDigits) {
            record.decimalDigits = dataType.defaultDecimal;
          }
        },
      };
    },
    editDynamicDisabled: ({ record }) => record.isPrimarykey,
  },
  {
    title: '可空',
    dataIndex: 'isNullable',
    width: 60,
    editRow: true,
    editRule: true,
    editComponent: 'Select',
    editComponentProps: {
      options: yesNoOptions,
    },
    editDynamicDisabled: ({ record }) => record.isPrimarykey,
  },
  {
    title: '长度',
    dataIndex: 'length',
    width: 80,
    editRow: true,
    editRule: async (text) => {
      if (Number(text) < 0) {
        return '不能输入小于0的数';
      }
      return '';
    },
    editComponent: 'InputNumber',
    editDynamicDisabled: ({ record }) => !getHasLength(record.dataType),
  },
  {
    title: '小数',
    dataIndex: 'decimalDigits',
    width: 80,
    editRow: true,
    editRule: async (text) => {
      if (Number(text) < 0) {
        return '不能输入小于0的数';
      }
      return '';
    },
    editComponent: 'InputNumber',
    editDynamicDisabled: ({ record }) => !getHasDecimalDigits(record.dataType),
  },
];

export const editFormSchema: FormSchema[] = [
  {
    label: '列名',
    field: 'dbColumnName',
    component: 'Input',
    colProps: { span: 23 },
    required: true,
  },
  {
    label: '描述',
    field: 'columnDescription',
    colProps: { span: 23 },
    component: 'Input',
  },
];
const getDataType = (dataType: string): DataType => {
  for (const key in dataTypeSelectData) {
    if (dataTypeSelectData[key].value == dataType) {
      return dataTypeSelectData[key];
    }
  }
  return {
    value: 'undefined',
    hasLength: false,
    hasDecimalDigits: false,
    hasIsIdentity: false,
    defaultDecimal: undefined,
    defaultLength: undefined,
  };
};
const getHasLength = (dataType: string) => {
  for (const key in dataTypeSelectData) {
    if (dataTypeSelectData[key].value == dataType) {
      return dataTypeSelectData[key].hasLength;
    }
  }
  return false;
};
const getHasDecimalDigits = (dataType: string) => {
  for (const key in dataTypeSelectData) {
    if (dataTypeSelectData[key].value == dataType) {
      return dataTypeSelectData[key].hasDecimalDigits;
    }
  }
  return false;
};
const getIsIdentity = (dataType: string) => {
  for (const key in dataTypeSelectData) {
    if (dataTypeSelectData[key].value == dataType) {
      return dataTypeSelectData[key].hasIsIdentity;
    }
  }
  return false;
};
export const addFormSchema: FormSchema[] = [
  {
    label: '字段名',
    field: 'dbColumnName',
    component: 'Input',
    colProps: { span: 23 },
    required: true,
  },
  {
    label: '默认值',
    field: 'defaultValue',
    component: 'Input',
    colProps: { span: 23 },
  },
  {
    label: '类型',
    field: 'dataType',
    component: 'Select',
    componentProps: ({ formModel }) => {
      return {
        options: dataTypeSelectData,
        onChange: (e: any) => {
          const dataType = getDataType(e);
          if (!dataType.hasIsIdentity) {
            formModel.isIdentity = 0;
          }
          if (!dataType.hasLength) {
            formModel.length = undefined;
          } else {
            formModel.length = dataType.defaultLength;
          }
          if (!dataType.hasDecimalDigits) {
            formModel.decimalDigits = undefined;
          } else {
            formModel.decimalDigits = dataType.defaultDecimal;
          }
        },
      };
    },
    colProps: { span: 23 },
    required: true,
  },
  {
    label: '描述',
    field: 'columnDescription',
    component: 'Input',
    colProps: { span: 23 },
  },
  {
    label: '主键',
    field: 'isPrimarykey',
    component: 'RadioButtonGroup',
    defaultValue: 0,
    componentProps: ({ formModel }) => {
      return {
        options: yesNoOptions,
        onChange: () => {
          if (formModel.isPrimarykey) {
            formModel.isNullable = 1;
          }
        },
      };
    },
    colProps: { span: 23 },
    required: true,
  },
  {
    label: '自增',
    field: 'isIdentity',
    component: 'RadioButtonGroup',
    defaultValue: 0,
    componentProps: {
      options: yesNoOptions,
    },
    colProps: { span: 23 },
    required: true,
    dynamicDisabled: ({ values }) => !getIsIdentity(values.dataType),
  },
  {
    label: '可空',
    field: 'isNullable',
    component: 'RadioButtonGroup',
    defaultValue: 1,
    componentProps: {
      options: yesNoOptions,
    },
    colProps: { span: 23 },
    required: true,
    dynamicDisabled: ({ values }) => values.isPrimarykey,
  },
  {
    label: '长度',
    field: 'length',
    component: 'InputNumber',
    dynamicDisabled: ({ values }) => !getHasLength(values.dataType),
  },
  {
    label: '小数',
    field: 'decimalDigits',
    component: 'InputNumber',
    dynamicDisabled: ({ values }) => !getHasDecimalDigits(values.dataType),
  },
];
