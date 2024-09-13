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

type workDetailsProps = {
  work: workDataType;
};

const WorkDetails: React.FC<workDetailsProps> = ({ work }) => {
  const { title, client, image, coverImage, section, testimonial, nextWorkId } =
    work;
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
      {section.map((section, index) => {
        switch (section.type) {
          case "HEADING":
            return (
              <ContentWrapper key={`heading-${index}`}>
                <SectionHeading
                  title={section.sectionDetails.title}
                  subtitle={section.sectionDetails.subtitle}
                  workHeading
                />
              </ContentWrapper>
            );
          case "COVERIMAGE":
            return (
              <div className="xl:py-12" key={`coverimage-${index}`}>
                <CoverImage src={coverImage} alt={`${client} cover image`} />
              </div>
            );
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
            if (section.sectionDetails.images) {
              return (
                <ContentWrapper key={`infopane-${index}`}>
                  <RoundedPanes
                    image={section.sectionDetails.images[0].imageSrc}
                    imageAlt={`${client} info pane image`}
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
                <div className="min-h-screen flex justify-center items-center bg-black text-white">
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
        <SectionHeading
          title="Feedback From The Client"
          subtitle={testimonial.content}
          testimonialAuthor={testimonial.author}
          authorDesignation={testimonial.designation}
          workHeading
        />
      </ContentWrapper>
    </>
  );
};

export default WorkDetails;
