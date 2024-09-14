import { notFound } from "next/navigation";
import { getData } from "@/lib/getData";
import { brandDataType } from "@/types/types";
import { Metadata } from "next";
import AllBrand from "./AllBrand";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Our brands`,
    description: "Our Brand Page",
  };
}

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
