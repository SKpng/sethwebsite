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
    url: "https://sethkarallis.com",
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
  other: {
    'cache-control': 'no-cache, no-store, must-revalidate',
    'pragma': 'no-cache',
    'expires': '0'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://sethkarallis.com" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}