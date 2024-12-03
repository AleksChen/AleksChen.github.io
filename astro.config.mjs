// @ts-check
import { defineConfig } from "astro/config";
import { fileURLToPath } from "url";
import UnoCSS from "unocss/astro";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  trailingSlash: "never",
  output: import.meta.env.DEV ? "server" : "static",
  site: "https://alekschen.github.io",
  integrations: [
    UnoCSS({ injectReset: true }),
    sitemap({
      filter: (page) => page.startsWith("https://alekschen.github.io/post/"),
    }),
  ],
  server: {
    host: true,
  },
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "urodele.config": fileURLToPath(
          new URL("./urodele.config.ts", import.meta.url)
        ),
      },
    },
  },
});
