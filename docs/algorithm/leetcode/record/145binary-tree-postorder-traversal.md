---
title: 145. 二叉树的后序遍历
---

[145. 二叉树的后序遍历 ](https://leetcode.cn/problems/binary-tree-postorder-traversal/)

## 解析

从根节点开始，按照 **左子节点->右子节点->根节点** 的顺序进行遍历。

```
输入: [1,null,2,3]
   1
    \
     2
    /
   3
输出: [3,2,1]
```

## 递归写法

```javascript
var postorderTraversal = function (root) {
  const result = [];
  const postorderTraverse = (root) => {
    if (root) {
      postorderTraverse(root.left);
      postorderTraverse(root.right);
      result.push(root.val);
    }
  };
  postorderTraverse(root);
  return result;
};
```

## 非递归解法

取根节点为目标节点开始遍历。每个节点要保证自己的子节点都被访问了，才可以访问自身。

1. 左子节点入栈 -> 直到左子节点为空
2. 栈顶节点的右节点为空或右节点已经被访问过 -> 节点出栈并访问该节点，将节点标记为已访问
3. 栈顶节点的右节点不为空且未被访问过，以右子节点为目标节点，再次执行 1、2、3 步骤

```javascript
var postorderTraversal = function (root) {
  const result = [];
  const stack = [];
  let last = null; // 标记上一个访问的节点
  let current = root;
  while (current || stack.length > 0) {
    // 遍历到左子树的叶子节点，将途经的节点均压入栈
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack[stack.length - 1];
    if (!current.right || current.right === last) {
      // 访问该节点
      current = stack.pop();
      result.push(current.val);
      last = current;
      current = null;
    } else {
      current = current.right;
    }
  }
  return result;
};
```
