/**
 * The product catalogue.
 *
 * Adding a product means adding an entry here. Everything that lists products
 * — the home page, /products, the footer, the sitemap — reads from this array,
 * so the catalogue grows without touching layout code.
 *
 * Status is deliberately explicit. `status: "available"` is the only value
 * that unlocks store badges and download links, and a product only reaches it
 * once the release genuinely exists.
 */

export type ProductStatus = "in-development" | "coming-soon" | "available";

export type StoreLink = {
  platform: "App Store" | "Google Play";
  href: string;
};

export type Product = {
  /** Stable key, also the URL segment when `hasPage` is true. */
  slug: string;
  name: string;
  /** Shown under the name when the public name is not final yet. */
  nameNote?: string;
  category: string;
  /** The product's own line — its voice, not the studio's. */
  tagline: string;
  /** One or two sentences for cards and listings. */
  summary: string;
  /** Longer description for the product page intro. */
  description?: string;
  audience: string;
  status: ProductStatus;
  /** Which artwork variant to render. See components/ProductArtwork.tsx. */
  artwork: "daybyus";
  /** Product accent colour. Each product carries its own personality. */
  accent: string;
  accentSoft: string;
  /** True when the product has a dedicated page at /products/<slug>. */
  hasPage: boolean;
  /**
   * Only populated once a listing is genuinely live. An empty array renders
   * no badges at all — never a "coming to the App Store" claim.
   */
  stores: StoreLink[];
  order: number;
};

export const statusLabels: Record<ProductStatus, string> = {
  "in-development": "In development",
  "coming-soon": "Coming soon",
  available: "Available",
};

export const products: Product[] = [
  {
    slug: "daybyus",
    name: "DayByUs",
    category: "Relationships",
    tagline: "For couples doing long distance.",
    summary:
      "A private place to share the small parts of your day, keep memories, and feel a little closer when you’re apart.",
    description:
      "DayByUs gives couples a private place to share their days and keep the things they don’t want to forget.",
    audience: "Long-distance couples",
    // Update to "available" — and add the store links — only when the
    // release actually exists. See PRD §11.
    status: "in-development",
    artwork: "daybyus",
    accent: "#B4593F",
    accentSoft: "#F3E3DC",
    hasPage: true,
    stores: [],
    order: 1,
  },
];

export const sortedProducts = [...products].sort((a, b) => a.order - b.order);

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

/** Products with their own page — used to generate routes and sitemap entries. */
export function productsWithPages(): Product[] {
  return sortedProducts.filter((product) => product.hasPage);
}
