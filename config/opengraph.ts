import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";
import { siteConfig } from "./site";

export const openGraph: OpenGraph = {
  type: "website",
  url: siteConfig.url,
  title: siteConfig.title,
  description: siteConfig.description,
  siteName: siteConfig.name,
  images: [
    {
      url: "/og-charlie-image.png",
      width: 1200,
      height: 630,
      alt: siteConfig.name,
    }
  ],
}