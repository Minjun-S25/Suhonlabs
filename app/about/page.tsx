import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/PageHeader";
import { principles, process } from "@/lib/content";
import { absoluteUrl, site } from "@/lib/site";
import styles from "./page.module.css";

const description =
  "SuhonLabs is an independent software studio focused on creating thoughtful consumer products. How we work, and what we hold ourselves to.";

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
        title="An independent studio that builds its own products."
        lede="SuhonLabs isn't an agency and doesn't take on client work. We design, build and run our own consumer apps — which means we live with every decision we make."
      />

      <section className="section">
        <div className="container">
          <div className="prose">
            <p className="lede">{site.statement}</p>
            <p>
              Most of what we make starts as something small and ordinary: a part of daily life
              that software either ignores or makes worse. Relationships, companionship, memories,
              the texture of a normal week. These aren&rsquo;t large markets with obvious gaps —
              they&rsquo;re places where a careful product can quietly make things better.
            </p>
            <p>
              Because we operate our products rather than hand them over, strategy, design and
              engineering aren&rsquo;t separate departments passing work down a line. They&rsquo;re
              the same conversation, held by the same small group, from the first sketch through
              to whatever the app looks like two years after launch.
            </p>
            <p>
              We&rsquo;re deliberately small, and we start few things. A product we&rsquo;re not
              prepared to maintain for years is a product we shouldn&rsquo;t have started.
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="process-title">
        <div className="container">
          <div style={{ marginBottom: "clamp(2rem, 5vw, 3rem)" }}>
            <p className="eyebrow">How a product gets made</p>
            <h2 id="process-title">Four steps, in order, every time.</h2>
          </div>

          <ol className={styles.processList}>
            {process.map((item) => (
              <li className={styles.processItem} key={item.step}>
                <span className={styles.processStep} aria-hidden="true">
                  {item.step}
                </span>
                <h3 className={styles.processName}>{item.name}</h3>
                <p className={styles.processBody}>{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="principles-title">
        <div className={`container ${styles.split}`}>
          <div>
            <p className="eyebrow">What we hold to</p>
            <h2 id="principles-title">Principles we actually use.</h2>
          </div>

          <ul className={styles.principles}>
            {principles.map((principle) => (
              <li className={styles.principle} key={principle.name}>
                <h3 className={styles.principleName}>{principle.name}</h3>
                <p className={styles.principleBody}>{principle.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="brand-title">
        <div className={`container ${styles.split}`}>
          <div>
            <p className="eyebrow">Studio and products</p>
            <h2 id="brand-title">The studio stays in the background.</h2>
            <p className="lede" style={{ marginTop: "1rem" }}>
              SuhonLabs is the parent brand. Each product keeps its own name, colour and
              personality — most people will meet the app long before they meet the studio.
            </p>
          </div>

          <pre className={styles.brandTree} aria-label="SuhonLabs product structure">
{`SuhonLabs
├── DayByUs            Relationships
├── Cat product        Companionship · in development
└── Future products`}
          </pre>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="prose">
            <p>
              <Link className="arrow-link" href="/products">
                <span>See what we&rsquo;re building</span>
                <span aria-hidden="true">→</span>
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
