import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "DayByUs — Closer, even when you're far apart.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "DayByUs · A SuhonLabs product",
    title: "Closer, even when you're far apart.",
    subtitle:
      "A private space for long-distance couples to share everyday moments and preserve memories.",
    accent: "#B4593F",
    background: "#F7EFEA",
  });
}
