import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/PageHeader";
import { ProductCard } from "@/components/ProductCard";
import { sortedProducts } from "@/lib/products";
import { absoluteUrl } from "@/lib/site";

const description =
  "The apps SuhonLabs builds and runs. Right now we're focused on DayByUs, for couples doing long distance.";

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
      <PageHeader title="Products" lede="Right now, we’re focused on DayByUs." />

      <section className="section">
        <div className="container">
          {sortedProducts.map((product, index) => (
            <ProductCard key={product.slug} product={product} index={index} />
          ))}
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="prose">
            <p className="lede">More will come when they&rsquo;re ready.</p>
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
