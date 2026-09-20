/**
 * Single source of truth for studio-level facts, navigation and metadata
 * defaults. Nothing here should be invented: if a fact is not yet real
 * (an official email address, a store listing), it stays empty and the UI
 * omits it rather than showing a placeholder.
 */

export const site = {
  name: "SuhonLabs",
  /** One-line answer to "what is this?" — used in metadata and the footer. */
  tagline: "Software for the things that matter.",
  description:
    "SuhonLabs is an independent software studio creating thoughtful consumer apps for relationships, memories, and everyday experiences.",
  /** Longer positioning line, used in the hero and on About. */
  positioning:
    "SuhonLabs is an independent software studio creating thoughtful products for relationships, memories, and everyday life.",
  statement: "We build thoughtful software around the things people care about.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://suhonlabs.com").replace(/\/$/, ""),
  locale: "en_US",
  /** Empty until an official address exists. Never fill this with a guess. */
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "",
} as const;

export const nav: ReadonlyArray<{ href: string; label: string }> = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const footerNav: ReadonlyArray<{ href: string; label: string }> = [
  { href: "/products", label: "Products" },
  { href: "/products/daybyus", label: "DayByUs" },
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
