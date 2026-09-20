import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Products — SuhonLabs";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "Products",
    title: "Products",
    subtitle: "Right now, we're focused on DayByUs.",
  });
}
