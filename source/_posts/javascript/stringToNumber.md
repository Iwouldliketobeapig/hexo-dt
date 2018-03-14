---
title: 字符串转为数字
date: 2018-3-13
tag: 
  - javascript
categories:
  - 前端
---

![](/imgs/javascript/theme/number.png)

# 字符串转为数字

**前言**：*面试有点小尴尬（1）*

## parseInt() 和 Number.parseInt()

`规则`：
1.忽略字符串前面的空格，直至找到第一个非空字符
2.如果第一个非空字符不是数字或者是正负号则返回NaN
3.如果第一个是数字字符一直解析到一个非数字字符
4.如果第一个是数字字符，能识别出各种整数格式
5.接受第二个参数，即转换时使用的基数
6.小数向下取整

```javascript
Number.parseInt('   123') // 123
Number.parseInt(' ab123') // NaN
Number.parseInt('') // NaN
Number.parseInt(' 31avs') // 31
Number.parseInt('0xf') // 15
Number.parseInt("070") // es3->56 es5->70
Number.parseInt('A', 16) // 10
Number.parseInt('A') // NaN
Number.parseInt('58.2') // 58
```

## parseFloat() 和 Number.parseFloat()

`规则`
1.忽略字符串前面的空格，直至找到第一个非空字符
2.如果第一个非空字符不是数字或者是正负号则返回NaN
3.如果第一个是数字字符一直解析到一个非数字字符
4.字符串中第一个小数点是有效的第二个小数点是无效的
5.只解析10进制，不接受第二个参数

```javascript
Number.parseFloat('  123') // 123
Number.parseFloat('  ab123') // NaN
Number.parseFloat('') // NaN
Number.parseFloat('  123.3.4eqw') // 123.3
Number.parseFloat('0xf') // 0
```

## Number()

`规则`
1.如果是Boolean值，true和false分别返回1或0
2.如果是数字，只是单纯的传入和返回
3.如果是null，则返回0
4.如果是undefined返回NaN
5.如果是字符串
  ①如果字符串味空则返回零（忽略前导零）
  ②如果字符串为整数则返回整数（忽略前导零）
  ③如果字符串为浮点数则返回浮点数
  ④如果字符串为16进制，转为10进制返回
  ⑤除以上格式返回NaN
6.如果是对象，则调用对象的valueOf,按照前面的规则返回值，如果返回NaN,再调用toString(),按照前面的规则返回值
```javascript
Number(true) // 1
Number(false) // 0
Number(null) // 0
Number(undefined) // 0
Number('') // 0
Number('123') // 123
Number('123.12') // 123.12
Number('0xf') // 16
```
