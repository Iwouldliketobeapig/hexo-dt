---
title: memoization
date: 2018-3-5
tag: 
  - javascript
categories:
  - 前端
---

![](/imgs/javascript/theme/memoization.jpg)

# 简单的聊一聊缓存（memoization）

`这是个递归列子`

```javascript
function recursive(n) {
  if (n < 2) {
    return n;
  }
  return recursive(n - 1) + recursive(n - 2);
}
```

`加上缓存`

```javascript
let recursive = (function() {
  let cache = [];
  return function(n) {
    if (n < 2) {
      return n;
    } else {
      cache[n - 1] = cache[n - 1] || recursive(n - 1);
      cache[n - 2] = cache[n - 2] || recursive(n - 1);
      return cache[n - 1] + cache[n - 2];
    }
  };
})();
```
