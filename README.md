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

- `src/data/site.ts`: shop profile, sample contact details/hours, palettes, example prices, occasions, and FAQs.
- `src/pages/`: home, flower collection, three bouquet detail pages, occasions, story, flower care, contact, and custom 404 page.
- `src/components/`: shared header/footer, collection cards, FAQ accordions, copyable gift messages, and flower-brief builder.
- `src/lib/paths.ts`: links that preserve the GitHub Pages project path.
- `src/styles/global.css`: colours, typography, and responsive layout.
- `src/assets/`: seven generated decorative floral photographs, optimized into responsive WebP images and social preview images during the build.
- `astro.config.mjs`: public site URL and project base path. Update these if the repository name or domain changes.

The user requested a fictional Chester shop profile for this preview. The address, hours, services, and prices are explicitly marked as examples. The phone uses a fictional number and the email uses the reserved `.example` domain; they are not active contact channels and have no call/email links. Replace these details with verified information before opening the site for real enquiries.

The flower cards are palette inspiration, not live inventory. There is no checkout, booking, or payment flow. The contact-page brief builder creates a message in the browser and copies it only when requested; it does not submit data or send email. Collection/occasion links prefill that brief. The occasions page also lets visitors copy suggested card messages. Palette filters and FAQs work without any external service; FAQ and mobile-navigation controls use native HTML details elements.

Each page has its own metadata and social image. `sitemap.xml` lists the nine main public pages with the correct project base path. The custom 404 page is excluded from indexing.

GitHub Pages serves static pages. A working order form, payment flow, stock management, or email subscription would need a separately connected service.
