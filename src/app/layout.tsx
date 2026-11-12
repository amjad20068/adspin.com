import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { AGENCY_CONFIG } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL(AGENCY_CONFIG.officialWebsite),
  title: {
    default: "AD SPIN — Premium Creative Branding, Advertising & Digital Agency",
    template: "%s | AD SPIN Creative Agency",
  },
  description:
    "We make brands impossible to ignore. AD SPIN combines strategic design, Swiss typography, video production, and high-impact digital marketing for ambitious international enterprises.",
  keywords: [
    "Creative Branding Agency",
    "Graphic Design Agency",
    "Digital Marketing Agency",
    "Logo Design",
    "Brand Identity Design",
    "Social Media Creative Agency",
    "Advertising Agency",
    "Website Design and Development",
    "Ad Spin",
    "Healthcare Branding",
    "Hospital Branding",
    "Commercial Video Production"
  ],
  authors: [{ name: "AD SPIN" }],
  creator: "AD SPIN",
  publisher: "AD SPIN",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: AGENCY_CONFIG.officialWebsite,
    title: "AD SPIN — We Make Brands Impossible to Ignore",
    description:
      "Award-level creative branding, graphic design, social media campaigns, video production, and digital experiences.",
    siteName: "AD SPIN",
    images: [
      {
        url: "/images/portfolio/page-01.png",
        width: 1200,
        height: 630,
        alt: "AD SPIN Creative Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AD SPIN — Creative Agency",
    description:
      "We combine creative thinking, strategic design, and digital innovation to build brands that stand apart.",
    images: ["/images/portfolio/page-01.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/logos/spiral.png",
    apple: "/images/logos/spiral.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AdvertisingAgency",
    name: "AD SPIN",
    url: AGENCY_CONFIG.officialWebsite,
    logo: `${AGENCY_CONFIG.officialWebsite}/images/logos/logo.png`,
    description:
      "Professional creative branding, graphic design, advertising, digital marketing, and digital experience agency.",
    telephone: AGENCY_CONFIG.phones[0],
    email: AGENCY_CONFIG.email,
    sameAs: [
      AGENCY_CONFIG.instagram,
      AGENCY_CONFIG.officialWebsite,
    ],
    areaServed: ["India", "Qatar", "United Arab Emirates", "Oman", "Worldwide"],
    priceRange: "$$",
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-brand-black selection:bg-brand-red selection:text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}

