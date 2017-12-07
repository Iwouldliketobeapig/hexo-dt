---
title: 再读JavaScript高级程序设计（1）
tag: javascript
categories:
  - javascript
---
![](/imgs/javascript/theme/readJavascript.png)

> 作者：我原是猪

> 邮箱：1173127007@qq.com **欢迎补充，指错，讨论**

### 5.5.4-函数内部对象

- 在函数的内部，有两个特殊的对象：**arguments**和this,虽然arguments的主要用途是保存参数，**但这个对象还有一个名叫callee的属性，该属性是一个指针，指向拥有这个arguments对象的函数**;（接触函数体内的代码与函数名的耦合状态）

```javascript
function factorial (num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * arguments.callee(num - 1);
  }
}
factorial(5); // 120
```