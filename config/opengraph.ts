import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";
import { siteConfig } from "./site";

export const openGraph: OpenGraph = {
  type: "website",
  url: siteConfig.site.url,
  title: siteConfig.show.name,
  description: siteConfig.show.description,
  siteName: siteConfig.show.name,
  images: [
    {
      url: `${siteConfig.site.url}/og-charlie-image.png`,
      width: 1200,
      height: 630,
      alt: siteConfig.show.name,
    }
  ],
}