import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { PT_Serif } from "next/font/google";

const pt_serif = PT_Serif({subsets : ["latin"], weight:["400", "700"]})

export const metadata: Metadata = {
  title: "Alhameen",
  description:
    "Frontend engineer",
  metadataBase: new URL("https://alhameen.xyz"),
  icons:{
    icon:"/me.webp",
    apple:"/me.webp"
  },
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
        url: "https://alhameen.xyz/og.png",
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
    images: ["https://alhameen.xyz/og.png"],
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
      <body className={pt_serif.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
