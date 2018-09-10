---
title: react-router v3 to v4
date: 2018-08-20
tag: 
  - react
  - react-router
categories:
  - 前端
---
![](/imgs/javascript/theme/es9.jpg)

# ES2018（1）

## v3 -> v4

* 1. 路由集中在一个地方 -> 不集中路由
* 2. 布局和页面是通过<Router>组件的嵌套来组成的
* 3. 布局和页面组件是完全纯碎是，是路由的一部分 -> 路由规则位于布局和UI之间
* 4. 排他性 -> 包容性(可以使用<Switch>来启用排他路由，仍然需要exact属性)
* 5. <Redirect> 组件将会始终执行浏览器重定向，但是当它位于 <Switch> 语句中时，只有在其他路由不匹配的情况下，才会渲染重定向组件
* 6. <IndexRoute> -> <Router exact>

## v4
* 1. props.match 被赋到由 <Route> 渲染的任何组件
* 2. 无法从 React Router v4 中获取 URL 的查询字符串了
* 3. <Switch>来启用排他路由