import React from "react";
import SectionHeading from "@/components/SectionHeading";
import BrandServices from "@/components/Brand/BrandServices/BrandServices";
import BrandTools from "@/components/Brand/BrandTools";
import BrandRelatedWork from "@/components/Brand/BrandRelatedWork";
import FixedHero from "@/components/FixedHero";
import CoverImage from "@/components/CoverImage";
import { brandDataType } from "@/types/types";
import ContentWrapper from "@/components/ContentWrapper";

type BrandDetailsProps = {
  brand: brandDataType;
};

const BrandDetails: React.FC<BrandDetailsProps> = ({ brand }) => {
  const {
    title,
    subtitle,
    image,
    subHeading,
    subDescription,
    coverImage,
    services,
    toolsHeading,
    toolsDescription,
    tools,
    workHeading,
    workDescription,
    relatedWork,
  } = brand;

  return (
    <>
      <ContentWrapper>
        <FixedHero
          title={title}
          subtitle={subtitle}
          image={image}
          altText={`${title} hero image`}
          workHero
        />
      </ContentWrapper>
      <ContentWrapper>
        <SectionHeading title={subHeading} subtitle={subDescription} />
      </ContentWrapper>
      {/* <div className="xl:py-12">
        <CoverImage src={coverImage} alt={`${title} cover image`} />
      </div> */}
      <BrandServices services={services} />
      <ContentWrapper>
        <SectionHeading title={toolsHeading} subtitle={toolsDescription} />
      </ContentWrapper>
      <BrandTools tools={tools} />
      <ContentWrapper>
        <SectionHeading
          title={workHeading}
          subtitle={workDescription}
          ctaButton="See All Work"
        />
        <div className="mt-12">
          <BrandRelatedWork relatedWork={relatedWork} />
        </div>
      </ContentWrapper>
    </>
  );
};

export default BrandDetails;
