import type { Metadata } from "next";
import Link from "next/link";

import { EmailLink } from "@/components/EmailLink";
import { PageHeader } from "@/components/PageHeader";
import { absoluteUrl, emails } from "@/lib/site";
import styles from "./page.module.css";

const description =
  "How the SuhonLabs website handles information: what the contact form collects, what our host logs, and what we don't do.";

/** Update whenever the substance of this page changes. */
const lastUpdated = "20 September 2026";

export const metadata: Metadata = {
  title: "Privacy",
  description,
  alternates: { canonical: "/privacy" },
  openGraph: {
    url: absoluteUrl("/privacy"),
    title: "Privacy — SuhonLabs",
    description,
  },
  twitter: { title: "Privacy — SuhonLabs", description },
  robots: { index: true, follow: true },
};

const sections = [
  { id: "scope", label: "Scope" },
  { id: "contact-form", label: "Contact form" },
  { id: "logs", label: "Server logs" },
  { id: "analytics", label: "Analytics" },
  { id: "cookies", label: "Cookies" },
  { id: "sharing", label: "Sharing" },
  { id: "rights", label: "Your rights" },
  { id: "contact", label: "Contacting us" },
  { id: "changes", label: "Changes" },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy"
        lede="This page describes how this website handles information. It says what is true today, and nothing more."
      >
        <p className={styles.meta}>Last updated: {lastUpdated}</p>
      </PageHeader>

      <section className="section">
        <div className="container container--narrow">
          <nav aria-label="On this page" style={{ marginBottom: "2.5rem" }}>
            <ul className={styles.toc}>
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="prose">
            <p className={styles.note}>
              This policy covers the SuhonLabs website only. Our apps handle different information
              in different ways, so each product will publish its own privacy policy before it is
              released. Nothing here should be read as a policy for DayByUs or any other
              SuhonLabs app.
            </p>

            <h2 id="scope">Scope</h2>
            <p>
              SuhonLabs operates this website. The sections below describe the information the
              site receives, why it receives it, and who else sees it.
            </p>

            <h2 id="contact-form">Contact form</h2>
            <p>
              If you send us a message through the contact form, we receive the name, email
              address, subject and message you enter. We use them for one purpose: to read your
              message and reply to it.
            </p>
            <p>
              Submissions are passed to the email or form service we use to receive messages —
              that provider processes the message on our behalf. We keep correspondence for as
              long as it is useful to the conversation, and we do not add people who write to us
              to any mailing list.
            </p>
            <p>
              Please don&rsquo;t send sensitive personal information through this form. It is an
              ordinary contact channel, not a secure one.
            </p>

            <h2 id="logs">Server logs</h2>
            <p>
              Like almost any website, requests to this site are logged by the infrastructure
              that serves it. Those logs typically include an IP address, a timestamp, the page
              requested, and browser information. They exist so the site can be kept running and
              secure, and they are retained according to our hosting provider&rsquo;s standard
              practice.
            </p>

            <h2 id="analytics">Analytics</h2>
            <p>
              This site is built so that analytics can be added later, but it loads no analytics
              script unless one is explicitly configured. If we do add measurement, we will name
              the provider here first and choose one that does not track people across other
              websites.
            </p>

            <h2 id="cookies">Cookies</h2>
            <p>
              This website sets no cookies of its own and does not use cookies for advertising or
              cross-site tracking. If that changes, this page changes with it.
            </p>

            <h2 id="sharing">Sharing</h2>
            <p>
              We do not sell personal information, and we do not share it for advertising. The
              only third parties involved are the service providers that make the site work —
              hosting, and the service that delivers contact-form messages to us.
            </p>

            <h2 id="rights">Your rights</h2>
            <p>
              Depending on where you live, you may have the right to ask what information we hold
              about you, to ask for a copy of it, to have it corrected, or to have it deleted. The
              same address handles requests about a product account and the personal data attached
              to it.
            </p>
            <p>
              Email{" "}
              <EmailLink className={styles.contactAddress} address={emails.privacy} />{" "}
              and we will respond. Please say which request you are making, so we can act on it
              without a round of questions.
            </p>

            <h2 id="contact">Contacting us</h2>
            <p>
              Privacy and data questions, including anything about your account or personal data,
              go to{" "}
              <EmailLink className={styles.contactAddress} address={emails.privacy} />
              .
            </p>
            <p>
              For anything else — general or business enquiries, or help with one of our apps —
              see the <Link href="/contact">contact page</Link>, which lists the right address for
              each.
            </p>

            <h2 id="changes">Changes to this page</h2>
            <p>
              As SuhonLabs grows — new products, new infrastructure, a public company address —
              this page will be updated to match. The date at the top always reflects the last
              substantive change.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
