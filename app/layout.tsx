import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AutoAITech — AI Infrastructure for Agencies",
  description:
    "AutoAITech builds and runs AI systems inside your business that generate measurable ROI — continuously. Built for marketing agencies and B2B service businesses in Ireland and the UK.",
  keywords: ["AI automation", "agency AI", "AI infrastructure", "B2B AI", "marketing automation Ireland"],
  openGraph: {
    title: "AutoAITech — AI Infrastructure for Agencies",
    description:
      "AutoAITech builds and runs AI systems inside your business that generate measurable ROI — continuously. Built for marketing agencies and B2B service businesses in Ireland and the UK.",
    url: "https://autoaitech.co",
    siteName: "AutoAITech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoAITech — AI Infrastructure for Agencies",
    description:
      "AutoAITech builds and runs AI systems inside your business that generate measurable ROI — continuously.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white">
        <Nav />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
