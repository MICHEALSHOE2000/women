import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "./components/Header";
import MobileActionBar from "./components/MobileActionBar";
import { business, siteUrl } from "./data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Concrete Driveways, Patios & Slabs in Columbus, GA", template: "%s | The Greatest Concrete Solutions" },
  description: "Woman-owned concrete contractor in Columbus, GA serving nearby Georgia and Alabama communities with concrete driveways, patios, slabs and walkways.",
  alternates: { canonical: "/" },
  openGraph: { title: "Concrete Driveways, Patios & Slabs in Columbus, GA", description: "Custom concrete work for homes and properties across Columbus and surrounding Georgia and Alabama communities.", url: siteUrl, siteName: business.shortName, images: ["/images/concrete-hero.png"], type: "website" },
  twitter: { card: "summary_large_image", title: "Concrete Driveways, Patios & Slabs in Columbus, GA", description: "Woman-owned concrete contractor serving Columbus, GA and nearby GA + AL communities.", images: ["/images/concrete-hero.png"] },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};
export const viewport: Viewport = { themeColor: "#123b31" };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body><Header />{children}<MobileActionBar /></body></html>; }
