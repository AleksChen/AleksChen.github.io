// Frontend
const FRONTEND = "Frontend";
const CSS = "CSS";
const JAVASCRIPT = "JavaScript";
const TYPESCRIPT = "TypeScript";
const REACT = "React";
const RN = "React Native";
const VUE = "Vue";
const VITE = "Vite";
const TAILWIND = "Tailwind";
const WEBPACK = "Webpack";

// Backend
const BACKEND = "Backend";
const NODE_JS = "Node.js";
const MONGODB = "MongoDB";

const ALGORITHM = "算法";
const INTERVIEW = "面试";

// 其他
const GITHUB = "GitHub";

// Contact me
const GMAIL = "GMail";
const GITHUB_LINK = "https://github.com/alekschen/";
const GMAIL_ADDRESS = "wenwuchen1948@gmail.com";

interface FrontendMenuData {
  readonly frontend: string;
  readonly css: string;
  readonly javascript: string;
  readonly typescript: string;
  readonly react: string;
  readonly rn: string;
  readonly vue: string;
  readonly tailwindcss: string;
  readonly webpack: string;
  readonly vite: string;
}

interface BackendMenuData {
  readonly backend: string;
  readonly nodejs: string;
  readonly mongodb: string;
}

interface OthersMenuData {
  readonly algorithm: string;
  readonly interview: string;
}

interface ContactMeData {
  readonly github: string;
  readonly gmail: string;
  readonly githubLink: string;
  readonly gmailAddress: string;
}

const frontendMenuData: FrontendMenuData = {
  frontend: FRONTEND,
  css: CSS,
  javascript: JAVASCRIPT,
  typescript: TYPESCRIPT,
  react: REACT,
  rn: RN,
  vue: VUE,
  tailwindcss: TAILWIND,
  webpack: WEBPACK,
  vite: VITE,
};

const backendMenuData: BackendMenuData = {
  backend: BACKEND,
  nodejs: NODE_JS,
  mongodb: MONGODB,
};

const othersMenuData: OthersMenuData = {
  algorithm: ALGORITHM,
  interview: INTERVIEW,
};

const contactMeData: ContactMeData = {
  github: GITHUB,
  gmail: GMAIL,
  githubLink: GITHUB_LINK,
  gmailAddress: GMAIL_ADDRESS,
};

export { frontendMenuData, backendMenuData, othersMenuData, contactMeData };
