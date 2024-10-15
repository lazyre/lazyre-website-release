import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type ImageInfo = {
  imageSrc: string;
  altText: string;
  description?: string;
  fit?: "cover" | "contain";
  bgColor?: string;
  paddingValue?: string;
};

type ServiceImagesProps = {
  images: ImageInfo[];
};

export default function ServiceImages({ images }: ServiceImagesProps) {
  return (
    <section
      aria-label="Service Images"
      className="grid grid-cols-2 grid-rows-2 gap-4 md:gap-6 rounded-xl overflow-hidden"
    >
      {images.slice(0, 4).map((image, index) => (
        <div
          key={index}
          className={cn(
            "relative min-h-[150px] md:min-h-[200px] lg:min-h-[250px] xl:min-h-[300px] w-full",
            { "row-span-2": index === 0 }
          )}
          style={{
            padding: image.paddingValue || "0px",
            backgroundColor: image.bgColor,
          }}
        >
          <div className="relative w-full h-full">
            <Image
              src={image.imageSrc}
              alt={image.altText}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={cn("object-cover", {
                "object-contain": image.fit === "contain",
              })}
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
          {image.description && (
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm">
              {image.description}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
