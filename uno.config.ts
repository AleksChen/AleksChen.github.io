import {
  defineConfig,
  presetUno,
  presetIcons,
  presetTypography,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
    presetTypography({
      cssExtend: {
        "h1,h2,h3,h4,h5,h6": {
          "font-weight": "600",
          "line-height": "1.4",
          "scroll-margin-top": "6rem", // 为锚点跳转留出空间
        },
        a: {
          color: "var(--color-primary)",
          "text-decoration": "none",
          "transition": "color 0.2s",
        },
        "a:hover": {
          "text-decoration": "underline",
        },
        "a:focus-visible": {
          outline: "2px solid var(--color-primary)",
          "outline-offset": "2px",
          "border-radius": "2px",
        },
        code: {
          "font-family": "'JetBrains Mono', 'Fira Code', monospace",
          "font-size": "0.9em",
          padding: "0.2em 0.4em",
          "border-radius": "4px",
          "background-color": "var(--color-code-bg)",
          color: "var(--color-code-text)",
          "word-break": "break-word",
        },
        "code::before": {
          content: '""',
        },
        "code::after": {
          content: '""',
        },
        "pre code": {
          padding: "0",
          background: "transparent",
          "font-size": "inherit",
        },
        pre: {
          "background-color": "var(--color-code-bg)",
          padding: "1rem",
          "border-radius": "8px",
          "overflow-x": "auto",
          "border-width": "2px",
          "border-style": "solid",
          "border-color": "var(--color-text)",
          "box-shadow": "4px 4px 0 0 var(--color-text)",
          position: "relative",
        },
        blockquote: {
          "border-left": "4px solid var(--color-primary)",
          "padding-left": "1rem",
          "font-style": "italic",
          color: "var(--color-text-muted)",
          "margin-left": "0",
          "margin-right": "0",
        },
        img: {
          "border-radius": "8px",
          "border": "2px solid var(--color-text)",
          "box-shadow": "4px 4px 0 0 var(--color-text)",
          "max-width": "100%",
          height: "auto",
        },
        table: {
          width: "100%",
          "border-collapse": "collapse",
        },
        "th, td": {
          padding: "0.75rem",
          "border": "1px solid var(--color-border)",
        },
        th: {
          "background-color": "var(--color-code-bg)",
          "font-weight": "600",
        },
        "tr:nth-child(even)": {
          "background-color": "var(--color-bg-secondary)",
        },
        ul: {
          "padding-left": "1.5rem",
        },
        ol: {
          "padding-left": "1.5rem",
        },
        "li > p": {
          margin: "0",
        },
        hr: {
          border: "none",
          "border-top": "2px solid var(--color-border)",
          margin: "2rem 0",
        },
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {
    colors: {
      primary: "var(--color-primary)",
      bg: "var(--color-bg)",
      text: "var(--color-text)",
      "text-muted": "var(--color-text-muted)",
      border: "var(--color-border)",
      card: "var(--color-card)",
      modal: "var(--color-modal)",
      blue: "var(--color-primary)",
    },
    breakpoints: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      sans: "var(--font-sans)",
      mono: "var(--font-mono)",
    },
  },
  shortcuts: {
    // 按钮
    btn: "px-4 py-2 rounded-lg font-medium transition-all duration-200 cursor-pointer border-2 border-text shadow-[2px_2px_0_0_var(--color-text)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2",
    "btn-primary": "btn bg-primary text-white hover:opacity-90",
    "btn-ghost": "btn hover:bg-gray-100 dark:hover:bg-gray-800",
    // 卡片
    card: "bg-card rounded-lg border-2 border-text p-4 shadow-[4px_4px_0_0_var(--color-text)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_var(--color-shadow)] transition-all",
    // 链接
    link: "text-primary hover:underline cursor-pointer focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 focus-visible:rounded",
    // 代码相关
    "code-inline": "font-mono text-sm px-1.5 py-0.5 rounded bg-code-bg text-code-text",
    "code-block": "font-mono text-sm rounded-lg bg-code-bg overflow-x-auto border-2 border-text",
    // 通用
    "buttoned": "px-2 py-1 rounded flex items-center justify-center gap-2 transition-all disabled:(opacity-50 cursor-not-allowed) not-disabled:active:brightness-90 not-disabled:hover:brightness-95 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2",
    "text-button": "px-2 py-1 rounded flex items-center justify-center gap-2 transition-all hover:(bg-black/10 dark:bg-white/10) active:(bg-black/20 dark:bg-white/20) focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2",
    "icon-loading": "i-svg-spinners:ring-resize",
    // 文章内容相关
    "prose-container": "prose prose-lg dark:prose-invert max-w-none",
    "toc-link": "block py-1 px-2 text-text-muted hover:text-primary hover:bg-primary/5 rounded transition-colors truncate focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-1",
  },
  safelist: [
    // 图标
    "i-ri:home-4-line",
    "i-ri:github-fill",
    "i-ri:blogger-line",
    "i-ri:arrow-left-double-line",
    "i-ri:arrow-right-double-line",
    "i-ri:search-line",
    "i-ri:sun-line",
    "i-ri:moon-line",
    "i-ri:calendar-line",
    "i-ri:time-line",
    "i-ri:price-tag-3-line",
    "i-ri:arrow-up-line",
    "i-svg-spinners:ring-resize",
    // 动态类（用于 TOC 高亮）
    "text-primary",
    "bg-primary/10",
    "font-medium",
  ],
  rules: [
    // 自定义工具类：代码背景色
    [
      /^bg-code-bg$/,
      () => ({ "background-color": "var(--color-code-bg)" }),
    ],
    [
      /^text-code-text$/,
      () => ({ color: "var(--color-code-text)" }),
    ],
  ],
});

