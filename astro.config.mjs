// @ts-check
import { defineConfig } from "astro/config";
import { fileURLToPath } from "url";
import sitemap from "@astrojs/sitemap";
import keystatic from "@keystatic/astro";
import react from "@astrojs/react";
import UnoCSS from "@unocss/astro";
import config from "./site.config.ts";

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
          !page.includes('/tag/') &&
          !page.includes('/404')
        );
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
