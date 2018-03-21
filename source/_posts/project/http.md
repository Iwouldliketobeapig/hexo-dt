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

| 方法 | 描述 |
| :------- | :---- |
| get | 向特定资源发起请求 |
| post | 向指定资源提交数据进行数据处理。数据包含在请求体中，post请求可能用于新的资源的创建以及已有资源的修改 |
| head | 类似与get请求，只不过没有返回体，用于获取包含在响应消息头中的元信息 |
| put | 向指定资源上传最新内容 |
| delete | 请求服务器删除指定资源 |
| trace | 回显服务器收到的请求，主要用于测试或诊断 |
| connect | http1.1中预留给能够将连接改为管道方式的代理服务器 |
| options | 返回服务器对特定资源支持的http方法，用来向服务器发送‘*’的请求来测试服务器的功能性 |

## http响应头信息