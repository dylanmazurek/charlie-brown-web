import { fontSans } from "@/config/fonts";
import { openGraph } from "@/config/opengraph";
import { siteConfig } from "@/config/site";
import "@/styles/cloud.css";
import "@/styles/countdown.css";
import "@/styles/globals.css";
import { GoogleTagManager } from '@next/third-parties/google';
import clsx from "clsx";
import { Metadata, Viewport } from "next";
import { jsonLd } from "./components/metadata";
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
            <GoogleTagManager gtmId={siteConfig.site.verification.googleTagManager} />
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
                </div>
            </body>
        </html>
    );
}
