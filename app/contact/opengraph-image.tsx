import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Contact SuhonLabs";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "Contact",
    title: "Have something to say?",
    subtitle: "Questions about the studio or DayByUs, or anything else.",
  });
}
