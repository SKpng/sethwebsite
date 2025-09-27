import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/common/header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Seth Karallis - Professional Actor | London Based",
  description: "Professional actor based in London. View headshots, demo reels, credits, and contact information for casting opportunities.",
  keywords: "actor, london, theatre, film, tv, commercial, casting, headshots, demo reel",
  authors: [{ name: "Seth Karallis" }],
  openGraph: {
    title: "Seth Karallis - Professional Actor",
    description: "Professional actor based in London. View headshots, demo reels, credits, and contact information for casting opportunities.",
    type: "website",
    locale: "en_GB",
    siteName: "Seth Karallis Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seth Karallis - Professional Actor",
    description: "Professional actor based in London. View headshots, demo reels, credits, and contact information for casting opportunities.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}