import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import LocalFont from "next/font/local";
import "./globals.css";

const lexend = Lexend({ subsets: ["latin"] });
const myfont = LocalFont({ src: "./fonts/test-epicene-text-regular.woff2" });
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Azeez alhameen",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myfont.className}>
        
        {children}
        <Analytics />
      </body>
    </html>
  );
}
