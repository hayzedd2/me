import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Newsreader } from "next/font/google";

const newsreader = Newsreader({subsets : ["latin"]})

export const metadata: Metadata = {
  title: "Alhameen",
  description:
    "Frontend engineer",
  metadataBase: new URL("https://alhameen.xyz"),
  openGraph: {
    title: "Alhameen",
    description:
      "Frontend engineer",
    type: "website",
    url: "https://alhameen.xyz",
    siteName: "Alhameen",
    locale: "en_US",
    images: [
      {
        url: "/og-img.png",
        width: 1200,
        height: 630,
        alt: "Alhameen - Frontend engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alhameen",
    description: "Frontend engineer",
    images: ["/og-img.png"],
    creator: "@xylogeist_",
  },
  keywords: ["portfolio", "frontend", "engineer", "alhameen", "azeez"],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={newsreader.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
