# 阅读模块使用说明

## 添加新书籍

在 `src/content/books/` 目录下创建新的 JSON 文件，文件名任意（建议使用英文）。

### 字段说明

```json
{
  "title": "书名",
  "author": "作者",
  "cover": "封面图片URL（可选）",
  "status": "reading | completed | wishlist",
  "rating": 5,
  "startDate": "2024-01-01",
  "finishDate": "2024-03-15",
  "notes": "读书笔记或简介",
  "isbn": "ISBN号（可选）",
  "pages": 500
}
```

### 字段详解

- **title**: 必填，书籍标题
- **author**: 必填，作者名
- **cover**: 可选，封面图片URL（如果不提供会显示默认图标）
- **status**: 必填，阅读状态
  - `reading`: 在读
  - `completed`: 已读
  - `wishlist`: 想读
- **rating**: 可选，评分（0-5星）
- **startDate**: 可选，开始阅读日期
- **finishDate**: 可选，完成阅读日期
- **notes**: 可选，读书笔记或简介
- **isbn**: 可选，ISBN号
- **pages**: 可选，页数

### 示例

```json
{
  "title": "深入理解计算机系统",
  "author": "Randal E. Bryant",
  "cover": "https://example.com/cover.jpg",
  "status": "completed",
  "rating": 5,
  "startDate": "2024-01-01",
  "finishDate": "2024-03-15",
  "notes": "经典的计算机系统教材",
  "pages": 1120
}
```

## 功能特性

- ✅ 按状态分类（在读/已读/想读）
- ✅ 点击统计卡片筛选书籍
- ✅ 评分显示（星级）
- ✅ 响应式布局
- ✅ 悬停动画效果
- ✅ Neo-brutalism 设计风格

## 访问页面

构建后访问 `/reading` 路径查看阅读模块。
