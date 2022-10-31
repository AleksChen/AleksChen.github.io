---
title: 33. 搜索旋转排序数组
---

[33. 搜索旋转排序数组](https://leetcode.cn/problems/search-in-rotated-sorted-array/)

## 题目

整数数组 nums 按升序排列，数组中的值互不相同 。

在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。

给你 旋转后的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。

你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。

``` 
示例 1：
输入：nums = [4,5,6,7,0,1,2], target = 0
输出：4
```


``` 
示例 2：
输入：nums = [4,5,6,7,0,1,2], target = 3
输出：-1
```


``` 
示例 3：
输入：nums = [1], target = 0
输出：-1
```



## 解析

二分查找思路。求出中点，mid = low + high / 2；

mid 元素要么在前面的大子序列，要么在后面的小子序列；判断 mid 处的值和 low 的大小，如果 mid 处的值大于 low，实际的中点一定在大子序列；否则，一定在小子序列；

如果在大子序列，那么 low 到 mid 是单调递增的；如果在小子序列，那么 mid 到 high 是单调递增的



## 实现

```js
var search = function (nums, target) {
    if (nums.length == 0) return -1

    function dfs(low, high) {
        if (nums[low] == target) return low
        if (nums[high] == target) return high
        if (low == high || low == high - 1) {
            return -1
        }

        let mid = Math.floor((low + high) / 2)
        if (nums[mid] == target) return mid

        if (nums[mid] > nums[low]) { 
            // [low, mid] 是有序的，[mid, high] 不单调
            if (target > nums[low] && target < nums[mid]) {
                return dfs(low, mid)
            } else {
                return dfs(mid, high)
            }
        } else { 
            // [mid, high] 是有序的，[low, mid] 不单调
            if (target > nums[mid] && target < nums[high]) {
                return dfs(mid, high)
            } else {
                return dfs(low, mid)
            }
        }
    }

    return dfs(0, nums.length - 1)
};

```


