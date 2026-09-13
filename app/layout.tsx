import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { siteConfig } from "@/lib/siteConfig";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.url),
  title: {
    default: siteConfig.seo.title,
    template: "%s | Pixel Pros Photography",
  },
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: "Pixel Pros Photography" }],
  creator: "Pixel Pros",
  publisher: "Pixel Pros Photography & Films",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.seo.url,
    title: "Pixel Pros — Photography & Films",
    description: "Stories Worth Remembering. Luxury wedding photography, candid couples, and cinematic films in Marthandam, Tamil Nadu and Kerala.",
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1920,
        height: 1280,
        alt: "Pixel Pros Wedding and Pre-Wedding Photography",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixel Pros — Photography & Films",
    description: "Stories Worth Remembering. Luxury wedding photography and cinematic films across Tamil Nadu and Kerala.",
    images: [siteConfig.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "PhotographyBusiness",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description: siteConfig.seo.description,
    url: siteConfig.seo.url,
    telephone: siteConfig.contact.phoneDisplay,
    priceRange: "₹₹",
    image: `${siteConfig.seo.url}${siteConfig.seo.ogImage}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Porancode, Kattukadai",
      addressLocality: "Marthandam",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "8.3072",
      longitude: "77.2285",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "20:00",
      },
    ],
  };

  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#F8F6F0] text-[#20201C] selection:bg-[#20201C] selection:text-[#FAF8F5]">
        <Header darkHero={true} />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
