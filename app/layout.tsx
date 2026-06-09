import type { Metadata } from "next";
import { Archivo_Black, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FilmGrain from "@/components/motion/FilmGrain";
import Vignette from "@/components/motion/Vignette";
import { siteConfig } from "@/content/site-config";
import { imageSlot } from "@/lib/assets";

const archivo = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const ogImage = imageSlot(siteConfig.seo.ogImageSlot);

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.siteUrl),
  title: {
    default: siteConfig.seo.defaultTitle,
    template: `%s · ${siteConfig.company.name}`,
  },
  description: siteConfig.seo.defaultDescription,
  openGraph: {
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    url: siteConfig.seo.siteUrl,
    siteName: siteConfig.company.name,
    type: "website",
    locale: siteConfig.seo.locale,
    images: ogImage ? [{ url: ogImage, width: 1200, height: 630 }] : undefined,
  },
  twitter: {
    card: "summary_large_image",
    site: siteConfig.seo.twitterHandle,
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    images: ogImage ? [ogImage] : undefined,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={siteConfig.seo.htmlLang} className={`${archivo.variable} ${inter.variable}`}>
      <body className="bg-bg text-primary antialiased">
        <Header />
        {children}
        <Footer />
        <Vignette />
        <FilmGrain />
      </body>
    </html>
  );
}
