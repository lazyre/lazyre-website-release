"use client";
import React from "react";
import workData from "@/data/WorkData";
import { notFound } from "next/navigation";
import CoverImage from "@/components/CoverImage";
import Link from "next/link";
import { getData } from "@/lib/getData";
import { workDataType } from "@/types/types";
import { useCursor } from "@/contexts/CursorContext";
import { ArrowUpRight } from "lucide-react";

type NextWorkProps = {
  workId: string;
};
const NextWork: React.FC<NextWorkProps> = ({ workId }) => {
  const workDetails = getData("work", workId) as workDataType;
  const { setCursorType, setCursorText } = useCursor();
  if (workDetails) {
    let { title, coverImage } = workDetails;
    return (
      <Link
        href={`/work/${workId}`}
        key={`work-${workId}`}
        onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
          setCursorType("text");
          setCursorText("LinkIcon");
        }}
        onMouseLeave={() => {
          setCursorType("default");
          setCursorText("");
        }}
      >
        <div className="relative min-h-screen w-full text-white">
          <CoverImage src={coverImage} alt={`${title}-image`} />
          <div className="absolute inset-0 w-full bg-gradient-to-t from-black  via-black/60 to-black/30"></div>
          <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex gap-4">
              <div className="text-xl xl:text-2xl ">Next Project</div>
              <ArrowUpRight aria-hidden="true" />
            </div>
            <h2 className="text-5xl xl:text-8xl font-bold font-heading ">
              {title}
            </h2>
          </div>
        </div>
      </Link>
    );
  } else {
    notFound();
  }
};
export default NextWork;
