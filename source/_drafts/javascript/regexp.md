---
title: RegExp
tag: 
  - javascript
  - javascript高级程序语言设计
categories:
  - 前端
---
![](/imgs/javascript/theme/regexp.png)

# RegExp类型

- 创建一个正则表达式
```javascript
const expression = / pattern / flags;
const expression1 = new RegExp('pattern', 'flags');
```
- `pattern`: 字符串、限定符、分组、向前查找以及反向引用
- `flags`:
  - *g* : 全局模式
  - *i* : 表示不区分大小写模式
  - *m* : 表示多行模式
  - *u* : Unicode;将模式视为Unicode序列点的序列
  - *y* : 粘性匹配；仅匹配目标字符串中此正则表达式的lastIndex属性指示的索引

- 模式中的所有元字符都必须转义，包括: `( [ { \ ^ $ | } ? * + . ] )`