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
      {product.artwork === "daybyus" ? (
        <DayByUsArt name={product.name} />
      ) : (
        <CatArt name={product.name} />
      )}
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

/** A run of ordinary days, with one of them kept. */
function CatArt({ name }: { name: string }) {
  const columns = 9;
  const rows = 4;
  const cell = 34;
  const gap = 14;
  const startX = 78;
  const startY = 74;
  // A fixed, hand-picked pattern — deterministic so server and client agree.
  const filled = new Set([2, 5, 9, 13, 18, 20, 24, 27, 31, 33]);

  return (
    <svg
      className={styles.svg}
      viewBox="0 0 640 400"
      role="img"
      aria-label={`${name} — an abstract mark: a grid of small squares standing for ordinary days, with one day lifted out as a photo holding the outline of a curled cat.`}
    >
      <rect width="640" height="400" fill="var(--accent-soft)" />

      <g fill="var(--accent)">
        {Array.from({ length: rows * columns }).map((_, index) => {
          const column = index % columns;
          const row = Math.floor(index / columns);
          return (
            <rect
              key={index}
              x={startX + column * (cell + gap)}
              y={startY + row * (cell + gap)}
              width={cell}
              height={cell}
              rx="8"
              fillOpacity={filled.has(index) ? 0.55 : 0.12}
            />
          );
        })}
      </g>

      {/* The day that got kept */}
      <g transform="translate(372 150)">
        <rect
          width="188"
          height="188"
          rx="18"
          fill="var(--accent-soft)"
          stroke="var(--accent)"
          strokeOpacity="0.35"
          strokeWidth="1.25"
        />
        <g
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M58 96 L62 46 L78 62 C88 58 100 58 110 62 L126 46 L130 96 C130 122 114 140 94 140 C74 140 58 122 58 96 Z" />
          <path d="M76 96 Q82 89 88 96" strokeOpacity="0.7" />
          <path d="M100 96 Q106 89 112 96" strokeOpacity="0.7" />
        </g>
      </g>
    </svg>
  );
}
