import { notFound } from "next/navigation";
import { getData } from "@/lib/getData";
import { workDataType } from "@/types/types";
import { Metadata } from "next";
import AllWork from "./AllWork";

export const metadata: Metadata = {
  title: "Our Work | Lazyre - Digital Products & Experiences",
  description:
    "Explore the diverse portfolio of innovative digital solutions created by Lazyre. From design to technology, our work delivers impactful results for businesses worldwide.",

  keywords: [
    "Lazyre work showcase",
    "digital product portfolio",
    "software development projects",
    "technology case studies",
    "AI-powered solutions projects",
    "web and mobile application work",
    "innovative technology examples",
    "creative digital work",
  ],

  openGraph: {
    siteName: "Lazyre - Redefining Digital Presence",
    locale: "en_US",
    type: "website",
    title: "Our Work | Lazyre - Digital Products & Experiences",
    description:
      "Browse Lazyre's extensive portfolio of digital solutions. See how we help businesses thrive with cutting-edge design, software development, AI, and more.",
    url: "https://lazyre.com/our-work",
    images: [
      {
        url: "https://cdn.lazyre.com/images/about/cover.webp",
        width: 1200,
        height: 630,
        alt: "Lazyre Work Showcase",
        type: "image/webp",
        secureUrl: "https://cdn.lazyre.com/images/about/cover.webp",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@lazyrehub",
    creator: "@lazyrehub",
    title: "Our Work | Lazyre - Digital Products & Experiences",
    description:
      "Discover how Lazyre transforms businesses with innovative digital products and services across design, technology, AI, and more.",
    images: [
      {
        url: "https://cdn.lazyre.com/images/about/cover.webp",
        alt: "Lazyre Work Showcase",
        width: 800,
        height: 418,
      },
    ],
  },
  alternates: {
    canonical: "https://lazyre.com/work",
    languages: {
      "en-US": "https://lazyre.com/work",
    },
  },
};

export default function workPage() {
  const allWorkData = getData("work") as workDataType[];

  if (!allWorkData) {
    notFound();
  }

  const workData = allWorkData.map((work, index) => {
    return {
      id: work.id,
      title: work.title,
      client: work.client,
      tags: work.tags,
      image: work.image,
    };
  });

  return <AllWork workData={workData} />;
}
