---
title: 二叉树的基本操作
---

## 满二叉树与完全二叉树

满二叉树：高度为 h，由 2<sup>h</sup> - 1 个节点构成的二叉树成为满二叉树，即每层节点都是满的。

![](.\basic-operation.assets\2021070209105210.png)

完全二叉树：完全二叉树是由满二叉树而引出来的，若设二叉树的深度为 h，除第 h 层外，其它各层 (1～h-1) 的节点数都达到最大个数(即 1~h-1层为一个满二叉树)，第 h 层所有的节点都连续集中在最左边，这就是完全二叉树。堆一般都是用完全二叉树来实现的。

![img](.\basic-operation.assets\2021070209105211.png)



完全二叉树的公式：

1. 第 n 层的节点数最多为 2<sup>n</sup> 个节点
2. n 层二叉树最多有 2<sup>0</sup>+...+2<sup>n</sup>=2<sup>n+1</sup>)-1 个节点
3. 第一个非叶子节点：length / 2
4. 一个节点的孩子节点：2n、2n+1



## 二叉搜索树基本结构

```javascript
function Node(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
}

Node.prototype = {
    show: function () {
        console.log(this.val);
    }
}

function Tree() {
    this.root = null;
}

Tree.prototype = {
    insert: function (val) {
        var node = new Node(val, null, null);
        if (!this.root) {
            this.root = node;
            return;
        }
        var current = this.root;
        var parent = null;
        while (current) {
            parent = current;
            if (val < parent.val) {
                current = current.left;
                if (!current) {
                    parent.left = node;
                    return;
                }
            } else {
                current = current.right;
                if (!current) {
                    parent.right = node;
                    return;
                }
            }

        }
    },
    preOrder: function (node) {
        if (node) {
            node.show();
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    },
    inOrder: function (node) {
        if (node) {
            this.middleOrder(node.left);
            node.show();
            this.middleOrder(node.right);
        }
    },
    postOrder: function (node) {
        if (node) {
            this.laterOrder(node.left);
            this.laterOrder(node.right);
            node.show();
        }
    },
    getMinValue: function () {
        var current = this.root;
        while (current) {
            if (!current.left) {
                return current;
            }
            current = current.left;
        }
    },
    getMaxValue: function () {
        var current = this.root;
        while (current) {
            if (!current.right) {
                return current;
            }
            current = current.right;
        }
    },
    getDeep: function (node, deep) {
        deep = deep || 0;
        if (node == null) {
            return deep;
        }
        deep++;
        var dleft = this.getDeep(node.left, deep);
        var dright = this.getDeep(node.right, deep);
        return Math.max(dleft, dright);
    }
}
```





