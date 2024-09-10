import React from "react";
import Image from "next/image";
import { blogDataType } from "@/types/types";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface BlogItemProps extends blogDataType {}

const BlogItem: React.FC<BlogItemProps> = ({ id, title, image, category }) => {
  return (
    <Link
      data-cursor-text="Explore"
      href={`/blog/${id}`}
      className="relative h-[400px] w-[400px] xl:w-[400px] flex-shrink-0 rounded-xl overflow-hidden group"
      aria-labelledby={`blog-title-${id}`}
    >
      <Image
        src={image}
        fill={true}
        alt={`${title} blog post thumbnail`}
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <div className="absolute inset-0 w-full bg-gradient-to-t from-black via-black/60 to-black/10" />
      <div className="absolute top-0 w-full rounded-xl rounded-t-none flex justify-end items-center p-6">
        <ArrowUpRight
          className="text-text opacity-50 text-4xl transition-opacity group-hover:opacity-100"
          aria-hidden="true"
        />
      </div>
      <div className="absolute bottom-0 h-1/2 w-full px-6 py-12 flex flex-col justify-start">
        <p className="text-sm text-gray-300">{category}</p>
        <h3
          id={`blog-title-${id}`}
          className="text-2xl xl:text-2xl mt-2 text-white"
        >
          {title}
        </h3>
      </div>
    </Link>
  );
};

export default BlogItem;
