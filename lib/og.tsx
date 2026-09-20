import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

type Options = {
  eyebrow: string;
  title: string;
  subtitle: string;
  /**
   * "studio" is the SuhonLabs card: paper, ink, heavy uppercase sans, rules.
   * "product" lets a product bring its own colour and its softer serif voice.
   */
  voice?: "studio" | "product";
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
  voice = "studio",
  accent = "#111111",
  background = "#f2efe7",
}: Options) {
  const studio = voice === "studio";
  const ink = studio ? "#111111" : "#2a2521";
  const muted = studio ? "#55534d" : "rgba(42, 37, 33, 0.72)";
  const rule = studio ? "#111111" : `${accent}40`;
  const ruleWidth = studio ? 3 : 1;
  const sans = "Helvetica, Arial, sans-serif";

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
          color: ink,
          padding: "56px 64px",
          fontFamily: sans,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            borderBottom: `${ruleWidth}px solid ${rule}`,
            paddingBottom: 18,
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 800,
              letterSpacing: "0.02em",
              textTransform: "uppercase",
            }}
          >
            SuhonLabs®
          </div>
          <div
            style={{
              fontSize: 20,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: muted,
            }}
          >
            {eyebrow}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: studio ? 104 : 82,
              fontWeight: studio ? 800 : 400,
              lineHeight: studio ? 0.92 : 1.06,
              letterSpacing: studio ? "-0.045em" : "-0.02em",
              textTransform: studio ? "uppercase" : "none",
              fontFamily: studio ? sans : "Georgia, serif",
              /* A product's headline is set in the product's own colour. */
              color: studio ? ink : accent,
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
          <div style={{ fontSize: 28, lineHeight: 1.4, color: muted, maxWidth: 820 }}>
            {subtitle}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: `${ruleWidth}px solid ${rule}`,
            paddingTop: 18,
            fontSize: 20,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: muted,
          }}
        >
          <div>Independent software studio</div>
          <div>suhonlabs.com</div>
        </div>
      </div>
    ),
    ogSize,
  );
}
