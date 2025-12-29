import { readdir, stat, writeFile, unlink } from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const TARGET_DIR = path.join(process.cwd(), 'public/post-assets');
const QUALITY = 80;
const MIN_GAIN = 0.1; // 10% minimum gain required to overwrite

async function getAllImages(dir: string): Promise<string[]> {
  const files = await readdir(dir);
  const paths: string[] = [];

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stats = await stat(filePath);

    if (stats.isDirectory()) {
      paths.push(...(await getAllImages(filePath)));
    } else if (/\.(png|jpe?g|webp)$/i.test(file)) {
      paths.push(filePath);
    }
  }
  return paths;
}

async function compressImage(filePath: string) {
  try {
    const ext = path.extname(filePath).toLowerCase();
    const isWebP = ext === '.webp';
    const targetPath = isWebP 
      ? filePath 
      : filePath.replace(new RegExp(`${ext}$`, 'i'), '.webp');
    
    let transform = sharp(filePath);
    
    // Convert everything to WebP
    transform = transform.webp({ quality: QUALITY });

    const buffer = await transform.toBuffer();
    const originalSize = (await stat(filePath)).size;
    const newSize = buffer.length;
    const gain = 1 - newSize / originalSize;

    // Determine if we should save:
    // 1. If it's a format conversion (e.g. PNG -> WebP), we generally want to do it 
    //    to unify formats, even if gain is small (though WebP usually wins).
    // 2. If it's already WebP, only save if gain meets threshold.
    const shouldSave = !isWebP || gain >= MIN_GAIN;

    if (shouldSave) {
      await writeFile(targetPath, buffer);
      
      // If we converted from another format, delete the original
      if (!isWebP) {
        await unlink(filePath);
        console.log(`✅ Converted: ${path.relative(process.cwd(), filePath)} -> ${path.basename(targetPath)} (${(originalSize / 1024).toFixed(2)}KB -> ${(newSize / 1024).toFixed(2)}KB, -${(gain * 100).toFixed(1)}%)`);
      } else {
        console.log(`✅ Compressed: ${path.relative(process.cwd(), filePath)} (${(originalSize / 1024).toFixed(2)}KB -> ${(newSize / 1024).toFixed(2)}KB, -${(gain * 100).toFixed(1)}%)`);
      }
    } else {
      console.log(`⏭️  Skipped (gain < ${(MIN_GAIN * 100)}%): ${path.relative(process.cwd(), filePath)}`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error);
  }
}

async function main() {
  console.log('Starting image compression & conversion to WebP...');
  console.log(`Target Directory: ${TARGET_DIR}`);
  console.log(`Quality: ${QUALITY}`);
  
  const images = await getAllImages(TARGET_DIR);
  console.log(`Found ${images.length} images.`);
  
  for (const img of images) {
    await compressImage(img);
  }
  console.log('Done.');
}

main().catch(console.error);

