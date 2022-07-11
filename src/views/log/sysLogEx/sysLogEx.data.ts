import { BasicColumn, FormSchema } from '/@/components/Table';
export const columns: BasicColumn[] = [
  {
    title: '姓名',
    dataIndex: 'name',
  },
  {
    title: '类名',
    dataIndex: 'className',
  },
  {
    title: '方法名',
    dataIndex: 'methodName',
  },
  {
    title: '异常名称',
    dataIndex: 'exceptionName',
  },
  {
    title: '异常信息',
    dataIndex: 'exceptionMsg',
  },
  {
    title: '参数对象',
    dataIndex: 'paramsObj',
  },
  {
    title: '异常时间',
    dataIndex: 'exceptionTime',
  },
];
export const searchFormSchema: FormSchema[] = [
  {
    field: 'exceptionTime',
    label: '异常时间',
    component: 'RangePicker',
    colProps: { span: 6 },
  },
  {
    field: 'exceptionMsg',
    label: '异常信息',
    component: 'Input',
    colProps: { span: 6 },
  },
  {
    field: 'name',
    label: '姓名',
    component: 'Input',
    colProps: { span: 6 },
  },
  {
    field: 'className',
    label: '类名',
    component: 'Input',
    colProps: { span: 6 },
  },
  {
    field: 'account',
    label: '账号',
    component: 'Input',
    isAdvanced: false,
    colProps: { span: 6 },
  },
  {
    field: 'methodName',
    label: '方法名',
    component: 'Input',
    isAdvanced: false,
    colProps: { span: 6 },
  },
  {
    field: 'exceptionName',
    label: '异常名称',
    component: 'Input',
    isAdvanced: false,
    colProps: { span: 6 },
  },
  {
    field: 'exceptionSource',
    label: '异常源',
    component: 'Input',
    isAdvanced: false,
    colProps: { span: 6 },
  },
  {
    field: 'stackTrace',
    label: '堆栈跟踪',
    component: 'Input',
    isAdvanced: false,
    colProps: { span: 6 },
    show: true,
  },
  {
    field: 'paramsObj',
    label: '参数对象',
    component: 'Input',
    isAdvanced: false,
    colProps: { span: 6 },
  },
];
export const formSchema: FormSchema[] = [
  {
    field: 'account',
    label: '账号',
    component: 'Input',
    colProps: { span: 12 },
  },
  {
    field: 'name',
    label: '姓名',
    component: 'Input',
    colProps: { span: 12 },
  },
  {
    field: 'exceptionTime',
    label: '异常时间',
    component: 'Input',
    colProps: { span: 12 },
  },
  {
    field: 'methodName',
    label: '方法名',
    component: 'Input',
    colProps: { span: 12 },
  },
  {
    field: 'className',
    label: '类名',
    component: 'Input',
    colProps: { span: 24 },
  },
  {
    field: 'exceptionSource',
    label: '异常源',
    component: 'Input',
    colProps: { span: 12 },
  },
  {
    field: 'exceptionName',
    label: '异常名称',
    component: 'Input',
    colProps: { span: 12 },
  },
  {
    field: 'exceptionMsg',
    label: '异常信息',
    component: 'InputTextArea',
    colProps: { span: 12 },
  },
  {
    field: 'paramsObj',
    label: '参数对象',
    component: 'InputTextArea',
    colProps: { span: 12 },
  },
  {
    field: 'stackTrace',
    label: '堆栈跟踪',
    component: 'InputTextArea',
    colProps: { span: 24 },
  },
];
