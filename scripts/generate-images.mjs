// One-off: regenerates raster icons from SVG. Run: node scripts/generate-images.mjs
import sharp from 'sharp';
import { readFile } from 'node:fs/promises';

const favicon = await readFile('public/favicon.svg');
await sharp(favicon).resize(180, 180).png().toFile('public/apple-touch-icon.png');
await sharp(favicon).resize(32, 32).png().toFile('public/favicon.png');

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <pattern id="g" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M48 0H0V48" fill="none" stroke="#3ddc97" stroke-opacity="0.08"/>
    </pattern>
    <radialGradient id="r" cx="15%" cy="0%" r="70%">
      <stop offset="0" stop-color="#3ddc97" stop-opacity="0.2"/>
      <stop offset="1" stop-color="#3ddc97" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#0b0f14"/>
  <rect width="1200" height="630" fill="url(#g)"/>
  <rect width="1200" height="630" fill="url(#r)"/>
  <text x="80" y="250" font-family="Menlo, Courier, monospace" font-size="32" fill="#3ddc97">$ whoami</text>
  <text x="80" y="370" font-family="Helvetica, Arial, sans-serif" font-size="120" font-weight="800" fill="#e6edf3">Gavin Eke</text>
  <text x="80" y="450" font-family="Menlo, Courier, monospace" font-size="40" fill="#3ddc97">Cyber Security Engineer</text>
  <text x="80" y="560" font-family="Helvetica, Arial, sans-serif" font-size="28" fill="#9aa7b4">gavineke.com</text>
</svg>`;
await sharp(Buffer.from(og)).png().toFile('public/og-image.png');
