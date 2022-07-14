import { isAccountExist } from '/@/api/sys/user';
import { DescItem } from '/@/components/Description';
import { BasicColumn, FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '用户名',
    dataIndex: 'account',
    width: 120,
  },
  {
    title: '昵称',
    dataIndex: 'nickName',
    width: 120,
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    width: 120,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
  },
  {
    title: '角色',
    dataIndex: 'role',
    width: 200,
  },
  {
    title: '备注',
    dataIndex: 'remark',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'account',
    label: '用户名',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'nickName',
    label: '昵称',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const accountFormSchema: FormSchema[] = [
  {
    field: 'account',
    label: '用户名',
    component: 'Input',
    colProps: { span: 12 },
    helpMessage: ['本字段演示异步验证', '不能输入带有admin的用户名'],
    dynamicRules: ({ values }) => {
      return [
        {
          required: true,
          validator: (_, value) => {
            if (!value) {
              return Promise.reject('请输入用户名');
            }
            if (value) {
              return new Promise<void>((resolve, reject) => {
                isAccountExist({ id: values?.id, account: value })
                  .then(() => resolve())
                  .catch((err) => {
                    reject(err.message || '验证失败');
                  });
              });
            }
            return Promise.resolve();
          },
        },
      ];
    },
  },
  {
    field: 'nickName',
    label: '昵称',
    component: 'Input',
    colProps: { span: 12 },
    required: true,
  },
  {
    label: '密码',
    field: 'password',
    component: 'InputPassword',
    rules: [
      {
        required: true,
        message: '请输入密码',
      },
    ],
    colProps: { span: 12 },
    ifShow: false,
    required: true,
  },
  {
    label: '确认密码',
    field: 'confirm',
    component: 'InputPassword',
    colProps: { span: 12 },
    ifShow: false,
    dynamicRules: ({ values }) => {
      return [
        {
          required: true,
          validator: (_, value) => {
            if (!value) {
              return Promise.reject('请输入确认密码');
            }
            if (value !== values.password) {
              return Promise.reject('两次输入的密码不一致!');
            }
            return Promise.resolve();
          },
        },
      ];
    },
  },
  {
    label: '邮箱',
    field: 'email',
    component: 'Input',
    colProps: { span: 24 },
    required: true,
  },
  {
    label: '备注',
    field: 'remark',
    component: 'InputTextArea',
    colProps: { span: 24 },
  },
  {
    label: '',
    field: 'sysEmpParam',
    component: 'Input',
    slot: 'sysEmpParam',
  },
];

export const personSchema: DescItem[] = [
  {
    field: 'account',
    label: '用户姓名',
  },
  {
    field: 'realName',
    label: '姓名',
  },
  {
    field: 'nickName',
    label: '邮箱',
  },
  {
    field: 'email',
    label: '常用快递',
  },
  {
    field: 'remark',
    label: '备注',
  },
];
