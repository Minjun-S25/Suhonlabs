import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Products — SuhonLabs";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "Products",
    title: "Every product is its own brand.",
    subtitle: "The apps SuhonLabs designs, builds and runs.",
  });
}
