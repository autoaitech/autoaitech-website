import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, DM_Serif_Display, DM_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { Analytics } from "@vercel/analytics/react";

const bricolage = Bricolage_Grotesque({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const dmMono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "AutoAITech — AI Infrastructure for Agencies",
  description:
    "AutoAITech builds and runs AI infrastructure for Irish and UK agencies — lead follow-up, proposals, reporting, and more — running 24/7.",
  keywords: ["AI automation", "agency AI", "AI infrastructure", "B2B AI", "marketing automation Ireland"],
  openGraph: {
    title: "AutoAITech — AI Infrastructure for Agencies",
    description:
      "AutoAITech builds and runs AI infrastructure for Irish and UK agencies — running 24/7.",
    url: "https://autoaitech.co",
    siteName: "AutoAITech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoAITech — AI Infrastructure for Agencies",
    description:
      "AutoAITech builds and runs AI infrastructure for Irish and UK agencies — running 24/7.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${dmSerif.variable} ${dmMono.variable} ${dmSans.variable}`}>
      <body className="bg-white">
        <Nav />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <CookieBanner />
      </body>
    </html>
  );
}
