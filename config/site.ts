import { Icons } from "next/dist/lib/metadata/types/metadata-types";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  url: "https://charliebrownthemusical.com",
  title: "Charlie Brown The Musical",
  name: "You're a Good Man, Charlie Brown",
  description:"A musical comedy with music and lyrics by Clark Gesner, based on the characters created by Charles M. Schulz in his comic strip Peanuts.",
  keywords: ["musical", "comedy", "peanuts", "charlie brown", "snoopy"],
  bookingUrl: "https://www.trybooking.com/events/landing/1320175",
};

export const openGraph: OpenGraph = {
  type: "website",
  url: siteConfig.url,
  title: siteConfig.title,
  description: siteConfig.description,
  siteName: siteConfig.name,
}

export const icons: Icons = {
  icon: "public/favicon.ico",
  apple: [
    {
      url: "public/apple-touch-icon.png",
      sizes: "180x180",
      rel: "apple-touch-icon",
    }
  ],
  shortcut: "public/favicon.ico",
}