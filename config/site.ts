import { SiteConfig } from "@/types/config";
import { cast } from "./cast";
import { event } from "./shows";

export const siteConfig: SiteConfig = {
  site: {
    url: new URL("https://charliebrownthemusical.com"),
    keywords: ["musical", "comedy", "peanuts", "charlie brown", "snoopy", "lucy", "linus", "schroeder", "sally", "woodstock", "school holidays", "kids", "family", "theatre", "show", "performance", "play", "stage", "live", "event", "tickets", "book", "buy", "purchase", "prahran", "melbourne", "victoria", "australia"],
    verification: {
      facebookDomainVerification: "xsv4swmk8g4fh6nunfkhaclh60sv52",
    }
  },
  show: {
    name: "You're a Good Man, Charlie Brown",
    description: "A musical comedy with music and lyrics by Clark Gesner, based on the characters created by Charles M. Schulz in his comic strip Peanuts.",
    duration: "60 minutes",
    ageRecommendation: "5+",
    event: event,
    cast: cast,
  },
  producer: {
    name: "StageBugs Productions",
    website: "https://www.stagebugsproductions.com",
  },
  venue: {
    name: "The MC Showroom",
    address: {
      streetAddress: "The Showroom, Level 1, 50 Clifton Street",
      addressLocality: "Prahran",
      postalCode: "3181",
      addressRegion: "VIC",
      addressCountry: "AU",
    },
    accessibility: [
      "There are 25 steps (including two landings) and handrails on both sides from the street to the foyer, with no lift access.",
      "There is unfixed raked seating with a floor level stage.",
      "The closest accessible parking bays are in Care Park on King Street which is a two minutes walk from the theatre."
    ]
  },
  icons: {
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
};