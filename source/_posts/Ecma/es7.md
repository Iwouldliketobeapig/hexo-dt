---
title: ES2016
date: 2018-01-15
tag: 
  - javascript
categories:
  - 前端
---
![](/imgs/javascript/theme/ecma.png)

# ES2016新属性

## 一、Array.prototype.includes(ele, index)
确定数组中是否存在某个元素，存在返回true,不存在返回false。
ele -> 元素(可选)
index -> 元素的位置(可选)

#### introduction

* (1)解决判断数组中是否存在某个元素更加语义化

`old`
```javascript
if(arr.indeOf(ele) !== -1) {
  // some code
}

// or
 
if(~arr.indexOf) {
  // some code
}
```
`now`

```javascript
arr.includes(ele) // true or false
```

* (2)如果数组中存在NaN,indexOf无法找到，必须写hack

```javascript
const arr = [NaN];
arr.indexOf(NaN); // -1
arr.includes(NaN); // true
```

## 二、`**`运算符
幂运算符
```javascript
a ** b 
```

#### introduction

* 简单易读

`old`
```javascript
// Math.pow(a, b)
Math.pow(2, 3) // 8
```

`now`
```javascript
2**3 // 8
```

[在github上编辑此页](https://github.com/Iwouldliketobeapig/hexo-dt/edit/master/source/_posts/Ecma/es7.md)