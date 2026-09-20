import type { Metadata } from "next";

import { ContactForm } from "@/components/ContactForm";
import { EmailLink } from "@/components/EmailLink";
import { PageHeader } from "@/components/PageHeader";
import { absoluteUrl, contactChannels } from "@/lib/site";
import styles from "./page.module.css";

const description =
  "Get in touch with SuhonLabs about a product, a partnership, press, or anything else worth saying.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    url: absoluteUrl("/contact"),
    title: "Contact — SuhonLabs",
    description,
  },
  twitter: { title: "Contact — SuhonLabs", description },
};

const reasons = [
  "General questions",
  "Questions about a product",
  "Partnerships",
  "Business enquiries",
  "Press",
  "Feedback — including the critical kind",
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Say hello."
        lede="One small team reads everything that arrives here. We answer real messages; we're less good at generic outreach."
      />

      <section className="section">
        <div className={`container ${styles.layout}`}>
          <ContactForm />

          <aside className={styles.aside} aria-labelledby="reasons-title">
            <h2 className="eyebrow" id="reasons-title">
              What people write to us about
            </h2>
            <ul className={styles.reasons}>
              {reasons.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>

            <div className={styles.emailBlock}>
              <h2 className="eyebrow" id="direct-title">
                Or write to us directly
              </h2>
              <ul className={styles.channels} aria-labelledby="direct-title">
                {contactChannels.map((channel) => (
                  <li className={styles.channel} key={channel.address}>
                    <EmailLink className={styles.email} address={channel.address} />
                    <p className={styles.channelLabel}>{channel.label}</p>
                    <p className={styles.channelBody}>{channel.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
