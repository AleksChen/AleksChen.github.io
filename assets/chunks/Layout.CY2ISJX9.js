import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, b as renderTemplate, u as unescapeHTML, e as renderScript, g as defineScriptVars, r as renderComponent, f as renderSlot, h as renderHead } from './astro/server.Dx2-getx.js';
/* empty css                         */
import { l as localizePath, g as getLocaleFromPathname, L as LOCALE_META, D as DEFAULT_LOCALE, s as switchLocalePath } from './paths.B3LgDFX2.js';
import { c as config } from './site.config.DpAM8gaV.js';

const $$Astro$2 = createAstro("https://alekschen.github.io");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  const { locale = "zh" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer class="mt-8 flex flex-col items-center gap-4 py-8"> <div class="flex items-center gap-4"> <a${addAttribute(config.head.links.github, "href")} target="_blank" rel="noopener noreferrer" class="hover:text-primary transition-transform hover:scale-110 flex items-center gap-1 text-sm font-medium" title="GitHub"> <div class="i-ri:github-fill w-5 h-5"></div> <span class="opacity-80 hover:opacity-100">GitHub</span> </a> <div class="w-px h-4 bg-text opacity-20"></div> <a${addAttribute(config.head.links.juejin, "href")} target="_blank" rel="noopener noreferrer" class="hover:text-primary transition-transform hover:scale-110 flex items-center gap-1 text-sm font-medium" title="Juejin"> <div class="i-ri:blogger-line w-5 h-5"></div> <span class="opacity-80 hover:opacity-100">Blog</span> </a> <div class="w-px h-4 bg-text opacity-20"></div> <a${addAttribute(localizePath("/rss.xml", locale), "href")} target="_blank" rel="noopener noreferrer" class="hover:text-primary transition-transform hover:scale-110 flex items-center gap-1 text-sm font-medium" title="RSS"> <div class="i-ri:rss-line w-5 h-5"></div> <span class="opacity-80 hover:opacity-100">RSS</span> </a> </div> <small class="w-full max-w-[720px] min-h-12 flex justify-center items-center opacity-80"> <a${addAttribute(config.footer.copyrightUrl, "href")} target="_blank" rel="noopener noreferrer"> ${`\xA9 ${(/* @__PURE__ */ new Date()).getFullYear()} ${config.footer.copyright}`} </a> </small> </footer>`;
}, "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/components/Footer.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1, _b;
const $$Astro$1 = createAstro("https://alekschen.github.io");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SEO;
  const {
    title = config.head.title,
    description = config.head.description,
    image = "/post-assets/cover/cover-default.webp",
    type = "website",
    publishedTime,
    modifiedTime,
    author = config.head.title,
    tags = [],
    keywords = tags,
    robots = "index,follow",
    url,
    locale,
    alternateLocales = {}
  } = Astro2.props;
  const siteUrl = (Astro2.site || config.siteUrl).toString().replace(/\/$/, "");
  const resolvedLocale = locale || getLocaleFromPathname(Astro2.url.pathname);
  function toAbsoluteUrl(pathOrUrl) {
    if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
      return pathOrUrl;
    }
    return new URL(pathOrUrl, `${siteUrl}/`).toString();
  }
  const canonicalUrl = url ? toAbsoluteUrl(url) : toAbsoluteUrl(localizePath(Astro2.url.pathname, resolvedLocale));
  const ogImage = image.startsWith("http") ? image : new URL(image, `${siteUrl}/`).toString();
  const alternateItems = Object.entries(alternateLocales).filter((entry) => {
    const [key, value] = entry;
    return (key === "zh" || key === "en") && Boolean(value);
  }).map(([key, value]) => ({
    locale: key,
    hrefLang: LOCALE_META[key].htmlLang,
    href: toAbsoluteUrl(value)
  }));
  const xDefaultHref = alternateLocales[DEFAULT_LOCALE] ? toAbsoluteUrl(alternateLocales[DEFAULT_LOCALE]) : void 0;
  return renderTemplate`<!-- 基础 SEO --><meta name="description"${addAttribute(description, "content")}><meta name="author"${addAttribute(author, "content")}><meta name="robots"${addAttribute(robots, "content")}><meta name="googlebot"${addAttribute(robots, "content")}>${keywords.length > 0 && renderTemplate`<meta name="keywords"${addAttribute(keywords.join(", "), "content")}>`}<link rel="canonical"${addAttribute(canonicalUrl, "href")}>${alternateItems.map((item) => renderTemplate`<link rel="alternate"${addAttribute(item.hrefLang, "hreflang")}${addAttribute(item.href, "href")}>`)}${xDefaultHref && renderTemplate`<link rel="alternate" hreflang="x-default"${addAttribute(xDefaultHref, "href")}>`}<!-- Open Graph --><meta property="og:type"${addAttribute(type, "content")}><meta property="og:locale"${addAttribute(LOCALE_META[resolvedLocale].ogLocale, "content")}>${alternateItems.filter((item) => item.locale !== resolvedLocale).map((item) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(LOCALE_META[item.locale].ogLocale, "content")}>`)}<meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(ogImage, "content")}><meta property="og:url"${addAttribute(canonicalUrl, "content")}><meta property="og:site_name"${addAttribute(config.head.title, "content")}>${type === "article" && publishedTime && renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>`}${type === "article" && modifiedTime && renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>`}${type === "article" && tags.length > 0 && tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`)}${type === "article" && author && renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`}<!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(ogImage, "content")}><!-- JSON-LD 结构化数据 -->${type === "article" && renderTemplate(_a$1 || (_a$1 = __template$1(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    image: ogImage,
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    author: {
      "@type": "Person",
      name: author
    },
    publisher: {
      "@type": "Organization",
      name: config.head.title,
      logo: {
        "@type": "ImageObject",
        url: new URL("/favicon.ico", siteUrl).toString()
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl
    },
    inLanguage: LOCALE_META[resolvedLocale].htmlLang,
    keywords: keywords.join(", ")
  })))}${type === "website" && renderTemplate(_b || (_b = __template$1(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: config.head.title,
    description,
    url: canonicalUrl,
    inLanguage: LOCALE_META[resolvedLocale].htmlLang
  })))}`;
}, "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/components/SEO.astro", void 0);

const $$PageLoader = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="page-loader" aria-hidden="true" data-astro-cid-yztiywgj> <div class="loader-bar-fill" data-astro-cid-yztiywgj></div> </div>  ${renderScript($$result, "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/components/PageLoader.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/components/PageLoader.astro", void 0);

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
      exitTerminalMode: "退出终端模式"
    },
    nav: {
      archives: "归档",
      tags: "标签",
      about: "关于",
      mobileNavAria: "移动端导航",
      mainNavAria: "主导航"
    },
    home: {
      description: "聚焦前端工程、AI 编程、跨端开发与网络技术，持续输出可落地的实战笔记与源码解析。",
      intro: "I'm a AI Builder",
      loadMore: "加载更多",
      noIntro: "暂无简介"
    },
    terminal: {
      date: "日期",
      category: "分类",
      title: "标题",
      uncategorized: "未分类"
    },
    pageTitle: {
      archives: "归档",
      tags: "标签",
      about: "关于"
    },
    counts: {
      posts: "篇文章",
      tags: "个标签"
    },
    visibility: {
      away: "快回来吧 T_T",
      back: "你来啦!OvO"
    },
    seo: {
      siteDescription: "Aleks 的技术博客，专注前端工程、跨端开发与网络技术实践。"
    }
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
      exitTerminalMode: "Exit terminal mode"
    },
    nav: {
      archives: "Archives",
      tags: "Tags",
      about: "About",
      mobileNavAria: "Mobile navigation",
      mainNavAria: "Main navigation"
    },
    home: {
      description: "A technical blog about frontend engineering, AI coding workflows, cross-platform development, and networking practices.",
      intro: "I'm an AI Builder",
      loadMore: "Load more",
      noIntro: "No summary yet"
    },
    terminal: {
      date: "Date",
      category: "Category",
      title: "Title",
      uncategorized: "uncategorized"
    },
    pageTitle: {
      archives: "Archives",
      tags: "Tags",
      about: "About"
    },
    counts: {
      posts: "posts",
      tags: "tags"
    },
    visibility: {
      away: "Come back soon T_T",
      back: "Welcome back OvO"
    },
    seo: {
      siteDescription: "Aleks's technical blog focused on frontend engineering, cross-platform development, and networking."
    }
  }
};
function getUiText(locale) {
  return UI_TEXT[locale];
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://alekschen.github.io");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description,
    footer = true,
    className = "max-w-[1200px]",
    locale,
    languageSwitchPath,
    seo = {}
  } = Astro2.props;
  const resolvedLocale = locale || getLocaleFromPathname(Astro2.url.pathname);
  const ui = getUiText(resolvedLocale);
  const nextLocale = resolvedLocale === "zh" ? "en" : "zh";
  const resolvedLanguageSwitchPath = languageSwitchPath === void 0 ? switchLocalePath(Astro2.url.pathname, nextLocale) : languageSwitchPath;
  const homePath = localizePath("/", resolvedLocale);
  const archivesPath = localizePath("/archives", resolvedLocale);
  const tagsPath = localizePath("/tags", resolvedLocale);
  const aboutPath = localizePath("/about", resolvedLocale);
  const rssPath = localizePath("/rss.xml", resolvedLocale);
  const seoPayload = {
    ...seo,
    locale: seo.locale || resolvedLocale
  };
  return renderTemplate(_a || (_a = __template(["<html", '> <head><meta charset="UTF-8"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"><meta name="apple-mobile-web-app-title" content="Blog"><meta name="msapplication-TileColor" content="#000000"><meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"><meta name="baidu-site-verification" content="codeva-tU6pIQVfyl"><meta name="msvalidate.01" content="96ADAC3B4A010DE98F0350319BAF9DAB"><meta name="blogarama-site-verification" content="blogarama-05af7d29-9b70-41be-aca4-a6f95ceb722f"><link rel="icon" href="/favicon.ico"><link rel="sitemap" href="/sitemap.xml"><link rel="alternate" type="application/rss+xml" title="RSS Feed"', "><title>\n      ", "\n    </title>", "", '<script type="text/javascript">\n      (function (c, l, a, r, i, t, y) {\n        c[a] =\n          c[a] ||\n          function () {\n            (c[a].q = c[a].q || []).push(arguments);\n          };\n        t = l.createElement(r);\n        t.async = 1;\n        t.src = "https://www.clarity.ms/tag/" + i;\n        y = l.getElementsByTagName(r)[0];\n        y.parentNode.insertBefore(t, y);\n      })(window, document, "clarity", "script", "vb1cwv7d1k");\n    <\/script><script>\n      const theme = (() => {\n        if (\n          typeof localStorage !== "undefined" &&\n          localStorage.getItem("theme")\n        ) {\n          return localStorage.getItem("theme");\n        }\n        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {\n          return "dark";\n        }\n        return "light";\n      })();\n\n      if (theme === "dark") {\n        document.documentElement.classList.add("dark");\n      } else {\n        document.documentElement.classList.remove("dark");\n      }\n\n      window.localStorage.setItem("theme", theme);\n\n      const viewMode = (() => {\n        if (\n          typeof localStorage !== "undefined" &&\n          localStorage.getItem("view-mode")\n        ) {\n          return localStorage.getItem("view-mode");\n        }\n        return "card";\n      })();\n\n      if (viewMode === "terminal") {\n        document.documentElement.classList.add("terminal-mode");\n      }\n    <\/script>', '</head> <body class="bg-bg text-text min-h-screen flex flex-col font-sans transition-colors duration-300"> <a href="#main-content" class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-bg"> ', " </a> ", " ", ' <header id="main-header" class="sticky top-0 z-50 w-full bg-bg border-b-2 border-text transition-transform duration-300"> <div class="max-w-[800px] mx-auto px-4 h-16 flex items-center justify-between"> <a', ' class="text-xl font-bold flex items-center gap-2 hover:text-primary transition-colors"', '> <div class="i-ri:home-4-line w-6 h-6"></div> </a> <div class="flex items-center gap-4"> <nav id="main-nav" class="hidden md:flex items-center gap-6"', "> <a", ' class="text-sm font-medium hover:text-primary transition-colors"> ', " </a> <a", ' class="text-sm font-medium hover:text-primary transition-colors"> ', " </a> <a", ' class="text-sm font-medium hover:text-primary transition-colors"> ', ' </a> </nav> <div class="flex items-center gap-3 pl-4 border-l border-text"> ', ' <div class="flex items-center"> ', ' </div> <button id="theme-toggle" class="flex items-center justify-center hover:text-primary transition-transform hover:scale-110 focus:outline-none"', ' aria-pressed="false"> <div class="i-ri:sun-line w-5 h-5 dark:hidden" aria-hidden="true"></div> <div class="i-ri:moon-line w-5 h-5 hidden dark:block" aria-hidden="true"></div> </button> <button id="mobile-menu-toggle" class="md:hidden flex items-center justify-center hover:text-primary transition-transform hover:scale-110 focus:outline-none"', ' aria-expanded="false" aria-controls="mobile-nav"', "", '> <div id="menu-icon-open" class="i-ri:menu-line w-6 h-6" aria-hidden="true"></div> <div id="menu-icon-close" class="i-ri:close-line w-6 h-6 hidden" aria-hidden="true"></div> </button> </div> </div> </div> <div id="mobile-nav" class="hidden md:hidden border-t-2 border-text bg-bg"', '> <nav class="max-w-[800px] mx-auto px-4 py-4 flex flex-col gap-1"> <a', ' class="rounded px-3 py-2 text-sm font-medium hover:bg-bg-secondary hover:text-primary transition-colors">', "</a> <a", ' class="rounded px-3 py-2 text-sm font-medium hover:bg-bg-secondary hover:text-primary transition-colors">', "</a> <a", ' class="rounded px-3 py-2 text-sm font-medium hover:bg-bg-secondary hover:text-primary transition-colors">', "</a> ", ' </nav> </div> </header> <main id="main-content"', ' tabindex="-1"> ', " </main> ", " ", " ", " ", " <script>(function(){", `
      let originalTitle = document.title;
      let timeoutId;

      document.addEventListener("visibilitychange", () => {
        const icon = document.querySelector("link[rel*='icon']");

        if (document.hidden) {
          if (document.title !== awayTitle && document.title !== backTitle) {
            originalTitle = document.title;
          }

          document.title = awayTitle;
          if (icon) icon.href = "/failure.ico";

          if (timeoutId) clearTimeout(timeoutId);
        } else {
          document.title = backTitle;
          if (icon) icon.href = "/favicon.ico";

          timeoutId = window.setTimeout(() => {
            document.title = originalTitle;
          }, 1000);
        }
      });
    })();<\/script> </body> </html>`])), addAttribute(LOCALE_META[resolvedLocale].htmlLang, "lang"), addAttribute(rssPath, "href"), title, renderComponent($$result, "SEO", $$SEO, { "title": title, "description": description, ...seoPayload }), renderSlot($$result, $$slots["head"]), renderHead(), ui.actions.skipToContent, renderComponent($$result, "PageLoader", $$PageLoader, {}), renderSlot($$result, $$slots["background"]), addAttribute(homePath, "href"), addAttribute(ui.actions.backHomeAria, "aria-label"), addAttribute(ui.nav.mainNavAria, "aria-label"), addAttribute(archivesPath, "href"), ui.nav.archives, addAttribute(tagsPath, "href"), ui.nav.tags, addAttribute(aboutPath, "href"), ui.nav.about, resolvedLanguageSwitchPath && renderTemplate`<a${addAttribute(resolvedLanguageSwitchPath, "href")} class="flex items-center justify-center hover:text-primary transition-transform hover:scale-110 focus:outline-none"${addAttribute(ui.actions.switchLanguageAria, "aria-label")}${addAttribute(ui.actions.switchLanguageAria, "title")}> <div class="i-ri:translate-2 w-5 h-5" aria-hidden="true"></div> </a>`, renderSlot($$result, $$slots["operations"]), addAttribute(ui.actions.toggleTheme, "aria-label"), addAttribute(ui.actions.openMenu, "aria-label"), addAttribute(ui.actions.openMenu, "data-open-label"), addAttribute(ui.actions.closeMenu, "data-close-label"), addAttribute(ui.nav.mobileNavAria, "aria-label"), addAttribute(archivesPath, "href"), ui.nav.archives, addAttribute(tagsPath, "href"), ui.nav.tags, addAttribute(aboutPath, "href"), ui.nav.about, resolvedLanguageSwitchPath && renderTemplate`<a${addAttribute(resolvedLanguageSwitchPath, "href")} class="rounded px-3 py-2 text-sm font-medium hover:bg-bg-secondary hover:text-primary transition-colors"> ${ui.actions.switchLanguageAria} </a>`, addAttribute(`flex-1 w-full mx-auto px-4 py-8 animate-fade-in ${className}`, "class"), renderSlot($$result, $$slots["default"]), footer && renderTemplate`${renderComponent($$result, "Footer", $$Footer, { "locale": resolvedLocale })}`, renderScript($$result, "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"), renderScript($$result, "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/layouts/Layout.astro?astro&type=script&index=1&lang.ts"), renderScript($$result, "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/layouts/Layout.astro?astro&type=script&index=2&lang.ts"), defineScriptVars({
    awayTitle: ui.visibility.away,
    backTitle: ui.visibility.back
  }));
}, "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/layouts/Layout.astro", void 0);

export { $$Layout as $, getUiText as g };
