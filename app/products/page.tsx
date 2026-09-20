import type { Metadata } from "next";

import { ContactCta } from "@/components/ContactCta";
import { PageHeader } from "@/components/PageHeader";
import { ProductFeature } from "@/components/ProductFeature";
import { sortedProducts } from "@/lib/products";
import { absoluteUrl, site } from "@/lib/site";

const description =
  "The apps SuhonLabs builds and runs. Right now we're building DayByUs, for couples doing long distance.";

export const metadata: Metadata = {
  title: "Products",
  description,
  alternates: { canonical: "/products" },
  openGraph: {
    url: absoluteUrl("/products"),
    title: "Products — SuhonLabs",
    description,
  },
  twitter: { title: "Products — SuhonLabs", description },
};

export default function ProductsPage() {
  const count = sortedProducts.length;

  return (
    <>
      <PageHeader
        label="01 / Products"
        meta={`SuhonLabs / ${site.year}`}
        title="Products"
        lede="Right now, we’re building DayByUs. We’ll add to this page when there’s something real to add."
      />

      <section className="section">
        <div className="container">
          <div className="sectionLabel">
            <p className="label">{count === 1 ? "One product" : `${count} products`}</p>
            <p className="label label--muted">Built and run in-house</p>
          </div>

          {sortedProducts.map((product) => (
            <ProductFeature key={product.slug} product={product} detailed />
          ))}
        </div>
      </section>

      <ContactCta index="02" />
    </>
  );
}
