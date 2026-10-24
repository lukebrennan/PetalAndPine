---
name: Petal & Pine
description: A Chester florist's walled-garden glasshouse; limewash, bottle green, slate labels and moss glazing bars.
colors:
  lime: "#f2f3ee"
  lime-2: "#e9ebe3"
  ink: "#1c2a23"
  muted: "#566059"
  green: "#14422f"
  green-2: "#0f3526"
  terracotta: "#c4603a"
  terracotta-2: "#a84e2c"
  slate: "#3b4248"
  slate-2: "#30363b"
  chalk: "#f4f1ea"
  chalk-dim: "#c9d2c7"
  moss: "#b9c7b3"
typography:
  display:
    fontFamily: "Young Serif, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(56px, 6.6vw, 96px)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Young Serif, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(30px, 3.4vw, 46px)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Young Serif, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(22px, 2vw, 27px)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "normal"
  lead:
    fontFamily: "Karla, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(18px, 1.5vw, 21px)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  body:
    fontFamily: "Karla, Helvetica Neue, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "Karla, Helvetica Neue, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "normal"
  small:
    fontFamily: "Karla, Helvetica Neue, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
rounded:
  none: "0px"
spacing:
  bar: "1px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "28px"
  xl: "40px"
  interlock: "56px"
  pane: "clamp(24px, 3vw, 40px)"
  gutter: "clamp(16px, 4vw, 48px)"
  block: "clamp(56px, 8vw, 104px)"
components:
  button-primary:
    backgroundColor: "{colors.terracotta}"
    textColor: "{colors.chalk}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "12px 22px"
    height: "50px"
  button-primary-hover:
    backgroundColor: "{colors.terracotta-2}"
    textColor: "{colors.chalk}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "12px 22px"
    height: "50px"
  plant-label:
    backgroundColor: "{colors.slate}"
    textColor: "{colors.chalk}"
    rounded: "{rounded.none}"
    padding: "24px 26px"
  plant-label-hover:
    backgroundColor: "{colors.slate-2}"
    textColor: "{colors.chalk}"
  filter-chip:
    backgroundColor: "transparent"
    textColor: "{colors.slate}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "8px 16px"
    height: "42px"
  filter-chip-selected:
    backgroundColor: "{colors.slate}"
    textColor: "{colors.chalk}"
  text-field:
    backgroundColor: "{colors.chalk}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "10px 12px"
    height: "48px"
  pane:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.pane}"
---

# Design System: Petal & Pine

## Overview

**Creative North Star: "The Walled-Garden Glasshouse"**

The site is a Victorian florist's glasshouse: whitewashed limewash glass, a grid of thin moss-green glazing bars, bottle-green paint owning whole bands of the page, and every bouquet carrying a flat slate plant label with its name and price lettered in chalk. Content sits inside the panes; the structure is the one-pixel bars between them, never a card, a shadow or a rounded corner. The only warm thing in the building is the terracotta pot, so terracotta is the one colour allowed to say "do this" or "you are here".

Density is calm and even. A single 1320px container, one 17px body size, a display serif that is allowed to get large (up to 96px on the home hero) and otherwise stays quiet. Photography bleeds to the pane edge and is framed by the bars, not by its own border. There is no second typographic voice: no italics, no small caps, no uppercase tracking, no eyebrow above a heading, no numerals as decoration. This is a confirmed rejection of the cream-ground, italic-serif, eyebrow-and-card florist template.

**Key Characteristics:**
- Glazing grid: 1px gaps on a moss background are the only structural lines
- Limewash ground; bottle green owns whole sections (the palette band, the footer)
- Flat slate plant labels carry names and prices, and interlock 56px up into the hero's bottom edge
- Terracotta is the only action colour; it also marks the focus ring, the current page and the open FAQ
- Young Serif 400 for display, Karla 400/500 for everything else, both self-hosted
- Square corners everywhere; the only circles are the colour swatches on bouquet pages
- Flat: no shadows at rest; the mobile menu panel is the single floating layer

## Colors

A cool, chalky glasshouse palette: two greens, two greys, two off-whites and one terracotta, each with a single darker step for hover.

### Primary
- **Terracotta** (`terracotta`): the only action colour. Fills `.button` and the skip link; draws the keyboard focus ring (2px outline, 3px offset), the current-page underline in the desktop nav, the current-page text in the mobile panel, the FAQ plus icon and the form caret. Nothing decorative is terracotta.
- **Terracotta Deep** (`terracotta-2`): hover state of the primary button and its border; nothing else.

### Secondary
- **Bottle Green** (`green`): owns whole sections (`.green`: the home palette band). Text on it is chalk; paragraphs on it are chalk-dim. Also the `::selection` ground on limewash.
- **Bottle Green Deep** (`green-2`): footer ground only.

### Tertiary
- **Slate** (`slate`): the plant-label material. Fills `.label`, `.card-message`, `.brief-preview`; outlines the filter chip and fills it when selected.
- **Slate Deep** (`slate-2`): hover state of a linked label.

### Neutral
- **Limewash** (`lime`): page ground, header ground, every pane inside a glazing grid.
- **Limewash Shade** (`lime-2`): hover wash on rows and chips, photo placeholder ground, the demo notice ground.
- **Ink** (`ink`): body text, mobile menu border, open mobile summary fill.
- **Muted** (`muted`): secondary copy, breadcrumbs, field hints, FAQ answers, care-step text, wordmark tagline.
- **Chalk** (`chalk`): type on green and slate; form-field ground on the green contact section.
- **Chalk Dim** (`chalk-dim`): secondary type on green and slate (prices, descriptions, footer paragraphs).
- **Moss** (`moss`): every hairline and glazing bar; the resting underline colour of text links and nav hovers; the scrollbar thumb.

### Named Rules
**The One Pot Rule.** Terracotta is the only action colour. If an element is terracotta it is either the primary action or a state signal (focus, current page, open disclosure). No terracotta headings, backgrounds, numerals or decoration.

**The Paint Owns the Room Rule.** Bottle green is applied to whole sections, never to a card, chip or badge inside a limewash section. Inside a green room, type is chalk and chalk-dim; the primary button stays terracotta.

**The Moss Line Rule.** Every divider, border and grid line is 1px moss. No other border colour appears on limewash except the ink outline of the mobile menu and the slate outline of the filter chip.

## Typography

**Display Font:** Young Serif (with Iowan Old Style, Georgia, serif), weight 400 only, self-hosted from `@fontsource/young-serif/latin-400`.
**Body Font:** Karla (with Helvetica Neue, Arial, sans-serif), weights 400 and 500 only, self-hosted from `@fontsource/karla/latin-400` and `latin-500`.

**Character:** A single warm bookish serif at one weight, set tight and large, against a plain humanist grotesque that never shouts. The pairing reads as a hand-lettered shop sign over printed care instructions. `font-synthesis: none` is set, so bold and italic cannot be faked; a weight or style that is not bundled does not exist.

### Hierarchy
- **Display** (400, `clamp(56px, 6.6vw, 96px)`, 0.95, -0.025em): the home hero h1 only, the company name. Inner-page heroes use `clamp(44px, 5.5vw, 84px)` at line-height 1; the default h1 is `clamp(44px, 6vw, 88px)`; bouquet detail h1 uses `clamp(40px, 4.6vw, 68px)`.
- **Headline** (400, `clamp(30px, 3.4vw, 46px)`, 1.05, -0.015em): h2 section heads. The CTA h2 is larger (`clamp(32px, 4vw, 56px)`, max 16ch); the palette band's caption h2 beneath the labels is smaller (`clamp(24px, 2.2vw, 30px)`).
- **Title** (400, `clamp(22px, 2vw, 27px)`, 1.05): h3 in panes, rows and care steps. The label name on a plant label is Young Serif `clamp(24px, 2.2vw, 32px)`; the price numeral is Young Serif 24px (34px in the size grid).
- **Lead** (400, `clamp(18px, 1.5vw, 21px)`, 1.5, max 52ch): the standfirst under a hero or page head. The home tagline sits between display and lead at `clamp(20px, 1.9vw, 26px)`.
- **Body** (400, 17px, 1.55, max 62ch; 16px below 640px): paragraphs. `.prose` widens to 66ch. `text-wrap: pretty` on paragraphs, `balance` on headings.
- **Label** (500, 15–16px, 1.2): buttons, text links, filter chips, field labels, footer headings, "See the palette" label links. Mixed case, no tracking.
- **Small** (400, 14px, 1.5): breadcrumbs, statuses, hints, footer small print (13px).

### Named Rules
**The One Weight Rule.** Young Serif is always 400. Karla is 400 for reading and 500 for anything you can press or that names a field. Nothing is bold.

**The Plain Heading Rule.** A heading is the heading. No eyebrow, kicker, overline, number or italic fragment above or inside it. Headings are followed by a paragraph or by the grid. Ordered steps are hairline rows with a title and text, not counters.

## Layout

One container, `.wrap`, at `min(1320px, 100%)` with an inline gutter of `clamp(16px, 4vw, 48px)`. Vertical rhythm comes from `.section` at `clamp(56px, 8vw, 104px)` block padding; green `.band` sections are shallower at `clamp(32px, 4vw, 56px)`. Sections that follow one another on limewash are separated by a single moss `.rule` hairline, not by whitespace alone.

The structural device is the glazing grid: a CSS grid with `gap: 1px` and a moss background, where every child paints itself limewash so the gaps read as glazing bars. The home hero (`minmax(0,1fr) minmax(0,1.15fr)`, photo pane bleeding to the viewport edge), the three-up `.panes.cols-3`, the collection grid and the contact grid all use it. Inside a green band, `.labels` keeps the 1px gap and lets the green show through as the bar. Panes pad at `clamp(24px, 3vw, 40px)`.

The interlock: the palette band (`.band.palettes`) drops its top padding and pulls its three slate labels up by 56px (`margin-top: -56px`; 32px below 900px) so they overlap the hero's bottom moss rule and sit half on limewash, half on green. The band's caption head then follows beneath the labels with 28px top margin. This is the one place two sections overlap, and it is how the glasshouse "interlocks" with the planting bed beneath it.

Two-column editorial sections (`.split`, `.faq-section`, `.care`, `.notes`, `.product`, `.occasion`) use plain grids with generous gaps (`clamp(32px, 5vw, 80px)`) and no bars; photos keep fixed aspect ratios (4/3, 4/4.4, 1/1, 4/3.6). Lists of things (`.rows`, `.care-steps`, `.hours`, `.faq`) are hairline-separated rows with a moss top rule and moss bottom rules, 20–22px block padding. Sticky side panels (`.product-copy`, `.care-intro`, `.brief-preview`) stick at 100px below the 76px sticky header.

Breakpoints, max-width: **1100px** the photo-backed grids (collection, contact) collapse to two columns and label padding tightens to `20px 18px`; **900px** desktop nav and header CTA hide behind a `details` menu, the hero stacks (photo becomes a 4/3 pane), the three-up label, size and pane grids go straight to one column, all two-column sections stack, sticky panels release, rows go single-column, the interlock shrinks to 32px; **640px** base font drops to 16px, the remaining grids go single-column, hero h1 becomes `clamp(52px, 15vw, 72px)`, wordmark 23px.

## Elevation & Depth

Flat. Depth is conveyed by paint and by overlap, not by shadow: a bottle-green room against limewash, a slate label against green, slate labels lapping over the hero's edge, a chalk field against green. There are no shadows at rest on any surface. Two exceptions, both functional: the open mobile menu panel floats above the page with `0 18px 40px -16px rgba(28,42,35,.35)` because it is a genuine overlay, and the colour swatches on bouquet pages carry a 1px inset rim so pale swatches stay visible. Linked labels and collection photos move on hover (`translateY(-2px)`, `scale(1.03)`) rather than gaining a shadow; both are removed under `prefers-reduced-motion`.

### Shadow Vocabulary
- **Floating panel** (`box-shadow: 0 18px 40px -16px rgba(28, 42, 35, .35)`): only the mobile navigation panel.
- **Swatch rim** (`box-shadow: inset 0 0 0 1px rgba(28, 42, 35, .18)`): colour swatch circles on bouquet pages.

### Named Rules
**The No Lift Rule.** Surfaces do not cast shadows. If something must float (a menu over the page) it may; nothing else does. Hover is a colour step or a 2px rise, never a shadow.

## Shapes

Square. Every box, button, field, chip, label, photo and panel has `border-radius: 0` (fields set it explicitly to override browser defaults). The only circles are the 22px colour swatches on bouquet pages, which are literal objects. Lines are 1px moss hairlines; outlines are 1px (ink on the mobile summary, slate on filter chips, terracotta on the primary button). The 2px terracotta focus ring sits 3px outside the element (0px on form fields). Photos are clipped to fixed aspect-ratio rectangles with `object-fit: cover`. The recurring silhouette is the plain slate rectangle of the plant label.

## Components

### Buttons
Blunt, square, terracotta. One primary and one ghost; the same terracotta button is used on limewash and on green.
- **Shape:** square (`0`), 50px minimum height, `inline-flex` with a 14px gap to an inline 16px arrow icon.
- **Primary:** terracotta fill and 1px terracotta border, chalk text, Karla 500 16px, `12px 22px` padding.
- **Hover / Focus:** fill and border step to terracotta-deep over `.18s ease-out`; focus is the global 2px terracotta outline at 3px offset.
- **Ghost:** transparent fill, `currentColor` 1px border, inherits text colour; hover washes `rgba(28,42,35,.06)` on limewash or `rgba(244,241,234,.1)` on green.
- **Text link** (`.link`): Karla 500, moss underline 1px at 6px offset, 10px gap to the arrow icon; hover turns the underline `currentColor`. Also used as a button reset (`button.link`).

### Chips
Filter chips on the flowers page, slate-outlined and square.
- **Style:** transparent fill, 1px slate border, slate text, Karla 500 15px, `8px 16px`, 42px minimum height.
- **State:** hover washes limewash-shade; `aria-pressed="true"` fills slate with chalk text. Inline stem/colour tags (`.plain-list li`) are 1px moss outlines with `6px 12px` padding.

### Cards / Containers
There are no cards. A "pane" is a cell of the glazing grid.
- **Corner Style:** square.
- **Background:** limewash cell on a moss grid; the grid's 1px gap is the border.
- **Shadow Strategy:** none (see Elevation & Depth).
- **Border:** none on the cell; the grid supplies `border-block` or `border` 1px moss around the whole set.
- **Internal Padding:** `clamp(24px, 3vw, 40px)`; h3 then 12px then paragraphs 10px apart.
- **Collection card:** a 4/3.4 photo pane over a plant label inside the glazing grid; hover scales the photo 1.03 over `.5s cubic-bezier(.2,.7,.2,1)`.

### Inputs / Fields
Chalk fields set into the green contact section.
- **Style:** chalk fill and 1px chalk border, ink text, 16px Karla, `10px 12px`, 48px minimum height, square. Labels sit above at Karla 500 15px with a chalk-dim optional hint in parentheses. Selects use an inline ink chevron SVG at 18px, right-aligned. Placeholder is `#6b746d`.
- **Focus:** 2px terracotta outline at 0px offset; caret is terracotta.
- **Error / Disabled:** not implemented; the form composes text and never validates.

### Navigation
- **Header:** sticky limewash shell with a 1px moss bottom rule, 76px tall (68px below 900px). Young Serif wordmark 26px with a 12px Karla muted tagline beneath; centred Karla 16px links with a transparent 1px bottom border that turns moss on hover and terracotta on the current page; terracotta "Plan a bouquet" button right.
- **Mobile:** below 900px a native `details` summary ("Menu" with an inline hamburger, 1px ink outline, 44px) opens a 320px limewash panel with an ink border, moss hairlines between 52px rows and the primary button inside; the open summary inverts to ink with limewash text; the current page is terracotta text.
- **Footer:** bottle-green-deep ground, 1.3fr 1fr 1fr grid, Young Serif 32px brand, chalk-dim copy, hairlines at `rgba(244,241,234,.18)`.
- **Breadcrumbs and jump links:** Karla 14–15px muted, moss underline on jump links, ink for the current crumb.

### Plant Label (signature)
A flat slate rectangle: slate fill, chalk text, `24px 26px` padding (`20px 18px` below 1100px), flex column with 10px gap, no border, no shadow, no ornament. Contents in order: name in Young Serif `clamp(24px, 2.2vw, 32px)`, price line in chalk-dim Karla 15px reading "from" followed by a Young Serif 24px chalk numeral, a chalk-dim 15px description, and a Karla 500 15px "See the palette" link pushed to the bottom with `margin-top: auto`. When the label is itself a link it steps to slate-deep and rises 2px on hover. The same slate-and-chalk block is reused for the occasion card message (with a Young Serif blockquote) and the sticky brief preview on the contact page.

### Glazing Grid (signature)
`display: grid; gap: 1px; background: moss` with every child painted limewash. Hero, three-up panes, collection grid, size grid, contact grid. The outer edge gets `border-block` or `border` 1px moss so the frame closes. Collapse: label, size and pane grids stay three across until 900px then go to one column; collection and contact grids go 3 → 2 at 1100px → 1 at 640px; the hero stacks at 900px.

### Interlock (signature)
On the home page the green palette band opens with `padding-top: 0` and its `.labels` grid carries `margin-top: -56px` (`-32px` below 900px), so the three slate labels straddle the hero's bottom moss rule. The band's caption h2 and sentence follow beneath the labels (`margin: 28px 0 0`). Use it only where a green room directly follows a glazing-grid section; it is the hinge between glass and bed, not a general overlap device.

### FAQ (native details)
Moss-ruled rows; summary is Karla 500 18px with a terracotta plus icon on the right that rotates 45° when open; the answer is muted body text with 22px bottom padding. No marker, no card.

## Do's and Don'ts

### Do:
- **Do** build structure with the glazing grid: `gap: 1px` on a moss background with limewash children, closed by a 1px moss `border`.
- **Do** give every bouquet, size or message a flat slate plant label: slate fill, chalk type, `24px 26px`, nothing else.
- **Do** reserve terracotta (`#c4603a`) for the primary button, focus ring and state markers; step to `#a84e2c` on hover.
- **Do** apply bottle green to the whole section and switch type to chalk / chalk-dim inside it; keep the button terracotta.
- **Do** interlock the palette band under the hero by pulling the labels up 56px (32px below 900px) with the band's top padding at 0.
- **Do** set headings in Young Serif 400 with tight tracking (-0.025em to -0.015em) and let the home h1 reach 96px.
- **Do** separate stacked limewash sections with a single 1px moss `.rule`.
- **Do** use `clamp()` for every section pad, gutter and heading size; the only fixed type sizes are 17px body, 16px controls, 15px labels, 14px small.
- **Do** use native `details` for disclosure (FAQ, mobile menu) and the 16px stroke-1.5 inline SVG arrow for every link affordance.

### Don't:
- **Don't** round any corner; `border-radius` is 0 except the colour swatches.
- **Don't** use shadows for depth; only the floating mobile panel casts one.
- **Don't** add dots, holes, rivets or any ornament to the plant label; it is a plain slate block.
- **Don't** use italics, bold (700), uppercase, letter-spaced labels or small caps; only Young Serif 400 and Karla 400/500 are bundled and `font-synthesis` is off.
- **Don't** put an eyebrow, kicker, overline or number above or beside a heading, and don't number list steps with counters.
- **Don't** paint cards, chips or badges green or terracotta inside a limewash section; paint is for rooms, terracotta is for the action.
- **Don't** introduce a border colour other than moss on limewash, apart from the ink mobile-menu outline and the slate filter chip.
- **Don't** load fonts, icons or images from an external service; everything is bundled.
