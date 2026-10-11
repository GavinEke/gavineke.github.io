// Regenerates raster icons from SVG. Run: node scripts/generate-images.mjs
import sharp from 'sharp';
import { readFile } from 'node:fs/promises';

const favicon = await readFile('public/favicon.svg');
await sharp(favicon).resize(180, 180).png().toFile('public/apple-touch-icon.png');
await sharp(favicon).resize(32, 32).png().toFile('public/favicon.png');

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="t" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#22d3ee"/>
      <stop offset="0.55" stop-color="#a78bfa"/>
      <stop offset="1" stop-color="#f472b6"/>
    </linearGradient>
    <radialGradient id="a" cx="20%" cy="30%" r="45%"><stop offset="0" stop-color="#22d3ee" stop-opacity="0.35"/><stop offset="1" stop-color="#22d3ee" stop-opacity="0"/></radialGradient>
    <radialGradient id="b" cx="85%" cy="75%" r="50%"><stop offset="0" stop-color="#8b5cf6" stop-opacity="0.4"/><stop offset="1" stop-color="#8b5cf6" stop-opacity="0"/></radialGradient>
    <pattern id="g" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0H0V48" fill="none" stroke="#ffffff" stroke-opacity="0.05"/></pattern>
  </defs>
  <rect width="1200" height="630" fill="#070a12"/>
  <rect width="1200" height="630" fill="url(#g)"/>
  <rect width="1200" height="630" fill="url(#a)"/>
  <rect width="1200" height="630" fill="url(#b)"/>
  <text x="80" y="260" font-family="Menlo, Courier, monospace" font-size="32" fill="#22d3ee">$ whoami</text>
  <text x="80" y="380" font-family="Helvetica, Arial, sans-serif" font-size="128" font-weight="700" letter-spacing="-4" fill="url(#t)">Gavin Eke</text>
  <text x="84" y="460" font-family="Menlo, Courier, monospace" font-size="40" fill="#e8ecf6">Cyber Security Engineer</text>
</svg>`;
await sharp(Buffer.from(og)).png().toFile('public/og-image.png');
