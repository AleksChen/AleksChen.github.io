import { g as getCollection, a as getEntry } from './_astro_content.DzWitV_U.js';

const DEFAULT_COVER_MAP = {
  javascript: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
  },
  css: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
  },
  html: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
  },
  react: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
  },
  vue: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"
  },
  postcss: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postcss/postcss-original-wordmark.svg"
  },
  tailwindcss: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
  },
  sass: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
  },
  less: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/less/less-plain-wordmark.svg"
  },
  stylus: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/stylus/stylus-original.svg"
  },
  ios: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg"
  },
  android: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg"
  },
  vite: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
  },
  google: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg"
  },
  node: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
  },
  python: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
  },
  java: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
  },
  c: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
  },
  cpp: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
  },
  csharp: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
  },
  ruby: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg"
  },
  swift: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg"
  },
  kotlin: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg"
  },
  go: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg"
  },
  rust: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg"
  },
  haskell: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/haskell/haskell-original.svg"
  },
  sql: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
  },
  postgresql: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
  },
  mongodb: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
  },
  redis: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg"
  },
  electron: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg"
  },
  figma: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
  },
  network: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/networkx/networkx-original.svg"
  },
  default: { src: "/post-assets/cover/cover-default.webp" }
};

function getCoverFromTags(tags) {
  const lowerTags = tags.map((t) => t.toLowerCase());
  for (const tag of lowerTags) {
    if (DEFAULT_COVER_MAP[tag]) {
      return DEFAULT_COVER_MAP[tag];
    }
  }
  return DEFAULT_COVER_MAP.default;
}
function extractIntro(body) {
  const lines = body.split("\n").filter((line) => {
    const trimmed = line.trim();
    return trimmed && !trimmed.startsWith("#") && !trimmed.startsWith("!") && !trimmed.startsWith("import ") && !trimmed.startsWith("export ") && !trimmed.startsWith("<") && !trimmed.startsWith("```") && !trimmed.startsWith("-") && !trimmed.startsWith(">");
  });
  return lines[0]?.slice(0, 200) || "";
}
async function getPostList(filterDraft = true) {
  const posts = await getCollection("posts", ({ data }) => {
    const isNotDraft = filterDraft ? !data.draft : true;
    const isNotReading = !data.tags.includes("reading");
    return isNotDraft && isNotReading;
  });
  const sorted = posts.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
  return sorted.map((p) => {
    const intro = p.data.intro || extractIntro(p.body);
    const cover = p.data.cover ? { src: p.data.cover } : getCoverFromTags(p.data.tags);
    const createTime = p.data.date.getTime();
    const updateTime = p.data.updatedAt ? p.data.updatedAt.getTime() : createTime;
    return {
      id: p.id,
      slug: p.slug,
      title: p.data.title,
      date: p.data.date,
      updatedAt: p.data.updatedAt,
      tags: p.data.tags,
      draft: p.data.draft,
      cover,
      intro,
      createTime,
      updateTime
    };
  });
}
async function getPostBySlug(slug) {
  return getEntry("posts", slug) || null;
}
async function getAllTags() {
  const posts = await getCollection("posts", ({ data }) => {
    return !data.draft && !data.tags.includes("reading");
  });
  const tagSet = /* @__PURE__ */ new Set();
  posts.forEach((p) => p.data.tags.forEach((t) => {
    if (t !== "reading") {
      tagSet.add(t);
    }
  }));
  return Array.from(tagSet);
}

export { getPostBySlug as a, getCoverFromTags as b, getAllTags as c, extractIntro as e, getPostList as g };
