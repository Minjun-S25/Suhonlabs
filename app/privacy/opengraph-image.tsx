import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Privacy — SuhonLabs";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "Legal",
    title: "Privacy",
    subtitle: "How this website handles information — and what it doesn't do.",
  });
}
