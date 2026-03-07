const config = {
  siteUrl: "https://alekschen.github.io",
  head: {
    title: "Aleks",
    description: "Aleks 的技术博客，专注前端工程、跨端开发与网络技术实践。",
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
