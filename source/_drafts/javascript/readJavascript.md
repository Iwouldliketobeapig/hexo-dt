---
title: 再读JavaScript高级程序设计（1）
tag: 
  - javascript
  - javascript高级程序语言设计
categories:
  - 前端
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

- caller:保存着调用当前函数的函数的应用，如果在全局作用域中调用当前函数。它的值为null;严格模式下，不能为函数的caller属性赋值，否者会报错。
```javascript
function outer(){
  inner();
}

function inner(){
  console.log(inner.caller);
}

outer();
// function outer(){
//   inner();
// }
```

## 5.6-基本包装类型

- 特殊应用类型：Boolean、Number和String。实际上，每当读取一个基本类型值得时候，后台会就会创建一个相对应的基本包装类型的对象，让我们能够调用一些方法来操作这些谁。
```javascript
var s1 = "some test";
var s2 = s1.substring(2);

/* 后台自动完成下列处理
 * (1)创建String类型的一个实例
 * (2)在实例在指定调用方法
 * (3)销毁这个实例
*/
var s1 = new String("some test");
var s2 = s1.substring(2);
s1 = null;
```

*（使用new操作符创建的应用类型的实例，在执行流离开当前作用域前都一直保存在内存中。而自动创建的基本包装类型的对象，则只存在与一行代码的执行瞬间，然后立即被销魂）*