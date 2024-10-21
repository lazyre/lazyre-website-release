// // app/brand/[id]/page.tsx
// import { notFound } from "next/navigation";
// import { getData } from "@/lib/getData";
// import { brandDataType } from "@/types/types";
// import BrandDetails from "./BrandDetails";
// import { Metadata } from "next";

// export async function generateMetadata({
//   params,
// }: {
//   params: { id: string };
// }): Promise<Metadata> {
//   const brandData = getData("brand", params.id) as brandDataType;
//   if (!brandData) return { title: "Brand Not Found" };

//   return {
//     title: `${brandData.title} | Our Brand`,
//     description: brandData.subDescription,
//   };
// }

// export default function BrandPage({ params }: { params: { id: string } }) {
//   const brandData = getData("brand", params.id) as brandDataType;

//   if (!brandData) {
//     notFound();
//   }

//   return <BrandDetails brand={brandData} />;
// }

// app/brand/[id]/page.tsx
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
      title: `${brandData.title} | Our Brand`,
      description: brandData.subDescription,
    };
  } catch (error) {
    return {
      title: "Brand Not Found",
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
