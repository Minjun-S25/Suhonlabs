import type { Metadata } from "next";

import { ContactForm } from "@/components/ContactForm";
import { EmailLink } from "@/components/EmailLink";
import { PageHeader } from "@/components/PageHeader";
import { absoluteUrl, contactChannels, site } from "@/lib/site";
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
        label="01 / Contact"
        meta={`SuhonLabs / ${site.year}`}
        title="Have something to say?"
        lede="Questions about the studio or DayByUs, or anything else. Use the form, or write to one of the addresses."
      />

      <section className="section">
        <div className={`container ${styles.layout}`}>
          <div className={styles.formColumn}>
            <div className="sectionLabel">
              <p className="label">Send a message</p>
            </div>
            <ContactForm />
          </div>

          <aside className={styles.aside} aria-labelledby="direct-title">
            <div className="sectionLabel">
              <p className="label" id="direct-title">
                Or write to us
              </p>
            </div>

            <ul className={styles.channels}>
              {contactChannels.map((channel, index) => (
                <li className={styles.channel} key={channel.address}>
                  <p className="label label--muted">
                    {String(index + 1).padStart(2, "0")} / {channel.label}
                  </p>
                  <EmailLink className={styles.email} address={channel.address} />
                  <p className={styles.channelBody}>{channel.description}</p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
