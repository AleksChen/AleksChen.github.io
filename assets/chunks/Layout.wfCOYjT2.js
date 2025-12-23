import { c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, b as createAstro, u as unescapeHTML, f as renderScript, r as renderComponent, e as renderSlot, g as renderHead } from './astro/server.BPJSHmb2.js';
import 'piccolore';
/* empty css                        */
import 'clsx';
import { c as config } from './site.config.CK5Zqa3Y.js';

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="mt-8 flex flex-col items-center gap-4 py-8"> <div class="flex items-center gap-4"> <a${addAttribute(config.head.links.github, "href")} target="_blank" class="hover:text-primary transition-transform hover:scale-110 flex items-center gap-1 text-sm font-medium" title="GitHub"> <div class="i-ri:github-fill w-5 h-5"></div> <span class="opacity-80 hover:opacity-100">GitHub</span> </a> <div class="w-px h-4 bg-text opacity-20"></div> <a${addAttribute(config.head.links.juejin, "href")} target="_blank" class="hover:text-primary transition-transform hover:scale-110 flex items-center gap-1 text-sm font-medium" title="Juejin"> <div class="i-ri:blogger-line w-5 h-5"></div> <span class="opacity-80 hover:opacity-100">Blog</span> </a> <div class="w-px h-4 bg-text opacity-20"></div> <a href="/rss.xml" target="_blank" class="hover:text-primary transition-transform hover:scale-110 flex items-center gap-1 text-sm font-medium" title="RSS"> <div class="i-ri:rss-line w-5 h-5"></div> <span class="opacity-80 hover:opacity-100">RSS</span> </a> </div> <small class="w-full max-w-[720px] min-h-12 flex justify-center items-center opacity-80"> <a${addAttribute(config.footer.copyrightUrl, "href")} target="_blank">${`\xA9 ${(/* @__PURE__ */ new Date()).getFullYear()} ${config.footer.copyright}`}</a> </small> </footer>`;
}, "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/components/Footer.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1, _b;
const $$Astro$1 = createAstro("https://blog.002085.xyz");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SEO;
  const {
    title = config.head.title,
    description = config.head.description,
    image = `${Astro2.site}/favicon.ico`,
    type = "website",
    publishedTime,
    modifiedTime,
    author = config.head.title,
    tags = [],
    url
  } = Astro2.props;
  const siteUrl = Astro2.site || config.siteUrl;
  const canonicalUrl = url || new URL(Astro2.url.pathname, siteUrl).toString();
  const ogImage = image.startsWith("http") ? image : new URL(image, siteUrl).toString();
  return renderTemplate`<!-- 基础 SEO --><meta name="description"${addAttribute(description, "content")}><meta name="author"${addAttribute(author, "content")}>${tags.length > 0 && renderTemplate`<meta name="keywords"${addAttribute(tags.join(", "), "content")}>`}<link rel="canonical"${addAttribute(canonicalUrl, "href")}><!-- Open Graph --><meta property="og:type"${addAttribute(type, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(ogImage, "content")}><meta property="og:url"${addAttribute(canonicalUrl, "content")}><meta property="og:site_name"${addAttribute(config.head.title, "content")}>${type === "article" && publishedTime && renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>`}${type === "article" && modifiedTime && renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>`}${type === "article" && tags.length > 0 && tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`)}${type === "article" && author && renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`}<!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(ogImage, "content")}><!-- JSON-LD 结构化数据 -->${type === "article" && renderTemplate(_a$1 || (_a$1 = __template$1(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify({
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
    keywords: tags.join(", ")
  })))}${type === "website" && renderTemplate(_b || (_b = __template$1(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: config.head.title,
    description: config.head.description,
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  })))}`;
}, "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/components/SEO.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://blog.002085.xyz");
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
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><link rel="apple-touch-icon-precomposed" sizes="144x144" href="/favicon.png"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"><meta name="apple-mobile-web-app-title" content="Blog"><meta name="msapplication-TileColor" content="#000000"><meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"><link rel="icon" href="/favicon.ico"><link rel="sitemap" href="/sitemap-index.xml"><link rel="alternate" type="application/rss+xml" title="RSS Feed" href="/rss.xml"><title>\n      ', "\n    </title>", '<!-- <script async src="https://www.googletagmanager.com/gtag/js?id=G-G1EC4WNBZJ"\n    ><\/script>\n    <script>\n      window.dataLayer = window.dataLayer || [];\n      function gtag() {\n        dataLayer.push(arguments);\n      }\n      gtag("js", new Date());\n\n      gtag("config", "G-G1EC4WNBZJ");\n    <\/script> --><!-- Privacy-friendly analytics by Plausible --><script async src="https://plausible.io/js/pa-bqrNOvlYoay2S1opDAt9D.js"><\/script>', '<script>\n      // \u6697\u8272\u6A21\u5F0F\u521D\u59CB\u5316\n      const theme = (() => {\n        if (\n          typeof localStorage !== "undefined" &&\n          localStorage.getItem("theme")\n        ) {\n          return localStorage.getItem("theme");\n        }\n        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {\n          return "dark";\n        }\n        return "light";\n      })();\n\n      if (theme === "dark") {\n        document.documentElement.classList.add("dark");\n      } else {\n        document.documentElement.classList.remove("dark");\n      }\n\n      window.localStorage.setItem("theme", theme);\n    <\/script>', '</head> <body class="bg-bg text-text min-h-screen flex flex-col font-sans transition-colors duration-300"> ', ' <header id="main-header" class="sticky top-0 z-50 w-full bg-bg border-b-2 border-text transition-transform duration-300"> <div class="max-w-[800px] mx-auto px-4 h-16 flex items-center justify-between"> <a href="/" class="text-xl font-bold flex items-center gap-2 hover:text-primary transition-colors" aria-label="homepage"> <div class="i-ri:home-4-line w-6 h-6"></div> </a> <div class="flex items-center gap-4"> <nav class="hidden md:flex items-center gap-6"> <a href="/archives" class="text-sm font-medium hover:text-primary transition-colors">\n\u5F52\u6863\n</a> <a href="/tags" class="text-sm font-medium hover:text-primary transition-colors">\n\u6807\u7B7E\n</a> <a href="/about" class="text-sm font-medium hover:text-primary transition-colors">\n\u5173\u4E8E\n</a> </nav> ', ' <div class="flex items-center gap-3 pl-4 border-l border-text"> <a', ' target="_blank" class="hover:text-primary transition-transform hover:scale-110" title="GitHub"> <div class="i-ri:github-fill w-6 h-6"></div> </a> <button id="theme-toggle" class="hover:text-primary transition-transform hover:scale-110 focus:outline-none" title="Toggle Theme"> <div class="i-ri:sun-line w-6 h-6 dark:hidden"></div> <div class="i-ri:moon-line w-6 h-6 hidden dark:block"></div> </button> </div> </div> </div> </header> <main', "> ", " </main> ", " ", " ", " </body> </html>"])), [config.head.title, title].filter(Boolean).reverse().join(" | "), renderComponent($$result, "SEO", $$SEO, { "title": title, "description": description, ...seo }), renderScript($$result, "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"), renderHead(), renderSlot($$result, $$slots["background"]), renderSlot($$result, $$slots["operations"]), addAttribute(config.head.links.github, "href"), addAttribute(`flex-1 w-full mx-auto px-4 py-8 animate-fade-in ${className}`, "class"), renderSlot($$result, $$slots["default"]), footer && renderTemplate`${renderComponent($$result, "Footer", $$Footer, {})}`, renderScript($$result, "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/layouts/Layout.astro?astro&type=script&index=1&lang.ts"), renderScript($$result, "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/layouts/Layout.astro?astro&type=script&index=2&lang.ts"));
}, "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
