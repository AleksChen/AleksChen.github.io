# Retro Tech Blog Redesign Design

Date: 2026-06-01

## Goal

Redesign the full AleksChen blog into an article-first personal technical site. The site should keep its current Retro technical-blog character while becoming more refined, more readable, and more clearly tied to the author's identity as an AI Builder, growth engineer, and full-stack engineer.

The redesign covers the home page, post page, archives, tags, About page, shared layout, navigation, footer, theme tokens, and reusable article/list components. The terminal mode remains part of the experience.

## Positioning

The site should communicate:

- AleksChen is an AI Builder, growth engineer, and full-stack engineer.
- The primary value of the site is practical writing: frontend engineering, AI coding workflows, cross-platform engineering, growth-oriented product engineering, and implementation notes.
- The home page is a reading entry first, with clear secondary paths to About, skills, and projects/practice.

Chinese and English pages should express the same positioning with natural localized copy.

## Visual System

Keep:

- Retro hard-edged interface language.
- Technical and terminal-inspired details.
- Yellow and blue as recognizable accent colors.
- Light and dark theme support.
- The existing terminal/card view switch on the home page.

Refine:

- Use lighter 2px borders for most surfaces, reserving heavier borders for page-level emphasis.
- Reduce large hard shadows so they act as interactive feedback rather than constant decoration.
- Remove or tone down noisy hover effects that distract from reading, such as rainbow animated borders.
- Improve type hierarchy, line-height, spacing, and responsive text behavior.
- Keep card radii modest and consistent.

The visual result should feel like a polished Retro engineering notebook, not a generic portfolio landing page.

## Home Page

The home page remains article-first.

Top section:

- Compact personal signature area with `AleksChen`.
- Short positioning line around AI Builder, growth engineering, and full-stack engineering.
- Three identity labels: AI Builder, Growth Engineer, Full-stack Engineering.
- Three clear entry links: About, Skills, Projects/Practice.

Article area:

- Begin immediately after the compact signature section.
- Prioritize latest and pinned articles.
- Improve scanability with title, summary, date, tags, and optional cover image.
- Desktop layout can use a stronger leading article plus supporting article list/grid.
- Mobile layout uses a single comfortable column.
- Preserve pagination/load-more behavior.

Terminal mode:

- Continue to provide an alternate terminal-style article index.
- Ensure the redesign does not break terminal mode visibility or layout.

## Post Page

The post page should optimize long-form reading.

Header:

- Reduce oversized title scale.
- Keep tags, publish date, and update date as metadata.
- Make metadata visually secondary to the title.

Content:

- Use a comfortable measure for body text.
- Improve heading spacing, line-height, image spacing, table handling, code block rhythm, and link treatment.
- Keep MDX image, code, and table components working.

Table of contents:

- Keep the sticky desktop TOC when enabled.
- Make it lighter and less button-like.
- Use clear active-state indication without heavy shadows.
- Preserve scroll highlighting behavior.

Post navigation:

- Keep previous/next links.
- Make them compact, readable, and consistent with the refined Retro component system.

## Archives And Tags

Archives:

- Shift toward a timeline/index style for faster scanning.
- Preserve year grouping and article counts.
- Keep title, date, summary, tags, and optional cover affordance where useful.

Tags:

- Preserve a tag index page.
- Improve layout density and hierarchy.
- Make article counts easy to scan.
- Avoid oversized repeated cards that waste space on mobile.

Tag detail pages should follow the same article-list pattern as the home/archive surfaces.

## About Page

Rewrite the About page as a real personal entry point.

Sections:

- Intro: concise personal positioning.
- What I build: AI-assisted products, growth experiments, full-stack systems, frontend/cross-platform work.
- Skills/stack: practical grouped capabilities rather than a long generic list.
- Projects/practice: a lightweight entry area for notable work or writing categories, even if initially represented by curated links.
- Contact: email, GitHub, Juejin if configured.

The page should support both Chinese and English versions with equivalent structure.

## Shared Layout

Navigation:

- Keep Home, Archives, Tags, About, language switch, theme toggle, terminal operation slot, and mobile menu.
- Improve header polish and mobile spacing.
- Avoid turning the site into a marketing navigation bar.

Footer:

- Keep it simple and consistent with the refined Retro style.

Theme:

- Update CSS variables and shared utility classes instead of scattering one-off styles.
- Maintain light/dark parity.
- Ensure contrast remains readable in both themes.

## Interaction And Motion

- Keep purposeful transitions for hover, theme changes, card reveal, and terminal mode.
- Respect `prefers-reduced-motion`.
- Avoid motion that distracts from article scanning or reading.

## Accessibility And Responsiveness

- Maintain semantic landmarks and skip link.
- Ensure mobile navigation remains usable.
- Prevent text overlap and horizontal overflow.
- Make touch targets comfortable on mobile.
- Keep focus states visible.

## Implementation Boundaries

- Use the existing Astro, UnoCSS, SCSS, and component patterns.
- Do not introduce a new frontend framework or design system dependency.
- Keep changes scoped to layout, styling, copy, and existing page/component structure.
- Do not alter post content files except if a page needs localized UI copy.
- Do not remove existing SEO/i18n behavior.
- Do not remove terminal mode.

## Verification

Run:

- `npm run lint`
- `npm run typecheck`
- `npm run check:i18n`
- `npm run build`

Visual verification:

- Start the Astro dev server.
- Inspect home, post, archives, tags, About, English home, and English About.
- Check desktop and mobile widths.
- Check light and dark modes.
- Check terminal mode still works.

## Acceptance Criteria

- The full site has a unified refined Retro technical-blog visual system.
- The home page clearly foregrounds articles while communicating AI Builder, growth engineer, and full-stack engineer positioning.
- About has meaningful personal/skills/projects/contact structure.
- Post pages are more comfortable to read than the current implementation.
- Archives and tags are easier to scan.
- Existing bilingual routing, SEO alternates, terminal mode, theme toggle, and pagination continue to work.
- No visible mobile overflow, clipped text, or broken dark-mode surfaces.
