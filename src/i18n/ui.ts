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
      home: "首页",
      archives: "归档",
      tags: "标签",
      about: "关于",
      mobileNavAria: "移动端导航",
      mainNavAria: "主导航",
    },
    home: {
      description:
        "AleksChen 的技术笔记，记录 AI Builder、增长工程与全栈工程实践。",
      intro: "AI Builder / 增长工程师 / 全栈工程",
      lead:
        "把 AI 工作流、增长实验和工程系统落到真实产品里。这里优先沉淀可复用的实现笔记、源码解析和工程判断。",
      latest: "最新文章",
      latestDescription: "实战记录、技术拆解和阶段性复盘。",
      loadMore: "加载更多",
      noIntro: "暂无简介",
      ctaAbout: "关于我",
      ctaSkills: "技能栈",
      ctaProjects: "项目实践",
      identity: ["AI Builder", "增长工程师", "全栈工程"],
    },
    about: {
      title: "关于 AleksChen",
      description:
        "我关注如何把 AI 能力、增长目标和工程实现合在一起，做出能持续迭代的产品系统。",
      introTitle: "我在做什么",
      intro:
        "我是 AleksChen，定位是 AI Builder / 增长工程师 / 全栈工程。我的工作方式是从真实业务问题出发，用前端、全栈和 AI 工具链快速验证，再把有效方案沉淀成可维护的系统。",
      buildTitle: "构建方向",
      buildItems: [
        "AI 辅助产品与自动化工作流",
        "增长实验、数据反馈和转化路径优化",
        "前端工程、跨端体验和全栈交付",
        "工程效率工具、源码阅读和技术写作",
      ],
      skillsTitle: "技能栈",
      skills: [
        "Frontend: Astro, React, TypeScript, CSS/UnoCSS",
        "Full-stack: Node.js, API design, content systems, deployment",
        "AI Builder: coding agents, prompt workflows, product prototyping",
        "Growth: experiment design, landing flows, analytics thinking",
      ],
      projectsTitle: "项目实践",
      projects:
        "这个站点会持续整理我在 AI 编程、前端工程、增长实验和跨端开发里的实践。优先看文章列表、归档和标签页能更快找到具体案例。",
      contactTitle: "联系",
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
      home: "Home",
      archives: "Archives",
      tags: "Tags",
      about: "About",
      mobileNavAria: "Mobile navigation",
      mainNavAria: "Main navigation",
    },
    home: {
      description:
        "AleksChen's technical notes on AI building, growth engineering, and full-stack product work.",
      intro: "AI Builder / Growth Engineer / Full-stack Engineering",
      lead:
        "I turn AI workflows, growth experiments, and engineering systems into practical products. This site prioritizes reusable implementation notes, source-code reading, and engineering judgment.",
      latest: "Latest writing",
      latestDescription: "Implementation notes, technical breakdowns, and field reports.",
      loadMore: "Load more",
      noIntro: "No summary yet",
      ctaAbout: "About",
      ctaSkills: "Skills",
      ctaProjects: "Projects",
      identity: ["AI Builder", "Growth Engineer", "Full-stack Engineering"],
    },
    about: {
      title: "About AleksChen",
      description:
        "I focus on combining AI capability, growth goals, and engineering execution into product systems that can keep improving.",
      introTitle: "What I Do",
      intro:
        "I'm AleksChen, an AI Builder, growth engineer, and full-stack engineer. I start from real product problems, use frontend, full-stack, and AI workflows to validate quickly, then turn what works into maintainable systems.",
      buildTitle: "What I Build",
      buildItems: [
        "AI-assisted products and automation workflows",
        "Growth experiments, feedback loops, and conversion paths",
        "Frontend engineering, cross-platform experience, and full-stack delivery",
        "Engineering tools, source-code reading, and technical writing",
      ],
      skillsTitle: "Stack",
      skills: [
        "Frontend: Astro, React, TypeScript, CSS/UnoCSS",
        "Full-stack: Node.js, API design, content systems, deployment",
        "AI Builder: coding agents, prompt workflows, product prototyping",
        "Growth: experiment design, landing flows, analytics thinking",
      ],
      projectsTitle: "Projects & Practice",
      projects:
        "This site keeps collecting my practice in AI coding, frontend engineering, growth experiments, and cross-platform development. The article list, archives, and tags are the fastest way to find concrete examples.",
      contactTitle: "Contact",
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
