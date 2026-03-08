import { c as createComponent, m as maybeRenderHead, f as renderScript, a as renderTemplate, b as createAstro, d as addAttribute, r as renderComponent } from './astro/server.CAacAaxv.js';
import { $ as $$Layout } from './Layout._i_Nr7Dg.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import 'react';

const $$Rocket = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="rocket-canvas-container" class="fixed h-full w-full inset-0 -z-10 pointer-events-none"></div> ${renderScript($$result, "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/components/Rocket.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/components/Rocket.astro", void 0);

const $$Mountain = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="mountain-layer" class="fixed bottom-0 left-0 w-full pointer-events-none -z-5 translate-y-full will-change-transform opacity-90 transition-transform duration-75 ease-linear"> <svg viewBox="0 0 1440 320" class="w-full h-auto min-h-[30vh] md:min-h-[50vh]"> <!-- Rear mountain (lighter/further) --> <path fill="currentColor" class="text-gray-200/50 dark:text-gray-300/50" d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,213.3C672,203,768,117,864,101.3C960,85,1056,139,1152,149.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path> <!-- Front mountain (darker/closer) --> <path fill="currentColor" class="text-gray-200/50 dark:text-gray-300/50" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path> </svg> </div> ${renderScript($$result, "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/components/Mountain.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/components/Mountain.astro", void 0);

const $$Astro$1 = createAstro("https://alekschen.github.io");
const $$TypeWriter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
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

const PostCard = ({
  item,
  index,
  formattedDate
}) => {
  return /* @__PURE__ */ jsx(
    "article",
    {
      className: "group relative card transition-all duration-300 hover:-translate-y-1",
      style: {
        animationDelay: `${index * 100}ms`
      },
      children: /* @__PURE__ */ jsx("a", { href: `/post/${item.slug}`, className: "block", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-4 md:items-start justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3 text-xs text-text-muted mb-2", children: /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsx("div", { className: "i-ri:calendar-line" }),
            formattedDate
          ] }) }),
          /* @__PURE__ */ jsx("h2", { className: "text-xl md:text-2xl font-bold text-text mb-3 group-hover:underline decoration-2 underline-offset-4 transition-colors line-clamp-2 hover:text-[var(--color-primary)]", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "text-text-muted text-sm md:text-base line-clamp-3 mb-4 leading-relaxed", children: item.intro || "暂无简介" }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mt-auto", children: item.tags.map((tag) => /* @__PURE__ */ jsxs(
            "span",
            {
              className: "inline-flex items-center px-2 py-0.5 rounded-sm text-xs font-bold border border-text text-text bg-transparent shadow-[2px_2px_0_0_var(--color-text)]",
              children: [
                "#",
                tag
              ]
            },
            tag
          )) })
        ] }),
        item.cover && /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-32 h-32 rounded overflow-hidden border-1", children: /* @__PURE__ */ jsx(
          "img",
          {
            className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
            src: item.cover.src,
            alt: item.cover.alt || item.title,
            loading: index <= 1 ? "eager" : "lazy",
            fetchPriority: index <= 1 ? "high" : "auto",
            decoding: "async",
            width: 128,
            height: 128
          }
        ) })
      ] }) })
    }
  );
};

const $$Astro = createAstro("https://alekschen.github.io");
const $$Home = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Home;
  const { posts, page, more } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u524D\u7AEF\u4E0E AI \u5B9E\u8DF5\u535A\u5BA2", "description": "\u805A\u7126\u524D\u7AEF\u5DE5\u7A0B\u3001AI \u7F16\u7A0B\u3001\u8DE8\u7AEF\u5F00\u53D1\u4E0E\u7F51\u7EDC\u6280\u672F\uFF0C\u6301\u7EED\u8F93\u51FA\u53EF\u843D\u5730\u7684\u5B9E\u6218\u7B14\u8BB0\u4E0E\u6E90\u7801\u89E3\u6790\u3002", "seo": {
    type: "website",
    keywords: ["\u524D\u7AEF\u5DE5\u7A0B", "AI \u7F16\u7A0B", "\u8DE8\u7AEF\u5F00\u53D1", "\u7F51\u7EDC\u6280\u672F", "\u6280\u672F\u535A\u5BA2"]
  } }, { "background": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="hidden md:block"> <!-- Three.js 火箭背景 --> ${renderComponent($$result2, "Rocket", $$Rocket, {})} <!-- 山峰视差背景 --> ${renderComponent($$result2, "Mountain", $$Mountain, {})} </div>`, "default": ($$result2) => renderTemplate`  <div class="flex flex-col gap-8 relative z-10 items-center"> <section id="hero-section" class="text-center py-8 md:py-12"> <h1 class="text-4xl md:text-7xl font-bold text-text mb-6 drop-shadow-[4px_4px_0_var(--color-shadow)] min-h-[1.2em]"> ${renderComponent($$result2, "TypeWriter", $$TypeWriter, { "text": "AleksChen's Blog", "speed": 150, "wait": 3e3, "loop": false, "cursor": false })} </h1> <p class="text-text-muted text-lg max-w-2xl mx-auto min-h-[1.5em]"> ${renderComponent($$result2, "TypeWriter", $$TypeWriter, { "text": "\u6D3B\u5728\u5F53\u4E0B \u8BB0\u5F55\u65F6\u95F4", "speed": 250, "wait": 3e3, "loop": false, "cursor": false })} </p> </section> <div class="flex flex-col gap-6 max-w-[800px]"> ${posts.map((item, index) => renderTemplate`${renderComponent($$result2, "PostCard", PostCard, { "item": item, "index": index, "formattedDate": new Date(item.createTime).toLocaleDateString() })}`)} </div> ${more && renderTemplate`<div class="w-full flex justify-center mt-8"> <a${addAttribute(`/${page + 1}`, "href")} class="btn btn-primary px-8 py-3">
加载更多
</a> </div>`} </div> ` })} ${renderScript($$result, "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/components/Home.astro?astro&type=script&index=0&lang.ts")}`;
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
