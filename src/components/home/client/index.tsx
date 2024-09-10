"use client";
import SectionHeading from "@/components/SectionHeading";
import SectionHeadingWrapper from "@/components/SectionHeadingWrapper";
import useData from "@/hooks/useData";
import { sectionHeadingDataType } from "@/types/types";
import React from "react";
import HomeContentWrapper from "@/components/HomeContentWrapper";
import ClientLogos from "./ClientLogos";

export default function Brand() {
  const { data: headingData } = useData("sectionHeading", "client");

  return (
    <section aria-labelledby="client-section-heading" className="xl:mb-0">
      <SectionHeadingWrapper>
        {headingData && (
          <SectionHeading {...(headingData as sectionHeadingDataType)} />
        )}
      </SectionHeadingWrapper>
      <HomeContentWrapper>
        <ClientLogos />
      </HomeContentWrapper>
    </section>
  );
}
