---
title: 144. 二叉树的前序遍历
---

[144. 二叉树的前序遍历](https://leetcode.cn/problems/binary-tree-preorder-traversal/)

## 解析

从根节点开始，按照 **根节点->左子节点->右子节点** 的顺序进行遍历。

```
输入: [1,null,2,3]
   1
    \
     2
    /
   3
输出: [1,2,3]
```

## 递归写法

对每个节点都是一致的操作。如果节点存在就先访问该节点，然后前序遍历访问左子节点，再前序遍历右子节点。

```javascript
var preorderTraversal = function (root) {
  const result = [];
  const preorderTraverse = (root) => {
    if (root) {
      result.push(root.val);
      preorderTraverse(root.left);
      preorderTraverse(root.right);
    }
  };
  preorderTraverse(root);
  return result;
};
```

## 非递归解法

取根节点为目标节点开始遍历。不理解可以画图来看执行顺序。

1. 访问目标节点
2. 左子节点入栈 -> 直到左子节点为空
3. 节点出栈，以右子节点为目标节点，再次执行 1、2、3 步骤

```javascript
var preorderTraversal = function (root) {
  const result = [];
  const stack = [];
  let current = root;
  while (current || stack.length > 0) {
    // 访问到左子树的叶子节点
    while (current) {
      // 先访问根节点的值
      result.push(current.val);
      stack.push(current);
      current = current.left;
    }
    current = stack.pop(); // 根节点弹出
    current = current.right;
  }
  return result;
};
```
