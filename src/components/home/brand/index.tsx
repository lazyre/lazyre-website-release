import SectionHeading from "@/components/SectionHeading";
import SectionHeadingWrapper from "@/components/SectionHeadingWrapper";
import { sectionHeadingDataType } from "@/types/types";
import React from "react";
import BrandContainer from "./BrandContainer";
import ContentWrapper from "@/components/ContentWrapper";
import { getData } from "@/lib/getData";

export default function Brand() {
  const headingData = getData("sectionHeading", "brand");

  return (
    <section aria-labelledby="brand-section-heading" className="xl:mb-0">
      <div className="h-12 xl:hidden" />
      <SectionHeadingWrapper>
        {headingData && (
          <SectionHeading {...(headingData as sectionHeadingDataType)} />
        )}
      </SectionHeadingWrapper>
      <ContentWrapper home>
        <BrandContainer />
      </ContentWrapper>
    </section>
  );
}
