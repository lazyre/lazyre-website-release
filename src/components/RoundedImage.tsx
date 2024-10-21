import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface RoundedImageProps {
  image: string;
  alt: string;
  sliderImages?: boolean;
  portrait?: boolean;
  fit?: "cover" | "contain";
  bgColor?: string;
  paddingValue?: string;
  priority?: boolean;
  unoptimized?: boolean;
}

export default function RoundedImage({
  image,
  alt,
  sliderImages = false,
  portrait = false,
  fit = "cover",
  bgColor,
  paddingValue,
  priority = false,
  unoptimized = false,
}: RoundedImageProps) {
  const containerClasses = cn(
    "relative rounded-xl overflow-hidden",
    sliderImages
      ? portrait
        ? "h-[60vw] md:h-[50vw] lg:h-[40vw] xl:h-[30vw] aspect-[2.4/4] xl:aspect-[3/4]"
        : "w-full md:w-[75vw] lg:w-[50vw] xl:w-[40vw] aspect-video"
      : "w-full h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh]"
  );

  const imageSizes = sliderImages
    ? "(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
    : "100vw";

  return (
    <div className={containerClasses}>
      <Image
        src={image}
        fill
        alt={alt}
        sizes={imageSizes}
        priority={priority}
        unoptimized={unoptimized}
        style={{
          objectFit: fit,
          backgroundColor: bgColor,
          padding: paddingValue,
          objectPosition: "center",
        }}
      />
    </div>
  );
}
