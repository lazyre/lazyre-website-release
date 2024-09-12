import React from "react";
import Image from "next/image";
import { blogDataType } from "@/types/types";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import TransitionLink from "@/components/TransitionLink";

interface BlogItemProps extends blogDataType {}

const BlogItem: React.FC<BlogItemProps> = ({ id, title, image, category }) => {
  return (
    <TransitionLink
      data-cursor-text="Explore"
      key={id}
      href={`/blog/${id}`}
      className="relative block group h-80 min-w-80 lg:h-96 lg:min-w-96 xl:h-[500px] xl:min-w-[500px] rounded-xl overflow-hidden"
      aria-labelledby={`blog-title-${id}`}
    >
      <Image
        src={image}
        fill={true}
        alt={`${title} blog post thumbnail`}
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <div className="absolute inset-0 w-full bg-gradient-to-t from-black via-black/60 to-black/10" />
      <div className="relative h-full w-full flex flex-col justify-between">
        <div className="w-full rounded-xl rounded-t-none flex justify-end items-center p-6">
          <ArrowUpRight
            className="text-text opacity-50 text-4xl transition-opacity group-hover:opacity-100"
            aria-hidden="true"
          />
        </div>
        <div className="relative w-full px-6 py-12 flex flex-col justify-start">
          <p className="text-sm text-gray-300">{category}</p>
          <h3
            id={`blog-title-${id}`}
            className="text-2xl xl:text-2xl mt-2 text-white"
          >
            {title}
          </h3>
        </div>
      </div>
    </TransitionLink>
  );
};

export default BlogItem;
