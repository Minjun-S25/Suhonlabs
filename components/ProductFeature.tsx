import Link from "next/link";

import type { Product } from "@/lib/products";
import { ProductArtwork } from "@/components/ProductArtwork";
import { StatusPill } from "@/components/StatusPill";
import styles from "./ProductFeature.module.css";

type Props = {
  product: Product;
  /** Adds the longer description. Used on /products, not on the home page. */
  detailed?: boolean;
};

/**
 * A product inside a studio frame.
 *
 * The frame is SuhonLabs and stays monochrome: black rules, a label row,
 * square corners, paper behind it. The only place the product's own colour
 * appears is its artwork, which the frame holds but never restyles — the
 * studio is the frame, the product is the picture.
 */
export function ProductFeature({ product, detailed = false }: Props) {
  const headingId = `product-${product.slug}`;

  return (
    <article className={styles.frame} aria-labelledby={headingId}>
      <div className={styles.head}>
        <p className="label">{product.name}</p>
        <p className="label label--muted">{product.category}</p>
        <StatusPill status={product.status} />
      </div>

      <div className={styles.body}>
        <div className={styles.copy}>
          <h2 className={styles.name} id={headingId}>
            {product.name}
          </h2>
          <p className={styles.tagline}>{product.tagline}</p>
          {detailed ? <p className={styles.summary}>{product.summary}</p> : null}

          {product.hasPage ? (
            <p className={styles.actions}>
              <Link className="button button--primary" href={`/products/${product.slug}`}>
                <span>View {product.name}</span>
                <span aria-hidden="true">↗</span>
              </Link>
            </p>
          ) : null}
        </div>

        {/* The product's own artwork, in the product's own colour. */}
        <div className={styles.artwork}>
          <ProductArtwork product={product} bleed />
        </div>
      </div>
    </article>
  );
}
