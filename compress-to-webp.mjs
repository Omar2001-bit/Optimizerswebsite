/**
 * Convert all PNG/JPG images to WebP in src/assets/ for much better compression.
 * Also updates all import references in src/ to point to the new .webp files.
 * Run: node compress-to-webp.mjs
 */
import sharp from 'sharp';
import { readdir, stat, unlink, readFile, writeFile } from 'fs/promises';
import { join, extname, basename } from 'path';

const ASSETS_DIR = './src/assets';
const SRC_DIR = './src';
const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg'];

async function getAllFiles(dir, extensions) {
    const entries = await readdir(dir, { withFileTypes: true });
    const files = [];
    for (const entry of entries) {
        const fullPath = join(dir, entry.name);
        if (entry.isDirectory()) {
            files.push(...(await getAllFiles(fullPath, extensions)));
        } else if (extensions.includes(extname(entry.name).toLowerCase())) {
            files.push(fullPath);
        }
    }
    return files;
}

async function convertToWebp(filePath) {
    const originalStats = await stat(filePath);
    const originalSize = originalStats.size;
    const webpPath = filePath.replace(/\.(png|jpe?g)$/i, '.webp');

    try {
        const image = sharp(filePath);
        const metadata = await image.metadata();

        let pipeline = sharp(filePath);
        // Resize very large images
        if (metadata.width > 2000) {
            pipeline = pipeline.resize({ width: 2000, withoutEnlargement: true });
        }

        await pipeline
            .webp({ quality: 80, effort: 6 })
            .toFile(webpPath);

        const newStats = await stat(webpPath);
        const newSize = newStats.size;
        const savings = ((1 - newSize / originalSize) * 100).toFixed(1);

        // Remove the original file
        await unlink(filePath);

        return {
            originalPath: filePath,
            newPath: webpPath,
            originalSize,
            newSize,
            savings: `${savings}%`,
            status: 'converted'
        };
    } catch (err) {
        // Clean up webp file if it exists
        try { await unlink(webpPath); } catch { }
        return {
            originalPath: filePath,
            newPath: filePath,
            originalSize,
            newSize: originalSize,
            savings: '0%',
            status: `error: ${err.message}`
        };
    }
}

async function updateImports(conversions) {
    // Get all source files that might reference images
    const sourceExtensions = ['.ts', '.tsx', '.js', '.jsx', '.css', '.html'];
    const sourceFiles = await getAllFiles(SRC_DIR, sourceExtensions);

    let updatedFiles = 0;

    for (const sourceFile of sourceFiles) {
        let content = await readFile(sourceFile, 'utf-8');
        let modified = false;

        for (const conversion of conversions) {
            if (conversion.status !== 'converted') continue;

            // Get the original filename and new filename
            const originalName = basename(conversion.originalPath);
            const newName = basename(conversion.newPath);

            if (content.includes(originalName)) {
                content = content.replaceAll(originalName, newName);
                modified = true;
            }
        }

        if (modified) {
            await writeFile(sourceFile, content, 'utf-8');
            updatedFiles++;
            console.log(`  Updated imports in: ${sourceFile}`);
        }
    }

    return updatedFiles;
}

async function main() {
    console.log('🔍 Scanning for images in', ASSETS_DIR, '...\n');
    const images = await getAllFiles(ASSETS_DIR, IMAGE_EXTENSIONS);
    console.log(`Found ${images.length} images to convert.\n`);

    console.log('--- Converting to WebP ---\n');

    let totalOriginal = 0;
    let totalNew = 0;
    const conversions = [];

    for (const img of images) {
        const result = await convertToWebp(img);
        conversions.push(result);
        totalOriginal += result.originalSize;
        totalNew += result.newSize;

        const origKB = (result.originalSize / 1024).toFixed(1);
        const newKB = (result.newSize / 1024).toFixed(1);
        console.log(`  ${result.status.padEnd(20)} ${origKB}KB → ${newKB}KB (${result.savings})  ${basename(result.originalPath)} → ${basename(result.newPath)}`);
    }

    console.log('\n--- Updating import references ---\n');
    const updatedFiles = await updateImports(conversions);
    console.log(`\n  Updated ${updatedFiles} source files.\n`);

    console.log('='.repeat(70));
    console.log(`Total: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB → ${(totalNew / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Saved: ${((totalOriginal - totalNew) / 1024 / 1024).toFixed(2)} MB (${((1 - totalNew / totalOriginal) * 100).toFixed(1)}%)`);
    console.log('='.repeat(70));
}

main().catch(console.error);
