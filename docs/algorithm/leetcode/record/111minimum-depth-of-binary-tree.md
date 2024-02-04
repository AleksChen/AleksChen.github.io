---
title: 111. 二叉树的最小深度
---

[111. 二叉树的最小深度](https://leetcode.cn/problems/minimum-depth-of-binary-tree/)

给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

**说明：**叶子节点是指没有子节点的节点。

## 解析

示例 1：

![](111minimum-depth-of-binary-tree.assets/ex_depth.jpg)

```
输入：root = [3,9,20,null,null,15,7]
输出：2
```

示例 2：

```
输入：root = [2,null,3,null,4,null,5,null,6]
输出：5
```

## 递归写法 DFS

对每个节点都是一致的操作。如果节点存在就先访问该节点，然后前序遍历访问左子节点，再前序遍历右子节点。

方式一：

```javascript
var minDepth = function (root) {
  const getDepth = (root, deep = 0) => {
    if (root === null) {
      return deep;
    }
    deep++;
    // 只关注存在的子节点
    if (root.left && root.right) {
      const leftDepth = getDepth(root.left, deep);
      const rightDepth = getDepth(root.right, deep);
      return Math.min(leftDepth, rightDepth);
    }
    if (root.left) return getDepth(root.left, deep);
    return getDepth(root.right, deep);
  };
  return getDepth(root);
};
```

方式二：

```javascript
var minDepth = function (root) {
  if (root === null) {
    return 0;
  }
  if (!root.left && !root.right) {
    return 1;
  }
  let result = Number.MAX_SAFE_INTEGER;
  if (root.left) result = Math.min(minDepth(root.left), result);
  if (root.right) result = Math.min(minDepth(root.right), result);
  return result + 1;
};
```

**复杂度分析**

时间复杂度：`O(N)`，其中 N 是树的节点数。对每个节点访问一次。

空间复杂度：`O(H)`，其中 H 是树的高度。空间复杂度主要取决于递归时栈空间的开销，最坏情况下，树呈现链状，空间复杂度为 `O(N)`。平均情况下树的高度与节点数的对数正相关，空间复杂度为` O(log N)`。

## 非递归解法 BFS

队列解法。每个节点额外使用一个字段去记录当前节点的深度。

```javascript
var minDepth = function (root) {
  if (root === null) {
    return 0;
  }
  const queue = [[root, 1]];
  let result = 0;
  while (queue.length) {
    let [current, deep] = queue.shift(); // deep 表示当前节点的深度
    result = deep; // 同步当前的最大深度
    if (!current.left && !current.right) break; // 如果没有子节点了，说明已经到叶子节点，可以当前遍历，去拿新的队列元素
    current.left && queue.push([current.left, deep + 1]);
    current.right && queue.push([current.right, deep + 1]);
  }
  return result;
};
```

**复杂度分析**

时间复杂度：`O(N)`，其中 N 是树的节点数。对每个节点访问一次。

空间复杂度：`O(N)`，其中 N 是树的节点数。空间复杂度主要取决于队列的开销，队列中的元素个数不会超过树的节点数。
