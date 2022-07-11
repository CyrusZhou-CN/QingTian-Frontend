import { BasicColumn, FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
export const columns: BasicColumn[] = [
  {
    title: '访问人',
    dataIndex: 'name',
  },
  {
    title: '访问类型',
    dataIndex: 'visType',
    customRender: ({ record }) => {
      let text = '';
      switch (record.visType) {
        case 0:
          text = '登陆';
          break;
        case 1:
          text = '登出';
          break;
        case 2:
          text = '注册';
          break;
        case 3:
          text = '改密';
          break;
        case 4:
          text = '第三方登陆';
        case 5:
          text = '权限信息';
          break;
        default:
          break;
      }
      return h(Tag, {}, () => text);
    },
  },
  {
    title: '访问结果',
    dataIndex: 'success',
    customRender: ({ record }) => {
      const status = record.success;
      const enable = ~~status === 1;
      const color = enable ? 'green' : 'red';
      const text = enable ? '成功' : '失败';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '消息',
    dataIndex: 'message',
  },
  {
    title: 'Ip',
    dataIndex: 'ip',
  },
  {
    title: '地址',
    dataIndex: 'location',
  },
  {
    title: '浏览器',
    dataIndex: 'browser',
  },
  {
    title: '操作系统',
    dataIndex: 'os',
  },
  {
    title: '访问时间',
    dataIndex: 'visTime',
  },
];
export const searchFormSchema: FormSchema[] = [
  {
    field: 'visTime',
    label: '访问时间',
    component: 'RangePicker',
    colProps: { span: 6 },
  },
  {
    field: 'name',
    label: '访问人',
    component: 'Input',
    colProps: { span: 6 },
  },
  {
    field: 'success',
    label: '访问结果',
    component: 'Select',
    componentProps: {
      options: [
        { label: '成功', value: 1 },
        { label: '失败', value: 0 },
      ],
    },
    colProps: { span: 6 },
  },
  {
    field: 'message',
    label: '消息',
    component: 'Input',
    colProps: { span: 6 },
  },
  {
    field: 'ip',
    label: 'Ip',
    isAdvanced: false,
    component: 'Input',
    colProps: { span: 6 },
  },
  {
    field: 'location',
    label: '地址',
    component: 'Input',
    isAdvanced: false,
    colProps: { span: 6 },
  },
  {
    field: 'browser',
    label: '浏览器',
    component: 'Input',
    isAdvanced: false,
    colProps: { span: 6 },
  },
  {
    field: 'os',
    label: '操作系统',
    component: 'Input',
    isAdvanced: false,
    colProps: { span: 6 },
  },
  {
    field: 'visType',
    label: '访问类型',
    component: 'Input',
    isAdvanced: false,
    colProps: { span: 6 },
  },
  {
    field: 'account',
    label: '访问账号',
    component: 'Input',
    isAdvanced: false,
    colProps: { span: 6 },
  },
];
export const formSchema: FormSchema[] = [
  {
    field: 'account',
    label: '访问账号',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'name',
    label: '访问人',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'visTime',
    label: '访问时间',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'visType',
    label: '访问类型',
    component: 'Select',
    componentProps: {
      options: [
        { label: '登陆', value: 0 },
        { label: '登出', value: 1 },
        { label: '注册', value: 2 },
        { label: '改密', value: 3 },
        { label: '第三方登陆', value: 4 },
        { label: '权限信息', value: 5 },
      ],
    },
    colProps: { span: 8 },
  },
  {
    field: 'success',
    label: '访问结果',
    component: 'RadioButtonGroup',
    componentProps: {
      options: [
        { label: '成功', value: 1 },
        { label: '失败', value: 0 },
      ],
    },
    colProps: { span: 8 },
  },
  {
    field: 'message',
    label: '消息',
    component: 'Input',
    colProps: { span: 24 },
  },
  {
    field: 'ip',
    label: 'Ip',
    component: 'Input',
    colProps: { span: 12 },
  },
  {
    field: 'location',
    label: '地址',
    component: 'Input',
    colProps: { span: 12 },
  },
  {
    field: 'browser',
    label: '浏览器',
    component: 'Input',
    colProps: { span: 12 },
  },
  {
    field: 'os',
    label: '操作系统',
    component: 'Input',
    colProps: { span: 12 },
  },
];
