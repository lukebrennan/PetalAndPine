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

- `src/data/site.ts`: shop name and tagline, placeholder contact details and hours, the three palettes with prices, sizes, occasions with card messages, and FAQs. Most copy changes happen here.
- `src/pages/`: home, bouquets (with palette filter), three palette detail pages, occasions, about, flower care, contact, and the 404 page.
- `src/components/`: header and footer, palette cards, FAQ accordion, copyable card messages, the contact call-to-action band, and the brief builder.
- `src/lib/paths.ts`: links that preserve the GitHub Pages project path.
- `src/styles/global.css`: the design tokens (limewash ground, bottle green, terracotta, slate), type, and layout. Young Serif is the display face and Karla the text face; both are bundled from `@fontsource`.
- `src/assets/`: seven generated floral photographs, converted to responsive WebP images and social previews during the build.
- `astro.config.mjs`: public site URL and project base path. Update these if the repository name or domain changes.
- `PRODUCT.md` and `DESIGN.md`: the product brief and the design system, kept for future design work.

The shop is a demonstration. The address, phone number (a fictional 01632 number), email (reserved `.example` domain), hours and prices are placeholders; a single notice in the footer and on the contact page says so. Replace them in `src/data/site.ts` before using the site for real enquiries.

There is no checkout, booking or payment flow. The brief builder on the contact page writes an enquiry message in the browser and copies it to the clipboard on request; it does not submit anything. Palette, size and occasion links prefill it with query parameters. The occasions page lets visitors copy suggested card messages. Filters and FAQs work without any external service; the FAQ and mobile navigation use native `details` elements.

Each page has its own metadata and social image. `sitemap.xml` lists the nine main public pages with the correct project base path. The custom 404 page is excluded from indexing.

GitHub Pages serves static pages. A working order form, payment flow, stock management, or email subscription would need a separately connected service.
