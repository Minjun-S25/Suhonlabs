import type { Metadata } from "next";

import { ContactForm } from "@/components/ContactForm";
import { EmailLink } from "@/components/EmailLink";
import { PageHeader } from "@/components/PageHeader";
import { absoluteUrl, contactChannels } from "@/lib/site";
import styles from "./page.module.css";

const description =
  "Get in touch with SuhonLabs. Questions about the studio or DayByUs, partnerships, press, or feedback.";

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

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        lede="Questions about SuhonLabs or DayByUs? Send us a message."
      />

      <section className="section">
        <div className={`container ${styles.layout}`}>
          <ContactForm />

          <aside className={styles.aside} aria-labelledby="direct-title">
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
