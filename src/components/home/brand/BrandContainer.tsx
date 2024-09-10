"use client";
import React, { useState, useEffect } from "react";
import BrandItem from "./BrandItem";
import BrandImage from "./BrandImage";
import { brandDataType } from "@/types/types";
import useData from "@/hooks/useData";

export default function BrandContainer() {
  const [brandInView, setBrandInView] = useState("");
  const [activeBrand, setActiveBrand] = useState<brandDataType | null>(null);
  const [prevBrand, setPrevBrand] = useState<brandDataType | null>(null);
  const [nextBrand, setNextBrand] = useState<brandDataType | null>(null);
  const { data } = useData("brand");
  const brandData = (data as brandDataType[]) || []; // Provide a default empty array

  useEffect(() => {
    if (brandData.length > 0) {
      const currentIndex = brandData.findIndex(
        (brand) => brand.id === brandInView
      );
      if (currentIndex !== -1) {
        setActiveBrand(brandData[currentIndex]);
        setPrevBrand(brandData[currentIndex - 1] || null);
        setNextBrand(brandData[currentIndex + 1] || null);
      } else {
        setActiveBrand(null);
        setPrevBrand(null);
        setNextBrand(null);
      }
    }
  }, [brandInView, brandData]);

  return (
    <div className="flex w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 justify-center w-full xl:w-1/2 xl:py-24 gap-12">
        {brandData.map((brand) => (
          <BrandItem
            key={brand.id}
            setBrandInView={setBrandInView}
            {...brand}
          />
        ))}
      </div>
      <div className="hidden xl:block sticky top-0 h-screen w-1/2">
        <BrandImage
          activeBrand={activeBrand}
          prevBrand={prevBrand}
          nextBrand={nextBrand}
        />
      </div>
    </div>
  );
}
