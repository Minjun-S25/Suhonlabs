import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/PageHeader";
import { ProductCard } from "@/components/ProductCard";
import { sortedProducts } from "@/lib/products";
import { absoluteUrl } from "@/lib/site";

const description =
  "The apps SuhonLabs builds and runs — DayByUs for long-distance couples, and an upcoming product about life with a cat.";

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
  return (
    <>
      <PageHeader
        eyebrow="Products"
        title="Every product is its own brand."
        lede="SuhonLabs designs, builds and operates each of these apps. They don't share a category — they share a way of thinking about the people using them."
      />

      <section className="section">
        <div className="container">
          {sortedProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="section section--tight">
        <div className="container container--narrow">
          <div className="prose">
            <h2>More is on the way</h2>
            <p>
              The catalogue is small on purpose. We start products we intend to run for a long
              time, which means we start few of them. When the next one is ready to talk about,
              it will appear here.
            </p>
            <p>
              <Link className="arrow-link" href="/contact">
                <span>Tell us what you&rsquo;d want us to build</span>
                <span aria-hidden="true">→</span>
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
