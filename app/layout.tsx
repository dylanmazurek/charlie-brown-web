import { fontSans } from "@/config/fonts";
import { icons, openGraph, siteConfig } from "@/config/site";
import "@/styles/cloud.css";
import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata, Viewport } from "next";
import { Event, WithContext } from 'schema-dts';
import Navbar from "./components/navbar";
 
const jsonLd: WithContext<Event> = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: siteConfig.name,
    description: siteConfig.description,
    startDate: '2025-04-08T10:00:00+11:00',
    endDate: '2025-04-13T14:00:00+11:00',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
        '@type': 'Place',
        name: 'The MC Showroom',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'The Showroom, Level 1, 50 Clifton Street',
            addressLocality: 'Prahran',
            postalCode: '3181',
            addressRegion: 'VIC',
            addressCountry: 'AU',
        },
    },
}

export const metadata: Metadata = {
    alternates: {
        canonical: siteConfig.url,
    },
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    robots: "index, follow",
    keywords: siteConfig.keywords,
    openGraph: openGraph,
    icons: icons,
};

export const viewport: Viewport = {
    themeColor: [{ media: "(prefers-color-scheme: light)", color: "#ffe01b" }],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html suppressHydrationWarning lang="en" className="scroll-smooth">
            <head />
            <body
                className={clsx(
                    "min-h-screen charlie-brown-bg font-sans antialiased",
                    fontSans.variable,
                )}
            >
                <div className="relative flex flex-col min-h-screen">
                    <Navbar />
                    {children}
                    {/* Footer */}
                    <footer className="bg-gray-800 text-white py-8">
                        <div className="container mx-auto px-4 text-center">
                            <p className="mb-2">Website by Dylan Mazurek</p>
                            <p className="text-sm text-gray-400">
                                "Peanuts" characters created by Charles M. Schulz. Music and lyrics by Clark Gesner.
                            </p>
                        </div>
                    </footer>
                </div>
            </body>
        </html>
    );
}
