import CoverImage from "@/components/CoverImage";
import FixedHero from "@/components/FixedHero";
import HomeContentWrapper from "@/components/HomeContentWrapper";
import ImageGrid from "@/components/ImageGrid";
import SectionHeading from "@/components/SectionHeading";
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
      <HomeContentWrapper>
        <FixedHero
          title={title}
          subtitle={client}
          image={image}
          altText={`${client} project hero image`}
          workHero
        />
      </HomeContentWrapper>
      {section.map((section, index) => {
        switch (section.type) {
          case "HEADING":
            return (
              <HomeContentWrapper key={`heading-${index}`}>
                <SectionHeading
                  title={section.sectionDetails.title}
                  subtitle={section.sectionDetails.subtitle}
                  workHeading
                />
              </HomeContentWrapper>
            );
          case "COVERIMAGE":
            return (
              <div className="xl:py-12" key={`coverimage-${index}`}>
                <CoverImage src={coverImage} alt={`${client} cover image`} />
              </div>
            );
          //   case "CARASOUEL":
          //   case "FULLCARASOUEL":
          //     if (section.sectionDetails.images) {
          //       const imageArray = section.sectionDetails.images.map((item) => ({
          //         src: item.imageSrc,
          //         alt: `${client} carousel image`,
          //         fit: item.fit,
          //         bgColor: item.bgColor,
          //         paddingValue: item.paddingValue,
          //       }));
          //       return (
          //         <WorkSection
          //           key={`carousel-${index}`}
          //           title={section.sectionDetails.title}
          //           subtitle={section.sectionDetails.subtitle}
          //           images={imageArray}
          //           portrait={section.type === "CARASOUEL"}
          //         />
          //       );
          //     }
          //     break;
          case "IMAGEGRID":
            if (section.sectionDetails.images) {
              const imageArray = section.sectionDetails.images.map((item) => ({
                src: item.imageSrc,
                alt: `${client} grid image`,
              }));
              return (
                <HomeContentWrapper key={`imagegrid-${index}`}>
                  <ImageGrid images={imageArray} />
                </HomeContentWrapper>
              );
            }
            break;
          //   case "INFOPANE":
          //     if (section.sectionDetails.images) {
          //       return (
          //         <RoundedPanes
          //           key={`infopane-${index}`}
          //           image={section.sectionDetails.images[0].imageSrc}
          //           imageAlt={`${client} info pane image`}
          //           content={{
          //             title: section.sectionDetails.title,
          //             subtitle: section.sectionDetails.subtitle,
          //           }}
          //         />
          //       );
          //     }
          //     break;
          //   case "VIDEOSHOWCASE":
          //     return (
          //       <div
          //         key={`videoshowcase-${index}`}
          //         className="container max-w-[100rem]"
          //       >
          //         <RoundedVideo
          //           video={section.sectionDetails.video?.videoSrc}
          //           autoplay={section.sectionDetails.video?.autoplay}
          //         />
          //       </div>
          //     );
          default:
            return null;
        }
      })}
    </>
  );
};

export default WorkDetails;
