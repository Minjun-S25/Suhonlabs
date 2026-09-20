import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { EmailLink } from "@/components/EmailLink";
import { ProductArtwork } from "@/components/ProductArtwork";
import { StatusPill } from "@/components/StatusPill";
import { getProduct, statusLabels } from "@/lib/products";
import { absoluteUrl, emails } from "@/lib/site";
import styles from "./page.module.css";

const product = getProduct("daybyus");

const description =
  "DayByUs gives couples a private place to share their days and keep the things they don't want to forget.";

export const metadata: Metadata = {
  title: "DayByUs",
  description,
  alternates: { canonical: "/products/daybyus" },
  openGraph: {
    url: absoluteUrl("/products/daybyus"),
    title: "DayByUs — SuhonLabs",
    description,
  },
  twitter: { title: "DayByUs — SuhonLabs", description },
};

/** The everyday things that go missing at a distance. */
const smallThings = [
  "What they ate.",
  "Something funny that happened.",
  "A photo they would’ve shown you if you were there.",
];

/**
 * Inside the product, the product leads.
 *
 * The studio shell stays around the edges — the masthead, the footer, and one
 * thin strip of SuhonLabs metadata at the top of the page — but everything
 * below it belongs to DayByUs: its colour, its serif voice, softer edges and
 * warmer ground. Nothing here is restyled to match the studio.
 */
export default function DayByUsPage() {
  if (!product) notFound();

  const accentStyle = {
    "--accent": product.accent,
    "--accent-soft": product.accentSoft,
  } as React.CSSProperties;

  return (
    <div className={styles.page} style={accentStyle}>
      {/* The one piece of studio frame kept inside the product, for continuity. */}
      <div className={styles.strip}>
        <div className={`container ${styles.stripInner}`}>
          <Link className={styles.crumb} href="/products">
            <span aria-hidden="true">←</span>
            <span>Products</span>
          </Link>
          <p className="label label--muted">SuhonLabs / Product 01</p>
        </div>
      </div>

      <section className={styles.hero} aria-labelledby="product-name">
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroBody}>
            <div className={styles.metaRow}>
              <span className={styles.category}>{product.category}</span>
              <StatusPill status={product.status} />
            </div>

            <h1 className={styles.name} id="product-name">
              Long distance is hard enough.
            </h1>
            <p className={styles.summary}>{product.description}</p>
          </div>

          <ProductArtwork product={product} className={styles.artwork} />
        </div>
      </section>

      <section className={styles.section} aria-labelledby="small-things-title">
        <div className={`container ${styles.split}`}>
          <div>
            <p className={styles.eyebrow}>What it&rsquo;s for</p>
            <h2 className={styles.heading} id="small-things-title">
              It&rsquo;s usually the small things you miss.
            </h2>
          </div>

          <div className={styles.body}>
            <p>Not the big updates.</p>
            <ul className={styles.smallThings}>
              {smallThings.map((thing) => (
                <li key={thing}>{thing}</li>
              ))}
            </ul>
            <p>DayByUs is for those parts.</p>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="private-title">
        <div className="container">
          <div className={styles.closing}>
            <h2 className={styles.closingTitle} id="private-title">
              Just for the two of you.
            </h2>
            <p className={styles.closingBody}>No followers. No public profile. No audience.</p>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="status-title">
        <div className="container">
          <div className={styles.statusPanel}>
            <p className={styles.eyebrow}>Status</p>
            <h2 className={styles.statusTitle} id="status-title">
              {statusLabels[product.status]}
            </h2>

            {product.stores.length > 0 ? (
              <>
                <p className={styles.statusBody}>DayByUs is available to download now.</p>
                <div className={styles.storeRow}>
                  {product.stores.map((store) => (
                    <a
                      className={styles.productButton}
                      key={store.platform}
                      href={store.href}
                      rel="noopener"
                    >
                      Get it on the {store.platform}
                    </a>
                  ))}
                </div>
              </>
            ) : (
              <>
                <p className={styles.statusBody}>
                  DayByUs is still being built. It isn&rsquo;t on the App Store or Google Play
                  yet, and this page will say so the day that changes.
                </p>
                <Link className={styles.productButton} href="/contact">
                  Ask us about DayByUs
                </Link>
              </>
            )}

            <p className={styles.supportNote}>
              Questions about DayByUs, or help with the app once it&rsquo;s out:{" "}
              <EmailLink className={styles.supportAddress} address={emails.support} />
              <br />
              Privacy or data questions:{" "}
              <EmailLink className={styles.supportAddress} address={emails.privacy} />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
