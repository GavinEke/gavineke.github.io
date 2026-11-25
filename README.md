# gavineke.com

Personal site built with [Astro](https://astro.build) and deployed to GitHub Pages by GitHub Actions.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # type-check and build to dist/
npm run preview
```

Requires Node 22.12 or newer.

## Edit content

Name, title and links live in [src/data/site.ts](src/data/site.ts).

## Deploy

Pushing to `master` runs [.github/workflows/deploy.yml](.github/workflows/deploy.yml). In the repository settings, set Pages > Source to **GitHub Actions**. The custom domain comes from [public/CNAME](public/CNAME).

`node scripts/generate-images.mjs` regenerates the social image and PNG icons from their SVG artwork. To refresh the multi-size ICO from the generated PNG, run this command with Pillow installed.

```sh
python3 -c 'from PIL import Image; Image.open("public/icon-512.png").save("public/favicon.ico", sizes=[(16,16),(24,24),(32,32),(64,64)], bitmap_format="bmp")'
```

The [shared layout](src/layouts/Base.astro) includes a Content Security Policy in the production HTML. It permits the [Cloudflare Web Analytics beacon and both collection modes](https://developers.cloudflare.com/web-analytics/faq/#what-do-i-need-to-add-to-my-content-security-policy-csp).
