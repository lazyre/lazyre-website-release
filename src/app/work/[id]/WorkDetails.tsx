import CoverImage from "@/components/CoverImage";
import FixedHero from "@/components/FixedHero";
import ContentWrapper from "@/components/ContentWrapper";
import ImageGrid from "@/components/ImageGrid";
import OverviewGrid from "@/components/OverviewGrid";
import RoundedPanes from "@/components/RoundedPanes";
import SectionHeading from "@/components/SectionHeading";
import VideoPlayer from "@/components/VideoPlayer";
import WorkCarouselSection from "@/components/Work/WorkCarouselSection";
import { workDataType } from "@/types/types";
import React from "react";
import FeatureList from "@/components/FeatureList";
import ShowcaseGrid from "@/components/ShowcaseGrid";
import NextWork from "@/components/Work/NextWork";

type workDetailsProps = {
  work: workDataType;
};

const WorkDetails: React.FC<workDetailsProps> = ({ work }) => {
  const {
    title,
    client,
    image,
    coverImage,
    overview,
    section,
    testimonial,
    nextWorkId,
  } = work;
  return (
    <>
      <ContentWrapper>
        <FixedHero
          title={title}
          subtitle={client}
          image={image}
          altText={`${client} project hero image`}
          workHero
        />
      </ContentWrapper>
      <ContentWrapper>
        <SectionHeading
          title={overview.heading}
          subtitle={overview.description}
          workHeading
        />
      </ContentWrapper>

      <CoverImage src={coverImage} alt={`${title} cover image`} />

      {section.map((section, index) => {
        switch (section.type) {
          case "HEADING":
            return (
              <ContentWrapper key={`heading-${index}`}>
                <SectionHeading
                  title={section.sectionDetails.title}
                  subtitle={section.sectionDetails.subtitle}
                  workHeading={!section.sectionDetails.largeHeading}
                />
              </ContentWrapper>
            );
          case "COVERIMAGE":
            if (section.sectionDetails.sectionImage) {
              return (
                <div key={`coverimage-${index}`}>
                  <CoverImage
                    src={section.sectionDetails.sectionImage.imageSrc}
                    alt={section.sectionDetails.sectionImage.altText}
                  />
                </div>
              );
            }
          case "FEATURES":
            if (section.sectionDetails.features) {
              return (
                <ContentWrapper key={`feature-${index}`}>
                  <FeatureList features={section.sectionDetails.features} />
                </ContentWrapper>
              );
            }
            break;
          case "SHOWCASE":
            if (section.sectionDetails.showcase) {
              return (
                <ContentWrapper key={`showcase-${index}`}>
                  <ShowcaseGrid items={section.sectionDetails.showcase} />
                </ContentWrapper>
              );
            } else if (section.sectionDetails.videoShowcase) {
              return (
                <ContentWrapper key={`showcase-${index}`}>
                  <ShowcaseGrid items={section.sectionDetails.videoShowcase} />
                </ContentWrapper>
              );
            }
            break;
          case "CAROUSEL":
          case "FULLCAROUSEL":
            if (section.sectionDetails.images) {
              const imageArray = section.sectionDetails.images.map((item) => ({
                src: item.imageSrc,
                alt: `${client} carousel image`,
                fit: item.fit,
                bgColor: item.bgColor,
                paddingValue: item.paddingValue,
              }));
              return (
                <WorkCarouselSection
                  key={`carousel-${index}`}
                  title={section.sectionDetails.title}
                  subtitle={section.sectionDetails.subtitle}
                  images={imageArray}
                  portrait={section.type === "CAROUSEL"}
                />
              );
            }
            break;
          case "IMAGEGRID":
            if (section.sectionDetails.images) {
              const imageArray = section.sectionDetails.images.map((item) => ({
                src: item.imageSrc,
                alt: `${client} grid image`,
              }));
              return (
                <ImageGrid key={`imagegrid-${index}`} images={imageArray} />
              );
            }
            break;
          case "INFOPANE":
            if (section.sectionDetails.sectionImage) {
              return (
                <ContentWrapper key={`infopane-${index}`}>
                  <RoundedPanes
                    image={section.sectionDetails.sectionImage.imageSrc}
                    imageAlt={`${client} info pane image`}
                    bgColor={section.sectionDetails.sectionImage.bgColor}
                    fit={section.sectionDetails.sectionImage.fit}
                    paddingValue={
                      section.sectionDetails.sectionImage.paddingValue
                    }
                    content={{
                      title: section.sectionDetails.title,
                      subtitle: section.sectionDetails.subtitle,
                    }}
                  />
                </ContentWrapper>
              );
            }
            break;
          case "OVERVIEWGRID":
            if (section.sectionDetails.description) {
              return (
                <div
                  key={`overview-${index}`}
                  className="min-h-screen flex justify-center items-center bg-black text-white"
                >
                  <div className="container">
                    <OverviewGrid
                      title={section.sectionDetails.title}
                      heading={section.sectionDetails.subtitle}
                      description1={section.sectionDetails.description[0]}
                      description2={section.sectionDetails.description[1]}
                    />
                  </div>
                </div>
              );
            }
            break;
          case "VIDEOSHOWCASE":
            if (section.sectionDetails.video) {
              return (
                <ContentWrapper key={`videoshowcase-${index}`}>
                  <div className="container max-w-[100rem]">
                    <VideoPlayer
                      src={section.sectionDetails.video.videoSrc}
                      autoPlay={section.sectionDetails.video.autoplay}
                      loop={false}
                      muted={true}
                      className="w-full"
                    />
                  </div>
                </ContentWrapper>
              );
            }
          default:
            return null;
        }
      })}
      <ContentWrapper>
        <div className="min-h-screen flex justify-center items-center">
          <SectionHeading
            title="Feedback From The Client"
            subtitle={testimonial.content}
            testimonialAuthor={testimonial.author}
            authorDesignation={testimonial.designation}
            workHeading
          />
        </div>
      </ContentWrapper>
      <NextWork workId={nextWorkId} />
    </>
  );
};

export default WorkDetails;
