import { a as createComponent, m as maybeRenderHead, e as renderScript, b as renderTemplate, c as createAstro, d as addAttribute, r as renderComponent } from './astro/server.Dx2-getx.js';
import { l as localizePath } from './paths.B3LgDFX2.js';
import { g as getUiText, $ as $$Layout } from './Layout.BqFEniip.js';
/* empty css                         */

const $$Mountain = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="mountain-layer" class="fixed bottom-0 left-0 w-full pointer-events-none -z-5 translate-y-full will-change-transform opacity-90 transition-transform duration-75 ease-linear"> <svg viewBox="0 0 1440 320" class="w-full h-auto min-h-[30vh] md:min-h-[50vh]"> <!-- Rear mountain (lighter/further) --> <path fill="currentColor" class="text-gray-200/50 dark:text-gray-300/50" d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,213.3C672,203,768,117,864,101.3C960,85,1056,139,1152,149.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path> <!-- Front mountain (darker/closer) --> <path fill="currentColor" class="text-gray-200/50 dark:text-gray-300/50" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path> </svg> </div> ${renderScript($$result, "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/components/Mountain.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/components/Mountain.astro", void 0);

const $$Astro$3 = createAstro("https://alekschen.github.io");
const $$TerminalToggle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$TerminalToggle;
  const { locale } = Astro2.props;
  const ui = getUiText(locale);
  return renderTemplate`${maybeRenderHead()}<button id="terminal-toggle" class="hover:text-primary transition-transform hover:scale-110 focus:outline-none flex items-center"${addAttribute(ui.actions.toggleTerminalMode, "aria-label")}${addAttribute(ui.actions.toggleTerminalMode, "title")}> <div class="i-ri:terminal-box-line w-6 h-6"></div> </button> ${renderScript($$result, "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/components/TerminalToggle.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/components/TerminalToggle.astro", void 0);

const $$Astro$2 = createAstro("https://alekschen.github.io");
const $$TerminalView = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TerminalView;
  const { posts, locale } = Astro2.props;
  const ui = getUiText(locale);
  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    const pad = (n) => n.toString().padStart(2, "0");
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
  };
  const formatDateShort = (dateStr) => {
    const d = new Date(dateStr);
    const pad = (n) => n.toString().padStart(2, "0");
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  };
  return renderTemplate`${maybeRenderHead()}<div class="terminal-container w-full min-h-screen font-mono text-sm relative overflow-hidden" data-astro-cid-dqny77bt> <!-- CRT scanlines --> <div class="crt-scanlines absolute inset-0 pointer-events-none z-20" data-astro-cid-dqny77bt></div> <!-- CRT vignette --> <div class="crt-vignette absolute inset-0 pointer-events-none z-20" data-astro-cid-dqny77bt></div> <!-- Exit button --> <button id="terminal-close-btn" class="term-exit absolute top-4 right-4 sm:top-5 sm:right-6 font-bold cursor-pointer z-30 text-xs px-2 py-1 border transition-all duration-200"${addAttribute(ui.actions.exitTerminalMode, "aria-label")}${addAttribute(ui.actions.exitTerminalMode, "title")} data-astro-cid-dqny77bt>
[EXIT]
</button> <!-- Terminal body --> <div class="terminal-body p-4 sm:p-8 pt-14 sm:pt-16 w-full max-w-[1200px] mx-auto" data-astro-cid-dqny77bt> <!-- Boot sequence --> <div id="term-boot" class="mb-6 text-xs sm:text-sm" data-astro-cid-dqny77bt> <div class="term-boot-line term-dim" data-astro-cid-dqny77bt>
ALEKSCHEN BLOG TERMINAL v2.0.26
</div> <div class="term-boot-line term-dim" data-astro-cid-dqny77bt>
──────────────────────────────────────────
</div> <div class="term-boot-line" data-astro-cid-dqny77bt> <span class="term-dim" data-astro-cid-dqny77bt>Initializing filesystem</span> <span class="term-ok" data-astro-cid-dqny77bt> [OK]</span> </div> <div class="term-boot-line" data-astro-cid-dqny77bt> <span class="term-dim" data-astro-cid-dqny77bt>Loading post database</span> <span class="term-ok" data-astro-cid-dqny77bt> [OK]</span> </div> <div class="term-boot-line term-dim mt-1" data-astro-cid-dqny77bt>
──────────────────────────────────────────
</div> </div> <!-- Command prompt --> <div class="mb-3 flex items-center flex-wrap gap-x-0 text-sm" data-astro-cid-dqny77bt> <span class="term-user term-glow" data-astro-cid-dqny77bt>guest@alekschen</span> <span class="term-dim" data-astro-cid-dqny77bt>:</span> <span class="term-path" data-astro-cid-dqny77bt>~/posts</span> <span class="term-dim" data-astro-cid-dqny77bt>$</span> <span id="cmd-text" class="ml-2 term-text" data-astro-cid-dqny77bt></span> <span id="cmd-cursor" class="inline-block w-[7px] h-[1em] term-cursor-block ml-px cursor-blink" data-astro-cid-dqny77bt></span> </div> <!-- File listing --> <div id="terminal-list-wrap" class="invisible" data-astro-cid-dqny77bt> <!-- Desktop column header --> <div class="hidden sm:flex term-header-row term-dim text-xs mb-1 px-2 pb-1 border-b" style="border-color: #1e1e1e;" data-astro-cid-dqny77bt> <span class="w-[180px] shrink-0" data-astro-cid-dqny77bt>${ui.terminal.date}</span> <span class="w-[130px] shrink-0" data-astro-cid-dqny77bt>${ui.terminal.category}</span> <span data-astro-cid-dqny77bt>${ui.terminal.title}</span> </div> <!-- Mobile column header --> <div class="flex sm:hidden term-header-row term-dim text-xs mb-1 px-2 pb-1 border-b justify-between" style="border-color: #1e1e1e;" data-astro-cid-dqny77bt> <span data-astro-cid-dqny77bt>${ui.terminal.title}</span> <span class="shrink-0 ml-2" data-astro-cid-dqny77bt>${ui.terminal.date}</span> </div> <!-- Post rows --> <div class="flex flex-col" data-astro-cid-dqny77bt> ${posts.map((post, i) => renderTemplate`<a${addAttribute(localizePath(`/post/${post.slug}`, locale), "href")} class="terminal-row group flex items-center px-2 py-1.5 sm:py-1 transition-all duration-100 rounded-sm cursor-pointer"${addAttribute(i, "data-index")} data-astro-cid-dqny77bt> <!-- Desktop: full columns --> <span class="hidden sm:inline-block w-[180px] shrink-0 term-date text-xs group-hover:term-invert" data-astro-cid-dqny77bt> ${formatDate(post.createTime)} </span> <span class="hidden sm:inline-block w-[130px] shrink-0 term-tag text-xs truncate pr-2" data-astro-cid-dqny77bt> ${post.tags?.[0] || ui.terminal.uncategorized} </span> <!-- Title --> <span class="flex-1 term-title font-medium truncate text-xs sm:text-sm" data-astro-cid-dqny77bt> ${post.title} </span> <!-- Mobile-only: compact date --> <span class="sm:hidden term-date text-xs ml-2 shrink-0 whitespace-nowrap" data-astro-cid-dqny77bt> ${formatDateShort(post.createTime)} </span> </a>`)} </div> <!-- Idle prompt cursor --> <div class="mt-5 flex items-center" id="term-cursor-line" data-astro-cid-dqny77bt> <span class="term-user term-glow" data-astro-cid-dqny77bt>guest@alekschen</span> <span class="term-dim" data-astro-cid-dqny77bt>:</span> <span class="term-path" data-astro-cid-dqny77bt>~/posts</span> <span class="term-dim" data-astro-cid-dqny77bt>$</span> <span class="inline-block w-[7px] h-[1em] term-cursor-block ml-2 cursor-blink" data-astro-cid-dqny77bt></span> </div> </div> </div> </div> ${renderScript($$result, "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/components/TerminalView.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/components/TerminalView.astro", void 0);

const $$Astro$1 = createAstro("https://alekschen.github.io");
const $$PostCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostCard;
  const { item, index, formattedDate, locale, noIntroText } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="home-post-card group relative h-full overflow-hidden rounded-lg border-2 border-text bg-card shadow-[4px_4px_0_0_var(--color-text)] transition-all duration-300 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_var(--color-text)]"${addAttribute(`transition-delay: ${Math.min(index, 8) * 70}ms`, "style")}> <div class="relative z-10 flex h-full flex-col overflow-hidden rounded-[6px]"> <a${addAttribute(localizePath(`/post/${item.slug}`, locale), "href")} class="flex h-full flex-col"> <div class="relative w-full overflow-hidden border-b-2 border-text bg-bg-secondary aspect-[16/8.4]"> ${item.cover ? renderTemplate`<img class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"${addAttribute(item.cover.src, "src")}${addAttribute(item.cover.alt || item.title, "alt")}${addAttribute(800, "width")}${addAttribute(390, "height")}${addAttribute(index <= 1 ? "eager" : "lazy", "loading")}${addAttribute(index <= 1 ? "high" : "auto", "fetchpriority")} decoding="async">` : renderTemplate`<div class="flex h-full w-full items-center justify-center" style="background: linear-gradient(135deg, var(--color-bg-secondary) 0%, var(--color-primary-light) 58%, var(--color-accent-light) 100%)"></div>`} <div class="pointer-events-none absolute left-2 top-2 z-10 inline-flex items-center gap-1 rounded border-2 border-text bg-card px-2 py-1 text-[11px] font-black text-text shadow-[2px_2px_0_0_var(--color-accent)]"> <div class="i-ri:calendar-line"></div> ${formattedDate} </div> </div> <div class="flex flex-1 flex-col gap-3 p-4 md:p-5"> <h2 class="line-clamp-2 text-lg font-black leading-snug text-text decoration-2 underline-offset-4 transition-all group-hover:underline md:text-xl"> ${item.title} </h2> <p class="line-clamp-3 text-[13px] leading-relaxed text-text-muted md:text-sm"> ${item.intro || noIntroText} </p> ${item.tags.length > 0 && renderTemplate`<div class="mt-auto flex flex-wrap gap-1.5 pt-1"> ${item.tags.slice(0, 3).map((tag) => renderTemplate`<span class="article-tag">#${tag}</span>`)} </div>`} </div> </a> </div> </article>`;
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
  } }, { "background": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="hidden md:block view-card-bg"> ${renderComponent($$result2, "Mountain", $$Mountain, {})} </div>`, "default": ($$result2) => renderTemplate`   <div class="flex flex-col relative z-10 items-center w-full"> <div class="view-terminal w-full hidden"> ${renderComponent($$result2, "TerminalView", $$TerminalView, { "posts": allPosts, "locale": locale })} </div> <div class="view-card retro-shell flex w-full flex-col gap-8"> <section id="hero-section" class="grid gap-5 rounded-lg border-2 border-text bg-card p-5 shadow-[5px_5px_0_0_var(--color-accent)] md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:p-7"> <div class="min-w-0"> <div class="page-kicker mb-3">AleksChen</div> <h1 class="min-h-[1.05em] text-3xl font-black leading-none tracking-tight text-text md:text-5xl"> ${ui.home.intro} </h1> <p class="page-description mt-4"> ${ui.home.lead} </p> <div class="mt-5 flex flex-wrap gap-2"> ${ui.home.identity.map((label) => renderTemplate`<span class="retro-chip">${label}</span>`)} </div> </div> <nav class="grid grid-cols-1 gap-2 sm:grid-cols-3 md:min-w-[340px] md:grid-cols-1"${addAttribute(ui.nav.mainNavAria, "aria-label")}> <a${addAttribute(localizePath("/about", locale), "href")} class="retro-link-button"> <div class="i-ri:user-3-line"></div> ${ui.home.ctaAbout} </a> <a${addAttribute(localizePath("/about#skills", locale), "href")} class="retro-link-button"> <div class="i-ri:stack-line"></div> ${ui.home.ctaSkills} </a> <a${addAttribute(localizePath("/about#projects", locale), "href")} class="retro-link-button"> <div class="i-ri:rocket-line"></div> ${ui.home.ctaProjects} </a> </nav> </section> <div class="flex flex-col gap-2 border-b-2 border-text pb-4"> <div class="page-kicker">${ui.home.latest}</div> <p class="text-sm font-bold text-text-muted"> ${ui.home.latestDescription} </p> </div> <div class="home-post-grid grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-x-5 md:gap-y-7 xl:grid-cols-3"> ${posts.map((item, index) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "item": item, "index": index, "locale": locale, "noIntroText": ui.home.noIntro, "formattedDate": new Date(item.createTime).toLocaleDateString(
    locale === "zh" ? "zh-CN" : "en-US"
  ) })}`)} </div> ${more && renderTemplate`<div class="w-full flex justify-center mt-8 mb-8"> <a${addAttribute(localizePath(`/${page + 1}`, locale), "href")} class="retro-link-button px-8 py-3"> ${ui.home.loadMore} </a> </div>`} </div> </div> `, "operations": ($$result2) => renderTemplate`<div class="flex items-center h-full"> ${renderComponent($$result2, "TerminalToggle", $$TerminalToggle, { "locale": locale })} </div>` })} ${renderScript($$result, "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/components/Home.astro?astro&type=script&index=0&lang.ts")}  ${renderScript($$result, "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/components/Home.astro?astro&type=script&index=1&lang.ts")}`;
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
