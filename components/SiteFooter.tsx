import Link from "next/link";

import { footerNav, site } from "@/lib/site";
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
          <p className={`label label--muted ${styles.descriptor}`}>{site.descriptor}</p>
        </div>

        <nav className={styles.nav} aria-label="Footer">
          <ul className={styles.list}>
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link className={styles.link} href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className={`container ${styles.baseline}`}>
        <p className="label label--muted">© {year} SuhonLabs</p>
        <p className="label label--muted">{site.tagline}</p>
      </div>
    </footer>
  );
}
