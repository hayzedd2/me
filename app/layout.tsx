import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Newsreader } from "next/font/google";
export const metadata: Metadata = {
  title: "Azeez alhameen",
  description: "Frontend engineer portfolio",
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
