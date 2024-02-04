// Frontend
const FRONTEND = "Frontend";
// const HTML = "HTML";
const CSS = "CSS";
const JAVASCRIPT = "JavaScript";
const TYPESCRIPT = "TypeScript";
const REACT = "React";
const RN = "React Native";
const VUE = "Vue";
const TAILWIND = "Tailwind";
const WEBPACK = "Webpack";
// const SASS = "Sass";
// const NPM = "npm";
// const YARN = "Yarn";
// const VITE = "Vite";
// const GRAPHQL = "GraphQL";

// Backend
const BACKEND = "Backend";
const NODE_JS = "Node.js";
const MONGODB = "MongoDB";

// const ALGORITHM = "算法";
// const OPERATING_SYSTEM = "操作系统";
// const COMPUTER_NETWORK = "计算机网络";

// 其他
const OTHERS = "Others";
const GIT = "Git";
const GITHUB = "GitHub";

// Contact me
const GMAIL = "GMail";
const GITHUB_LINK = "https://github.com/alekschen/";
const GMAIL_ADDRESS = "wenwuchen1948@gmail.com";

interface FrontendMenuData {
  readonly frontend: string;
  // readonly html: string;
  readonly css: string;
  readonly javascript: string;
  readonly typescript: string;
  readonly react: string;
  readonly rn: string;
  readonly vue: string;
  readonly tailwindcss: string;
  readonly webpack: string;
  // readonly sass: string;
  // readonly npm: string;
  // readonly yarn: string;
  // readonly vite: string;
  // readonly graphql: string;
}

interface BackendMenuData {
  readonly backend: string;
  readonly nodejs: string;
  readonly mongodb: string;
}

interface OthersMenuData {
  readonly others: string;
  readonly git: string;
  readonly github: string;
}

interface ContactMeData {
  readonly github: string;
  readonly gmail: string;
  readonly githubLink: string;
  readonly gmailAddress: string;
}

const frontendMenuData: FrontendMenuData = {
  frontend: FRONTEND,
  // html: HTML,
  css: CSS,
  javascript: JAVASCRIPT,
  typescript: TYPESCRIPT,
  react: REACT,
  rn: RN,
  vue: VUE,
  tailwindcss: TAILWIND,
  webpack: WEBPACK,
  // sass: SASS,
  // npm: NPM,
  // yarn: YARN,
  // vite: VITE,
  // graphql: GRAPHQL,
};

const backendMenuData: BackendMenuData = {
  backend: BACKEND,
  nodejs: NODE_JS,
  mongodb: MONGODB,
};

const othersMenuData: OthersMenuData = {
  others: OTHERS,
  git: GIT,
  github: GITHUB,
};

const contactMeData: ContactMeData = {
  github: GITHUB,
  gmail: GMAIL,
  githubLink: GITHUB_LINK,
  gmailAddress: GMAIL_ADDRESS,
};

export { frontendMenuData, backendMenuData, othersMenuData, contactMeData };
