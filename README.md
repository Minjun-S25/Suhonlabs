# SuhonLabs website

The corporate website for SuhonLabs — an independent software studio that builds and
runs its own consumer apps.

Built with Next.js (App Router), TypeScript, and hand-written CSS. No UI framework,
no CMS, no client-side state library.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build && npm start   # production build
npm run lint                 # eslint
npm run typecheck            # tsc --noEmit
```

## Configuration

Copy `.env.example` to `.env.local` and fill in what exists. Every value is optional:
the site renders correctly with none of them set, and omits anything that isn't real
rather than showing a placeholder.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin for metadata, canonicals, sitemap and OG URLs. Defaults to `https://suhonlabs.com`. |
| `CONTACT_FORWARD_URL` | Where `/api/contact` posts submissions as JSON. While empty, the form tells people it isn't connected yet instead of dropping messages. |

### Email addresses

The three official mailboxes live in `emails` in `lib/site.ts`, not in the environment —
they're facts about the studio, not deployment config:

| Address | Used for | Shown on |
| --- | --- | --- |
| `Suhonlabs.buisness@outlook.com` | General, business, partnerships, press | Contact page, footer |
| `Suhonlabs.help@outlook.com` | Product support and app questions | Contact page, DayByUs page |
| `Suhonlabs.privacy@outlook.com` | Privacy, data and account requests | Contact page, footer, privacy policy, DayByUs privacy section |

Spellings are exact as registered. Don't "correct" or alias them.
| `CONTACT_FORWARD_TOKEN` | Optional `Authorization: Bearer` token for that request. |
| `NEXT_PUBLIC_ANALYTICS_SRC` | Analytics script URL. Nothing loads while empty. |
| `NEXT_PUBLIC_ANALYTICS_DOMAIN` | `data-domain` for providers that need it (e.g. Plausible). |

## Structure

```
app/
  layout.tsx              Fonts, metadata defaults, header/footer, skip link
  page.tsx                Home
  products/               Product overview
  products/daybyus/       DayByUs product page
  about/  contact/  privacy/
  api/contact/route.ts    Contact form endpoint
  opengraph-image.tsx     Per-route OG cards (one per page)
  sitemap.ts  robots.ts  icon.svg
components/               Header, footer, product cards, artwork, contact form
lib/
  site.ts                 Studio facts, navigation, URL helpers
  products.ts             The product catalogue
  content.ts              Principles and process copy
  contact.ts              Validation shared by the form and the API route
  og.tsx                  Open Graph card renderer
```

### Adding a product

Add an entry to `products` in `lib/products.ts`. The home page, products page, footer
and sitemap all read from that array, so a new product appears everywhere at once.

- `hasPage: true` expects a page at `app/products/<slug>/page.tsx`.
- `artwork` picks a variant in `components/ProductArtwork.tsx`; new products need a new one.
- `accent` / `accentSoft` are the product's own colours. The studio chrome never uses them,
  so products can look like themselves.

### Status and store links

`status` drives the label shown everywhere. `stores` is empty until a listing genuinely
exists — the DayByUs page only renders download buttons when that array has entries, so
the site can't accidentally claim availability it doesn't have.

## Conventions

- **No invented credibility.** No user counts, reviews, press, awards, logos or partners.
  If something isn't verified, it isn't on the site.
- **Studio brand stays neutral.** Paper, ink and one hairline rule. Colour belongs to products.
- **Visuals are drawn, not stocked.** Product artwork is inline SVG — no mock screenshots,
  no stock photography, nothing implying an unbuilt feature.
- **Accessibility is part of the component.** Semantic landmarks, a skip link, visible focus
  rings, labelled form fields with `aria-invalid` / `aria-describedby`, a live region for form
  status, and `prefers-reduced-motion` support.

## Not built yet

Journal, careers, press, support, per-product privacy policies and terms. The routing and
the product catalogue are shaped so these can be added without rework.
