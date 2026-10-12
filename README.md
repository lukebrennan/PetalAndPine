# Petal & Pine

A static flower-shop website built with Astro and deployed from GitHub to GitHub Pages. Future edits happen directly in this repository; WordPress is not required.

## Development

Use Node.js 24.19.0 (pinned in `.node-version`).

```bash
npm ci
npm run dev
```

The development server uses port 4321 and serves the site under `/PetalAndPine/`, matching the GitHub Pages project path.

```bash
npm run build
npm run preview
```

The build checks Astro/TypeScript and generates static files in `dist/`. Fonts and images are bundled with the site; visitors do not need external font or image services.

## GitHub Pages

The deployment workflow builds every push to `main`, checks pull requests without publishing them, and deploys the `dist/` artifact to GitHub Pages. Action releases are pinned to their official commit SHAs.

In this repository's **Settings → Pages**, set **Build and deployment → Source** to **GitHub Actions**. GitHub Free requires a public repository for Pages. After pushing `main`, check the **Deploy site to GitHub Pages** workflow under **Actions**. If Pages was enabled after the first run, rerun that workflow.

The configured public address is `https://lukebrennan.github.io/PetalAndPine/`. This address is only live after a successful Pages deployment. A custom domain is optional.

## Making changes

- `src/data/site.ts`: headline, introduction, story, bouquet inspiration, and real contact details.
- `src/pages/index.astro`: page structure and sections.
- `src/styles/global.css`: colours, typography, and responsive layout.
- `src/assets/bouquet.png`: generated decorative floral imagery; it does not represent a guaranteed stock item.
- `astro.config.mjs`: public site URL and project base path. Update these if the repository name or domain changes.

No address, opening hours, prices, delivery promises, or checkout have been invented. Contact links only appear once real details are supplied. The initial bouquet cards are inspiration, not an inventory or ordering system.

GitHub Pages serves static pages. A working order form, payment flow, stock management, or email subscription would need a separately connected service.
