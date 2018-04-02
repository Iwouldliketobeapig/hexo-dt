---
title: 这是一篇杂乱无章的前端文章
date: 2018-04-01
tag: 
  - 前端
categories:
  - 前端
---
![](/imgs/project/theme/interview.png)

## 原理

1.浏览器渲染流程
①处理html标记并建立DOM树；
②处理css并建立CSSOM树；
③将DOM和CSSOM合并为一个渲染树；
④根据渲染树来布局，计算节点的几何信息；
⑤将各个节点绘制到屏幕上

2.浏览器从输入url到显示页面经历过的步骤
①DNS查询
②TCP连接
③http请求及响应
④服务器响应
⑤客户端渲染

## javascript

1.深拷贝
```javascript
let obj = {
  a: 1,
  b: [1, 2],
  c: {
    d: 4,
    e: 5
  }
};
function isArray (arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
}
function isObject (obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}
function clone (obj) {
  let newObj = {};
  for (let ele in obj) {
    if (obj.hasOwnProperty(ele)) {
      if (isObject(obj[ele])) {
        let innerObj = clone(obj[ele]);
        newObj[ele] = innerObj;
      } else if (isArray(obj[ele])) {
        // 此处数组内元素也需要做递归遍历，待更新
        newObj[ele] = [...obj[ele]]
      } else {
        newObj[ele] = obj[ele];
      }
    }
  };
  return newObj;
}
```

2. 对象的扩展运算符
3. 闭包：闭包是指有权访问另一个函数作用域中的变量的函数。
