# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

People in and around Chester looking for a bouquet for someone: a birthday, a thank-you, a just-because gift, a new home, or flowers for a wedding or gathering. They arrive on a phone or laptop, usually with a person and an occasion in mind rather than a flower name, and want to know what the shop makes, roughly what it costs, and how to get in touch.

## Product Purpose

Petal & Pine is a demo/portfolio website for a small independent florist in Chester. It shows the shop's style (loose, garden-style bouquets), three colour palettes with starting prices and sizes, occasion ideas with ready-to-copy card messages, a flower-care guide, and a contact page with a "flower brief" builder that composes an enquiry message in the browser. Success is a visitor understanding the shop's style, finding a palette and price they like, and leaving with a brief they could send.

## Positioning

A garden-style florist that sells by palette and feeling rather than by catalogue SKU. Bouquets are described as colour stories (Soft & romantic, Bright & joyful, Wild & natural) with three sizes each, not fixed stem lists.

## Operating Context

Static Astro site, deployed to GitHub Pages at https://lukebrennan.github.io/PetalAndPine/ on every push to `main`. No backend: no checkout, booking, payment, or email. The brief builder only composes and copies text. Fonts and images are bundled; the site must not depend on external services.

## Capabilities and Constraints

- Pages: home, flowers (with palette filter), three palette detail pages, occasions, our story, flower care, contact, 404, sitemap.
- Shop details (address 12 Petal Lane, Chester; phone 01632 960214; email hello@petalandpine.example; hours; delivery from £5) are fictional placeholders. Prices (£30–£35 base, +£15 / +£30 sizes) are examples.
- Decision (24 Oct 2026): the site is a demo. Keep one discreet notice (footer, and the contact page) that details are illustrative; remove the repeated per-section disclaimers.
- Must remain a static site with the `/PetalAndPine/` base path; links go through `src/lib/paths.ts`.
- Native HTML `details` for FAQ and mobile nav; no JS frameworks.

## Brand Commitments

- Name: Petal & Pine. The h1 on the home page is the company name, with the tagline "Florist in Chester" beneath it (user decision, 24 Oct 2026).
- Voice: plain, warm, specific. No two-part italic headings; no "a little" / "lovely" filler; no eyebrow labels above headings; no decorative section numbering.
- The seven existing photographs in `src/assets/` are the imagery and stay.
- The user explicitly wants the site to read less like an AI-generated template; the previous cream/serif/gold look is to be replaced, not polished (user decision, 24 Oct 2026).

## Evidence on Hand

- Photographs: `src/assets/bouquet.png`, `studio.png`, `soft.png`, `bright.png`, `wild.png`, `care.png`, `occasion.png` (generated, decorative; the only imagery).
- No testimonials, press, real customers, or real prices exist; none may be invented.

## Product Principles

1. Sell the feeling of a bouquet, then the facts (palette, size, price, how to get in touch) within one screen.
2. Every page should read like a real shop wrote it: specific, short, confident.
3. Nothing on the site can pretend to be a transaction; the brief builder is the only call to action and it must be honest about what it does.
4. Keep it fast and self-contained: static, bundled, works without JavaScript.
