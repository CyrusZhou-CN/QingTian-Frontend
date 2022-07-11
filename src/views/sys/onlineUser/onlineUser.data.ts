import { BasicColumn, FormSchema } from '/@/components/Table';
export const columns: BasicColumn[] = [
  {
    title: '连接Id',
    dataIndex: 'connectionId',
  },
  {
    title: '用户Id',
    dataIndex: 'userId',
  },
  {
    title: '账号',
    dataIndex: 'account',
  },
  {
    title: '姓名',
    dataIndex: 'name',
  },
  {
    title: '最后连接时间',
    dataIndex: 'lastTime',
  },
  {
    title: '最后登录IP',
    dataIndex: 'lastLoginIp',
  },
];
export const searchFormSchema: FormSchema[] = [
  {
    field: 'connectionId',
    label: '连接Id',
    component: 'Input',
    colProps: { span: 6 },
  },
  {
    field: 'userId',
    label: '用户Id',
    component: 'Input',
    colProps: { span: 6 },
  },
  {
    field: 'account',
    label: '账号',
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
    field: 'lastTime',
    label: '最后连接时间',
    component: 'DatePicker',
    colProps: { span: 6 },
  },
  {
    field: 'lastLoginIp',
    label: '最后登录IP',
    component: 'Input',
    colProps: { span: 6 },
  },
];
export const formSchema: FormSchema[] = [
  {
    field: 'connectionId',
    label: '连接Id',
    component: 'Input',
    colProps: { span: 12 },
  },
  {
    field: 'userId',
    label: '用户Id',
    component: 'Input',
    colProps: { span: 12 },
  },
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
    field: 'lastTime',
    label: '最后连接时间',
    component: 'DatePicker',
    colProps: { span: 12 },
  },
  {
    field: 'lastLoginIp',
    label: '最后登录IP',
    component: 'Input',
    colProps: { span: 12 },
  },
];
