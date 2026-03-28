import { a as createComponent, m as maybeRenderHead, e as renderScript, b as renderTemplate, c as createAstro, d as addAttribute, r as renderComponent } from './astro/server.Dx2-getx.js';
import { l as localizePath } from './paths.B3LgDFX2.js';
import { g as getUiText, $ as $$Layout } from './Layout.Dels1_wz.js';
/* empty css                         */

const $$Mountain = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="mountain-layer" class="fixed bottom-0 left-0 w-full pointer-events-none -z-5 translate-y-full will-change-transform opacity-90 transition-transform duration-75 ease-linear"> <svg viewBox="0 0 1440 320" class="w-full h-auto min-h-[30vh] md:min-h-[50vh]"> <!-- Rear mountain (lighter/further) --> <path fill="currentColor" class="text-gray-200/50 dark:text-gray-300/50" d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,213.3C672,203,768,117,864,101.3C960,85,1056,139,1152,149.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path> <!-- Front mountain (darker/closer) --> <path fill="currentColor" class="text-gray-200/50 dark:text-gray-300/50" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path> </svg> </div> ${renderScript($$result, "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/components/Mountain.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/components/Mountain.astro", void 0);

const $$Astro$4 = createAstro("https://alekschen.github.io");
const $$TerminalToggle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TerminalToggle;
  const { locale } = Astro2.props;
  const ui = getUiText(locale);
  return renderTemplate`${maybeRenderHead()}<button id="terminal-toggle" class="hover:text-primary transition-transform hover:scale-110 focus:outline-none flex items-center"${addAttribute(ui.actions.toggleTerminalMode, "aria-label")}${addAttribute(ui.actions.toggleTerminalMode, "title")}> <div class="i-ri:terminal-box-line w-6 h-6"></div> </button> ${renderScript($$result, "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/components/TerminalToggle.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/components/TerminalToggle.astro", void 0);

const $$Astro$3 = createAstro("https://alekschen.github.io");
const $$TerminalView = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$TerminalView;
  const { posts, locale } = Astro2.props;
  const ui = getUiText(locale);
  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    const pad = (n) => n.toString().padStart(2, "0");
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
  };
  return renderTemplate`${maybeRenderHead()}<div class="terminal-container w-full min-h-screen bg-[#121212] text-[#d4d4d4] font-mono text-sm sm:text-base relative"> <!-- 退出按钮 --> <button id="terminal-close-btn" class="absolute top-4 right-4 sm:top-6 sm:right-8 text-[#858585] hover:text-white transition-colors font-bold cursor-pointer z-10"${addAttribute(ui.actions.exitTerminalMode, "aria-label")}${addAttribute(ui.actions.exitTerminalMode, "title")}>
[ exit ]
</button> <!-- 终端内容区 --> <div class="terminal-body p-4 sm:p-8 pt-16 sm:pt-20 overflow-x-auto w-full max-w-[1200px] mx-auto"> <div class="mb-4"> <span class="text-[#27c93f] font-bold">guest@alekschen</span><span class="text-white">:</span><span class="text-[#3b8eea] font-bold">~/posts</span><span class="text-white">$</span> ls -l
</div> <div class="terminal-list flex flex-col min-w-max"> <div class="terminal-row text-[#858585] mb-1 px-2 flex"> <span class="inline-block w-[160px] shrink-0">${ui.terminal.date}</span> <span class="inline-block w-[120px] shrink-0">${ui.terminal.category}</span> <span>${ui.terminal.title}</span> </div> ${posts.map((post) => renderTemplate`<a${addAttribute(localizePath(`/post/${post.slug}`, locale), "href")} class="terminal-row group flex items-center px-2 py-0.5 hover:bg-[#d4d4d4] hover:text-[#121212] transition-colors rounded-sm cursor-pointer"> <span class="inline-block w-[160px] shrink-0 text-[#b5cea8] group-hover:text-[#121212]">${formatDate(post.createTime)}</span> <span class="inline-block w-[120px] shrink-0 text-[#c586c0] group-hover:text-[#121212] truncate pr-2">${post.tags?.[0] || ui.terminal.uncategorized}</span> <span class="flex-1 text-[#9cdcfe] group-hover:text-[#121212] truncate font-medium">${post.title}</span> </a>`)} </div> <div class="mt-4 flex items-center animate-pulse"> <span class="text-[#27c93f] font-bold">guest@alekschen</span><span class="text-white">:</span><span class="text-[#3b8eea] font-bold">~/posts</span><span class="text-white">$</span> <span class="inline-block w-2 h-4 bg-[#d4d4d4] ml-2"></span> </div> </div> </div> ${renderScript($$result, "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/components/TerminalView.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/components/TerminalView.astro", void 0);

const $$Astro$2 = createAstro("https://alekschen.github.io");
const $$TypeWriter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TypeWriter;
  const {
    text,
    speed = 150,
    deleteSpeed = 100,
    wait = 1500,
    loop = true,
    cursor = true,
    cursorChar = "|",
    className = ""
  } = Astro2.props;
  const texts = Array.isArray(text) ? text : [text];
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(["typewriter-component", className], "class:list")}${addAttribute(JSON.stringify(texts), "data-texts")}${addAttribute(speed, "data-speed")}${addAttribute(deleteSpeed, "data-delete-speed")}${addAttribute(wait, "data-wait")}${addAttribute(loop, "data-loop")}${addAttribute(texts[0], "aria-label")}> <span class="sr-only">${texts[0]}</span> <span class="typewriter-text" aria-hidden="true"></span>${cursor && renderTemplate`<span class="typewriter-cursor animate-pulse ml-1" aria-hidden="true"> ${cursorChar} </span>`} </span> ${renderScript($$result, "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/components/TypeWriter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/components/TypeWriter.astro", void 0);

const $$Astro$1 = createAstro("https://alekschen.github.io");
const $$PostCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostCard;
  const { item, index, formattedDate, locale, noIntroText } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="home-post-card group relative overflow-hidden rounded-lg p-[2px] shadow-[0_8px_24px_rgba(24,24,27,0.08)] transition-all duration-300 hover:shadow-[0_12px_26px_rgba(24,24,27,0.12)] md:hover:p-[6px]"${addAttribute(`transition-delay: ${Math.min(index, 8) * 70}ms`, "style")}> <!-- 默认边框 --> <div class="absolute inset-0 z-0 rounded-lg border-2 border-border transition-opacity duration-300 group-hover:opacity-0"></div> <div class="absolute left-[-150%] top-[-150%] z-0 hidden aspect-square w-[400%] origin-center animate-spin bg-[conic-gradient(from_0deg,#ff0080,#ff8c00,#40e0d0,#8a2be2,#ff0080)] invisible opacity-0 transition-all duration-300 [animation-duration:3s] md:block md:group-hover:visible md:group-hover:opacity-100"></div> <!-- 内容区 --> <div class="relative z-10 h-full w-full overflow-hidden rounded-[6px] bg-card"> <a${addAttribute(localizePath(`/post/${item.slug}`, locale), "href")} class="block"> <div class="relative w-full overflow-hidden border-b border-border bg-bg-secondary aspect-[16/7.8]"> ${item.cover ? renderTemplate`<img class="h-full w-full object-fill transition-transform duration-700 group-hover:scale-105"${addAttribute(item.cover.src, "src")}${addAttribute(item.cover.alt || item.title, "alt")}${addAttribute(800, "width")}${addAttribute(390, "height")}${addAttribute(index <= 1 ? "eager" : "lazy", "loading")}${addAttribute(index <= 1 ? "high" : "auto", "fetchpriority")} decoding="async">` : renderTemplate`<div class="h-full w-full" style="background: linear-gradient(135deg, var(--color-bg-secondary) 0%, var(--color-primary-light) 100%)"></div>`} <div class="pointer-events-none absolute left-2 top-2 z-10 inline-flex items-center gap-1 rounded-full border border-white/35 bg-black/45 px-2 py-0.5 text-[11px] text-white backdrop-blur-[1px]"> <div class="i-ri:calendar-line"></div> ${formattedDate} </div> </div> <div class="flex flex-col gap-2.5 p-4 md:p-5"> <h2 class="line-clamp-2 text-lg font-bold text-text decoration-2 underline-offset-3 transition-all group-hover:underline md:text-xl"> ${item.title} </h2> <p class="line-clamp-2 text-[13px] leading-relaxed text-text-muted md:text-sm"> ${item.intro || noIntroText} </p> </div> </a> </div> </article>`;
}, "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/components/PostCard.astro", void 0);

const $$Astro = createAstro("https://alekschen.github.io");
const $$Home = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Home;
  const {
    posts,
    allPosts = posts,
    page,
    more,
    locale,
    languageSwitchPath,
    seoAlternates
  } = Astro2.props;
  const ui = getUiText(locale);
  const nextLocale = locale === "zh" ? "en" : "zh";
  const resolvedLanguageSwitchPath = languageSwitchPath === void 0 ? localizePath(Astro2.url.pathname, nextLocale) : languageSwitchPath;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "locale": locale, "languageSwitchPath": resolvedLanguageSwitchPath, "title": "AleksChen's Blog", "description": ui.home.description, "seo": {
    type: "website",
    locale,
    alternateLocales: seoAlternates,
    keywords: locale === "zh" ? [
      "AI Builder",
      "\u524D\u7AEF\u5DE5\u7A0B",
      "AI \u7F16\u7A0B",
      "\u8DE8\u7AEF\u5F00\u53D1",
      "\u7F51\u7EDC\u6280\u672F",
      "\u6280\u672F\u535A\u5BA2"
    ] : [
      "AI Builder",
      "Frontend Engineering",
      "AI Coding",
      "Cross-platform Development",
      "Networking",
      "Tech Blog"
    ]
  } }, { "background": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="hidden md:block view-card-bg"> ${renderComponent($$result2, "Mountain", $$Mountain, {})} </div>`, "default": ($$result2) => renderTemplate`   <div class="flex flex-col relative z-10 items-center w-full"> <div class="view-terminal w-full hidden"> ${renderComponent($$result2, "TerminalView", $$TerminalView, { "posts": allPosts, "locale": locale })} </div> <div class="view-card w-full flex flex-col items-center gap-8"> <section id="hero-section" class="text-center py-8 md:py-12"> <h1 class="text-4xl md:text-7xl font-bold text-text mb-6 drop-shadow-[4px_4px_0_var(--color-shadow)] min-h-[1.2em]"> ${renderComponent($$result2, "TypeWriter", $$TypeWriter, { "text": "AleksChen's Blog", "speed": 150, "wait": 3e3, "loop": false, "cursor": false })} </h1> <p class="text-text-muted text-lg max-w-2xl mx-auto min-h-[1.5em]"> ${renderComponent($$result2, "TypeWriter", $$TypeWriter, { "text": ui.home.intro, "speed": 150, "wait": 3e3, "loop": false, "cursor": false })} </p> </section> <div class="home-post-grid grid grid-cols-1 gap-4 md:gap-x-5 md:gap-y-8 w-full max-w-[1120px] md:grid-cols-2 xl:grid-cols-3 px-4 md:px-0"> ${posts.map((item, index) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "item": item, "index": index, "locale": locale, "noIntroText": ui.home.noIntro, "formattedDate": new Date(item.createTime).toLocaleDateString(
    locale === "zh" ? "zh-CN" : "en-US"
  ) })}`)} </div> ${more && renderTemplate`<div class="w-full flex justify-center mt-8 mb-8"> <a${addAttribute(localizePath(`/${page + 1}`, locale), "href")} class="btn btn-primary px-8 py-3"> ${ui.home.loadMore} </a> </div>`} </div> </div> `, "operations": ($$result2) => renderTemplate`<div class="flex items-center h-full"> ${renderComponent($$result2, "TerminalToggle", $$TerminalToggle, { "locale": locale })} </div>` })} ${renderScript($$result, "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/components/Home.astro?astro&type=script&index=0&lang.ts")}  ${renderScript($$result, "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/components/Home.astro?astro&type=script&index=1&lang.ts")}`;
}, "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/components/Home.astro", void 0);

const TAG_PIN = "Pin";
const sortByPin = (arr) => {
  return arr.sort((a, b) => {
    const pinned = (v) => v.tags.includes(TAG_PIN) ? v.updateTime : -1;
    const pinnedA = pinned(a);
    const pinnedB = pinned(b);
    return pinnedB - pinnedA;
  });
};

export { $$Home as $, sortByPin as s };
