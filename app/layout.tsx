import type { Metadata } from "next";
import { Aguafina_Script, Anton_SC, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

const antonSc = Anton_SC({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton-sc",
  display: "swap",
});

const aguafinaScript = Aguafina_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-aguafina-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Thomas Matthew Gibson - Music",
  description: "Official website of Thomas Matthew Gibson - Music, releases, and merchandise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} ${antonSc.variable} ${aguafinaScript.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
