export const config = {
  siteUrl: "https://blog.002085.xyz",
  github: {
    login: "Alekschen",
    repo: "Alekschen.github.io",
  },
  head: {
    title: "Aleks",
    description: "Alekschen's blog",
    links: {
      github: "https://github.com/AleksChen",
      juejin: "https://juejin.cn/user/254742428393742",
      email: "wenwuchen1948@gmail.com",
    },
  },
  footer: {
    copyright: "AleksChen",
    copyrightUrl: "https://github.com/AleksChen",
  },
  giscus: {
    src: "https://giscus.app/client.js",
    "data-repo": "AleksChen/AleksChen.github.io",
    "data-repo-id": "R_kgDOGjCC6A",
    "data-category": "Announcements",
    "data-category-id": "DIC_kwDOGjCC6M4CR-S5",
    "data-mapping": "pathname",
    "data-strict": "0",
    "data-reactions-enabled": "1",
    "data-emit-metadata": "0",
    "data-input-position": "top",
    "data-theme": "fro",
    "data-lang": "zh-CN",
    "data-loading": "lazy",
    crossorigin: "anonymous",
    async: true,
  },
} as const;

export default config;
