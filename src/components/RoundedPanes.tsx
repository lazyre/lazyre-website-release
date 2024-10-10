import React from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import RoundedImage from "./RoundedImage";

type RoundedPanesProps = {
  image: string;
  imageAlt: string;
  bgColor?: string;
  fit?: "cover" | "contain" | undefined;
  paddingValue?: string;
  content: { title: string; subtitle: string };
};

const RoundedPanes: React.FC<RoundedPanesProps> = ({
  image,
  imageAlt,
  content,
  bgColor,
  fit,
  paddingValue,
}) => {
  return (
    <section className="container max-w-[100rem] flex w-full">
      <div className="grid grid-cols-1 justify-center w-full md:w-1/2 md:py-24 gap-12">
        <div className="relative flex flex-col items-center w-full min-h-[unset] md:min-h-[calc(100vh-12rem)] text-background bg-foreground rounded-xl p-6 md:p-12 group cursor-pointer overflow-hidden">
          <div className="flex flex-col items-center w-full md:h-full md:justify-center">
            <div className="relative w-full rounded-xl  md:hidden overflow-hidden">
              {/* <Image
                src={image}
                fill
                alt={imageAlt}
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
              /> */}
              <RoundedImage image={image} alt={imageAlt} fit={fit} />
            </div>
            {/* <SectionHeading
              title={content.title}
              subtitle={content.subtitle}
              workHeading
              stackContent
            /> */}
            <div className="flex flex-col gap-12 pt-12 xl:pt-0">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold">
                {content.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl">
                {content.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block sticky top-0 h-screen w-1/2">
        <div className="absolute w-full h-screen opacity-100 py-24 pl-12">
          <div className="relative flex flex-col items-center h-full w-full rounded-xl overflow-hidden">
            {/* <Image
              src={image}
              fill
              alt={imageAlt}
              sizes="50vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            /> */}
            <RoundedImage
              image={image}
              alt={imageAlt}
              bgColor={bgColor}
              fit={fit}
              paddingValue={paddingValue}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoundedPanes;
