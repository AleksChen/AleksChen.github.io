import { readdir, readFile, unlink, stat } from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import { createInterface } from "readline";

const POSTS_DIR = path.join(process.cwd(), "src/content/posts");
const ASSETS_DIR = path.join(process.cwd(), "public/post-assets");

const MARKDOWN_IMAGE_REGEX = /!\[[^\]]*]\((\/post-assets\/[^)]+)\)/g;
const HTML_IMAGE_REGEX = /<img[^>]+src=["'](\/post-assets\/[^"']+)["']/g;
const FRONTMATTER_ASSET_REGEX =
  /^\s*(?:cover|seoImage)\s*:\s*(?:"([^"]+)"|'([^']+)'|([^\s#]+))\s*$/gm;

function normalizeAssetPath(rawPath: string): string | null {
  const cleaned = decodeURIComponent(rawPath).split(/[?#]/)[0].trim();
  const normalized = cleaned.replace(/\\/g, "/");

  if (!normalized.startsWith("/post-assets/")) {
    return null;
  }

  return normalized.slice("/post-assets/".length);
}

async function listFilesRecursive(rootDir: string): Promise<string[]> {
  const entries = await readdir(rootDir);
  const files: string[] = [];

  for (const entry of entries) {
    const entryPath = path.join(rootDir, entry);
    const entryStat = await stat(entryPath);

    if (entryStat.isDirectory()) {
      files.push(...(await listFilesRecursive(entryPath)));
      continue;
    }

    files.push(entryPath);
  }

  return files;
}

function collectUsedAssetsByRegex(
  content: string,
  regex: RegExp,
  usedImages: Set<string>
) {
  for (const match of content.matchAll(regex)) {
    const candidate = match[1];
    if (!candidate) continue;
    const normalized = normalizeAssetPath(candidate);
    if (!normalized) continue;
    usedImages.add(normalized);
  }
}

function collectUsedAssetsFromFrontmatter(content: string, usedImages: Set<string>) {
  for (const match of content.matchAll(FRONTMATTER_ASSET_REGEX)) {
    const candidate = match[1] || match[2] || match[3];
    if (!candidate) continue;
    const normalized = normalizeAssetPath(candidate);
    if (!normalized) continue;
    usedImages.add(normalized);
  }
}

async function getUsedImages(): Promise<Set<string>> {
  const usedImages = new Set<string>();

  if (!existsSync(POSTS_DIR)) {
    console.warn(`Posts directory not found: ${POSTS_DIR}`);
    return usedImages;
  }

  const files = await listFilesRecursive(POSTS_DIR);
  const mdxFiles = files.filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  for (const file of mdxFiles) {
    const content = await readFile(file, "utf-8");
    collectUsedAssetsByRegex(content, MARKDOWN_IMAGE_REGEX, usedImages);
    collectUsedAssetsByRegex(content, HTML_IMAGE_REGEX, usedImages);
    collectUsedAssetsFromFrontmatter(content, usedImages);
  }

  return usedImages;
}

async function getAssetFiles(): Promise<string[]> {
  if (!existsSync(ASSETS_DIR)) {
    console.warn(`Assets directory not found: ${ASSETS_DIR}`);
    return [];
  }

  const files = await listFilesRecursive(ASSETS_DIR);
  return files
    .map((filePath) => path.relative(ASSETS_DIR, filePath).replace(/\\/g, "/"))
    .filter((file) => file !== ".DS_Store" && !file.endsWith("/.DS_Store"));
}

async function main() {
  console.log("Scanning for unused images...");

  const usedImages = await getUsedImages();
  const assetFiles = await getAssetFiles();
  const unusedFiles = assetFiles.filter((file) => !usedImages.has(file));

  if (unusedFiles.length === 0) {
    console.log("No unused images found.");
    return;
  }

  console.log(`Found ${unusedFiles.length} unused images:`);
  unusedFiles.forEach((file) => console.log(`- ${file}`));

  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("\nDo you want to delete these files? (y/n) ", async (answer) => {
    if (answer.toLowerCase() === "y") {
      console.log("Deleting files...");
      for (const file of unusedFiles) {
        await unlink(path.join(ASSETS_DIR, file));
        console.log(`Deleted: ${file}`);
      }
      console.log("Done.");
    } else {
      console.log("Operation cancelled.");
    }
    rl.close();
  });
}

main().catch(console.error);
