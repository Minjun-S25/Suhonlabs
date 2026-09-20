import type { Product } from "@/lib/products";
import styles from "./ProductArtwork.module.css";

type Props = {
  product: Pick<Product, "artwork" | "accent" | "accentSoft" | "name">;
  /** Rendered at a larger scale on product pages. */
  priority?: boolean;
  className?: string;
};

/**
 * Product visuals are drawn, not photographed. Each is an abstract mark in the
 * product's own accent colour — no mock screenshots, no stock imagery, nothing
 * that implies a feature the product does not have yet.
 */
export function ProductArtwork({ product, className }: Props) {
  const style = {
    "--accent": product.accent,
    "--accent-soft": product.accentSoft,
  } as React.CSSProperties;

  return (
    <div className={[styles.frame, className].filter(Boolean).join(" ")} style={style}>
      <DayByUsArt name={product.name} />
    </div>
  );
}

/** Two points held apart, each reaching toward the other until they overlap. */
function DayByUsArt({ name }: { name: string }) {
  const rings = [58, 88, 118, 148];

  return (
    <svg
      className={styles.svg}
      viewBox="0 0 640 400"
      role="img"
      aria-label={`${name} — an abstract mark: two circles at a distance, each sending rings toward the other until they overlap in the middle.`}
    >
      <rect width="640" height="400" fill="var(--accent-soft)" />

      <line
        x1="0"
        y1="200"
        x2="640"
        y2="200"
        stroke="var(--accent)"
        strokeOpacity="0.16"
        strokeWidth="1"
      />

      <g fill="none" stroke="var(--accent)" strokeWidth="1.25">
        {rings.map((r, index) => (
          <circle key={`l-${r}`} cx="196" cy="200" r={r} strokeOpacity={0.3 - index * 0.06} />
        ))}
        {rings.map((r, index) => (
          <circle key={`r-${r}`} cx="444" cy="200" r={r} strokeOpacity={0.3 - index * 0.06} />
        ))}
      </g>

      <circle cx="196" cy="200" r="30" fill="var(--accent)" />
      <circle
        cx="444"
        cy="200"
        r="30"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="2"
      />
    </svg>
  );
}
