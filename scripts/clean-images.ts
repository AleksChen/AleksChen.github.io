import { readdir, readFile, unlink, stat } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { createInterface } from 'readline';

const POSTS_DIR = path.join(process.cwd(), 'content/posts');
const ASSETS_DIR = path.join(process.cwd(), 'public/post-assets');

// Regex to find image paths
// Matches markdown images: ![alt](/post-assets/img.png)
// Matches HTML images: <img src="/post-assets/img.png" />
// Matches frontmatter cover: cover: /post-assets/img.png
const IMG_REGEX = /\/post-assets\/([^)\s"']+)/g;

async function getAllFiles(dir: string): Promise<string[]> {
  const dirents = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    dirents.map((dirent) => {
      const res = path.resolve(dir, dirent.name);
      return dirent.isDirectory() ? getAllFiles(res) : res;
    })
  );
  return Array.prototype.concat(...files);
}

async function getUsedImages(): Promise<Set<string>> {
  const usedImages = new Set<string>();
  
  if (!existsSync(POSTS_DIR)) {
    console.warn(`Posts directory not found: ${POSTS_DIR}`);
    return usedImages;
  }

  const files = await readdir(POSTS_DIR);
  const mdxFiles = files.filter(f => f.endsWith('.mdx') || f.endsWith('.md'));

  for (const file of mdxFiles) {
    const content = await readFile(path.join(POSTS_DIR, file), 'utf-8');
    const matches = content.matchAll(IMG_REGEX);
    for (const match of matches) {
      if (match[1]) {
        // Decode URI component to handle spaces/special chars
        let filename = decodeURIComponent(match[1]);
        // Remove query params or hash
        filename = filename.split(/[?#]/)[0];
        
        usedImages.add(filename);
      }
    }
  }

  return usedImages;
}

async function getAssetFiles(): Promise<string[]> {
  if (!existsSync(ASSETS_DIR)) {
    console.warn(`Assets directory not found: ${ASSETS_DIR}`);
    return [];
  }

  const files = await readdir(ASSETS_DIR);
  // Filter out 'cover' directory and other directories if necessary
  // We only want to clean up files that are potential orphans.
  // We will check if it's a file.
  const assetFiles: string[] = [];

  for (const file of files) {
    const filePath = path.join(ASSETS_DIR, file);
    const stats = await stat(filePath);
    if (stats.isFile() && file !== '.DS_Store') {
      assetFiles.push(file);
    }
  }
  
  return assetFiles;
}

async function main() {
  console.log('Scanning for unused images...');
  
  const usedImages = await getUsedImages();
  const assetFiles = await getAssetFiles();
  
  const unusedFiles = assetFiles.filter(file => !usedImages.has(file));
  
  if (unusedFiles.length === 0) {
    console.log('No unused images found.');
    return;
  }
  
  console.log(`Found ${unusedFiles.length} unused images:`);
  unusedFiles.forEach(f => console.log(`- ${f}`));
  
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('\nDo you want to delete these files? (y/n) ', async (answer) => {
    if (answer.toLowerCase() === 'y') {
      console.log('Deleting files...');
      for (const file of unusedFiles) {
        await unlink(path.join(ASSETS_DIR, file));
        console.log(`Deleted: ${file}`);
      }
      console.log('Done.');
    } else {
      console.log('Operation cancelled.');
    }
    rl.close();
  });
}

main().catch(console.error);

