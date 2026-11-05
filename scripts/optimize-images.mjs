import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(currentDir, '..');
const assetsDir = path.join(rootDir, 'src', 'assets');
const publicDir = path.join(rootDir, 'public');

async function optimizeImages() {
  const fotoPath = path.join(assetsDir, 'foto.jpg');
  const rawFoto = await fs.readFile(fotoPath);
  const fotoBuffer = await sharp(rawFoto).rotate().toBuffer();

  await sharp(fotoBuffer)
    .resize(256, 256, { fit: 'cover' })
    .avif({ quality: 68 })
    .toFile(path.join(assetsDir, 'foto-256.avif'));

  await sharp(fotoBuffer)
    .resize(512, 512, { fit: 'cover' })
    .avif({ quality: 68 })
    .toFile(path.join(assetsDir, 'foto-512.avif'));

  await sharp(fotoBuffer)
    .resize(256, 256, { fit: 'cover' })
    .webp({ quality: 78 })
    .toFile(path.join(assetsDir, 'foto-256.webp'));

  await sharp(fotoBuffer)
    .resize(512, 512, { fit: 'cover' })
    .webp({ quality: 78 })
    .toFile(path.join(assetsDir, 'foto-512.webp'));

  const compressedFoto = await sharp(fotoBuffer)
    .resize(512, 512, { fit: 'cover' })
    .jpeg({ quality: 80, mozjpeg: true })
    .toBuffer();
  await fs.writeFile(fotoPath, compressedFoto);

  const projectImages = ['nutri-naty', 'stride-store', 'super-mario'];

  for (const name of projectImages) {
    const inputPath = path.join(assetsDir, `${name}.png`);
    const imgBuffer = await fs.readFile(inputPath);

    await sharp(imgBuffer)
      .resize({ width: 640, withoutEnlargement: true })
      .avif({ quality: 65 })
      .toFile(path.join(assetsDir, `${name}-640.avif`));

    await sharp(imgBuffer)
      .resize({ width: 1200, withoutEnlargement: true })
      .avif({ quality: 65 })
      .toFile(path.join(assetsDir, `${name}-1200.avif`));

    await sharp(imgBuffer)
      .resize({ width: 640, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(path.join(assetsDir, `${name}-640.webp`));

    await sharp(imgBuffer)
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(path.join(assetsDir, `${name}-1200.webp`));

    const compressedPng = await sharp(imgBuffer)
      .resize({ width: 960, withoutEnlargement: true })
      .png({ compressionLevel: 9, palette: true, quality: 80 })
      .toBuffer();
    await fs.writeFile(inputPath, compressedPng);
  }

  const ogSvg = `
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="glow" cx="80%" cy="25%" r="60%">
          <stop offset="0%" stop-color="#e63946" stop-opacity="0.28" />
          <stop offset="100%" stop-color="#0a0a0a" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="1200" height="630" fill="#0a0a0a" />
      <rect width="1200" height="630" fill="url(#glow)" />
      <rect x="64" y="64" width="1072" height="502" rx="24" fill="#111111" stroke="#262626" stroke-width="2" />
      <text x="120" y="165" font-family="monospace" font-size="36" font-weight="700" fill="#e63946">&lt;/PL&gt;</text>
      <text x="120" y="300" font-family="sans-serif" font-size="76" font-weight="700" fill="#f0f0f0">Pedro Lombardi</text>
      <text x="120" y="375" font-family="sans-serif" font-size="34" font-weight="500" fill="#b3b3b3">Desenvolvedor Full Stack · React · TypeScript · Node.js</text>
      <rect x="120" y="445" width="96" height="6" rx="3" fill="#e63946" />
      <text x="120" y="500" font-family="monospace" font-size="22" fill="#8e8e8e">github.com/pedrinque-dev</text>
    </svg>
  `;

  await sharp(Buffer.from(ogSvg))
    .png({ compressionLevel: 9, palette: true })
    .toFile(path.join(publicDir, 'og-image.png'));
}

void optimizeImages();
