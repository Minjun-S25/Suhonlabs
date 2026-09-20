import type { Metadata } from "next";
import Link from "next/link";

import { ProductCard } from "@/components/ProductCard";
import { process } from "@/lib/content";
import { sortedProducts } from "@/lib/products";
import { absoluteUrl, site } from "@/lib/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "SuhonLabs — Thoughtful Software for Everyday Life",
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    url: absoluteUrl("/"),
    title: "SuhonLabs — Thoughtful Software for Everyday Life",
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
            Software for the things that matter.
          </h1>
          <p className={styles.heroBody}>{site.positioning}</p>
          <div className={styles.heroActions}>
            <Link className="button button--primary" href="/products">
              Explore our products
            </Link>
            <Link className="button button--secondary" href="/about">
              About SuhonLabs
            </Link>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="products-title">
        <div className="container">
          <div className={`${styles.sectionHead} ${styles.sectionHeadRow}`}>
            <div className={styles.sectionHeadText}>
              <h2 id="products-title">What we&rsquo;re building</h2>
              <p className="lede">
                We make our own apps and run them ourselves. Each one is its own brand, with its
                own audience and its own reason to exist.
              </p>
            </div>
            <Link className="arrow-link" href="/products">
              <span>All products</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {sortedProducts.map((product, index) => (
            <ProductCard key={product.slug} product={product} index={index} />
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="approach-title">
        <div className={`container ${styles.approach}`}>
          <div className={styles.sectionHead}>
            <p className="eyebrow">How we work</p>
            <h2 id="approach-title">
              Technology should support the experience, not complicate it.
            </h2>
            <p className="lede">
              Relationships, companionship, memories, the ordinary rhythm of a week. Whatever a
              product turns out to be about, it gets made the same way.
            </p>
          </div>

          <ol className={styles.approachList}>
            {process.map((item) => (
              <li className={styles.approachItem} key={item.step}>
                <span className={styles.approachStep} aria-hidden="true">
                  {item.step}
                </span>
                <div>
                  <h3 className={styles.approachName}>{item.name}</h3>
                  <p className={styles.approachBody}>{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.closing} aria-labelledby="closing-title">
        <div className={`container ${styles.closingInner}`}>
          <p className="eyebrow">Get in touch</p>
          <h2 className={styles.closingTitle} id="closing-title">
            {site.statement}
          </h2>
          <p className="lede">
            Questions about a product, an idea worth talking through, or something you think we
            should know — we read everything that comes in.
          </p>
          <Link className="button button--primary" href="/contact">
            Contact SuhonLabs
          </Link>
        </div>
      </section>
    </>
  );
}
