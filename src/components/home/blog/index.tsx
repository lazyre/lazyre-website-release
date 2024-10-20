import SectionHeading from "@/components/SectionHeading";
import SectionHeadingWrapper from "@/components/SectionHeadingWrapper";
import { sectionHeadingDataType } from "@/types/types";
import React from "react";
import BlogList from "./BlogList";
import { getData } from "@/lib/getData";
import BlogQueryWrapper from "./BlogQueryWrapper";

export default function Brand() {
  const headingData = getData("sectionHeading", "blog");

  return (
    <section aria-labelledby="blog-section-heading" className="xl:mb-0">
      <SectionHeadingWrapper>
        {headingData && (
          <SectionHeading {...(headingData as sectionHeadingDataType)} />
        )}
      </SectionHeadingWrapper>
      <BlogQueryWrapper />
    </section>
  );
}
