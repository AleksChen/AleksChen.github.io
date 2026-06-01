# Retro Tech Blog Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the full Astro blog into a refined article-first Retro technical site for an AI Builder, growth engineer, and full-stack engineer.

**Architecture:** Keep the existing Astro/UnoCSS structure and improve the shared theme, layout, reusable post cards, and page templates in place. Use localized UI copy in `src/i18n/ui.ts` and page-specific Astro markup for About and index pages.

**Tech Stack:** Astro 5, MDX, UnoCSS, SCSS, TypeScript, existing i18n helpers, existing terminal mode scripts.

---

### Task 1: Shared Design System And Layout

**Files:**
- Modify: `src/styles/theme.css`
- Modify: `src/index.scss`
- Modify: `src/layouts/Layout.astro`
- Modify: `src/components/Footer.astro`
- Modify: `src/i18n/ui.ts`

- [ ] Tune CSS variables for lighter Retro borders, shadows, readable backgrounds, and dark-mode parity.
- [ ] Add reusable global classes for page shells, section headers, refined cards, tags, metadata rows, and prose rhythm.
- [ ] Polish the header, mobile menu, and footer without changing routing or controls.
- [ ] Extend localized UI copy for home positioning and About/skills/projects labels.
- [ ] Run `npm run typecheck` and fix template/type issues from shared changes.

### Task 2: Article-First Home Page And Post Cards

**Files:**
- Modify: `src/components/Home.astro`
- Modify: `src/components/PostCard.astro`

- [ ] Replace the oversized hero with a compact identity strip.
- [ ] Add clear About, Skills, and Projects/Practice entry links.
- [ ] Keep article list as the main content and preserve pagination/load-more.
- [ ] Redesign post cards for scanability with date, title, summary, tags, and cover handling.
- [ ] Preserve terminal mode switching and card reveal behavior.

### Task 3: Reading Experience

**Files:**
- Modify: `src/pages/post/[slug].astro`
- Modify: `src/pages/en/post/[slug].astro`
- Review: `src/components/mdx/MDXImage.astro`
- Review: `src/components/mdx/MDXCode.astro`
- Review: `src/components/mdx/MDXTable.astro`

- [ ] Refine article header, metadata, title sizing, tag styling, and article shell.
- [ ] Improve prose width, heading rhythm, link treatment, image/code/table spacing.
- [ ] Lighten sticky TOC and active-heading states.
- [ ] Refine previous/next navigation.
- [ ] Preserve Mermaid and TOC scroll scripts.

### Task 4: Archive, Tags, Tag Detail, And Pagination Pages

**Files:**
- Modify: `src/pages/archives.astro`
- Modify: `src/pages/en/archives.astro`
- Modify: `src/pages/tags.astro`
- Modify: `src/pages/en/tags.astro`
- Modify: `src/pages/tag/[tag].astro`
- Modify: `src/pages/en/tag/[tag].astro`
- Modify: `src/pages/[page].astro`
- Modify: `src/pages/en/[page].astro`

- [ ] Convert archives into a denser timeline/index layout.
- [ ] Redesign tag index with count hierarchy and responsive density.
- [ ] Align tag detail and paginated article pages with the new article-list system.
- [ ] Preserve SEO robots, localized paths, and article counts.

### Task 5: About Page And Personal Positioning

**Files:**
- Modify: `src/pages/about.astro`
- Modify: `src/pages/en/about.astro`
- Modify: `site.config.ts` if existing links need labels only.

- [ ] Rewrite About as positioning, what I build, skills/stack, projects/practice, and contact.
- [ ] Keep GitHub/Juejin/email links from existing config.
- [ ] Match Chinese and English structure with natural localized copy.
- [ ] Ensure About provides meaningful destinations for home entry links.

### Task 6: Verification And Visual QA

**Files:**
- No required source edits unless QA finds issues.

- [ ] Run `npm run lint`.
- [ ] Run `npm run typecheck`.
- [ ] Run `npm run check:i18n`.
- [ ] Run `npm run build`.
- [ ] Start the Astro dev server.
- [ ] Use the Browser plugin to inspect home, post, archives, tags, About, English home, English About, desktop and mobile.
- [ ] Verify light/dark modes and terminal mode.
- [ ] Fix visible overflow, clipped text, broken contrast, and layout regressions.
