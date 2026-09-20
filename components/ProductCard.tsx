import Link from "next/link";

import type { Product } from "@/lib/products";
import { ProductArtwork } from "@/components/ProductArtwork";
import { StatusPill } from "@/components/StatusPill";
import styles from "./ProductCard.module.css";

type Props = {
  product: Product;
  /**
   * Position in the list. Drives the separator above the card and which side
   * the artwork sits on, so the card renders the same whatever else shares
   * its container.
   */
  index?: number;
};

export function ProductCard({ product, index = 0 }: Props) {
  const headingId = `product-${product.slug}`;
  const className = [styles.card, index > 0 ? styles.cardStacked : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={className} aria-labelledby={headingId}>
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

      <div
        className={`${styles.artwork} ${index % 2 === 0 ? styles.artworkEnd : styles.artworkStart}`}
      >
        <ProductArtwork product={product} />
      </div>
    </article>
  );
}
