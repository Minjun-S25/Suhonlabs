import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "DayByUs — Long distance is hard enough.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "DayByUs · A SuhonLabs product",
    title: "Long distance is hard enough.",
    subtitle:
      "A private place for couples to share their days and keep what they don't want to forget.",
    accent: "#B4593F",
    background: "#F7EFEA",
  });
}
