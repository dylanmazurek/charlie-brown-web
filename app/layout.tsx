import { fontSans } from "@/config/fonts";
import { openGraph } from "@/config/opengraph";
import { siteConfig } from "@/config/site";
import "@/styles/cloud.css";
import "@/styles/globals.css";
import { GoogleTagManager } from '@next/third-parties/google';
import clsx from "clsx";
import { Metadata, Viewport } from "next";
import { jsonLd } from "./components/jsonld";
import Navbar from "./components/navbar";

export const metadata: Metadata = {
    metadataBase: siteConfig.site.url,
    alternates: {
        canonical: "/",
    },
    title: {
        default: siteConfig.show.name,
        template: `%s - ${siteConfig.show.name}`,
    },
    description: siteConfig.show.description,
    robots: "index, follow",
    keywords: siteConfig.site.keywords,
    openGraph: openGraph,
    icons: siteConfig.icons,
    other: {
        "facebook-domain-verification": siteConfig.site.verification.facebookDomainVerification,
    }
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ffe01b" }
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html suppressHydrationWarning lang="en" className="scroll-smooth">
            <GoogleTagManager gtmId="GTM-KCBHKCBR" />
            <head />
            <body
                className={clsx(
                    "min-h-screen charlie-brown-bg font-sans antialiased",
                    fontSans.variable,
                )}
            >
                <script 
                    type="application/ld+json" 
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} 
                />
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
