import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "SuhonLabs — We make apps.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "Independent software studio",
    title: "We make apps.",
    subtitle: "A small software studio building our own products.",
  });
}
