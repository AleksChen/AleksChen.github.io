# 阅读模块使用说明

## 添加新书籍

阅读模块复用 `posts` 内容集合，请在 `src/content/posts/` 下新增一篇 `mdx` 文件，并确保包含 `reading` 标签。

### Frontmatter 示例

```mdx
---
title: 深入理解计算机系统
date: 2026-03-08T10:00:00.000Z
tags:
  - reading
draft: false
author: Randal E. Bryant
status: completed
rating: 5
startDate: 2026-01-01T00:00:00.000Z
finishDate: 2026-03-01T00:00:00.000Z
pages: 1120
cover: /post-assets/your-cover.webp
intro: 经典的计算机系统教材
---

这里写读书笔记正文。
```

### 字段说明

- `tags`: 必须包含 `reading`，否则不会出现在阅读页面
- `draft`: `true` 时不会发布
- `status`: `reading | completed | wishlist`
- `author` / `rating` / `startDate` / `finishDate` / `pages` / `cover` / `intro`: 阅读卡片展示字段

## 访问页面

- 阅读聚合页：`/reading`
- 单本详情页：`/post/<slug>`
