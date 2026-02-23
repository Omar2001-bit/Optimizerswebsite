/**
 * One-time image compression script using sharp.
 * Compresses all PNG and JPG/JPEG images in src/assets/ in-place.
 * Run: node compress-images.mjs
 */
import sharp from 'sharp';
import { readdir, stat, rename, unlink } from 'fs/promises';
import { join, extname } from 'path';

const ASSETS_DIR = './src/assets';
const EXTENSIONS = ['.png', '.jpg', '.jpeg'];

async function getAllImages(dir) {
    const entries = await readdir(dir, { withFileTypes: true });
    const files = [];
    for (const entry of entries) {
        const fullPath = join(dir, entry.name);
        if (entry.isDirectory()) {
            files.push(...(await getAllImages(fullPath)));
        } else if (EXTENSIONS.includes(extname(entry.name).toLowerCase())) {
            files.push(fullPath);
        }
    }
    return files;
}

async function compressImage(filePath) {
    const ext = extname(filePath).toLowerCase();
    const originalStats = await stat(filePath);
    const originalSize = originalStats.size;

    const tempPath = filePath + '.tmp';

    try {
        const image = sharp(filePath);
        const metadata = await image.metadata();

        // For very large images (>2000px), resize to max 2000px width
        let pipeline = sharp(filePath);
        if (metadata.width > 2000) {
            pipeline = pipeline.resize({ width: 2000, withoutEnlargement: true });
        }

        if (ext === '.png') {
            await pipeline
                .png({ quality: 80, compressionLevel: 9, effort: 10 })
                .toFile(tempPath);
        } else {
            // jpg/jpeg
            await pipeline
                .jpeg({ quality: 80, mozjpeg: true })
                .toFile(tempPath);
        }

        const newStats = await stat(tempPath);
        const newSize = newStats.size;
        const savings = ((1 - newSize / originalSize) * 100).toFixed(1);

        if (newSize < originalSize) {
            await unlink(filePath);
            await rename(tempPath, filePath);
            return { filePath, originalSize, newSize, savings: `${savings}%`, status: 'compressed' };
        } else {
            await unlink(tempPath);
            return { filePath, originalSize, newSize, savings: '0%', status: 'skipped (already optimal)' };
        }
    } catch (err) {
        // Clean up temp file if it exists
        try { await unlink(tempPath); } catch { }
        return { filePath, originalSize, newSize: originalSize, savings: '0%', status: `error: ${err.message}` };
    }
}

async function main() {
    console.log('🔍 Scanning for images in', ASSETS_DIR, '...\n');
    const images = await getAllImages(ASSETS_DIR);
    console.log(`Found ${images.length} images to process.\n`);

    let totalOriginal = 0;
    let totalNew = 0;

    for (const img of images) {
        const result = await compressImage(img);
        totalOriginal += result.originalSize;
        totalNew += result.newSize;

        const origKB = (result.originalSize / 1024).toFixed(1);
        const newKB = (result.newSize / 1024).toFixed(1);
        console.log(`  ${result.status.padEnd(30)} ${origKB}KB → ${newKB}KB (${result.savings})  ${img}`);
    }

    console.log('\n' + '='.repeat(70));
    console.log(`Total: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB → ${(totalNew / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Saved: ${((totalOriginal - totalNew) / 1024 / 1024).toFixed(2)} MB (${((1 - totalNew / totalOriginal) * 100).toFixed(1)}%)`);
    console.log('='.repeat(70));
}

main().catch(console.error);
