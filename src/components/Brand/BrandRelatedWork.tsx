import React from "react";
import workData from "@/data/WorkData";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Carousel } from "../ui/carousel";
import ArrowButton from "../buttons/ArrowButton";
import CustomCarousel from "../CustomCarousel";

type BrandRelatedWorkProps = {
  relatedWork: string[];
};

const BrandRelatedWork: React.FC<BrandRelatedWorkProps> = ({ relatedWork }) => {
  return (
    // <Carousel>
    <CustomCarousel loop={true} basis="BlogBasis">
      {relatedWork.map((workId) => {
        const work = workData.find((foundWork) => workId === foundWork.id);
        if (!work) return null;

        return (
          <Link
            key={work.id}
            href={`/work/${work.id}`}
            className="w-full flex flex-col  overflow-hidden rounded-xl p-6 bg-foreground text-background group cursor-pointer"
          >
            <div className="relative w-full h-[300px] xl:h-[500px] rounded-xl overflow-hidden">
              <Image
                src={work.image}
                fill
                alt={`${work.title} project image`}
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>
            <div>
              <ArrowButton buttonText={work.title} justifyBetween={true} />
            </div>
            <div className="w-full flex flex-wrap flex-grow text-lg text-text/80 font-light">
              {work.tags.slice(0, 4).map((tag, index) => (
                <div key={index} className="relative flex opacity-80 w-full">
                  <span className="w-full">{tag}</span>
                </div>
              ))}
            </div>
          </Link>
        );
      })}
    </CustomCarousel>
    // </Carousel>
  );
};

export default BrandRelatedWork;
