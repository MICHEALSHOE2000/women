import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Greatest Concrete Solutions | Columbus, GA",
  description:
    "Woman-owned concrete contractor serving Columbus, Georgia and surrounding areas in Georgia and Alabama. Custom driveways, patios, slabs and walkways.",
  keywords: [
    "concrete contractor Columbus GA",
    "concrete driveway Columbus GA",
    "concrete patio Columbus GA",
    "concrete slabs Georgia",
    "woman-owned concrete contractor",
  ],
  openGraph: {
    title: "The Greatest Concrete Solutions | Columbus, GA",
    description:
      "Custom driveways, patios, slabs and walkways serving Columbus and surrounding communities in Georgia and Alabama.",
    type: "website",
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
