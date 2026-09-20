import Link from "next/link";

import { site } from "@/lib/site";
import { sortedProducts, statusLabels } from "@/lib/products";
import { Wordmark } from "@/components/Wordmark";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brandBlock}>
          <Link className={styles.brand} href="/" aria-label="SuhonLabs — home">
            <Wordmark />
          </Link>
          <p className={styles.statement}>{site.statement}</p>
        </div>

        <div className={styles.columns}>
          <div>
            <h2 className={styles.columnTitle}>Products</h2>
            <ul className={styles.list}>
              {sortedProducts.map((product) => (
                <li key={product.slug}>
                  {product.hasPage ? (
                    <Link className={styles.link} href={`/products/${product.slug}`}>
                      {product.name}
                    </Link>
                  ) : (
                    <span className={styles.muted}>
                      {product.name} — {statusLabels[product.status]}
                    </span>
                  )}
                </li>
              ))}
              <li>
                <Link className={styles.link} href="/products">
                  All products
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className={styles.columnTitle}>Studio</h2>
            <ul className={styles.list}>
              <li>
                <Link className={styles.link} href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className={styles.columnTitle}>Legal</h2>
            <ul className={styles.list}>
              <li>
                <Link className={styles.link} href="/privacy">
                  Privacy
                </Link>
              </li>
              {site.contactEmail ? (
                <li>
                  <a className={styles.link} href={`mailto:${site.contactEmail}`}>
                    {site.contactEmail}
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      </div>

      <div className={`container ${styles.baseline}`}>
        <p>© {year} SuhonLabs. All rights reserved.</p>
        <p>{site.tagline}</p>
      </div>
    </footer>
  );
}
