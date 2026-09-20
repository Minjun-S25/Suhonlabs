import type { Metadata } from "next";
import Link from "next/link";

import { ProductCard } from "@/components/ProductCard";
import { sortedProducts } from "@/lib/products";
import { absoluteUrl, site } from "@/lib/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "SuhonLabs — A small software studio",
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    url: absoluteUrl("/"),
    title: "SuhonLabs — A small software studio",
    description: site.description,
  },
};

export default function HomePage() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={`container ${styles.heroInner}`}>
          <p className="eyebrow">Independent software studio</p>
          <h1 className={styles.heroTitle} id="hero-title">
            We make apps.
          </h1>
          <p className={styles.heroBody}>{site.positioning}</p>
          <div className={styles.heroActions}>
            <Link className="button button--primary" href="/products">
              View our work
            </Link>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="products-title">
        <div className="container">
          <div className={styles.sectionHead}>
            <h2 id="products-title">What we&rsquo;re working on</h2>
            <p className="lede">We&rsquo;re starting with DayByUs.</p>
          </div>

          {sortedProducts.map((product, index) => (
            <ProductCard key={product.slug} product={product} index={index} />
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="about-title">
        <div className="container">
          <div className={styles.aboutPreview}>
            <h2 id="about-title">About SuhonLabs</h2>
            <div className={styles.aboutBody}>
              <p>
                We&rsquo;re a small independent studio designing and building our own apps.
              </p>
              <p>
                We like simple products, clear ideas, and software that doesn&rsquo;t get in the
                way.
              </p>
              <p className={styles.aboutAction}>
                <Link className="arrow-link" href="/about">
                  <span>More about us</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
