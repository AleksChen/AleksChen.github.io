// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
// const oceanicNext = require("prism-react-renderer/themes/oceanicNext");
// const duotoneLight = require("prism-react-renderer/themes/duotoneLight");

require("dotenv").config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  customFields: { apiBaseUrl: process.env.API_BASE_URL },
  title: "Winwoo's Blog",
  tagline: "Today is a present.",
  url: "https://chenwenwu223.github.io",
  baseUrl: "/blog/",
  baseUrlIssueBanner: true,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon/favicon.png",
  organizationName: "Winwoo's Blog",
  projectName: "blog",

  i18n: {
    defaultLocale: "zh-CN",
    locales: [
      "zh-CN",
      //"en"
    ],
    localeConfigs: {
      "zh-CN": {
        label: "简体中文",
      },
    },
  },

  themes: ["@docusaurus/theme-live-codeblock"],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        pages: {
          remarkPlugins: [require("@docusaurus/remark-plugin-npm2yarn")],
        },
        docs: {
          remarkPlugins: [
            [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
          ],
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
          include: ["**/*.md", "**/*.mdx"],
          exclude: [
            "**/_*.{js,jsx,ts,tsx,md,mdx}",
            "**/_*/**",
            "**/*.test.{js,jsx,ts,tsx}",
            "**/__tests__/**",
          ],
        },
        blog: {
          remarkPlugins: [require("@docusaurus/remark-plugin-npm2yarn")],
          showReadingTime: true,
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
          blogTitle: `Winwoo's Blog!`,
          blogDescription:
            "Success is never owned, it is rented and the rent is due every day.",
          postsPerPage: "ALL",
          blogSidebarTitle: "All posts",
          blogSidebarCount: "ALL",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: "keywords",
          content:
            "React, Vue, Redux, Vuew, JavaScript, CSS, HTML, Winwoo, blog",
        },
      ],
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
      },
      announcementBar: {
        id: "support_us",
        content:
          "Success is never owned, it is rented and the rent is due every day.",
        backgroundColor: "#fafbfc",
        textColor: "#091E42",
        isCloseable: true,
      },
      navbar: {
        title: "Winwoo's Blog",
        logo: {
          alt: "Winwoo's Blog",
          src: "img/favicon/favicon.png",
          srcDark: "img/favicon/favicon.png",
          target: "_self",
          className: "navbarIcon",
        },
        hideOnScroll: true,
        items: [
          { to: "blog", label: "博客", position: "left" },
          // Left
          {
            type: "dropdown",
            label: "前端",
            position: "left",
            items: [
              { type: "doc", label: "Home", docId: "front-end" },
              { type: "docSidebar", label: "HTML", sidebarId: "html" },
              { type: "docSidebar", label: "CSS", sidebarId: "css" },
              {
                type: "docSidebar",
                label: "JavaScript",
                sidebarId: "javascript",
              },
              {
                type: "docSidebar",
                label: "TypeScript",
                sidebarId: "typescript",
              },
              { type: "docSidebar", label: "React", sidebarId: "react" },
              { type: "docSidebar", label: "Vue", sidebarId: "vue" },
              { type: "docSidebar", label: "Webpack", sidebarId: "webpack" },
              {
                type: "docSidebar",
                label: "React Native",
                sidebarId: "rn",
              },
              // {
              //   type: "docSidebar",
              //   label: "Sass",
              //   sidebarId: "sass",
              // },
              { type: "docSidebar", label: "npm", sidebarId: "npm" },
              { type: "docSidebar", label: "Yarn", sidebarId: "yarn" },
              { type: "docSidebar", label: "Vite", sidebarId: "vite" },
            ],
          },
          {
            type: "dropdown",
            label: "后端",
            position: "left",
            items: [
              { type: "doc", label: "Home", docId: "back-end" },
              { type: "docSidebar", label: "Node.js", sidebarId: "nodejs" },
              { type: "docSidebar", label: "MongoDB", sidebarId: "mongodb" },
              { type: "docSidebar", label: "GraphQL", sidebarId: "graphql" },
            ],
          },
          {
            type: "dropdown",
            label: "计算机",
            position: "left",
            items: [
              {
                type: "docSidebar",
                label: "数据结构与算法",
                sidebarId: "algorithm",
              },
              {
                type: "docSidebar",
                label: "操作系统",
                sidebarId: "computer_system",
              },
              {
                type: "docSidebar",
                label: "计算机网络",
                sidebarId: "computer_network",
              },
            ],
          },
          {
            type: "dropdown",
            label: "望其项背",
            position: "left",
            items: [
              {
                to: "https://www.ruanyifeng.com/blog/archives.html",
                label: "阮一峰的网络日志",
              },
            ],
          },
          {
            type: "dropdown",
            label: "其他",
            position: "left",
            items: [
              {
                type: "docSidebar",
                label: "Interview",
                sidebarId: "interview",
              },
              { type: "docSidebar", label: "Git", sidebarId: "git" },
              {
                type: "doc",
                docId: "code-specification",
                label: "代码规范",
              },
              {
                type: "doc",
                docId: "copywriting-guide",
                label: "设计",
              },
              {
                to: "https://www.5axxw.com/wiki/topic/vxf8nl",
                label: "Markdown 入门教程",
              },
              {
                to: "https://docusaurus.io/docs",
                label: "Docusaurus",
              },
            ],
          },
          {
            type: "search",
            position: "right",
          },
          {
            href: "https://github.com/ChenWenWu223/",
            position: "right",
            className: "header-github-link",
            title: "前往 Winwoo 的 GitHub 主页",
            "aria-label": "GitHub repository",
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        },
      },
      footer: {
        logo: {
          src: "img/favicon/favicon.png",
          href: "/",
          width: 40,
          height: 40,
          style: { borderRadius: 100 },
          alt: "Winwoo",
        },
        style: "dark", // "light" | "dark"
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Docusaurus. Hosted by Github Pages.`,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        // theme: duotoneLight,
        // darkTheme: oceanicNext,
        // Prism: https://prismjs.com/#supported-languages
        // Docusaurus Support: https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/vendor/prism/includeLangs.js
        additionalLanguages: [
          "aspnet",
          "cpp",
          "csharp",
          "graphql",
          "go",
          "http",
          "java",
          "powershell",
          "swift",
          "vim",
          "docker",
        ],
      },
      liveCodeBlock: {
        playgroundPosition: "bottom",
      },
    }),
};

module.exports = config;
