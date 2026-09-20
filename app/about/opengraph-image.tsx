import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "About SuhonLabs — a small studio building our own apps.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "About",
    title: "We're SuhonLabs.",
    subtitle: "A small software studio building our own consumer apps.",
  });
}
