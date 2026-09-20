import Link from "next/link";

import type { Product } from "@/lib/products";
import { ProductArtwork } from "@/components/ProductArtwork";
import { StatusPill } from "@/components/StatusPill";
import styles from "./ProductCard.module.css";

export function ProductCard({ product }: { product: Product }) {
  const headingId = `product-${product.slug}`;

  return (
    <article className={styles.card} aria-labelledby={headingId}>
      <div className={styles.body}>
        <div className={styles.meta}>
          <span className={styles.category}>{product.category}</span>
          <StatusPill status={product.status} />
        </div>

        <h3 className={styles.name} id={headingId}>
          {product.name}
        </h3>

        {product.nameNote ? <p className={styles.nameNote}>{product.nameNote}</p> : null}

        <p className={styles.tagline}>{product.tagline}</p>
        <p className={styles.summary}>{product.summary}</p>
        <p className={styles.audience}>For {product.audience.toLowerCase()}</p>

        {product.hasPage ? (
          <p className={styles.actions}>
            <Link className="arrow-link" href={`/products/${product.slug}`}>
              <span>Learn about {product.name}</span>
              <span aria-hidden="true">→</span>
            </Link>
          </p>
        ) : null}
      </div>

      <div className={styles.artwork}>
        <ProductArtwork product={product} />
      </div>
    </article>
  );
}
