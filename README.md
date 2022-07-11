<div align="center"> <img alt="QingTian Logo" width="200" height="200" src="public\resource\img\logo.svg"></div>
<h1>QingTian 前端</h1>
</div>

## 简介

QingTian 前端 是一个基于 [Vben Admin](https://github.com/vbenjs/vue-vben-admin) 开发的 [QingTian](https://github.com/CyrusZhou-CN/QingTian-Backend.git) 前端项目。

## 安装使用

- 获取项目代码

```bash
git clone https://github.com/CyrusZhou-CN/QingTian-Frontend.git
```

- 安装依赖

```bash
cd QingTian-Frontend

pnpm install

```

- 运行

```bash
pnpm serve
```

- 打包

```bash
pnpm build
```

测试账号 / 密码: superAdmin/123456

## Git 贡献提交规范

- 参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范 ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

  - `feat` 增加新功能
  - `fix` 修复问题/BUG
  - `style` 代码风格相关无影响运行结果的
  - `perf` 优化/性能提升
  - `refactor` 重构
  - `revert` 撤销修改
  - `test` 测试相关
  - `docs` 文档/注释
  - `chore` 依赖更新/脚手架配置修改等
  - `workflow` 工作流改进
  - `ci` 持续集成
  - `types` 类型定义文件更改
  - `wip` 开发中
