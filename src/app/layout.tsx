import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clairvoyant — Your AI assistant that thinks ahead",
  description:
    "Clairvoyant knows what you need before you ask. Get meeting briefs, surface urgent emails, and never miss a follow-up again. Try free.",
  keywords: [
    "AI assistant",
    "meeting briefs",
    "email triage",
    "productivity",
    "calendar",
    "proactive AI",
  ],
  authors: [{ name: "Clairvoyant" }],
  openGraph: {
    title: "Clairvoyant — Your AI assistant that thinks ahead",
    description:
      "Clairvoyant knows what you need before you ask. Get meeting briefs, surface urgent emails, and never miss a follow-up again.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clairvoyant — Your AI assistant that thinks ahead",
    description:
      "Clairvoyant knows what you need before you ask. Get meeting briefs, surface urgent emails, and never miss a follow-up again.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${playfair.variable} ${inter.variable}`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
