import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/PageHeader";
import { absoluteUrl } from "@/lib/site";
import styles from "./page.module.css";

const description =
  "SuhonLabs is a small software studio building our own consumer apps. We handle the product, design, and engineering ourselves.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    url: absoluteUrl("/about"),
    title: "About — SuhonLabs",
    description,
  },
  twitter: { title: "About — SuhonLabs", description },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="We’re SuhonLabs."
        lede="A small software studio building our own consumer apps."
      >
        <p className={styles.headerNote}>
          We handle the product, design, and engineering ourselves.
        </p>
      </PageHeader>

      <section className="section" aria-labelledby="how-title">
        <div className={`container ${styles.split}`}>
          <div>
            <p className="eyebrow">How we work</p>
            <h2 id="how-title">We start small.</h2>
          </div>

          <div className={styles.body}>
            <p>
              We usually start with something small that feels annoying, missing, or
              unnecessarily complicated.
            </p>
            <p>Then we try to make the simplest version that actually feels useful.</p>
            <p>That&rsquo;s mostly how we work.</p>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <p>
            <Link className="arrow-link" href="/products">
              <span>See what we&rsquo;re working on</span>
              <span aria-hidden="true">→</span>
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
