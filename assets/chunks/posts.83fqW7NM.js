import { g as getCollection, a as getEntry } from './_astro_content.DY2yO7Mi.js';

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

const INTRO_MAX_LENGTH = 200;
const SEO_DESCRIPTION_MAX_LENGTH = 140;
const SEO_KEYWORD_MIN = 5;
const SEO_KEYWORD_MAX = 8;
const EN_STOPWORDS = /* @__PURE__ */ new Set([
  "the",
  "and",
  "with",
  "for",
  "from",
  "into",
  "that",
  "this",
  "how",
  "what",
  "when",
  "where",
  "why",
  "you",
  "your",
  "are",
  "was",
  "were",
  "will",
  "can",
  "use",
  "using",
  "used",
  "via",
  "into",
  "note",
  "notes",
  "intro",
  "overview",
  "summary"
]);
const ZH_STOPWORDS = /* @__PURE__ */ new Set([
  "我们",
  "你们",
  "他们",
  "一个",
  "一些",
  "以及",
  "可以",
  "如何",
  "什么",
  "为什么",
  "这篇",
  "文章",
  "本文",
  "前言",
  "引言",
  "概述",
  "总结",
  "示例",
  "案例"
]);
const GENERIC_KEYWORDS = /* @__PURE__ */ new Set([
  "前言",
  "引言",
  "概述",
  "总结",
  "结语",
  "目录",
  "示例",
  "案例",
  "代码",
  "配置",
  "问题",
  "原理",
  "实践",
  "注意事项",
  "常见问题",
  "vs"
]);
function getCoverFromTags(tags) {
  const lowerTags = tags.map((t) => t.toLowerCase());
  for (const tag of lowerTags) {
    if (DEFAULT_COVER_MAP[tag]) {
      return DEFAULT_COVER_MAP[tag];
    }
  }
  return DEFAULT_COVER_MAP.default;
}
function stripMarkdownText(input) {
  return input.replace(/```[\s\S]*?```/g, " ").replace(/`([^`]+)`/g, "$1").replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/^#{1,6}\s+/gm, "").replace(/^>\s?/gm, "").replace(/^[-*+]\s+/gm, "").replace(/^\d+\.\s+/gm, "").replace(/<[^>]+>/g, " ").replace(/\|/g, " ").replace(/[*_~]/g, "").replace(/\s+/g, " ").trim();
}
function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).replace(/[.,;:!?，。！？、\s]+$/g, "")}...`;
}
function removeHeadingPrefix(keyword) {
  return keyword.replace(/^#{1,6}\s*/g, "").replace(/^(?:\d+(?:\.\d+){0,3}|[一二三四五六七八九十]+)\s*[、.．:：)\]）-]?\s*/u, "").trim();
}
function normalizeKeyword(keyword) {
  return removeHeadingPrefix(
    keyword.trim().replace(/^[#.,;:!?，。；：、"'`()[\]{}【】（）]+/g, "").replace(/[#.,;:!?，。；：、"'`()[\]{}【】（）]+$/g, "").replace(/\s+/g, " ")
  );
}
function isLatinOnly(keyword) {
  return /^[A-Za-z0-9+#._-]+$/.test(keyword);
}
function isSectionKeyword(keyword) {
  return /^(?:\d+(?:\.\d+){0,3}|[一二三四五六七八九十]+)$/u.test(keyword);
}
function isStopword(keyword) {
  if (!keyword) return true;
  if (/^\d+$/.test(keyword)) return true;
  if (isSectionKeyword(keyword)) return true;
  const lower = keyword.toLowerCase();
  if (EN_STOPWORDS.has(lower)) return true;
  if (ZH_STOPWORDS.has(keyword)) return true;
  if (GENERIC_KEYWORDS.has(keyword) || GENERIC_KEYWORDS.has(lower)) return true;
  return false;
}
function isInvalidKeyword(keyword) {
  if (!keyword) return true;
  if (keyword.length < 2 || keyword.length > 24) return true;
  if (/^https?:\/\//i.test(keyword)) return true;
  if (/^[^\u4e00-\u9fffA-Za-z0-9]+$/.test(keyword)) return true;
  if (isLatinOnly(keyword) && keyword.length < 3) return true;
  if (isStopword(keyword)) return true;
  return false;
}
function cleanLeadingNoise(text) {
  const compact = text.replace(/\s+/g, " ").trim();
  const deduped = compact.replace(/^(\S{2,20})\s+\1\b/u, "$1");
  return deduped.replace(
    /^(前言|引言|概述|总结|序幕|背景|导读)\s*[:：-]?\s*/u,
    ""
  );
}
function extractTitleTerms(title) {
  const normalizedTitle = cleanLeadingNoise(stripMarkdownText(title));
  const splitTerms = normalizedTitle.split(/[\s|｜:：\-–—,，、/()[\]{}【】（）]+/).map((term) => term.trim()).filter(Boolean);
  return [normalizedTitle, ...splitTerms];
}
function extractHeadingTerms(body) {
  return body.split("\n").map((line) => line.trim()).filter((line) => /^#{1,3}\s+/.test(line)).map((line) => cleanLeadingNoise(stripMarkdownText(line.replace(/^#{1,3}\s+/, "")))).filter(Boolean);
}
function extractEnglishTerms(text) {
  return text.match(/\b[A-Za-z][A-Za-z0-9+#.-]{2,}\b/g)?.map((term) => term) || [];
}
function extractChineseTerms(text) {
  return text.split(/[，。！？；：、\s|｜:：\-–—,/()[\]{}【】（）.!?]+/).map((term) => term.trim()).filter((term) => /^[\u4e00-\u9fff]{2,20}$/.test(term));
}
function rankKeywords(input) {
  const scoreMap = /* @__PURE__ */ new Map();
  let order = 0;
  for (const item of input) {
    const normalized = normalizeKeyword(item.keyword);
    if (isInvalidKeyword(normalized)) continue;
    const key = normalized.toLowerCase();
    const existing = scoreMap.get(key);
    if (existing) {
      existing.score += item.weight;
      continue;
    }
    scoreMap.set(key, {
      keyword: normalized,
      score: item.weight,
      order: order++
    });
  }
  return Array.from(scoreMap.values()).sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    if (a.order !== b.order) return a.order - b.order;
    return b.keyword.length - a.keyword.length;
  }).map((item) => item.keyword);
}
function pickKeywordLimit(limit) {
  if (!limit) return SEO_KEYWORD_MAX;
  return Math.min(Math.max(limit, SEO_KEYWORD_MIN), SEO_KEYWORD_MAX);
}
function getFallbackKeywords(title, tags) {
  return rankKeywords([
    ...tags.map((tag) => ({ keyword: tag, weight: 10 })),
    ...extractTitleTerms(title).map((term) => ({ keyword: term, weight: 8 }))
  ]);
}
function uniqueKeywords(input) {
  const seen = /* @__PURE__ */ new Set();
  const output = [];
  for (const item of input) {
    const key = item.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    output.push(item);
  }
  return output;
}
function sanitizeDescription(input) {
  return cleanLeadingNoise(input).trim().replace(/^([,，.。;；:：、\s])+|([,，.。;；:：、\s])+$/g, "");
}
function extractIntro(body) {
  const cleaned = stripMarkdownText(body);
  if (!cleaned) return "";
  const firstSentence = cleaned.split(/[。！？.!?]/).map((line) => line.trim()).find(Boolean) || cleaned;
  return truncateText(firstSentence, INTRO_MAX_LENGTH);
}
function buildPostSeoDescription(title, intro, body, maxLength = SEO_DESCRIPTION_MAX_LENGTH) {
  const normalizedIntro = intro ? stripMarkdownText(intro) : "";
  if (normalizedIntro.length >= 36) {
    return truncateText(sanitizeDescription(normalizedIntro), maxLength);
  }
  const cleanedBody = stripMarkdownText(body);
  const bestSentence = cleanedBody.split(/[。！？.!?]/).map((line) => line.trim()).find((line) => line.length >= 36) || cleanedBody || title;
  return truncateText(sanitizeDescription(bestSentence), maxLength);
}
function buildPostSeoKeywords(input) {
  const { title, tags, intro, body, limit } = input;
  const normalizedLimit = pickKeywordLimit(limit);
  const headingTerms = extractHeadingTerms(body).slice(0, 10);
  const corpus = [title, intro || "", ...headingTerms].join(" ");
  const rankedKeywords = rankKeywords([
    ...tags.map((tag) => ({ keyword: tag, weight: 10 })),
    ...extractTitleTerms(title).map((term) => ({ keyword: term, weight: 8 })),
    ...headingTerms.map((heading) => ({ keyword: heading, weight: 5 })),
    ...extractEnglishTerms(corpus).map((term) => ({ keyword: term, weight: 3 })),
    ...extractChineseTerms(corpus).map((term) => ({ keyword: term, weight: 2 }))
  ]);
  const picked = rankedKeywords.slice(0, normalizedLimit);
  if (picked.length >= SEO_KEYWORD_MIN) {
    return picked;
  }
  const fallback = getFallbackKeywords(title, tags);
  return uniqueKeywords([...picked, ...fallback]).slice(0, normalizedLimit);
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

export { getPostBySlug as a, getCoverFromTags as b, buildPostSeoDescription as c, buildPostSeoKeywords as d, getAllTags as e, getPostList as g };
