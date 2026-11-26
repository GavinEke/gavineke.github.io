import { copyFile } from 'node:fs/promises';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://gavineke.com',
  output: 'static',
  integrations: [
    sitemap(),
    {
      name: 'public-file-aliases',
      hooks: {
        'astro:build:done': async ({ dir }) => {
          // Publish conventional URLs from the same files used by the site.
          await Promise.all([
            copyFile(new URL('sitemap-index.xml', dir), new URL('sitemap.xml', dir)),
            copyFile(new URL('site.webmanifest', dir), new URL('manifest.json', dir)),
          ]);
        },
      },
    },
  ],
  // Keeps all CSS external so the meta CSP can omit 'unsafe-inline'.
  build: { inlineStylesheets: 'never' },
  vite: { build: { assetsInlineLimit: 0 } },
});
