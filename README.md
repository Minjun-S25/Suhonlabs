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
| `CONTACT_FORWARD_TOKEN` | Optional `Authorization: Bearer` token for that request. |
| `NEXT_PUBLIC_ANALYTICS_SRC` | Analytics script URL. Nothing loads while empty. |
| `NEXT_PUBLIC_ANALYTICS_DOMAIN` | `data-domain` for providers that need it (e.g. Plausible). |

### Email addresses

The three official mailboxes live in `emails` in `lib/site.ts`, not in the environment —
they're facts about the studio, not deployment config:

| Address | Used for | Shown on |
| --- | --- | --- |
| `Suhonlabs.buisness@outlook.com` | General, business, partnerships, press | Contact page, footer |
| `Suhonlabs.help@outlook.com` | Product support and app questions | Contact page, DayByUs page |
| `Suhonlabs.privacy@outlook.com` | Privacy, data and account requests | Contact page, footer, privacy policy, DayByUs privacy section |

Spellings are exact as registered. Don't "correct" or alias them.

## Deploying

The app needs a Node runtime: `/api/contact` is a server route, so this is not a
static-export site. Vercel, Netlify, Cloudflare Workers, or any Node host will do.
Vercel is zero-config for Next.js.

**Vercel:** import the repo at [vercel.com/new](https://vercel.com/new). Framework,
build command and output directory are all detected — accept the defaults.

### Set this before the first production deploy

`NEXT_PUBLIC_SITE_URL` must match the URL the site is actually served from. It is
read at build time and it is what `metadataBase` resolves against, so it decides the
canonical tag, the `og:url`, and the absolute URL of every generated Open Graph image.

It defaults to `https://suhonlabs.com`. Deploy to a `*.vercel.app` URL without
overriding it and the pages still render fine, but every canonical points at a domain
that isn't live yet and social previews fetch their image from it — so link previews
come back blank.

| Stage | Value |
| --- | --- |
| Before the domain is attached | the deployment URL, e.g. `https://suhonlabs.vercel.app` |
| After the domain is attached | `https://suhonlabs.com` |

Changing it needs a rebuild, not just a redeploy — it is inlined at build time.

### The rest of the environment

Everything else is optional and the site renders correctly without it. `.env.example`
documents each one. Worth setting early:

- `CONTACT_FORWARD_URL` — until this is set the contact form returns 503 and tells
  people it isn't connected. The form is live the moment it points at a form provider,
  mail relay or webhook. See **Configuration** above.
- `NEXT_PUBLIC_ANALYTICS_SRC` — no analytics script loads until this is set.

### After deploying

- `/sitemap.xml` and `/robots.txt` should show the real domain, not `suhonlabs.com`.
- View source on `/` and confirm `og:image` resolves.
- Submit the contact form once and check the message arrives.

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
components/               Masthead, footer, product frame, artwork, contact block, form
lib/
  site.ts                 Studio facts, navigation, founder slot, URL helpers
  products.ts             The product catalogue
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

## Design

Two identities, deliberately unlike each other.

**SuhonLabs — the studio shell.** Monochrome: warm paper (`--paper` `#f2efe7`), near-black
ink (`#111`), neutral grey secondary text, black rules. Structure is meant to be visible —
2px rules between sections, a ruled label line opening each one (`01 / CURRENT PRODUCT`),
columns divided by vertical rules, square corners (`--radius: 0`). Type carries the
personality: Inter at 800 for oversized uppercase headlines, compact uppercase metadata for
labels and navigation, sentence-case sans for body copy. Buttons are rectangular and
bordered; hover displaces them `-2px, -2px` and drops a hard `6px 6px 0` shadow in 120ms.
Hard shadows are for buttons only — everything else is held by rules.

**DayByUs — the product.** Warm, soft and serif, and it stays that way. Its palette
(`accent` / `accentSoft` in `lib/products.ts`) belongs to the product: it appears on
`/products/daybyus` and inside the product's own artwork, and nowhere else. Studio pages
never borrow it, and the product is never restyled into the studio's language.

Where the two meet — the product block on the home and products pages — the studio provides
the frame (black rules, label row, square corners) and the product provides the picture. The
DayByUs page keeps one thin strip of studio metadata at the top for continuity, and runs on
its own palette below it.

Anything added later should follow the same split: structure, type and rules for the studio;
colour and softness for the product.

## Conventions

- **No invented credibility.** No user counts, reviews, press, awards, logos or partners.
  If something isn't verified, it isn't on the site.
- **Studio brand stays neutral.** Warm paper, near-black ink, black rules. Colour belongs to products.
- **Visuals are drawn, not stocked.** Product artwork is inline SVG — no mock screenshots,
  no stock photography, nothing implying an unbuilt feature.
- **Accessibility is part of the component.** Semantic landmarks, a skip link, visible focus
  rings, labelled form fields with `aria-invalid` / `aria-describedby`, a live region for form
  status, and `prefers-reduced-motion` support.

## Not built yet

Journal, careers, press, support, per-product privacy policies and terms. The routing and
the product catalogue are shaped so these can be added without rework.
