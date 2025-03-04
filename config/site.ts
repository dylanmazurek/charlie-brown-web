import { Metadata } from "next";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  url: "https://charliebrownthemusical.com",
  title: "Charlie Brown The Musical",
  name: "You're a Good Man, Charlie Brown",
  description:"A musical comedy with music and lyrics by Clark Gesner, based on the characters created by Charles M. Schulz in his comic strip Peanuts.",
  keywords: ["musical", "comedy", "peanuts", "charlie brown", "snoopy"],
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  robots: "index, follow",
  keywords: siteConfig.keywords,
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  icons: {
    icon: "/favicon.ico",
  },
};