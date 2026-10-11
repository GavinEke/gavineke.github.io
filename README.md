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

`node scripts/generate-images.mjs` regenerates the social image and icons.
