import ContentWrapper from "@/components/ContentWrapper";
import HeroHeading from "@/components/HeroHeading";
import React from "react";

type BrandItem = {
  id: string;
  title: string;
  services: {
    id: string;
    name: string;
  }[];
  image: string;
};

type Props = {
  brandData: BrandItem[];
};

function AllBrand({}: Props) {
  return (
    <ContentWrapper>
      <section className="relative min-h-screen" aria-labelledby="All Brands">
        <HeroHeading
          title="All brands"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan consectetur posuere. Vestibulum fermentum iaculis libero, non venenatis nibh mattis sit amet."
          workHero
        />
      </section>
    </ContentWrapper>
  );
}

export default AllBrand;
