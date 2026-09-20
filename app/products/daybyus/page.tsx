import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { EmailLink } from "@/components/EmailLink";
import { ProductArtwork } from "@/components/ProductArtwork";
import { StatusPill } from "@/components/StatusPill";
import { getProduct, statusLabels } from "@/lib/products";
import { absoluteUrl, emails } from "@/lib/site";
import styles from "./page.module.css";

const product = getProduct("daybyus");

const description =
  "DayByUs is a private space for long-distance couples to share everyday moments, preserve memories, and feel closer across the distance.";

export const metadata: Metadata = {
  title: "DayByUs",
  description,
  alternates: { canonical: "/products/daybyus" },
  openGraph: {
    url: absoluteUrl("/products/daybyus"),
    title: "DayByUs — SuhonLabs",
    description,
  },
  twitter: { title: "DayByUs — SuhonLabs", description },
};

const themes = [
  {
    name: "Everyday moments",
    body: "The things too small to schedule a call about. A window seat, a bad haircut, the exact coffee you always order — shared as they happen, read whenever the other person wakes up.",
  },
  {
    name: "Shared memories",
    body: "Photos and notes that stay together instead of scattering across three chat apps and a camera roll neither of you can search.",
  },
  {
    name: "Milestones",
    body: "The dates a relationship is built on, from the first message to the next flight, kept somewhere you both can see them.",
  },
  {
    name: "Small updates",
    body: "Low-effort, low-pressure ways to say where you are and how you're doing, without either of you feeling watched.",
  },
  {
    name: "A space for two",
    body: "No feed, no followers, no audience. DayByUs is for one relationship at a time.",
  },
];

export default function DayByUsPage() {
  if (!product) notFound();

  const accentStyle = {
    "--accent": product.accent,
    "--accent-soft": product.accentSoft,
  } as React.CSSProperties;

  return (
    <div style={accentStyle}>
      <section className={styles.hero} aria-labelledby="product-name">
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroBody}>
            <Link className={styles.crumb} href="/products">
              <span aria-hidden="true">←</span>
              <span>Products</span>
            </Link>

            <div className={styles.metaRow}>
              <span className={styles.category}>{product.category}</span>
              <StatusPill status={product.status} />
            </div>

            <h1 className={styles.name} id="product-name">
              {product.name}
            </h1>
            <p className={styles.tagline}>{product.tagline}</p>
            <p className={styles.summary}>{product.summary}</p>
          </div>

          <ProductArtwork product={product} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="prose">
            <p className="lede">{product.description}</p>
            <p>
              Distance doesn&rsquo;t usually break a relationship in one dramatic moment. It wears
              it down quietly, by removing the ordinary. DayByUs is an attempt to give a couple
              somewhere to keep that ordinary — a shared, private record of two lives that are
              being lived apart for now.
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="themes-title">
        <div className={`container ${styles.split}`}>
          <div>
            <p className="eyebrow">What it&rsquo;s about</p>
            <h2 id="themes-title">Closeness, not messaging.</h2>
          </div>

          <ul className={styles.themes}>
            {themes.map((theme) => (
              <li className={styles.theme} key={theme.name}>
                <h3 className={styles.themeName}>{theme.name}</h3>
                <p className={styles.themeBody}>{theme.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="privacy-title">
        <div className="container">
          <div className="prose">
            <p className="eyebrow">Privacy</p>
            <h2 id="privacy-title">Built for two people, by default.</h2>
            <p>
              DayByUs holds the kind of material people don&rsquo;t post anywhere else. That shapes
              how it is designed: a private space between two people, with no public profiles, no
              social graph and no feed for anyone else to scroll.
            </p>
            <p>
              We will publish a full privacy policy for DayByUs, describing exactly what the app
              stores and how, before it is released. Until then we&rsquo;d rather say less than
              claim something we haven&rsquo;t finished building.
            </p>
            <p>
              Privacy or data questions in the meantime go to{" "}
              <EmailLink address={emails.privacy} />.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="status-title">
        <div className="container">
          <div className={styles.statusPanel}>
            <p className="eyebrow">Status</p>
            <h2 id="status-title">{statusLabels[product.status]}</h2>
            {product.stores.length > 0 ? (
              <>
                <p className={styles.statusBody}>
                  DayByUs is available to download now.
                </p>
                <div className={styles.storeRow}>
                  {product.stores.map((store) => (
                    <a
                      className="button button--primary"
                      key={store.platform}
                      href={store.href}
                      rel="noopener"
                    >
                      Get it on the {store.platform}
                    </a>
                  ))}
                </div>
              </>
            ) : (
              <>
                <p className={styles.statusBody}>
                  DayByUs is still being built. It isn&rsquo;t on the App Store or Google Play
                  yet, and this page will say so the day that changes &mdash; no waitlist theatre
                  in the meantime.
                </p>
                <Link className="button button--primary" href="/contact">
                  Ask us about DayByUs
                </Link>
              </>
            )}

            <p className={styles.supportNote}>
              Questions about DayByUs, or help with the app once it&rsquo;s out:{" "}
              <EmailLink className={styles.supportAddress} address={emails.support} />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
