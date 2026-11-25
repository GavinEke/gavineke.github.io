import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { securityHeaders } from './config/security-headers.mjs';

export default defineConfig({
  site: 'https://gavineke.com',
  output: 'static',
  integrations: [sitemap()],
  server: ({ command }) => command === 'preview' ? { headers: securityHeaders } : {},
  // Keeps all CSS external so the meta CSP can omit 'unsafe-inline'.
  build: { inlineStylesheets: 'never' },
  vite: { build: { assetsInlineLimit: 0 } },
});
