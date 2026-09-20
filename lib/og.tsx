import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

type Options = {
  eyebrow: string;
  title: string;
  subtitle: string;
  accent?: string;
  background?: string;
};

/**
 * Open Graph cards are generated from the same copy as the page, so a share
 * preview can never drift away from what the page actually says.
 */
export function renderOgImage({
  eyebrow,
  title,
  subtitle,
  accent = "#17150f",
  background = "#faf8f5",
}: Options) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background,
          color: "#17150f",
          padding: "72px 80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 9,
              background: accent,
              display: "flex",
            }}
          />
          <div style={{ fontSize: 30, letterSpacing: "-0.01em" }}>SuhonLabs</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#7a7266",
              fontFamily: "Helvetica, Arial, sans-serif",
            }}
          >
            {eyebrow}
          </div>
          <div style={{ fontSize: 76, lineHeight: 1.08, letterSpacing: "-0.03em", maxWidth: 940 }}>
            {title}
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.45,
              color: "#4d473d",
              maxWidth: 860,
              fontFamily: "Helvetica, Arial, sans-serif",
            }}
          >
            {subtitle}
          </div>
        </div>

        <div style={{ display: "flex", height: 6, background: accent, width: 132 }} />
      </div>
    ),
    ogSize,
  );
}
