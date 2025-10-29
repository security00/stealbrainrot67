import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Steal Brainrot 67 - Rare Meme Game",
  description: "Play Steal Brainrot 67 online - Collect rare Roblox memes and unlock the legendary 67 item. Free unblocked game with guides and tips.",
  keywords: "Roblox, Steal a Brainrot, game, meme, online game, unblocked",
  authors: [{ name: "Steal Brainrot 67" }],
  metadataBase: new URL("https://stealbrainrot67.com"),
  openGraph: {
    title: "Steal Brainrot 67 - Rare Meme Game",
    description: "Play Steal Brainrot 67 online - Collect rare Roblox memes and unlock the legendary 67 item.",
    url: "https://stealbrainrot67.com",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Steal Brainrot 67 Game",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Steal Brainrot 67 - Rare Meme Game",
    description: "Play Steal Brainrot 67 online - Collect rare Roblox memes and unlock the legendary 67 item.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2B1B4A" />
        <link rel="canonical" href="https://stealbrainrot67.com/" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxxxxxxxxxx"></script>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
