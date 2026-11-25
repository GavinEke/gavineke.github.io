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

### Production security headers

GitHub Pages serves the static files. A Cloudflare Response Header Transform Rule adds the [security headers](config/security-headers.mjs) to responses for the proxied `gavineke.com` hostname, including the site's 404s. The HTML also carries the CSP directives supported in a meta tag.

Set the GitHub Actions repository variable `CLOUDFLARE_ZONE_ID` and repository secret `CLOUDFLARE_API_TOKEN` to enable the header deployment step. The token needs **Zone → Transform Rules → Edit** for the `gavineke.com` zone. The workflow maintains a single named rule after each Pages deployment. With the same two environment variables set locally, `node scripts/deploy-security-headers.mjs` applies the rule directly.

`npm run preview` serves the headers on built files, including `/` and `/404.html`. Astro's local fallback for a missing URL serves the HTML meta policy only. After deployment, use `curl -I https://gavineke.com/` and `curl -I https://gavineke.com/missing` to check both response types at the edge. The CSP permits the [Web Analytics beacon and both collection modes](https://developers.cloudflare.com/web-analytics/faq/#what-do-i-need-to-add-to-my-content-security-policy-csp). Analytics activation is managed in Cloudflare.
