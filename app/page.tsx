import type { Metadata } from "next";
import Link from "next/link";

import { ContactCta } from "@/components/ContactCta";
import { ProductFeature } from "@/components/ProductFeature";
import { sortedProducts, statusLabels } from "@/lib/products";
import { absoluteUrl, site } from "@/lib/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "SuhonLabs — Independent software studio",
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    url: absoluteUrl("/"),
    title: "SuhonLabs — Independent software studio",
    description: site.description,
  },
};

const [product] = sortedProducts;

export default function HomePage() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroMeta}>
            <p className="label">{site.descriptor}</p>
            <p className="label label--muted">{site.disciplines}</p>
          </div>

          <div className={styles.heroGrid}>
            <h1 className={styles.heroTitle} id="hero-title">
              <span className={styles.heroLine}>We make</span>
              <span className={styles.heroLine}>our own</span>
              <span className={styles.heroLine}>apps.</span>
            </h1>

            <div className={styles.heroAside}>
              <p className={styles.heroBody}>{site.positioning}</p>

              <p className={styles.heroAction}>
                <Link className="button button--primary" href={`/products/${product.slug}`}>
                  <span>View {product.name}</span>
                  <span aria-hidden="true">↗</span>
                </Link>
              </p>

              <p className={`label label--muted ${styles.heroStamp}`}>
                SuhonLabs / {site.year}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--ruled" aria-labelledby={`product-${product.slug}`}>
        <div className="container">
          <div className="sectionLabel">
            <p className="label">01 / Current product</p>
            <p className="label label--muted">{statusLabels[product.status]}</p>
          </div>

          <ProductFeature product={product} />
        </div>
      </section>

      <section className={`section section--ink ${styles.statement}`} aria-labelledby="statement">
        <div className="container">
          <h2 className={styles.statementTitle} id="statement">
            Small team.
            <br />
            Our own products.
          </h2>
          <p className={styles.statementBody}>
            We design, build and run our software ourselves.
          </p>
        </div>
      </section>

      <section className="section section--ruled" aria-labelledby="about-title">
        <div className="container">
          <div className="sectionLabel">
            <p className="label">02 / About</p>
            <p className="label label--muted">{site.year}</p>
          </div>

          <div className={styles.about}>
            <h2 className={styles.aboutTitle} id="about-title">
              We&rsquo;re SuhonLabs.
            </h2>

            <div className={styles.aboutBody}>
              <p>
                An independent software studio, currently focused on building{" "}
                {product.name}.
              </p>
              <p className={styles.aboutAction}>
                <Link className="arrow-link" href="/about">
                  <span>More about us</span>
                  <span aria-hidden="true">↗</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactCta index="03" />
    </>
  );
}
