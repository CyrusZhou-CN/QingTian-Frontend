import { defHttp } from '/@/utils/http/axios';
import {
  LoginParams,
  LoginResultModel,
  CaptchaResultModel,
  GetUserInfoModel,
} from './model/userModel';

import { ErrorMessageMode } from '/#/axios';

enum Api {
  login = '/auth/login',
  logout = '/auth/logout',
  getUserInfo = '/auth/getUserInfo',
  getPermCode = '/auth/getPermCode',
  getCaptchaStatus = '/auth/getCaptchaStatus',
  getCaptcha = '/auth/getCaptcha',
  CheckCaptcha = '/auth/checkCaptcha',
  page = '/SysUser/page',
  isAccountExist = '/SysUser/isAccountExist',
  detail = '/SysUser/detail',
  add = '/SysUser/add',
  delete = '/SysUser/delete',
  edit = '/SysUser/edit',
  selector = '/SysUser/selector',
  export = '/sysUser/export',
  import = '/sysUser/import',
  updateInfo = '/sysUser/updateInfo',
  updateAvatar = '/sysUser/updateAvatar',
}

/**
 * @description: 导出用户信息
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysUserExport = (params) => {
  return defHttp.get(
    {
      url: Api.export,
      params,
      responseType: 'blob',
    },
    {
      isReturnNativeResponse: true,
    },
  );
};

/**
 * @description: 导入用户信息
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysUserImport = (params: any) => {
  return defHttp.post({ url: Api.import, params });
};

/**
 * @description: 导入用户信息
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysUserUpdateInfo = (params: any) => {
  return defHttp.post({ url: Api.updateInfo, params });
};

/**
 * @description: 修改头像
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysUserUpdateAvatar = (params: any) => {
  return defHttp.post({ url: Api.updateAvatar, params });
};

/**
 * @description: 登录
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const loginApi = (params: LoginParams, mode: ErrorMessageMode = 'modal') => {
  return defHttp.post<LoginResultModel>(
    {
      url: Api.login,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
};

/**
 * @description: 获取当前登录用户信息
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const getUserInfo = () => {
  return defHttp.get<GetUserInfoModel>({ url: Api.getUserInfo }, { errorMessageMode: 'none' });
};

/**
 * @description: 获取权限信息
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const getPermCode = () => {
  return defHttp.get<string[]>({ url: Api.getPermCode });
};

/**
 * @description: 注销用户
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const doLogout = () => {
  return defHttp.get({ url: Api.logout });
};

/**
 * @description: 获取验证码状态
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const getCaptchaStatus = () => {
  return defHttp.get<boolean>({ url: Api.getCaptchaStatus });
};

/**
 * @description: 获取验证码
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const getCaptcha = () => {
  return defHttp.get<CaptchaResultModel>({ url: Api.getCaptcha });
};

/**
 * @description: 获取用户选择器
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysUserSelector = (params: any) => {
  return defHttp.get({ url: Api.selector, params });
};

/**
 * @description: 验证码认证
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const checkCaptcha = (params: CaptchaResultModel, mode: ErrorMessageMode = 'modal') => {
  return defHttp.post<CaptchaResultModel>(
    {
      url: Api.CheckCaptcha,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
};

/**
 * @description: 获取用户信息
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const getAccountDetail = (userId: string) => {
  return defHttp.get({ url: Api.detail, params: { id: userId } });
};

/**
 * @description: 新增用户
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysUserAdd = (params: any) => {
  return defHttp.post({ url: Api.add, params });
};

/**
 * @description: 更新用户
 *
 * @author QingTian
 */
export const sysUserEdit = (params: any) => {
  return defHttp.post({ url: Api.edit, params });
};

/**
 * @description: 删除用户
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const sysUserDelete = (params: any) => {
  return defHttp.post({ url: Api.delete, params });
};

/**
 * @description: 分页查询用户
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const getAccountList = () => {
  return defHttp.get({ url: Api.page });
};

/**
 * @description: 账号是否存在
 *
 * @author QingTian
 * @date 2022-07-14 15:46:03
 */
export const isAccountExist = (params: any) => {
  return defHttp.get({ url: Api.isAccountExist, params });
};
