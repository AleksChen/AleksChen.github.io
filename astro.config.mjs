// @ts-check
import { defineConfig } from "astro/config";
import { fileURLToPath } from "url";
import sitemap from "@astrojs/sitemap";
import keystatic from "@keystatic/astro";
import react from "@astrojs/react";
import UnoCSS from "@unocss/astro";
import config from "./site.config.ts";

import mdx from "@astrojs/mdx";
import { visit } from "unist-util-visit";

function remarkMermaid() {
  return (tree) => {
    visit(tree, "code", (node) => {
      if (node.lang === "mermaid") {
        node.type = "html";
        node.value = `<div class="mermaid">${node.value}</div>`;
      }
    });
  };
}

// https://astro.build/config
export default defineConfig({
  trailingSlash: "never",
  site: import.meta.env.PUBLIC_SITE_URL || config.siteUrl,
  integrations: [
    react(),
    ...(import.meta.env.DEV ? [keystatic()] : []),
    UnoCSS({
      injectReset: true,
    }),
    sitemap({
      filter: (page) => {
        return (
          !page.includes("/tag/") &&
          !page.includes("/404") &&
          !page.includes("/archives") &&
          !page.includes("/about") &&
          !page.includes("/tags")
        );
      },
    }),
    mdx({
      remarkPlugins: [remarkMermaid],
    }),
  ],
  server: {
    host: true,
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          // 解决默认 _astro/ 目录下文件名混乱的问题
          assetFileNames: "assets/[name].[hash][extname]",
          chunkFileNames: "assets/chunks/[name].[hash].js",
          entryFileNames: "assets/[name].[hash].js",
        },
      },
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "site.config": fileURLToPath(
          new URL("./site.config.ts", import.meta.url)
        ),
      },
    },
    optimizeDeps: {
      exclude: ["@tinacms/cli"],
    },
  },
});
