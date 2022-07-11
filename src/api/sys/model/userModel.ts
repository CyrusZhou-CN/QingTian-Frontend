/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  account: string;
  password: string;
}

export interface RoleInfo {
  value: any;
  name: string;
  code: string;
}

/**
 * @description: Login interface return value
 */
export interface LoginResultModel {
  userId: string | number;
  token: string;
}

/**
 * @description: Get user information return value
 */
export interface GetUserInfoModel {
  roles: RoleInfo[];
  // 用户id
  userId: string | number;
  // 用户名
  account: string;
  // 真实名字
  realName: string;
  // 头像
  avatar: string;
  // 首页
  homePath: string;
  // 介绍
  desc?: string;
}

export interface CaptchaResultModel {
  /// 验证码类型
  captchaType: string;

  /// 坐标点集合
  pointJson: string;

  /// Token
  token: string;
}
