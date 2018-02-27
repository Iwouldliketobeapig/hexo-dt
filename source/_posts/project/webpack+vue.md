---
title: webpack+vue
date: 2017-12-23
tag: 
  - project
  - vue
  - webpack
categories:
  - 前端
---
![](/imgs/project/theme/webpack+vue.jpg)

- 作者：我原是猪
- 邮箱：1173127007@qq.com **欢迎补充，指错，讨论**
# webpack-vue
这是一个考虑基于前后端分离开发，基于webpack + vue + sass + es6的前端开发架构
[project路径(https://github.com/Iwouldliketobeapig/webpack-vue)](https://github.com/Iwouldliketobeapig/webpack-vue);

## 快速使用

- 安装依赖
```text
npm i
```
- 快速开发

|开发环境|命令介绍*|介绍|
|---|:-:|:-:|
|开发|npm run dev|运行后打开localhost:8081（可在config中更改）+ page|
|调试|npm run watch|略...|
|发布|npm run build|略...|

## 目录结构
```text
- build
  -- dev-client.js // 热更新并刷新浏览器
  -- dev-server.js  // 启动dev,设置代理端口
  -- webpack.base.config.js // 基础webpack配置
  -- webpack.dev.js // dev特性配置
  -- webpack.entry.js // webpack多入口文件遍历
  -- webpack.prod.js  // build特性配置
  -- webpack.watch.js // watch特性配置
- config
  -- deafult.js // config
- pages
  -- assets // 静态资源文件
  -- common // 公有Js文件
  -- components // 公共组件文件
  -- modules // 页面入口文件
- .babelrc // babelrc配置
- .eslintignore
- .eslintrc.js // eslint配置
- .stylelintrc // stylelint配置
- .vcmrc // validate-commit-msg配置
- app.js
```
**初始项目下，- pages下-- module是必须的**

## 特性
- 集成eslint,规范js,在commit时检测，不通过不能提交commit,在-.eslintrc配置。
- 集成stylelint,规范css,在dev和watch检测(会打印报错，不影响代码的提交和编写),在-.stylelintrc中配置
- 集成validate-commit-msg,规范commit msg信息，commit时检测，在-.vcmrc中配置

## 介绍
### 设置代理端口
- 在-confg下的--default中设置proxy.target设置代理端口,设置proxy.apiVersion设置api版本

![](/imgs/project/webpack+vue/proxy.png)

### 开发npm run dev
- 开发中打开localhost:8081/templates/ + 路径;

![](/imgs/project/webpack+vue/dev.png)

**列: localhost:8081/templates/index/index.html**

[在github上编辑此页](https://github.com/Iwouldliketobeapig/hexo-dt/edit/master/source/_posts/project/webpack+vue.md)