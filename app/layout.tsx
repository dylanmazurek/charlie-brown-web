import "@/styles/globals.css";
import "@/styles/cloud.css";
import clsx from "clsx";
import { Metadata, Viewport } from "next";
import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import Navbar from "./components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
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
              <p className="mb-2">© 2024 You're a Good Man, Charlie Brown - Melbourne Production</p>
              <p className="text-sm text-gray-400">
                "Peanuts" characters created by Charles M. Schulz. Music and lyrics by Clark Gesner.
              </p>
              <div className="mt-4 flex justify-center space-x-4">
                <a href="#" className="hover:text-yellow-400">Contact</a>
                <a href="#" className="hover:text-yellow-400">Privacy Policy</a>
                <a href="#" className="hover:text-yellow-400">Terms of Service</a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
