import { notFound } from "next/navigation";
import { getData } from "@/lib/getData";
import { brandDataType } from "@/types/types";
import { Metadata } from "next";
import AllBrand from "./AllBrand";

export const metadata: Metadata = {
  title: "Our Brands",
  description:
    "Discover Lazyre's seven specialized brands: Lazyre Design, Lazyre Tech, Lazyre Web, Lazyre Digitalytics, Lazyre Build, Lazyre Studios, and Lazyre Lab. Each brand offers unique expertise in areas such as design, technology, web development, digital marketing, brand creation, multimedia, and experimental technologies like AR, VR, AI, and blockchain.",
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
      lightAccentColor: brand.lightAccentColor,
    };
  });

  return <AllBrand brandData={brandData} />;
}
