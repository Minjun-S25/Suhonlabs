import Script from "next/script";

import { analytics } from "@/lib/site";

/**
 * Analytics readiness, not analytics.
 *
 * The site ships with no tracker attached. Setting NEXT_PUBLIC_ANALYTICS_SRC
 * (and, for privacy-friendly providers such as Plausible, the matching
 * NEXT_PUBLIC_ANALYTICS_DOMAIN) is all it takes to attach one. Until then this
 * renders nothing, so no third party sees a visitor.
 */
export function Analytics() {
  if (!analytics.src) return null;

  return (
    <Script
      src={analytics.src}
      strategy="afterInteractive"
      defer
      {...(analytics.domain ? { "data-domain": analytics.domain } : {})}
    />
  );
}
