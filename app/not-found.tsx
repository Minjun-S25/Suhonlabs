import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <PageHeader
        eyebrow="404"
        title="That page isn't here."
        lede="The link may be old, or the page may have moved. Everything the site has is a click away below."
      />

      <section className="section">
        <div className="container container--narrow">
          <div className="prose">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/products">Products</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
