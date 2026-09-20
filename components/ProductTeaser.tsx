import Link from "next/link";

import type { Product } from "@/lib/products";
import { ProductArtwork } from "@/components/ProductArtwork";
import { StatusPill } from "@/components/StatusPill";
import styles from "./ProductTeaser.module.css";

export function ProductTeaserGrid({ products }: { products: Product[] }) {
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductTeaser key={product.slug} product={product} />
      ))}
    </div>
  );
}

function ProductTeaser({ product }: { product: Product }) {
  const headingId = `teaser-${product.slug}`;

  return (
    <article
      className={`${styles.card} ${product.hasPage ? styles.cardLinked : ""}`}
      aria-labelledby={headingId}
    >
      <ProductArtwork product={product} />

      <div className={styles.meta}>
        <span className={styles.category}>{product.category}</span>
        <StatusPill status={product.status} />
      </div>

      <h3 className={styles.name} id={headingId}>
        {product.name}
      </h3>

      {product.nameNote ? <p className={styles.note}>{product.nameNote}</p> : null}

      <p className={styles.tagline}>{product.summary}</p>

      <div className={styles.footerRow}>
        {product.hasPage ? (
          <Link className={`arrow-link ${styles.link}`} href={`/products/${product.slug}`}>
            <span>Learn about {product.name}</span>
            <span aria-hidden="true">→</span>
          </Link>
        ) : (
          <p className={styles.note}>In development — more to share soon.</p>
        )}
      </div>
    </article>
  );
}
