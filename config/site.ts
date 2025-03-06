import { Icons } from "next/dist/lib/metadata/types/metadata-types";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";
import { Duration } from "schema-dts";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  url: "https://charliebrownthemusical.com",
  title: "Charlie Brown The Musical",
  name: "You're a Good Man, Charlie Brown",
  description: "A musical comedy with music and lyrics by Clark Gesner, based on the characters created by Charles M. Schulz in his comic strip Peanuts.",
  keywords: ["musical", "comedy", "peanuts", "charlie brown", "snoopy", "lucy", "linus", "schroeder", "sally", "woodstock", "school holidays", "kids", "family", "theatre", "show", "performance", "play", "stage", "live", "event", "tickets", "book", "buy", "purchase", "prahran", "melbourne", "victoria", "australia"],
  bookingUrl: "https://www.trybooking.com/events/1320175/sessions",
  facebookDomainVerification: "xsv4swmk8g4fh6nunfkhaclh60sv52",
};

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

export const icons: Icons = {
  icon: "/favicon.ico",
  apple: [
    {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
      rel: "apple-touch-icon",
    }
  ],
  shortcut: "/favicon.ico",
}

export interface Slot {
  id: number;
  name: string;
  time: Date;
}

export interface Show {
  id: number;
  date: Date;
  slot: Slot;
  duration: Duration;
}

export const slots: Slot[] = [
  { id: 1, name: "Morning", time: new Date("2000-01-01T10:00:00") },
  { id: 2, name: "Midday", time: new Date("2000-01-01T12:00:00") },
  { id: 3, name: "Afternoon", time: new Date("2000-01-01T14:00:00") },
  { id: 4, name: "Evening", time: new Date("2000-01-01T19:30:00") },
];

export const shows: Show[] = [
  { id: 1, date: new Date("2025-04-08"), slot: slots[0], duration: "P50M" },
  { id: 2, date:  new Date("2025-04-08"), slot: slots[1], duration: "P50M" },
  { id: 3, date:  new Date("2025-04-09"), slot: slots[0], duration: "P50M" },
  { id: 4, date:  new Date("2025-04-09"), slot: slots[1], duration: "P50M" },
  { id: 5, date:  new Date("2025-04-10"), slot: slots[0], duration: "P50M" },
  { id: 6, date:  new Date("2025-04-10"), slot: slots[1], duration: "P50M" },
  { id: 7, date:  new Date("2025-04-11"), slot: slots[0], duration: "P50M" },
  { id: 8, date:  new Date("2025-04-11"), slot: slots[1], duration: "P50M" },
  { id: 9, date:  new Date("2025-04-11"), slot: slots[3], duration: "P50M" },
  { id: 10, date:  new Date("2025-04-12"), slot: slots[2], duration: "P50M" },
  { id: 11, date:  new Date("2025-04-12"), slot: slots[3], duration: "P50M" },
  { id: 12, date:  new Date("2025-04-13"), slot: slots[2], duration: "P50M" },
];

export interface Ticket {
  type: string;
  price: number;
}

export const tickets: Ticket[] = [
  { type: "Adult", price: 29.50 },
  { type: "Concession", price: 25.50 },
  { type: "Group (6+)", price: 25.50 },
];