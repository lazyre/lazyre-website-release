"use client";
import SectionHeading from "@/components/SectionHeading";
import SectionHeadingWrapper from "@/components/SectionHeadingWrapper";
import useData from "@/hooks/useData";
import { sectionHeadingDataType } from "@/types/types";
import React from "react";
import BrandContainer from "./BrandContainer";
import HomeContentWrapper from "@/components/HomeContentWrapper";

export default function Brand() {
  const { data: headingData } = useData("sectionHeading", "brand");

  return (
    <section aria-labelledby="brand-section-heading" className="xl:mb-0">
      <div className="h-12 xl:hidden" />
      <SectionHeadingWrapper>
        {headingData && (
          <SectionHeading {...(headingData as sectionHeadingDataType)} />
        )}
      </SectionHeadingWrapper>
      <HomeContentWrapper>
        <BrandContainer />
      </HomeContentWrapper>
    </section>
  );
}
