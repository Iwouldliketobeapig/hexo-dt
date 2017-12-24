---
title: 丢掉的Javascript（1）
tag: 
  - javascript
  - javascript高级程序语言设计
categories:
  - 前端
---
![](/imgs/javascript/theme/readJavascript.png)

- 作者：我原是猪

- 邮箱：1173127007@qq.com **欢迎补充，指错，讨论**

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

- 特殊应用类型：Boolean、Number和String。实际上，每当读取一个基本类型值得时候，后台会就会创建一个相对应的基本包装类型的对象，让我们能够调用一些方法来操作这些数据。
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

Object构造函数也会想工作方法一样，根据传入值的类型返回相应的基本包装类型
### 5.6.1-Boolean类型
```javascript
let falseObject = new Boolean(false); // 创建一个引用类型的布尔值false
falseObject && true; // true
typeof falseObject; // Object
falseObject instanceof Boolean; // true
```

### 5.6.2-Number类型

- 在使用toFixed()传入0的情况下，IE8及之前的版本不能正确的摄入的范围在{[-0.94, -0.5], [0,5, 0.94]}之间的值。在这个范围内的值IE会返回0，而不是-1或是1

- toExponential(),方法返回指数表示法
```javascript
let num = 133;
num.toExponential(1); // 1.3e+2
num = 136;
num.toExponential(1); // 1.4e+2
```

-某个数值的最合适的格式，使用toPrecision()(根据要处理的数值决定到底是调用toFixed()还是toPrecision())
```javascript
let num = 99;
num.toPrecision(1); // 1e+2
num.toPrecision(2); // 99
num.toPrecision(3); // 99.0
```

### 5.6.3-String类型

- trim(),创建一个字符串的副本，删除前置及后缀的所有空格，然后返回空格
```javascript
let str = "  hello dutao,    very good  ";
let afterTrim = str.trim(); // "hello dutao,    very good"
```