export const config = {
  github: {
    login: "Alekschen",
    repo: "Alekschen.github.io",
    logInUrl: "https://Alekschen.github.io/",
    logInAuthUrl: "https://Alekschen.github.io/",
  },
  head: {
    title: "Aleks",
    description: "Alekschen's blog",
    links: {
      github: "https://github.com/AleksChen",
      juejin: "https://juejin.cn/user/254742428393742",
    },
  },
  footer: {
    copyright: "AleksChen",
    copyrightUrl: "https://github.com/AleksChen",
  },
  giscus: {
    src: "https://giscus.app/client.js",
    "data-repo": "AleksChen/AleksChen.github.io",
    "data-repo-id": "", // 需要填写你的 repo id
    "data-category": "General",
    "data-category-id": "", // 需要填写你的 category id
    "data-mapping": "pathname",
    "data-strict": "0",
    "data-reactions-enabled": "1",
    "data-emit-metadata": "0",
    "data-input-position": "bottom",
    "data-theme": "preferred_color_scheme",
    "data-lang": "zh-CN",
    crossorigin: "anonymous",
    async: true,
  },
} as const;

export default config;
