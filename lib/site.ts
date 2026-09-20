/**
 * Single source of truth for studio-level facts, navigation and metadata
 * defaults. Nothing here should be invented: if a fact is not yet real
 * (a store listing, a company address), it stays empty and the UI omits it
 * rather than showing a placeholder.
 */

export const site = {
  name: "SuhonLabs",
  /** The line under the wordmark in the footer. */
  tagline: "Apps made in-house.",
  /** Compact uppercase descriptor used as metadata across the site. */
  descriptor: "Independent software studio",
  disciplines: "Product / Design / Engineering",
  /** The year the studio stamps on its own pages. */
  year: "2026",
  description:
    "SuhonLabs is a small software studio building our own consumer apps. We're starting with DayByUs, for couples doing long distance.",
  /** Supporting line under the home hero. */
  positioning: "We're a small software studio. We build our own apps, and we run them ourselves.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://suhonlabs.com").replace(/\/$/, ""),
  locale: "en_US",
} as const;

/**
 * The studio's official mailboxes. These are real addresses, spelled exactly
 * as they were registered — do not "correct" or alias them.
 *
 *   business — general enquiries, partnerships, press, anything commercial
 *   support  — product questions and help with an app
 *   privacy  — privacy policy questions, data and account requests
 */
export const emails = {
  business: "Suhonlabs.buisness@outlook.com",
  support: "Suhonlabs.help@outlook.com",
  privacy: "Suhonlabs.privacy@outlook.com",
} as const;

/** Rendered as the "write to us directly" list on the contact page. */
export const contactChannels: ReadonlyArray<{
  address: string;
  label: string;
  description: string;
}> = [
  {
    address: emails.business,
    label: "General & business",
    description: "Partnerships, press, business enquiries, and anything that doesn’t fit below.",
  },
  {
    address: emails.support,
    label: "Product support",
    description: "Questions about one of our apps, or help with something that isn’t working.",
  },
  {
    address: emails.privacy,
    label: "Privacy & your data",
    description: "Privacy questions, and requests about your personal data or account.",
  },
];

/**
 * Primary navigation. Home is deliberately absent: the masthead wordmark is
 * the way back, and the header numbers these entries [01]–[03].
 */
export const nav: ReadonlyArray<{ href: string; label: string }> = [
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const footerNav: ReadonlyArray<{ href: string; label: string }> = [
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
];

export const analytics = {
  src: process.env.NEXT_PUBLIC_ANALYTICS_SRC?.trim() || "",
  domain: process.env.NEXT_PUBLIC_ANALYTICS_DOMAIN?.trim() || "",
} as const;

/** Absolute URL helper for canonical links, sitemap entries and OG tags. */
export function absoluteUrl(path = "/"): string {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Founder / studio photograph for the About page.
 *
 * Left null until a real photo exists, so nothing placeholder-shaped ever
 * ships. To add one: put the file in /public and fill this in —
 *   { src: "/founder.jpg", alt: "…", width: 1200, height: 1500 }
 * The About page renders it as an editorial image: rectangular crop, no
 * avatar, with FOUNDER / PRODUCT / DESIGN / ENGINEERING set beside it.
 */
export const founder: {
  src: string;
  alt: string;
  width: number;
  height: number;
} | null = null;
