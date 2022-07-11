import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import { Icon } from '/@/components/Icon';

export const columns: BasicColumn[] = [
  {
    title: '菜单名称',
    dataIndex: 'name',
    width: 200,
    align: 'left',
  },
  {
    title: '图标',
    dataIndex: 'icon',
    width: 50,
    customRender: ({ record }) => {
      return h(Icon, { icon: record.icon });
    },
  },
  {
    title: '权限标识',
    dataIndex: 'permission',
    width: 180,
    align: 'left',
  },
  {
    title: '编码',
    dataIndex: 'code',
    width: 180,
    align: 'left',
  },
  {
    title: '路由地址',
    dataIndex: 'path',
    width: 180,
    align: 'left',
  },
  {
    title: '组件',
    dataIndex: 'component',
    align: 'left',
  },
  {
    title: '排序',
    dataIndex: 'sort',
    width: 50,
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 60,
    customRender: ({ record }) => {
      let color = '';
      let text = '';
      switch (record.status) {
        case 0:
          color = 'green';
          text = '启用';
          break;
        case 1:
          color = 'red';
          text = '停用';
          break;
        case 2:
          color = 'grigio';
          text = '删除';
          break;
        default:
          color = 'grey';
          text = '未知';
          break;
      }
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '显示',
    dataIndex: 'visible',
    width: 60,
    customRender: ({ record }) => {
      const status = record.visible;
      const enable = ~~status === 1;
      const color = enable ? 'green' : 'red';
      const text = enable ? '是' : '否';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '创建时间',
    dataIndex: 'createdTime',
    width: 180,
  },
];

const isDir = (type: number) => type === 0;
const isMenu = (type: number) => type === 1;
const isButton = (type: number) => type === 2;

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '菜单名称',
    component: 'Input',
    colProps: { span: 4 },
  },
  {
    field: 'status',
    label: '状态',
    component: 'Select',
    defaultValue: -1,
    componentProps: {
      options: [
        { label: '全部', value: -1 },
        { label: '正常', value: 0 },
        { label: '停用', value: 1 },
        { label: '删除', value: 2 },
      ],
    },
    colProps: { span: 3 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'code',
    label: '编码',
    component: 'Input',
    required: true,
  },
  {
    field: 'type',
    label: '菜单类型',
    component: 'RadioButtonGroup',
    defaultValue: 0,
    componentProps: {
      options: [
        { label: '目录', value: 0 },
        { label: '菜单', value: 1 },
        { label: '按钮', value: 2 },
      ],
    },
    colProps: { lg: 24, md: 24 },
  },
  {
    field: 'name',
    label: '菜单名称',
    component: 'Input',
    required: true,
  },
  {
    field: 'pid',
    label: '上级菜单',
    component: 'TreeSelect',
    componentProps: {
      fieldNames: {
        label: 'name',
        key: 'id',
        value: 'id',
      },
      getPopupContainer: () => document.body,
    },
  },
  {
    field: 'sort',
    label: '排序',
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'icon',
    label: '图标',
    component: 'IconPicker',
    required: true,
  },
  {
    field: 'path',
    label: '路由地址',
    component: 'Input',
    required: true,
    ifShow: ({ values }) => !isButton(values.type),
  },
  {
    field: 'redirect',
    label: '重定向地址',
    component: 'Input',
    ifShow: ({ values }) => isDir(values.type),
  },
  {
    field: 'component',
    label: '组件路径',
    component: 'Input',
    required: true,
    ifShow: ({ values }) => isMenu(values.type),
  },
  {
    field: 'permission',
    label: '权限标识',
    component: 'Input',
    ifShow: ({ values }) => !isDir(values.type),
  },
  {
    field: 'status',
    label: '状态',
    component: 'RadioButtonGroup',
    defaultValue: 0,
    componentProps: {
      options: [
        { label: '正常', value: 0 },
        { label: '停用', value: 1 },
      ],
    },
  },
  {
    field: 'openType',
    label: '打开方式',
    component: 'RadioButtonGroup',
    defaultValue: 0,
    componentProps: {
      options: [
        { label: '无', value: 0 },
        { label: '组件', value: 1 },
        { label: '内链', value: 2 },
        { label: '外链', value: 3 },
      ],
    },
    ifShow: ({ values }) => !isButton(values.type),
  },
  {
    field: 'visible',
    label: '是否显示',
    component: 'RadioButtonGroup',
    defaultValue: 1,
    componentProps: {
      options: [
        { label: '是', value: 1 },
        { label: '否', value: 0 },
      ],
    },
    ifShow: ({ values }) => !isButton(values.type),
  },
];
