import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://gavineke.com',
  output: 'static',
  integrations: [sitemap()],
  // Keeps all CSS external so the meta CSP can omit 'unsafe-inline'.
  build: { inlineStylesheets: 'never' },
  vite: { build: { assetsInlineLimit: 0 } },
});
