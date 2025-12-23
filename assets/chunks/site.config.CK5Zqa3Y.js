const config = {
  siteUrl: "https://blog.002085.xyz",
  head: {
    title: "Aleks",
    description: "Alekschen's blog",
    links: {
      github: "https://github.com/AleksChen",
      juejin: "https://juejin.cn/user/254742428393742"}
  },
  footer: {
    copyright: "AleksChen",
    copyrightUrl: "https://github.com/AleksChen"
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
    "data-lang": "zh-CN",
    "data-loading": "lazy",
    "data-theme": "preferred_color_scheme",
    crossorigin: "anonymous",
    async: true
  }
};

export { config as c };
