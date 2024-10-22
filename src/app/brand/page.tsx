import { notFound } from "next/navigation";
import { getData } from "@/lib/getData";
import { brandDataType } from "@/types/types";
import { Metadata } from "next";
import AllBrand from "./AllBrand";

export const metadata: Metadata = {
  // Optimized title and description
  title:
    "Our Brands - Expertise in Design, Technology & Digital Innovation | Lazyre",
  description:
    "Explore Lazyre's seven specialized brands: Lazyre Design, Lazyre Tech, Lazyre Web, Lazyre Digitalytics, Lazyre Build, Lazyre Studios, and Lazyre Lab. We deliver expertise in cutting-edge technology, creative design, digital marketing, brand strategy, and experimental innovation.",

  keywords: [
    "Lazyre brands",
    "software development brands",
    "technology design brands",
    "web development divisions",
    "AI-powered solutions",
    "digital marketing expertise",
    "creative digital studios",
    "experimental technology",
  ],

  // Open Graph metadata for social sharing
  openGraph: {
    siteName: "Lazyre - Redefining Digital Presence",
    locale: "en_US",
    type: "website",
    title: "Our Brands - Design, Technology & Digital Solutions | Lazyre",
    description:
      "Discover Lazyre's seven specialized brands that offer top-tier expertise in design, technology, web development, digital marketing, multimedia, and advanced innovations like AI, AR, and blockchain.",
    url: "https://lazyre.com/brands",
    images: [
      {
        url: "https://cdn.lazyre.com/images/about/cover.webp",
        width: 1200,
        height: 630,
        alt: "Lazyre Brands Showcase",
        type: "image/webp",
        secureUrl: "https://cdn.lazyre.com/images/about/cover.webp",
      },
    ],
  },

  // Twitter metadata optimized for engagement
  twitter: {
    card: "summary_large_image",
    site: "@lazyrehub",
    creator: "@lazyrehub",
    title: "Our Brands - Leading in Design, Tech & Digital Solutions | Lazyre",
    description:
      "Explore Lazyre's expertise across seven brands, offering services in AI, web development, design, multimedia, digital marketing, and more. Join us in shaping the future of digital innovation.",
    images: [
      {
        url: "https://cdn.lazyre.com/images/about/cover.webp",
        alt: "Lazyre Brands Showcase",
        width: 800,
        height: 418,
      },
    ],
  },
  alternates: {
    canonical: "https://lazyre.com/brand",
    languages: {
      "en-US": "https://lazyre.com/brand",
    },
  },
};

export default function workPage() {
  const allBrandData = getData("brand") as brandDataType[];

  if (!allBrandData) {
    notFound();
  }

  const brandData = allBrandData.map((brand, index) => {
    return {
      id: brand.id,
      title: brand.title,
      services: brand.services,
      image: brand.image,
      description: brand.subDescription,
      lightAccentColor: brand.lightAccentColor,
    };
  });

  return <AllBrand brandData={brandData} />;
}
