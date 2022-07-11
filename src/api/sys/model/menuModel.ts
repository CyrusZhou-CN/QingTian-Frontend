import type { RouteMeta } from 'vue-router';
export interface RouteItem {
  meta?: RouteMeta;
  alias?: string | string[];
  caseSensitive?: boolean;
  children?: RouteItem[];
  /// <summary>
  /// Id
  /// </summary>
  id: string;
  /// <summary>
  /// 父Id
  /// </summary>
  pid?: string;

  /// <summary>
  /// 名称
  /// </summary>
  name: string;

  /// <summary>
  /// 编码
  /// </summary>
  code?: string;

  /// <summary>
  /// 菜单类型（字典 0目录 1菜单 2按钮）
  /// </summary>
  type?: string;

  /// <summary>
  /// 图标
  /// </summary>
  icon?: string;

  /// <summary>
  /// 路由地址
  /// </summary>
  path?: string;

  /// <summary>
  /// 组件地址
  /// </summary>
  component?: string;

  /// <summary>
  /// 权限标识
  /// </summary>
  permission?: string;

  /// <summary>
  /// 打开方式（字典 0无 1组件 2内链 3外链）
  /// </summary>
  openType?: string;

  /// <summary>
  /// 是否可见（Y-是，N-否）
  /// </summary>
  visible?: string;

  /// <summary>
  /// 内链地址
  /// </summary>
  link?: string;

  /// <summary>
  /// 重定向地址
  /// </summary>
  redirect?: string;

  /// <summary>
  /// 权重（字典 1系统权重 2业务权重）
  /// </summary>
  weight?: string;

  /// <summary>
  /// 排序
  /// </summary>
  sort?: number;

  /// <summary>
  /// 备注
  /// </summary>
  remark?: string;
}

/**
 * @description: Get menu return value
 */
export type sysMenuListResultModel = RouteItem[];
