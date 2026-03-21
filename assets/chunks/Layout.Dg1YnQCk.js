import { c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, b as createAstro, u as unescapeHTML, f as renderScript, r as renderComponent, e as renderSlot, g as renderHead } from './astro/server.CAacAaxv.js';
/* empty css                         */
import { c as config } from './site.config.DpAM8gaV.js';

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="mt-8 flex flex-col items-center gap-4 py-8"> <div class="flex items-center gap-4"> <a${addAttribute(config.head.links.github, "href")} target="_blank" rel="noopener noreferrer" class="hover:text-primary transition-transform hover:scale-110 flex items-center gap-1 text-sm font-medium" title="GitHub"> <div class="i-ri:github-fill w-5 h-5"></div> <span class="opacity-80 hover:opacity-100">GitHub</span> </a> <div class="w-px h-4 bg-text opacity-20"></div> <a${addAttribute(config.head.links.juejin, "href")} target="_blank" rel="noopener noreferrer" class="hover:text-primary transition-transform hover:scale-110 flex items-center gap-1 text-sm font-medium" title="Juejin"> <div class="i-ri:blogger-line w-5 h-5"></div> <span class="opacity-80 hover:opacity-100">Blog</span> </a> <div class="w-px h-4 bg-text opacity-20"></div> <a href="/rss.xml" target="_blank" rel="noopener noreferrer" class="hover:text-primary transition-transform hover:scale-110 flex items-center gap-1 text-sm font-medium" title="RSS"> <div class="i-ri:rss-line w-5 h-5"></div> <span class="opacity-80 hover:opacity-100">RSS</span> </a> </div> <small class="w-full max-w-[720px] min-h-12 flex justify-center items-center opacity-80"> <a${addAttribute(config.footer.copyrightUrl, "href")} target="_blank" rel="noopener noreferrer"> ${`\xA9 ${(/* @__PURE__ */ new Date()).getFullYear()} ${config.footer.copyright}`} </a> </small> </footer>`;
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
    url
  } = Astro2.props;
  const siteUrl = (Astro2.site || config.siteUrl).toString().replace(/\/$/, "");
  const canonicalUrl = url || new URL(Astro2.url.pathname, `${siteUrl}/`).toString();
  const ogImage = image.startsWith("http") ? image : new URL(image, `${siteUrl}/`).toString();
  return renderTemplate`<!-- 基础 SEO --><meta name="description"${addAttribute(description, "content")}><meta name="author"${addAttribute(author, "content")}><meta name="robots"${addAttribute(robots, "content")}><meta name="googlebot"${addAttribute(robots, "content")}>${keywords.length > 0 && renderTemplate`<meta name="keywords"${addAttribute(keywords.join(", "), "content")}>`}<link rel="canonical"${addAttribute(canonicalUrl, "href")}><!-- Open Graph --><meta property="og:type"${addAttribute(type, "content")}><meta property="og:locale" content="zh_CN"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(ogImage, "content")}><meta property="og:url"${addAttribute(canonicalUrl, "content")}><meta property="og:site_name"${addAttribute(config.head.title, "content")}>${type === "article" && publishedTime && renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>`}${type === "article" && modifiedTime && renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>`}${type === "article" && tags.length > 0 && tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`)}${type === "article" && author && renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`}<!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(ogImage, "content")}><!-- JSON-LD 结构化数据 -->${type === "article" && renderTemplate(_a$1 || (_a$1 = __template$1(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify({
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
    keywords: keywords.join(", ")
  })))}${type === "website" && renderTemplate(_b || (_b = __template$1(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: config.head.title,
    description: config.head.description,
    url: siteUrl,
    inLanguage: "zh-CN"
  })))}`;
}, "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/components/SEO.astro", void 0);

const $$PageLoader = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="page-loader" aria-hidden="true" data-astro-cid-yztiywgj> <div class="loader-bar-fill" data-astro-cid-yztiywgj></div> </div>  ${renderScript($$result, "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/components/PageLoader.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/components/PageLoader.astro", void 0);

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
    seo = {}
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="zh-CN"> <head><meta charset="UTF-8"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"><meta name="apple-mobile-web-app-title" content="Blog"><meta name="msapplication-TileColor" content="#000000"><meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"><meta name="baidu-site-verification" content="codeva-tU6pIQVfyl"><meta name="msvalidate.01" content="96ADAC3B4A010DE98F0350319BAF9DAB"><meta name="blogarama-site-verification" content="blogarama-05af7d29-9b70-41be-aca4-a6f95ceb722f"><link rel="icon" href="/favicon.ico"><link rel="sitemap" href="/sitemap.xml"><link rel="alternate" type="application/rss+xml" title="RSS Feed" href="/rss.xml"><title>\n      ', "\n    </title>", "", '<!-- Microsoft Clarity --><script type="text/javascript">\n      (function (c, l, a, r, i, t, y) {\n        c[a] =\n          c[a] ||\n          function () {\n            (c[a].q = c[a].q || []).push(arguments);\n          };\n        t = l.createElement(r);\n        t.async = 1;\n        t.src = "https://www.clarity.ms/tag/" + i;\n        y = l.getElementsByTagName(r)[0];\n        y.parentNode.insertBefore(t, y);\n      })(window, document, "clarity", "script", "vb1cwv7d1k");\n    <\/script><script>\n      // \u6697\u8272\u6A21\u5F0F\u521D\u59CB\u5316\n      const theme = (() => {\n        if (\n          typeof localStorage !== "undefined" &&\n          localStorage.getItem("theme")\n        ) {\n          return localStorage.getItem("theme");\n        }\n        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {\n          return "dark";\n        }\n        return "light";\n      })();\n\n      if (theme === "dark") {\n        document.documentElement.classList.add("dark");\n      } else {\n        document.documentElement.classList.remove("dark");\n      }\n\n      window.localStorage.setItem("theme", theme);\n\n      // \u7EC8\u7AEF\u6A21\u5F0F\u521D\u59CB\u5316\n      const viewMode = (() => {\n        if (\n          typeof localStorage !== "undefined" &&\n          localStorage.getItem("view-mode")\n        ) {\n          return localStorage.getItem("view-mode");\n        }\n        return "card";\n      })();\n\n      if (viewMode === "terminal") {\n        document.documentElement.classList.add("terminal-mode");\n      }\n    <\/script>', '</head> <body class="bg-bg text-text min-h-screen flex flex-col font-sans transition-colors duration-300"> <a href="#main-content" class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-bg">\n\u8DF3\u5230\u4E3B\u5185\u5BB9\n</a> ', " ", ' <header id="main-header" class="sticky top-0 z-50 w-full bg-bg border-b-2 border-text transition-transform duration-300"> <div class="max-w-[800px] mx-auto px-4 h-16 flex items-center justify-between"> <a href="/" class="text-xl font-bold flex items-center gap-2 hover:text-primary transition-colors" aria-label="\u8FD4\u56DE\u9996\u9875"> <div class="i-ri:home-4-line w-6 h-6"></div> </a> <div class="flex items-center gap-4"> <nav id="main-nav" class="hidden md:flex items-center gap-6" aria-label="\u4E3B\u5BFC\u822A"> <a href="/archives" class="text-sm font-medium hover:text-primary transition-colors">\n\u5F52\u6863\n</a> <a href="/tags" class="text-sm font-medium hover:text-primary transition-colors">\n\u6807\u7B7E\n</a> <a href="/about" class="text-sm font-medium hover:text-primary transition-colors">\n\u5173\u4E8E\n</a> </nav> <div class="flex items-center"> ', ' </div> <div class="flex items-center gap-3 pl-4 border-l border-text"> <a', ' target="_blank" rel="noopener noreferrer" class="hover:text-primary transition-transform hover:scale-110" aria-label="GitHub \u4E3B\u9875"> <div class="i-ri:github-fill w-6 h-6" aria-hidden="true"></div> </a> <button id="theme-toggle" class="hover:text-primary transition-transform hover:scale-110 focus:outline-none" aria-label="\u5207\u6362\u4E3B\u9898" aria-pressed="false"> <div class="i-ri:sun-line w-6 h-6 dark:hidden" aria-hidden="true"></div> <div class="i-ri:moon-line w-6 h-6 hidden dark:block" aria-hidden="true"></div> </button> <button id="mobile-menu-toggle" class="md:hidden hover:text-primary transition-transform hover:scale-110 focus:outline-none" aria-label="\u6253\u5F00\u5BFC\u822A\u83DC\u5355" aria-expanded="false" aria-controls="mobile-nav"> <div id="menu-icon-open" class="i-ri:menu-line w-6 h-6" aria-hidden="true"></div> <div id="menu-icon-close" class="i-ri:close-line w-6 h-6 hidden" aria-hidden="true"></div> </button> </div> </div> </div> <!-- \u79FB\u52A8\u7AEF\u4E0B\u62C9\u83DC\u5355 --> <div id="mobile-nav" class="hidden md:hidden border-t-2 border-text bg-bg" aria-label="\u79FB\u52A8\u7AEF\u5BFC\u822A"> <nav class="max-w-[800px] mx-auto px-4 py-4 flex flex-col gap-1"> <a href="/archives" class="rounded px-3 py-2 text-sm font-medium hover:bg-bg-secondary hover:text-primary transition-colors">\u5F52\u6863</a> <a href="/tags" class="rounded px-3 py-2 text-sm font-medium hover:bg-bg-secondary hover:text-primary transition-colors">\u6807\u7B7E</a> <a href="/about" class="rounded px-3 py-2 text-sm font-medium hover:bg-bg-secondary hover:text-primary transition-colors">\u5173\u4E8E</a> </nav> </div> </header> <main id="main-content"', ' tabindex="-1"> ', " </main> ", " ", " ", " ", " ", " </body> </html>"])), title, renderComponent($$result, "SEO", $$SEO, { "title": title, "description": description, ...seo }), renderSlot($$result, $$slots["head"]), renderHead(), renderComponent($$result, "PageLoader", $$PageLoader, {}), renderSlot($$result, $$slots["background"]), renderSlot($$result, $$slots["operations"]), addAttribute(config.head.links.github, "href"), addAttribute(`flex-1 w-full mx-auto px-4 py-8 animate-fade-in ${className}`, "class"), renderSlot($$result, $$slots["default"]), footer && renderTemplate`${renderComponent($$result, "Footer", $$Footer, {})}`, renderScript($$result, "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"), renderScript($$result, "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/layouts/Layout.astro?astro&type=script&index=1&lang.ts"), renderScript($$result, "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/layouts/Layout.astro?astro&type=script&index=2&lang.ts"), renderScript($$result, "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/layouts/Layout.astro?astro&type=script&index=3&lang.ts"));
}, "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
