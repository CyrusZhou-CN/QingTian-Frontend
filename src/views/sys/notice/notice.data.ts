import { BasicColumn, FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import { Tinymce } from '/@/components/Tinymce/index';
import { sysUserSelector } from '/@/api/sys/user';
import { DescItem } from '/@/components/Description';

export const columns: BasicColumn[] = [
  {
    title: '标题',
    dataIndex: 'title',
  },
  {
    title: '类型',
    dataIndex: 'type',
    customRender: ({ record }) => {
      const status = record.type;
      const enable = ~~status === 1;
      const color = enable ? 'red' : 'green';
      const text = enable ? '通知' : '消息';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '状态',
    dataIndex: 'status',
    customRender: ({ record }) => {
      let text = '';
      switch (record.status) {
        case 0:
          text = '草稿';
          break;
        case 1:
          text = '发布';
          break;
        case 2:
          text = '撤回';
          break;
        case 3:
          text = '删除';
          break;
        default:
          break;
      }

      return h(Tag, { color: 'green' }, () => text);
    },
  },
  {
    title: '发布人姓名',
    dataIndex: 'publicUserName',
  },
  {
    title: '发布时间',
    dataIndex: 'publicTime',
  },
];
export const searchFormSchema: FormSchema[] = [
  {
    field: 'title',
    label: '标题',
    component: 'Input',
    colProps: { span: 6 },
  },
  {
    field: 'type',
    label: '类型',
    component: 'Select',
    componentProps: {
      options: [
        { label: '通知', value: 1 },
        { label: '消息', value: 2 },
      ],
    },
    colProps: { span: 6 },
  },
  {
    field: 'status',
    label: '状态',
    component: 'Select',
    componentProps: {
      options: [
        { label: '草稿', value: 0 },
        { label: '发布', value: 1 },
        { label: '撤回', value: 2 },
        { label: '删除', value: 3 },
      ],
    },
    colProps: { span: 6 },
  },
];
export const formSchema: FormSchema[] = [
  {
    field: 'title',
    label: '标题',
    component: 'Input',
    colProps: { span: 24 },
    required: true,
  },
  {
    field: 'type',
    label: '类型',
    component: 'RadioButtonGroup',
    defaultValue: 1,
    componentProps: {
      options: [
        { label: '通知', value: 1 },
        { label: '消息', value: 2 },
      ],
    },
    colProps: { span: 24 },
    required: true,
  },
  {
    field: 'content',
    label: '内容',
    component: 'Input',
    colProps: { span: 24 },
    render: ({ model, field }) => {
      return h(Tinymce, {
        value: model[field],
        onChange: (value: string) => {
          model[field] = value;
        },
      });
    },
    required: true,
  },
  {
    field: 'noticeUserIdList',
    label: '接收人',
    component: 'ApiTransfer',
    componentProps: {
      api: sysUserSelector,
      labelField: 'realName',
      valueField: 'id',
    },
    colProps: { span: 24 },
    required: true,
  },
];
export const descSchema: DescItem[] = [
  {
    field: 'title',
    label: '标题',
  },
  {
    field: 'type',
    label: '类型',
    render: (val, _) => {
      const enable = ~~val === 1;
      const color = enable ? 'red' : 'green';
      const text = enable ? '通知' : '消息';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    field: 'content',
    label: '内容',
    span: 24,
  },
  {
    field: 'PublicUserName',
    label: '发布人',
  },
  {
    field: 'PublicTime',
    label: '发布时间',
  },
];
