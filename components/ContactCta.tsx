import Link from "next/link";

import { EmailLink } from "@/components/EmailLink";
import { emails, site } from "@/lib/site";
import styles from "./ContactCta.module.css";

type Props = {
  /** The section's number in the page, e.g. "03". */
  index?: string;
};

/** The closing block on every page but the contact page itself. */
export function ContactCta({ index = "03" }: Props) {
  return (
    <section className={`section section--ink ${styles.section}`} aria-labelledby="contact-cta">
      <div className="container">
        <div className={styles.labelRow}>
          <p className={`label ${styles.label}`}>{index} / Contact</p>
          <p className={`label ${styles.labelMuted}`}>{site.descriptor}</p>
        </div>

        <div className={styles.grid}>
          <h2 className={styles.title} id="contact-cta">
            Have something to say?
          </h2>

          <div className={styles.aside}>
            <div className={styles.block}>
              <p className={`label ${styles.labelMuted}`}>General</p>
              <EmailLink className={styles.email} address={emails.business} />
            </div>

            <div className={styles.block}>
              <p className={`label ${styles.labelMuted}`}>Support</p>
              <EmailLink className={styles.email} address={emails.support} />
            </div>

            <Link className="button button--inverse" href="/contact">
              <span>Send a message</span>
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
