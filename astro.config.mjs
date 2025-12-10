// @ts-check
import { defineConfig } from "astro/config";
import { fileURLToPath } from "url";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  trailingSlash: "never",
  output: import.meta.env.DEV ? "server" : "static",
  site: "https://alekschen.github.io",
  integrations: [
    sitemap({
      filter: (page) => {
        // 排除编辑页面和登录页面
        return !page.includes('/edit') && !page.includes('/login');
      },
    }),
  ],
  server: {
    host: true,
  },
  vite: {
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
