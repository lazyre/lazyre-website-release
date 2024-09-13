import SectionHeading from "@/components/SectionHeading";
import SectionHeadingWrapper from "@/components/SectionHeadingWrapper";
import { sectionHeadingDataType } from "@/types/types";
import React from "react";
import ContentWrapper from "@/components/ContentWrapper";
import ClientLogos from "./ClientLogos";
import { getData } from "@/lib/getData";

export default function Brand() {
  const headingData = getData("sectionHeading", "client");

  return (
    <section aria-labelledby="client-section-heading" className="xl:mb-0">
      <SectionHeadingWrapper>
        {headingData && (
          <SectionHeading {...(headingData as sectionHeadingDataType)} />
        )}
      </SectionHeadingWrapper>
      <ContentWrapper home>
        <ClientLogos />
      </ContentWrapper>
    </section>
  );
}
