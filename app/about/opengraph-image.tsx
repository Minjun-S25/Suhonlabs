import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "About SuhonLabs — an independent studio that builds its own products.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "About",
    title: "An independent studio that builds its own products.",
    subtitle: "We design, build and run our own consumer apps.",
  });
}
