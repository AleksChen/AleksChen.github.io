import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons,
  presetTypography,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
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
        },
        a: {
          color: "var(--color-primary)",
          "text-decoration": "none",
        },
        "a:hover": {
          "text-decoration": "underline",
        },
        code: {
          "font-family": "'JetBrains Mono', 'Fira Code', monospace",
          "font-size": "0.9em",
          padding: "0.2em 0.4em",
          "border-radius": "4px",
          "background-color": "var(--color-code-bg)",
        },
        "pre code": {
          padding: "0",
          background: "transparent",
        },
        pre: {
          "background-color": "var(--color-code-bg)",
          padding: "1rem",
          "border-radius": "8px",
          "overflow-x": "auto",
          "border-width": "1px",
          "border-style": "solid",
          "border-color": "var(--color-border)",
        },
        blockquote: {
          "border-left": "4px solid var(--color-primary)",
          "padding-left": "1rem",
          "font-style": "italic",
          color: "var(--color-text-muted)",
        },
        img: {
          "border-radius": "8px",
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
      // gray: "var(--color-text-muted)", // 移除此行，恢复默认 gray 色阶
    },
  },
  shortcuts: {
    // 按钮
    btn: "px-4 py-2 rounded-lg font-medium transition-all duration-200 cursor-pointer",
    "btn-primary": "btn bg-primary text-white hover:opacity-90",
    "btn-ghost": "btn hover:bg-gray-100 dark:hover:bg-gray-800",
    // 卡片
    card: "bg-card rounded-xl border border-border p-4",
    // 链接
    link: "text-primary hover:underline cursor-pointer",
    // 通用
    "buttoned": "px-2 py-1 rounded flex items-center justify-center gap-2 transition-all disabled:(opacity-50 cursor-not-allowed) not-disabled:active:brightness-90 not-disabled:hover:brightness-95",
    "text-button": "px-2 py-1 rounded flex items-center justify-center gap-2 transition-all hover:(bg-black/10) active:(bg-black/20)",
    "icon-loading": "i-svg-spinners:ring-resize",
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
  ],
});

