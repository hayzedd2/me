import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Newsreader } from "next/font/google";

export const metadata: Metadata = {
  title: 'Azeez Alhameen',
  description: 'Frontend Engineer',
  openGraph: {
    title: 'Azeez Alhameen',
    description: 'Frontend Engineer',
    type: 'website',
    siteName: "Alhameen's portfolio",
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Azeez Alhameen - Frontend Engineer',
      },
    ],
  },
};
const newsreader = Newsreader({subsets : ["latin"]})
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
