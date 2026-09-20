import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/PageHeader";
import { nav } from "@/lib/site";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <PageHeader
        label="404 / Not found"
        title="That page isn’t here."
        lede="The link may be old, or the page may have moved."
      />

      <section className="section">
        <div className="container">
          <div className="sectionLabel">
            <p className="label">Everything the site has</p>
          </div>

          <ul className={styles.links}>
            <li>
              <Link className="button" href="/">
                Home
              </Link>
            </li>
            {nav.map((item) => (
              <li key={item.href}>
                <Link className="button" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
