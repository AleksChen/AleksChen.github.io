---
title: 20. 有效的括号
---

[20. 有效的括号](https://leetcode.cn/problems/valid-parentheses/)

## 题目

给定一个只包括 '('，')'，'{'，'}'，'['，']'  的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
每个右括号都有一个对应的相同类型的左括号。

示例 1：

```
输入：s = "()"
输出：true
```

示例 2：

```
输入：s = "()[]{}"
输出：true
```

示例 3：

```
输入：s = "(]"
输出：false
```

## 解析

建立左右括号的映射关系。遍历字符串，遇到左括号就入栈保存，遇到右括号就进行匹配验证，匹配成功就消费该括号（出栈）。

当匹配错误或者最终 stack 不为空，则认为括号不匹配。

## 实现

```js
var isValid = function (s) {
  const len = s.length;
  if (len % 2 === 1) return false;
  const PAIRS = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);
  let stack = [];
  for (item of s) {
    if (PAIRS.has(item)) {
      if (!stack.length || stack[stack.length - 1] !== PAIRS.get(item)) {
        return false;
      }
      stack.pop();
    } else {
      stack.push(item);
    }
  }
  return !stack.length;
};
```
