import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "SuhonLabs — We make our own apps.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "Independent software studio",
    title: "We make our own apps.",
    subtitle: "We're a small software studio. We build our own apps, and we run them ourselves.",
  });
}
