import { notFound } from "next/navigation";
import { getData } from "@/lib/getData";
import { brandDataType } from "@/types/types";
import BrandDetails from "./BrandDetails";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  try {
    const brandData = getData("brand", params.id) as brandDataType;

    return {
      // Dynamic title and description
      title: `${brandData.title} | Lazyre`,
      description: brandData.subDescription,

      // Open Graph metadata for social sharing
      openGraph: {
        siteName: "Lazyre - Software Development & Digital Solutions",
        locale: "en_US",
        type: "website",
        title: `${brandData.title} | Lazyre`,
        description: brandData.subDescription,
        url: `https://lazyre.com/brands/${params.id}`,
        images: [
          {
            url: brandData.image,
            width: 1200,
            height: 630,
            alt: `${brandData.title} Official Page`,
            type: "image/webp",
            secureUrl: brandData.image,
          },
        ],
      },

      // Twitter card metadata
      twitter: {
        card: "summary_large_image",
        site: "@lazyrehub",
        creator: "@lazyrehub",
        title: `${brandData.title} | Lazyre`,
        description: brandData.subDescription,
        images: [
          {
            url: brandData.image,
            alt: `${brandData.title} Official Page`,
            width: 800,
            height: 418,
          },
        ],
      },
      keywords: brandData.keywords,
    };
  } catch (error) {
    return {
      // Fallback metadata for brand not found
      title: "Brand Not Found | Lazyre",
      description: "Sorry, the brand you are looking for does not exist.",
    };
  }
}

export default function BrandPage({ params }: { params: { id: string } }) {
  try {
    const brandData = getData("brand", params.id) as brandDataType;
    return <BrandDetails brand={brandData} />;
  } catch (error) {
    notFound();
  }
}
