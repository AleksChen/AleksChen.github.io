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
    copyright: "© AleksChen",
    copyrightUrl: "https://github.com/AleksChen",
  },
  giscus: false as object | false,
} as const;

export default config;
