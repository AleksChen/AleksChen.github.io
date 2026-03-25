# 中英双语与 SEO 技术方案（Astro）

更新时间：2026-03-25

## 1. 目标与约束

目标：

- 支持页面级中英切换
- 中英页面均可被搜索引擎独立抓取与收录
- 维护成本可控，发文流程标准化

约束：

- 中文保留现有根路径（`/`），避免已有收录大幅波动
- 英文使用前缀路径（`/en`）
- 语言切换通过 URL 跳转，不走纯前端文案替换

---

## 2. 路由与 URL 设计

采用 `zh(root) + en(/en)` 策略：

- 中文：首页 ` / `，文章 ` /post/:slug `，归档 ` /archives `，标签 ` /tags `，关于 ` /about `
- 英文：首页 ` /en `，文章 ` /en/post/:slug `，归档 ` /en/archives `，标签 ` /en/tags `，关于 ` /en/about `

对应 Astro i18n 配置：

- `defaultLocale = zh`
- `locales = [zh, en]`
- `prefixDefaultLocale = false`

文件：`astro.config.mjs`

---

## 3. SEO 方案

### 3.1 页面级 SEO 输出规则

每个语言页面独立输出：

- `canonical` 指向当前语言自身 URL
- `rel="alternate" hreflang=...` 指向可用语言版本
- `hreflang="x-default"` 指向默认语言（中文）
- `og:locale / og:locale:alternate`
- JSON-LD `inLanguage`

实现文件：`src/components/SEO.astro`

### 3.2 sitemap 规则

`/sitemap.xml` 输出：

- 首页中英地址
- About 中英地址
- 全部文章地址（按语言独立 URL）
- 对可配对翻译文章输出 `<xhtml:link rel="alternate">`

实现文件：`src/pages/sitemap.xml.ts`

### 3.3 RSS 规则

- 中文：`/rss.xml`
- 英文：`/en/rss.xml`

实现文件：

- `src/pages/rss.xml.ts`
- `src/pages/en/rss.xml.ts`

---

## 4. 内容模型与关联关系

文章 frontmatter 关键字段：

- `locale`: `zh | en`
- `translationKey`: 跨语言关联键（必填）
- `slug`: 当前语言 URL slug

说明：

- 同一 `translationKey` 下可有 1 篇中文、1 篇英文
- 中英文 `slug` 可以不同，且建议英文使用 `-en` 后缀
- `slug` 在内容集合内应保持全局唯一，避免中英文同 slug 导致构建/路由冲突
- 语言切换与 `hreflang` 按 `translationKey` 自动关联

实现文件：

- `src/content/config.ts`
- `src/lib/posts.ts`

---

## 5. 页面语言切换机制

语言切换按钮放在全站 Layout（桌面 + 移动端）：

- 普通页面：直接在当前路径基础上切换 locale
- 文章页：优先跳转到同 `translationKey` 的目标语言文章
- 如果目标语言文章不存在：跳转到目标语言首页或对应列表页（兜底）

实现文件：

- `src/layouts/Layout.astro`
- `src/pages/post/[slug].astro`
- `src/pages/en/post/[slug].astro`

---

## 6. 发文流程（标准）

### 6.1 一键创建双语草稿

```bash
pnpm run create-post -- --key 2603-your-topic \
  --title-zh "中文标题" \
  --title-en "English title" \
  --slug-zh 2603-your-topic \
  --slug-en 2603-your-topic-en
```

生成：

- `src/content/posts/2603-your-topic.zh.mdx`
- `src/content/posts/2603-your-topic.en.mdx`

默认 `draft: true`，避免未完成内容误发布。

实现文件：`scripts/create-post.ts`

### 6.2 填写内容与 SEO 字段

至少保证：

- `title`
- `slug`
- `locale`
- `translationKey`
- `seoDescription`
- `seoKeywords`

### 6.3 运行校验

```bash
pnpm run check:i18n
```

校验内容：

- `locale` 合法性
- `translationKey` 必填
- `locale+slug` 不冲突
- `translationKey+locale` 不重复
- 未配对语言版本仅告警（不阻断）

实现文件：`scripts/check-i18n-posts.ts`

### 6.4 历史中文文章批量迁移英文初始稿

当已有大量中文历史文章，需要一次性初始化英文稿时：

```bash
pnpm run migrate:en-seeds
```

行为：

- 扫描 `locale: zh` 文章
- 为每篇中文稿生成 `translationKey.en.mdx`
- 英文稿默认 `draft: true`
- 若英文稿已存在则默认跳过（可使用 `--force` 覆盖）

示例：

```bash
pnpm run migrate:en-seeds -- --dry-run
pnpm run migrate:en-seeds -- --force
```

实现文件：`scripts/migrate-en-seeds.ts`

---

## 7. 维护成本评估

### 技术成本

低：

- 新增文章时只需遵守统一 frontmatter
- 路由、SEO、切换逻辑已在基础设施层完成

### 内容成本

中等偏高（取决于英文质量要求）：

- 人工双语原创：通常增加 30%~80% 时间
- 机翻 + 人工润色：通常增加 10%~25% 时间

---

## 8. 常见陷阱与规避

- 不要用“前端切换文案”替代“路由级双语页面”
- 不要把英文 canonical 指向中文
- 不要给不存在的翻译页面输出 `hreflang`
- 发布前至少跑 `check:i18n` 与构建检查

---

## 9. 关键文件清单

- `astro.config.mjs`
- `src/i18n/config.ts`
- `src/i18n/paths.ts`
- `src/i18n/ui.ts`
- `src/layouts/Layout.astro`
- `src/components/SEO.astro`
- `src/lib/posts.ts`
- `src/content/config.ts`
- `src/pages/sitemap.xml.ts`
- `src/pages/rss.xml.ts`
- `src/pages/en/rss.xml.ts`
- `scripts/create-post.ts`
- `scripts/check-i18n-posts.ts`
