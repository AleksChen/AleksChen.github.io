---
title: 110. 平衡二叉树
---

[110. 平衡二叉树](https://leetcode.cn/problems/balanced-binary-tree/)

给定一个二叉树，判断它是否是高度平衡的二叉树。

本题中，一棵高度平衡二叉树定义为：

一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。

## 解析

深度优先 + 分治。

- 后序遍历二叉树；
- 对左右子树进行判断。如果左右子树有一个是不平衡的或者左右子树的深度差大于 1 ，那么返回 -1 表示当前子树是不平衡的；
- 如果左右子树平衡，返回当前节点的深度（左右子树深度最大值 + 1）；
- 如果最后结果不等于 -1 说明是一棵平衡二叉树。

```javascript
var isBalanced = function (root) {
  const getDeepth = (root) => {
    if (!root) {
      return 0;
    }
    const leftDeepth = getDeepth(root.left);
    const rightDeepth = getDeepth(root.right);
    if (
      leftDeepth === -1 ||
      rightDeepth === -1 ||
      Math.abs(leftDeepth - rightDeepth) > 1
    ) {
      return -1;
    }
    return Math.max(leftDeepth, rightDeepth) + 1;
  };
  return getDeepth(root) !== -1;
};
```
