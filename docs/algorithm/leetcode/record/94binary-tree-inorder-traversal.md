---
title: 94. 二叉树的中序遍历
---

[94. 二叉树的中序遍历](https://leetcode.cn/problems/binary-tree-inorder-traversal/)

## 解析

从根节点开始，按照 **左子节点->根节点->右子节点** 的顺序进行遍历。

```
输入: [1,null,2,3]
   1
    \
     2
    /
   3
输出: [1,3,2]
```

## 递归写法

```javascript
var inorderTraversal = function (root) {
  const result = [];
  const inorderTraverse = (root) => {
    if (root) {
      inorderTraverse(root.left);
      result.push(root.val);
      inorderTraverse(root.right);
    }
  };
  inorderTraverse(root);
  return result;
};
```

## 非递归解法

取根节点为目标节点开始遍历。

1. 左子节点入栈 -> 直到左子节点为空
2. 节点出栈 -> 访问该节点
3. 以右子节点为目标节点，再次执行 1、2、3 步骤

```javascript
var inorderTraversal = function (root) {
  const result = [];
  const stack = [];
  let current = root;
  while (current || stack.length > 0) {
    // 访问到左子树的叶子节点
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    result.push(current.val);
    current = current.right;
  }
  return result;
};
```
