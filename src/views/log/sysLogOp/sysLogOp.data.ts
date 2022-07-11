import { BasicColumn, FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
export const columns: BasicColumn[] = [
  {
    title: '请求方式',
    dataIndex: 'reqMethod',
  },
  {
    title: '执行结果',
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
    title: 'Ip',
    dataIndex: 'ip',
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
    title: '请求地址',
    dataIndex: 'url',
  },
  {
    title: '操作人',
    dataIndex: 'name',
  },
  {
    title: '耗时',
    dataIndex: 'elapsedTime',
  },
  {
    title: '操作时间',
    dataIndex: 'opTime',
  },
];
export const searchFormSchema: FormSchema[] = [
  {
    field: 'opTimes',
    label: '操作时间',
    component: 'RangePicker',
    colProps: { span: 6 },
  },
  {
    field: 'success',
    label: '执行结果',
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
    field: 'name',
    label: '操作人',
    component: 'Input',
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
    component: 'Input',
    isAdvanced: false,
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
    field: 'url',
    label: '请求地址',
    component: 'Input',
    isAdvanced: false,
    colProps: { span: 6 },
  },
  {
    field: 'className',
    label: '类名称',
    component: 'Input',
    isAdvanced: false,
    colProps: { span: 6 },
  },
  {
    field: 'methodName',
    label: '方法名称',
    component: 'Input',
    isAdvanced: false,
    colProps: { span: 6 },
  },
  {
    field: 'reqMethod',
    label: '请求方式',
    component: 'Input',
    isAdvanced: false,
    colProps: { span: 6 },
  },
  {
    field: 'param',
    label: '请求参数',
    component: 'Input',
    isAdvanced: false,
    colProps: { span: 6 },
  },
  {
    field: 'result',
    label: '返回结果',
    component: 'Input',
    isAdvanced: false,
    colProps: { span: 6 },
  },
  {
    field: 'elapsedTime',
    label: '耗时',
    component: 'Input',
    isAdvanced: false,
    colProps: { span: 6 },
  },
  {
    field: 'account',
    label: '操作账号',
    component: 'Input',
    isAdvanced: false,
    colProps: { span: 6 },
  },
];
export const formSchema: FormSchema[] = [
  {
    field: 'account',
    label: '操作账号',
    component: 'Input',
    colProps: { span: 12 },
  },
  {
    field: 'name',
    label: '操作人',
    component: 'Input',
    colProps: { span: 12 },
  },
  {
    field: 'reqMethod',
    label: '请求方式',
    component: 'Input',
    colProps: { span: 12 },
  },
  {
    field: 'success',
    label: '执行结果',
    component: 'RadioButtonGroup',
    componentProps: {
      options: [
        { label: '成功', value: 1 },
        { label: '失败', value: 0 },
      ],
    },
    colProps: { span: 12 },
  },
  {
    field: 'message',
    label: '消息',
    component: 'Input',
    colProps: { span: 12 },
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
    field: 'url',
    label: '请求地址',
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
  {
    field: 'className',
    label: '类名称',
    component: 'Input',
    colProps: { span: 12 },
  },
  {
    field: 'methodName',
    label: '方法名称',
    component: 'Input',
    colProps: { span: 12 },
  },
  {
    field: 'param',
    label: '请求参数',
    component: 'InputTextArea',
    colProps: { span: 12 },
  },
  {
    field: 'result',
    label: '返回结果',
    component: 'InputTextArea',
    colProps: { span: 12 },
  },
  {
    field: 'elapsedTime',
    label: '耗时',
    component: 'Input',
    colProps: { span: 12 },
  },
  {
    field: 'opTime',
    label: '操作时间',
    component: 'Input',
    colProps: { span: 12 },
  },
];
