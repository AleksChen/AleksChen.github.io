import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import sharp from "sharp";

interface PostMeta {
  title: string;
  slug?: string;
  tags?: string[];
}

const WIDTH = 1200;
const HEIGHT = 630;
const POSTS_DIR = path.join(process.cwd(), "src/content/posts");
const OUTPUT_DIR = path.join(process.cwd(), "public/post-assets/og");

function escapeXml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function wrapText(input: string, maxPerLine = 20, maxLines = 3): string[] {
  const chars = Array.from(input.trim());
  const lines: string[] = [];
  let line = "";

  for (const char of chars) {
    if ((line + char).length > maxPerLine) {
      lines.push(line);
      line = char;
      if (lines.length >= maxLines) break;
      continue;
    }
    line += char;
  }

  if (lines.length < maxLines && line) {
    lines.push(line);
  }

  if (lines.length > 0) {
    const consumed = lines.join("").length;
    if (consumed < chars.length) {
      lines[lines.length - 1] = `${lines[lines.length - 1].replace(/\.\.\.$/, "")}...`;
    }
  }

  return lines.slice(0, maxLines);
}

function renderSvg(title: string, tags: string[]): string {
  const lines = wrapText(title);
  const tagText = tags.length > 0 ? tags.join(" · ") : "Tech Notes";
  const yStart = 260;
  const lineHeight = 72;

  const titleSvg = lines
    .map((line, idx) => {
      const y = yStart + idx * lineHeight;
      return `<text x="88" y="${y}" fill="#ffffff" font-size="56" font-weight="700" font-family="PingFang SC, Microsoft YaHei, sans-serif">${escapeXml(line)}</text>`;
    })
    .join("");

  return `<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="45%" stop-color="#1d4ed8"/>
      <stop offset="100%" stop-color="#0ea5e9"/>
    </linearGradient>
    <linearGradient id="card" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0.06"/>
    </linearGradient>
  </defs>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>
  <circle cx="1060" cy="64" r="180" fill="#38bdf8" fill-opacity="0.16"/>
  <circle cx="100" cy="580" r="220" fill="#6366f1" fill-opacity="0.18"/>
  <rect x="52" y="58" width="${WIDTH - 104}" height="${HEIGHT - 116}" rx="28" fill="url(#card)" stroke="#ffffff" stroke-opacity="0.28"/>
  <text x="88" y="145" fill="#e2e8f0" font-size="30" font-weight="600" font-family="PingFang SC, Microsoft YaHei, sans-serif">Aleks 技术博客</text>
  ${titleSvg}
  <text x="88" y="548" fill="#cbd5e1" font-size="30" font-weight="500" font-family="PingFang SC, Microsoft YaHei, sans-serif">${escapeXml(tagText)}</text>
</svg>`;
}

async function main() {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  const files = (await fs.readdir(POSTS_DIR)).filter((name) =>
    name.endsWith(".mdx")
  );

  for (const fileName of files) {
    const filePath = path.join(POSTS_DIR, fileName);
    const raw = await fs.readFile(filePath, "utf-8");
    const { data } = matter(raw);
    const meta = data as PostMeta;
    const slug = meta.slug || fileName.replace(/\.mdx$/, "");
    const title = meta.title || slug;
    const tags = Array.isArray(meta.tags) ? meta.tags.map(String) : [];

    const svg = renderSvg(title, tags);
    const outPath = path.join(OUTPUT_DIR, `${slug}.png`);

    await sharp(Buffer.from(svg))
      .resize(WIDTH, HEIGHT, { fit: "cover" })
      .png({ compressionLevel: 9 })
      .toFile(outPath);

    process.stdout.write(`generated: ${path.relative(process.cwd(), outPath)}\n`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
