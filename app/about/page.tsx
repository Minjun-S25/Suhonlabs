import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ContactCta } from "@/components/ContactCta";
import { PageHeader } from "@/components/PageHeader";
import { sortedProducts } from "@/lib/products";
import { absoluteUrl, founder, site } from "@/lib/site";
import styles from "./page.module.css";

const description =
  "SuhonLabs is a small software studio building our own apps. We do the product, design and engineering ourselves.";

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

const [product] = sortedProducts;

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="01 / About"
        meta={`SuhonLabs / ${site.year}`}
        title="We’re SuhonLabs."
        lede="A small software studio. We build our own apps instead of building them for other people."
      />

      {/* Renders only once a real photograph exists. See lib/site.ts. */}
      {founder ? (
        <section className="section" aria-labelledby="founder-title">
          <div className="container">
            <div className="sectionLabel">
              <p className="label" id="founder-title">
                02 / Founder
              </p>
              <p className="label label--muted">SuhonLabs / {site.year}</p>
            </div>

            <figure className={styles.portrait}>
              <div className={styles.portraitFrame}>
                <Image
                  className={styles.portraitImage}
                  src={founder.src}
                  alt={founder.alt}
                  width={founder.width}
                  height={founder.height}
                  sizes="(min-width: 900px) 42vw, 100vw"
                  priority
                />
              </div>

              <figcaption className={styles.portraitMeta}>
                <p className={`label ${styles.portraitRole}`}>
                  Founder / Product / Design / Engineering
                </p>
              </figcaption>
            </figure>
          </div>
        </section>
      ) : null}

      <section className="section" aria-labelledby="what-title">
        <div className="container">
          <div className="sectionLabel">
            <p className="label">{founder ? "03" : "02"} / What we do</p>
            <p className="label label--muted">{site.disciplines}</p>
          </div>

          <div className={styles.row}>
            <h2 className={styles.rowTitle} id="what-title">
              We make apps.
            </h2>

            <div className={styles.body}>
              <p>
                We pick the idea, design it, write it, ship it, and keep it running. No
                client work.
              </p>
              <p>
                Right now all of that goes into {product.name} — an app for couples doing
                long distance.
              </p>
              <p>
                <Link className="arrow-link" href={`/products/${product.slug}`}>
                  <span>View {product.name}</span>
                  <span aria-hidden="true">↗</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="how-title">
        <div className="container">
          <div className="sectionLabel">
            <p className="label">{founder ? "04" : "03"} / How we work</p>
            <p className="label label--muted">Small team</p>
          </div>

          <div className={styles.row}>
            <h2 className={styles.rowTitle} id="how-title">
              We start small.
            </h2>

            <div className={styles.body}>
              <p>
                We usually start with something that feels annoying, missing, or more
                complicated than it needs to be.
              </p>
              <p>Then we build the smallest version that is actually useful, and use it.</p>
              <p>If it holds up, we keep going. That&rsquo;s most of the process.</p>
            </div>
          </div>
        </div>
      </section>

      <ContactCta index={founder ? "05" : "04"} />
    </>
  );
}
