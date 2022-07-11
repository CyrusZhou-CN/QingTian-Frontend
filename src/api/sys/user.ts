import { defHttp } from '/@/utils/http/axios';
import {
  LoginParams,
  LoginResultModel,
  CaptchaResultModel,
  GetUserInfoModel,
} from './model/userModel';

import { ErrorMessageMode } from '/#/axios';

enum Api {
  Login = '/auth/login',
  Logout = '/auth/logout',
  GetUserInfo = '/auth/getUserInfo',
  GetPermCode = '/auth/getPermCode',
  GetCaptchaStatus = '/auth/getCaptchaStatus',
  GetCaptcha = '/auth/getCaptcha',
  CheckCaptcha = '/auth/checkCaptcha',
  GetAccountList = '/SysUser/page',
  IsAccountExist = '/SysUser/isAccountExist',
  GetAccountdetail = '/SysUser/detail',
  SysUserAdd = '/SysUser/add',
  SysUserDelete = '/SysUser/delete',
  SysUserEdit = '/SysUser/edit',
  SysUserSelector = '/SysUser/selector',
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<LoginResultModel>(
    {
      url: Api.Login,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  return defHttp.get<GetUserInfoModel>({ url: Api.GetUserInfo }, { errorMessageMode: 'none' });
}

export function getPermCode() {
  return defHttp.get<string[]>({ url: Api.GetPermCode });
}

export function doLogout() {
  return defHttp.get({ url: Api.Logout });
}

export function getCaptchaStatus() {
  return defHttp.get<boolean>({ url: Api.GetCaptchaStatus });
}

export function getCaptcha() {
  return defHttp.get<CaptchaResultModel>({ url: Api.GetCaptcha });
}

export function sysUserSelector(params: any) {
  return defHttp.get({ url: Api.SysUserSelector, params });
}
export function checkCaptcha(params: CaptchaResultModel, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<CaptchaResultModel>(
    {
      url: Api.CheckCaptcha,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

/**
 * @description: Get user menu based on id
 */
export const getAccountDetail = (userId: string) => {
  return defHttp.get({ url: Api.GetAccountdetail, params: { id: userId } });
};

/**
 * @description: post
 */
export const sysUserAdd = (params: any) => {
  return defHttp.post({ url: Api.SysUserAdd, params });
};

/**
 * @description: post
 */
export const sysUserEdit = (params: any) => {
  return defHttp.post({ url: Api.SysUserEdit, params });
};

/**
 * @description: post
 */
export const sysUserDelete = (params: any) => {
  return defHttp.post({ url: Api.SysUserDelete, params });
};

/**
 * @description: Get user menu based on id
 */
export const getAccountList = () => {
  return defHttp.get({ url: Api.GetAccountList });
};

/**
 * @description: Get user menu based on id
 */
export const isAccountExist = (params: any) => {
  return defHttp.get({ url: Api.IsAccountExist, params });
};
