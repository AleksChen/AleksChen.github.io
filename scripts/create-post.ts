import fs from "node:fs/promises";
import path from "node:path";

type Locale = "zh" | "en";

interface CliArgs {
  key: string;
  slugZh: string;
  slugEn: string;
  titleZh: string;
  titleEn: string;
  force: boolean;
}

const POSTS_DIR = path.join(process.cwd(), "src/content/posts");

function parseArgs(argv: string[]): CliArgs {
  const map = new Map<string, string>();
  let force = false;

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--force") {
      force = true;
      continue;
    }
    if (!arg.startsWith("--")) continue;

    const key = arg.replace(/^--/, "");
    const value = argv[i + 1];
    if (!value || value.startsWith("--")) {
      throw new Error(`Missing value for argument: --${key}`);
    }
    map.set(key, value);
    i += 1;
  }

  const key = map.get("key");
  if (!key) {
    throw new Error("Missing required argument: --key");
  }

  const titleZh = map.get("title-zh") || map.get("titleZh") || `${key}（中文标题）`;
  const titleEn = map.get("title-en") || map.get("titleEn") || `${key} (English title)`;

  return {
    key,
    slugZh: map.get("slug-zh") || map.get("slugZh") || key,
    slugEn: map.get("slug-en") || map.get("slugEn") || `${key}-en`,
    titleZh,
    titleEn,
    force,
  };
}

function nowIsoString(): string {
  return new Date().toISOString();
}

function buildFrontmatter(locale: Locale, input: CliArgs): string {
  const now = nowIsoString();
  const title = locale === "zh" ? input.titleZh : input.titleEn;
  const slug = locale === "zh" ? input.slugZh : input.slugEn;

  const seoDescription =
    locale === "zh"
      ? "请补充这篇中文文章的 SEO 描述。"
      : "Please fill in an SEO description for this English article.";

  return `---
title: ${title}
date: ${now}
updatedAt: ${now}
tags:
  - AI
draft: true
slug: ${slug}
locale: ${locale}
translationKey: ${input.key}
seoDescription: ${seoDescription}
seoKeywords:
  - ${locale === "zh" ? "关键词1" : "keyword-1"}
  - ${locale === "zh" ? "关键词2" : "keyword-2"}
---
`;
}

function buildBody(locale: Locale): string {
  if (locale === "zh") {
    return `
## 前言

请在这里编写中文正文。
`;
  }

  return `
## Introduction

Write the English content here.
`;
}

async function writePostFile(
  locale: Locale,
  input: CliArgs
): Promise<string> {
  const fileName = `${input.key}.${locale}.mdx`;
  const targetPath = path.join(POSTS_DIR, fileName);

  if (!input.force) {
    try {
      await fs.access(targetPath);
      throw new Error(
        `Target file already exists: ${path.relative(process.cwd(), targetPath)}`
      );
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code !== "ENOENT") {
        throw error;
      }
    }
  }

  const content = `${buildFrontmatter(locale, input)}${buildBody(locale)}`;
  await fs.writeFile(targetPath, content, "utf8");
  return targetPath;
}

function printUsage(): void {
  process.stdout.write(`Usage:
  pnpm run create-post -- --key 2603-your-topic \\
    --title-zh "中文标题" --title-en "English title" \\
    [--slug-zh zh-slug] [--slug-en en-slug(default: key-en)] [--force]
`);
}

async function main() {
  try {
    const args = parseArgs(process.argv.slice(2));
    await fs.mkdir(POSTS_DIR, { recursive: true });

    const zhPath = await writePostFile("zh", args);
    const enPath = await writePostFile("en", args);

    process.stdout.write(
      `Created:\n- ${path.relative(process.cwd(), zhPath)}\n- ${path.relative(process.cwd(), enPath)}\n`
    );
  } catch (error) {
    printUsage();
    process.stderr.write(`${(error as Error).message}\n`);
    process.exit(1);
  }
}

main().catch((error) => {
  process.stderr.write(`${(error as Error).message}\n`);
  process.exit(1);
});
