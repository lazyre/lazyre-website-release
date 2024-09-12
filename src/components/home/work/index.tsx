import React from "react";
import WorkContainer from "./WorkContainer";
import { getData } from "@/lib/getData";

export default function Brand() {
  const headingData = getData("sectionHeading", "work");

  return (
    <section aria-labelledby="work-section-heading" className="xl:mb-0">
      <h1 className="sr-only">Our Work</h1>
      <div className="px-6 md:px-12 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-0 xl:px-0">
        <WorkContainer />
      </div>
    </section>
  );
}
