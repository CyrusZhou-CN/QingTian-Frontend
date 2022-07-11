import { BasicColumn, FormSchema } from '/@/components/Table';
import { codeGenerateColumnList, getTableList } from '/@/api/gen/codeGenerate';
import { sysDictTypeList } from '/@/api/gen/dictType';

export declare type queryTypeDataType = {
  value: string;
  label: string;
};
export declare type effectTypeDataType = {
  value: string;
  label: string;
  isDict: boolean;
  isFk: boolean;
};
export const queryTypeData: queryTypeDataType[] = [
  {
    value: '==',
    label: '等于',
  },
  {
    value: 'like',
    label: '模糊',
  },
  {
    value: '>',
    label: '大于',
  },
  {
    value: '<',
    label: '小于',
  },
  {
    value: '!=',
    label: '不等于',
  },
  {
    value: '>=',
    label: '大于等于',
  },
  {
    value: '<=',
    label: '小于等于',
  },
  {
    value: 'isNotNull',
    label: '不为空',
  },
];
export const effectTypeData: effectTypeDataType[] = [
  {
    value: 'fk',
    label: '外键',
    isDict: false,
    isFk: true,
  },
  {
    value: 'input',
    label: '输入框',
    isDict: false,
    isFk: false,
  },
  {
    value: 'datepicker',
    label: '时间选择',
    isDict: false,
    isFk: false,
  },
  {
    value: 'select',
    label: '下拉框',
    isDict: true,
    isFk: false,
  },
  {
    value: 'radio',
    label: '单选框',
    isDict: true,
    isFk: false,
  },
  {
    value: 'switch',
    label: '开关',
    isDict: false,
    isFk: false,
  },
  {
    value: 'checkbox',
    label: '多选框',
    isDict: true,
    isFk: false,
  },
  {
    value: 'inputnumber',
    label: '数字输入框',
    isDict: false,
    isFk: false,
  },
  {
    value: 'textarea',
    label: '文本域',
    isDict: false,
    isFk: false,
  },
];
const isDict = (effectType: string): boolean => {
  for (const key in effectTypeData) {
    if (effectTypeData[key].value == effectType) {
      return effectTypeData[key].isDict;
    }
  }
  return false;
};
export const columns: BasicColumn[] = [
  {
    title: '表名称',
    dataIndex: 'tableName',
    align: 'left',
    width: 60,
  },
  {
    title: '业务名',
    dataIndex: 'busName',
    align: 'left',
    width: 60,
  },
  {
    title: '命名空间',
    dataIndex: 'nameSpace',
    align: 'left',
    width: 60,
  },
  {
    title: '作者姓名',
    dataIndex: 'authorName',
    width: 60,
  },
  {
    title: '生成方式',
    dataIndex: 'generateType',
    width: 60,
    customRender: ({ record }) => {
      return ~~record.generateType === 0 ? '生成到本项目' : '下载项目';
    },
  },
];
export const searchFormSchema: FormSchema[] = [
  {
    field: 'tableName',
    label: '表名称',
    component: 'Input',
    colProps: { span: 6 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'id',
    label: 'Id',
    component: 'Input',
    show: false,
  },
  {
    field: 'tableName',
    label: '表名',
    component: 'ApiSelect',
    componentProps: ({ formModel }) => {
      return {
        api: getTableList,
        labelField: 'entityName',
        valueField: 'entityName',
        immediate: false,
        onChange: (e: any, options: any) => {
          console.log(e);
          formModel.busName = options.tableComment;
        },
        getPopupContainer: () => document.body,
      };
    },
    colProps: { span: 23 },
    required: true,
  },
  {
    field: 'menuPid',
    label: '父级菜单',
    colProps: { span: 12 },
    component: 'TreeSelect',
    defaultValue: '0',
    componentProps: {
      fieldNames: {
        label: 'name',
        key: 'id',
        value: 'id',
      },
      getPopupContainer: () => document.body,
    },
    required: true,
  },
  {
    field: 'busName',
    label: '业务名',
    colProps: { span: 12 },
    component: 'Input',
    required: true,
  },
  {
    field: 'nameSpace',
    label: '命名空间',
    colProps: { span: 12 },
    component: 'Input',
    defaultValue: 'QingTian.Application',
    required: true,
  },
  {
    field: 'authorName',
    label: '作者',
    colProps: { span: 12 },
    component: 'Input',
    defaultValue: 'QingTian',
    required: true,
  },
  {
    field: 'generateType',
    label: '生成方式',
    colProps: { span: 23 },
    component: 'RadioButtonGroup',
    defaultValue: 0,
    componentProps: {
      options: [
        { label: '生成到本项目', value: 0 },
        { label: '下载项目', value: 1 },
      ],
    },
    dynamicDisabled: true,
    required: true,
  },
];
export const codeGenerateEditColumns: BasicColumn[] = [
  {
    title: '字段',
    dataIndex: 'columnName',
    align: 'left',
    width: 80,
  },
  {
    title: '描述',
    dataIndex: 'columnComment',
    align: 'left',
    editRow: true,
    width: 120,
  },
  {
    title: '类型',
    dataIndex: 'netType',
    width: 80,
  },
  {
    title: '作用类型',
    dataIndex: 'effectType',
    editRow: true,
    width: 80,
    colSpan: 2,
    editComponent: 'Select',
    editComponentProps: ({ record }) => {
      return {
        options: effectTypeData,
        onChange: (_, options: any) => {
          if (!options.isFk) {
            record.fkColumnName = null;
            record.fkEntityName = null;
            record.fkColumnNetType = null;
          }
          if (!options.isDict) {
            record.dictTypeCode = null;
          }
        },
      };
    },
    editDynamicDisabled: ({ record }) => record.columnKey,
  },
  {
    title: '按钮',
    width: 20,
    colSpan: 0,
    //slots: { customRender: 'btn' },
    // customRender: ({ column, record }) => {
    //   console.log(column);
    //   if (record.effectType !== 'fk') {
    //     return null;
    //   }
    //   return h(Button, {
    //     shape: 'circle',
    //     type: 'dashed',
    //     preIcon: 'ant-design:api-twotone',
    //     onClick: () => {
    //       console.log(record);
    //       //fkClick(record);
    //     },
    //     title: '外键关系编辑',
    //   });
    // },
  },
  {
    title: '字典',
    dataIndex: 'dictTypeCode',
    editRow: true,
    width: 80,
    editComponent: 'ApiSelect',
    editComponentProps: {
      api: sysDictTypeList,
      labelField: 'name',
      valueField: 'code',
    },
    editDynamicDisabled: ({ record }) => !isDict(record.effectType),
  },
  {
    title: '列表显示',
    dataIndex: 'whetherTable',
    editRow: true,
    width: 40,
    editComponent: 'Switch',
    editDynamicDisabled: ({ record }) => record.columnKey,
    editValueMap: (value) => {
      return value ? '开' : '关';
    },
  },
  {
    title: '增改',
    dataIndex: 'whetherAddUpdate',
    editRow: true,
    width: 40,
    editComponent: 'Switch',
    editDynamicDisabled: ({ record }) => record.columnKey,
    editValueMap: (value) => {
      return value ? '开' : '关';
    },
  },
  {
    title: '必填',
    dataIndex: 'whetherRequired',
    editRow: true,
    width: 40,
    editComponent: 'Switch',
    editDynamicDisabled: ({ record }) => record.columnKey,
    editValueMap: (value) => {
      return value ? '开' : '关';
    },
  },
  {
    title: '是否是查询',
    dataIndex: 'queryWhether',
    editRow: true,
    width: 40,
    editComponent: 'Switch',
    editDynamicDisabled: ({ record }) => record.columnKey,
    editValueMap: (value) => {
      return value ? '开' : '关';
    },
  },
  {
    title: '查询方式',
    dataIndex: 'queryType',
    editRow: true,
    width: 80,
    editComponent: 'Select',
    editDynamicDisabled: ({ record }) => record.columnKey,
    editComponentProps: {
      options: queryTypeData,
    },
  },
];
export const columnNameComponentProps = (optionsData: any) => {
  return {
    componentProps: ({ formModel }) => {
      return {
        fieldNames: {
          label: 'columnName',
          key: 'columnName',
          value: 'columnName',
        },
        options: optionsData,
        onChange: (e: any, options: any) => {
          console.log(e);
          console.log(options);
          formModel.netType = options.netType;
        },
        getPopupContainer: () => document.body,
      };
    },
  };
};
export const fkformSchema: FormSchema[] = [
  {
    field: 'entityName',
    label: '外键表',
    component: 'ApiSelect',
    componentProps: ({ formModel, formActionType }) => {
      return {
        api: getTableList,
        labelField: 'entityName',
        valueField: 'entityName',
        OptionsChange: (e: any) => {
          console.log(e);
        },
        onChange: async (e: any) => {
          const { updateSchema } = formActionType;
          formModel.columnName = undefined;
          const data = await codeGenerateColumnList({ entityName: e });
          updateSchema({
            field: 'columnName',
            ...columnNameComponentProps(data),
          });
        },
        getPopupContainer: () => document.body,
      };
    },
    colProps: { span: 23 },
    required: true,
  },
  {
    field: 'columnName',
    label: '显示字段',
    component: 'Select',
    colProps: { span: 23 },
    required: true,
  },
  {
    field: 'netType',
    label: 'NetType',
    component: 'Input',
    show: false,
  },
];
