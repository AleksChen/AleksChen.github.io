const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

require("dotenv").config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  customFields: { apiBaseUrl: process.env.API_BASE_URL },
  title: "Winwoo's Blog",
  tagline: "Today is a present.",
  url: "https://alekschen.github.io",
  baseUrl: "/",
  baseUrlIssueBanner: true,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon/favicon.png",
  organizationName: "Winwoo's Blog",
  projectName: "AleksChen.github.io",

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
          showReadingTime: true, // When set to false, the "x min read" won't be shown
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
        gtag: {
          trackingID: "G-G1EC4WNBZJ",
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig: {
    image: "static/img/favicon/favicon.png",
    giscus: {
      repo: "AleksChen/blog",
      repoId: "R_kgDOGjCC6A",
      category: "Announcements",
      categoryId: "DIC_kwDOGjCC6M4CR-S5",
      theme: "light_high_contrast",
      darkTheme: "dark_tritanopia",
    },
    announcementBar: {
      id: "support_us",
      content:
        '如果这个网站能帮助到你，欢迎给一个 ⭐️ star 支持作者  <a target="_blank" rel="noopener noreferrer" href="https://github.com/AleksChen/AleksChen.github.io">GitHub</a>',
      isCloseable: false,
    },
    metadata: [
      {
        name: "keywords",
        content: "Winwoo, blog, React, Vue, Redux, Vuew, JavaScript, CSS, HTML",
      },
    ],
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
    },
    navbar: {
      title: "Winwoo's Blog",
      hideOnScroll: true,
      items: [
        { to: "blog", label: "Blog" },
        // { type: "doc", label: "知识库", docId: "entry" },
        {
          href: "https://github.com/AleksChen",
          position: "right",
          className: "header-github-link",
          title: "Winwoo's GitHub Page",
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
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 3,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      defaultLanguage: "javascript",
      additionalLanguages: ["java", "rust"],
    },

    liveCodeBlock: {
      playgroundPosition: "bottom",
    },
  },
  clientModules: [require.resolve("./src/clientModules/routeModules.ts")],
};

module.exports = config;
