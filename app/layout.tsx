import type { Metadata, Viewport } from "next";
import { Inter, Newsreader } from "next/font/google";

import { Analytics } from "@/components/Analytics";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { absoluteUrl, site } from "@/lib/site";

import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const serif = Newsreader({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "SuhonLabs — Thoughtful Software for Everyday Life",
    template: "%s — SuhonLabs",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "SuhonLabs",
    "independent software studio",
    "consumer apps",
    "DayByUs",
    "long-distance couples app",
    "product studio",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: site.locale,
    url: absoluteUrl("/"),
    title: "SuhonLabs — Thoughtful Software for Everyday Life",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "SuhonLabs — Thoughtful Software for Everyday Life",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#faf8f5",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
