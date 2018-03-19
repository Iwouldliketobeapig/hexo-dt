---
title: http
date: 2018-03-19
tag: 
  - http
categories:
  - 前端
---
![](/imgs/project/theme/http.png)

# http

**介绍**：http基于tcp/ip通信来传递数据

## 注意事项

+ http是无连接：每次连接只处理一个请求，服务器处理完请求后，并收到客户端的应答后，即断开连接；
+ http媒体是独立的：只要客户端和服务器端知道如何处理数据类型，任何数据都可以用http传送；
+ http无状态：无状态是指协议对于事物处理没得记忆能力；

## 消息结构

1.http客服端请求包括：请求行、请求头部、空行和请求数据

![http协议结构](/imgs/project/http/structure.png)

2.http响应：状态行、消息报头、空行、响应正文

## http请求方法

+ http1.0：get、post和head
+ http1.1新增五种请求方式: delete、put、connect、 tarce和options

