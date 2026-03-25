import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

type Locale = "zh" | "en";

interface PostMeta {
  slug?: string;
  locale?: string;
  translationKey?: string;
  draft?: boolean;
}

const POSTS_DIR = path.join(process.cwd(), "src/content/posts");

async function collectMdxFiles(dir: string): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectMdxFiles(fullPath)));
      continue;
    }
    if (entry.isFile() && entry.name.endsWith(".mdx")) {
      files.push(fullPath);
    }
  }

  return files;
}

function getRelative(filePath: string): string {
  return path.relative(process.cwd(), filePath);
}

function resolveLocale(raw: string | undefined): Locale | null {
  if (raw === "zh" || raw === "en") return raw;
  return null;
}

async function main() {
  const files = await collectMdxFiles(POSTS_DIR);

  const hardErrors: string[] = [];
  const warnings: string[] = [];

  const slugLocaleMap = new Map<string, string>();
  const globalSlugMap = new Map<string, string>();
  const keyLocaleMap = new Map<string, string>();
  const keyLocaleSetMap = new Map<string, Set<Locale>>();

  for (const filePath of files) {
    const raw = await fs.readFile(filePath, "utf8");
    const { data } = matter(raw);
    const meta = data as PostMeta;
    const rel = getRelative(filePath);
    const fallbackSlug = path.basename(filePath, ".mdx");
    const slug = meta.slug || fallbackSlug;
    const locale = resolveLocale(meta.locale);
    const translationKey = meta.translationKey;

    if (!locale) {
      hardErrors.push(`${rel}: locale must be "zh" or "en".`);
      continue;
    }

    if (!translationKey || !translationKey.trim()) {
      hardErrors.push(`${rel}: translationKey is required.`);
      continue;
    }

    const slugLocaleKey = `${locale}:${slug}`;
    if (slugLocaleMap.has(slugLocaleKey)) {
      hardErrors.push(
        `${rel}: duplicate slug in locale "${locale}" -> "${slug}" (already used by ${slugLocaleMap.get(
          slugLocaleKey
        )}).`
      );
    } else {
      slugLocaleMap.set(slugLocaleKey, rel);
    }

    if (globalSlugMap.has(slug)) {
      hardErrors.push(
        `${rel}: duplicate global slug "${slug}" (already used by ${globalSlugMap.get(
          slug
        )}). Make en slug unique (for example: "*-en").`
      );
    } else {
      globalSlugMap.set(slug, rel);
    }

    const keyLocaleKey = `${translationKey}:${locale}`;
    if (keyLocaleMap.has(keyLocaleKey)) {
      hardErrors.push(
        `${rel}: duplicate translationKey in locale "${locale}" -> "${translationKey}" (already used by ${keyLocaleMap.get(
          keyLocaleKey
        )}).`
      );
    } else {
      keyLocaleMap.set(keyLocaleKey, rel);
    }

    if (!keyLocaleSetMap.has(translationKey)) {
      keyLocaleSetMap.set(translationKey, new Set<Locale>());
    }
    keyLocaleSetMap.get(translationKey)!.add(locale);
  }

  keyLocaleSetMap.forEach((set, key) => {
    if (!set.has("zh") || !set.has("en")) {
      warnings.push(
        `translationKey "${key}" has only ${Array.from(set).join(", ")} content.`
      );
    }
  });

  process.stdout.write(`Scanned ${files.length} post files.\n`);

  if (warnings.length > 0) {
    process.stdout.write(`Warnings (${warnings.length}):\n`);
    warnings.forEach((message) => {
      process.stdout.write(`- ${message}\n`);
    });
  }

  if (hardErrors.length > 0) {
    process.stderr.write(`Errors (${hardErrors.length}):\n`);
    hardErrors.forEach((message) => {
      process.stderr.write(`- ${message}\n`);
    });
    process.exit(1);
  }

  process.stdout.write("i18n post checks passed.\n");
}

main().catch((error) => {
  process.stderr.write(`${(error as Error).message}\n`);
  process.exit(1);
});
