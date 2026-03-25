import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, s as spreadAttributes, f as renderSlot, e as renderScript, b as renderTemplate, r as renderComponent } from './astro/server.Dx2-getx.js';
import { $ as $$Image } from './_astro_assets.BS_CIFMo.js';

const $$Astro$2 = createAstro("https://alekschen.github.io");
const $$MDXCode = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MDXCode;
  const { class: className, ...props } = Astro2.props;
  const lang = props["data-language"] || className?.match(/language-(\w+)/)?.[1] || "";
  return renderTemplate`${maybeRenderHead()}<div class="code-block relative group my-6 overflow-hidden"> <div class="relative"> ${lang && renderTemplate`<div class="flex items-center justify-between px-4 py-2 bg-neutral-100/80 dark:bg-neutral-800/50 text-xs text-text-muted select-none"> <div class="flex items-center gap-3"> <div class="flex gap-1.5"> <div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div> <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div> <div class="w-3 h-3 rounded-full bg-[#27c93f]"></div> </div> <span class="font-mono font-bold opacity-70"> ${lang.toUpperCase()} </span> </div> <button class="copy-btn flex items-center gap-1.5 px-2 py-0.5 rounded hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer" aria-label="Copy code"> <div class="i-ri:file-copy-line text-sm"></div> <span>Copy</span> </button> </div>`} <pre${addAttribute([
    className,
    "!my-0 p-4 pt-0 overflow-x-auto custom-scrollbar text-sm leading-relaxed !bg-transparent !border-none"
  ], "class:list")}${spreadAttributes(props)}>${renderSlot($$result, $$slots["default"])}</pre> ${!lang && renderTemplate`<button class="copy-btn absolute top-2 right-2 z-50 flex items-center gap-1.5 px-2 py-1 rounded bg-white/20 dark:bg-white/5 text-xs text-white hover:bg-primary/10 dark:hover:bg-white/15 transition-colors cursor-pointer opacity-0 group-hover:opacity-100" aria-label="Copy code"> <div class="i-ri:file-copy-line text-sm"></div> <span>Copy</span> </button>`} </div> </div> ${renderScript($$result, "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/components/mdx/MDXCode.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/components/mdx/MDXCode.astro", void 0);

const $$Astro$1 = createAstro("https://alekschen.github.io");
const $$MDXImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MDXImage;
  const props = Astro2.props;
  const { src, alt, title, class: className, ...rest } = props;
  const isLocal = typeof src === "object";
  return renderTemplate`${maybeRenderHead()}<figure${addAttribute(["my-6 flex flex-col items-center", className], "class:list")}> ${isLocal ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": src, "alt": alt || "", "class": "rounded-lg shadow-sm border border-border max-w-full h-auto", ...rest })}` : renderTemplate`<img${addAttribute(src, "src")}${addAttribute(alt || "", "alt")} class="rounded-lg shadow-sm border border-border max-w-full h-auto" loading="lazy"${spreadAttributes(rest)}>`} ${(title || alt) && renderTemplate`<figcaption class="text-center text-sm text-text-muted mt-2 italic"> ${title || alt} </figcaption>`} </figure>`;
}, "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/components/mdx/MDXImage.astro", void 0);

const $$Astro = createAstro("https://alekschen.github.io");
const $$MDXTable = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MDXTable;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="table-container my-6 w-full overflow-x-auto"> <table${spreadAttributes(props)} class="w-full text-left border-collapse"> ${renderSlot($$result, $$slots["default"])} </table> </div>`;
}, "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/components/mdx/MDXTable.astro", void 0);

export { $$MDXTable as $, $$MDXCode as a, $$MDXImage as b };
