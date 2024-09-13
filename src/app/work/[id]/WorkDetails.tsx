import CoverImage from "@/components/CoverImage";
import FixedHero from "@/components/FixedHero";
import HomeContentWrapper from "@/components/HomeContentWrapper";
import ImageGrid from "@/components/ImageGrid";
import RoundedImage from "@/components/RoundedImage";
import RoundedPanes from "@/components/RoundedPanes";
import SectionHeading from "@/components/SectionHeading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
          //!fine
          //   case "IMAGEGRID":
          //     if (section.sectionDetails.images) {
          //       const imageArray = section.sectionDetails.images.map((item) => ({
          //         src: item.imageSrc,
          //         alt: `${client} grid image`,
          //       }));
          //       return (
          //         <HomeContentWrapper key={`imagegrid-${index}`}>
          //           <ImageGrid images={imageArray} />
          //         </HomeContentWrapper>
          //       );
          //     }
          //     break;
          //   case "INFOPANE":
          //     if (section.sectionDetails.images) {
          //       return (
          //         <HomeContentWrapper key={`infopane-${index}`}>
          //           <RoundedPanes
          //             image={section.sectionDetails.images[0].imageSrc}
          //             imageAlt={`${client} info pane image`}
          //             content={{
          //               title: section.sectionDetails.title,
          //               subtitle: section.sectionDetails.subtitle,
          //             }}
          //           />
          //         </HomeContentWrapper>
          //       );
          //     }
          //     break;
          //   case "VIDEOSHOWCASE":
          //     if (section.sectionDetails.video) {
          //       return (
          //         <div
          //           key={`videoshowcase-${index}`}
          //           className="container max-w-[100rem]"
          //         >
          //           <VideoPlayer
          //             src={section.sectionDetails.video.videoSrc}
          //             autoPlay={section.sectionDetails.video.autoplay}
          //             loop={false}
          //             muted={true}
          //             className="w-full"
          //           />
          //         </div>
          //       );
          //     }
          default:
            return null;
        }
      })}
    </>
  );
};

export default WorkDetails;
