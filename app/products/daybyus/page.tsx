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

export default function DayByUsPage() {
  if (!product) notFound();

  const accentStyle = {
    "--accent": product.accent,
    "--accent-soft": product.accentSoft,
  } as React.CSSProperties;

  return (
    <div style={accentStyle}>
      <section className={styles.hero} aria-labelledby="product-name">
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroBody}>
            <Link className={styles.crumb} href="/products">
              <span aria-hidden="true">←</span>
              <span>Products</span>
            </Link>

            <div className={styles.metaRow}>
              <span className={styles.category}>DayByUs</span>
              <StatusPill status={product.status} />
            </div>

            <h1 className={styles.name} id="product-name">
              Long distance is hard enough.
            </h1>
            <p className={styles.summary}>{product.description}</p>
          </div>

          <ProductArtwork product={product} />
        </div>
      </section>

      <section className="section" aria-labelledby="small-things-title">
        <div className={`container ${styles.split}`}>
          <div>
            <p className="eyebrow">What it&rsquo;s for</p>
            <h2 id="small-things-title">It&rsquo;s usually the small things you miss.</h2>
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

      <section className="section" aria-labelledby="private-title">
        <div className="container">
          <div className={styles.closing}>
            <h2 id="private-title">Just for the two of you.</h2>
            <p className={styles.closingBody}>
              No followers. No public profile. No audience.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="status-title">
        <div className="container">
          <div className={styles.statusPanel}>
            <p className="eyebrow">Status</p>
            <h2 id="status-title">{statusLabels[product.status]}</h2>

            {product.stores.length > 0 ? (
              <>
                <p className={styles.statusBody}>DayByUs is available to download now.</p>
                <div className={styles.storeRow}>
                  {product.stores.map((store) => (
                    <a
                      className="button button--primary"
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
                <Link className="button button--primary" href="/contact">
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
