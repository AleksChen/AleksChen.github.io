import type { Locale } from "@/i18n/config";

const UI_TEXT = {
  zh: {
    actions: {
      skipToContent: "跳到主内容",
      backHomeAria: "返回首页",
      toggleTheme: "切换主题",
      openMenu: "打开导航菜单",
      closeMenu: "关闭导航菜单",
      switchLanguageAria: "切换到英文页面",
      switchLanguageShort: "EN",
      toggleTerminalMode: "切换终端模式",
      exitTerminalMode: "退出终端模式",
    },
    nav: {
      archives: "归档",
      tags: "标签",
      about: "关于",
      mobileNavAria: "移动端导航",
      mainNavAria: "主导航",
    },
    home: {
      description:
        "聚焦前端工程、AI 编程、跨端开发与网络技术，持续输出可落地的实战笔记与源码解析。",
      intro: "I'm a AI Builder",
      loadMore: "加载更多",
      noIntro: "暂无简介",
    },
    terminal: {
      date: "日期",
      category: "分类",
      title: "标题",
      uncategorized: "未分类",
    },
    pageTitle: {
      archives: "归档",
      tags: "标签",
      about: "关于",
    },
    counts: {
      posts: "篇文章",
      tags: "个标签",
    },
    visibility: {
      away: "快回来吧 T_T",
      back: "你来啦!OvO",
    },
    seo: {
      siteDescription: "Aleks 的技术博客，专注前端工程、跨端开发与网络技术实践。",
    },
  },
  en: {
    actions: {
      skipToContent: "Skip to main content",
      backHomeAria: "Back to home",
      toggleTheme: "Toggle theme",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
      switchLanguageAria: "Switch to Chinese page",
      switchLanguageShort: "中",
      toggleTerminalMode: "Toggle terminal mode",
      exitTerminalMode: "Exit terminal mode",
    },
    nav: {
      archives: "Archives",
      tags: "Tags",
      about: "About",
      mobileNavAria: "Mobile navigation",
      mainNavAria: "Main navigation",
    },
    home: {
      description:
        "A technical blog about frontend engineering, AI coding workflows, cross-platform development, and networking practices.",
      intro: "I'm an AI Builder",
      loadMore: "Load more",
      noIntro: "No summary yet",
    },
    terminal: {
      date: "Date",
      category: "Category",
      title: "Title",
      uncategorized: "uncategorized",
    },
    pageTitle: {
      archives: "Archives",
      tags: "Tags",
      about: "About",
    },
    counts: {
      posts: "posts",
      tags: "tags",
    },
    visibility: {
      away: "Come back soon T_T",
      back: "Welcome back OvO",
    },
    seo: {
      siteDescription:
        "Aleks's technical blog focused on frontend engineering, cross-platform development, and networking.",
    },
  },
} as const;

export function getUiText(locale: Locale) {
  return UI_TEXT[locale];
}
