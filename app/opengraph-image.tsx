import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "SuhonLabs — Software for the things that matter.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "Independent software studio",
    title: "Software for the things that matter.",
    subtitle:
      "Thoughtful consumer apps for relationships, memories, and everyday experiences.",
  });
}
