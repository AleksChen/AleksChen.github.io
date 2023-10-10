module.exports = {
  title: "Winwoo's Blog",
  description:
    "Success is never owned, it is rented and the rent is due every day.",
  base: "/blog/",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  theme: "reco",
  themeConfig: {
    subSidebar: "auto",
    nav: [
      {
        text: "About",
        items: [
          { text: "掘金", link: "https://juejin.cn/user/254742428393742" },
          { text: "Github", link: "https://github.com/ChenWenWu223" },
        ],
      },
    ],
    sidebar: [
      {
        title: "博客",
        path: "/",
        collapsable: true,
        children: [{ title: "简介", path: "/" }],
      },
      {
        title: "文集",
        path: "/article",
        collapsable: true,
        children: [
          {
            title: "业务前端的困境",
            path: "/article/feDoBetterInBiz",
          },
          {
            title: "工作本身：简单的基层工作是长远发展的分水岭",
            path: "/article/reprint",
          },
        ],
      },
    ],
  },
};
