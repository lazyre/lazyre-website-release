"use client";
import { useState } from "react";
import Image from "next/image";
import { Skeleton } from "./ui/skeleton";

type CoverImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function CoverImage({
  src,
  alt,
  className = "",
}: CoverImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleImageLoad = () => setIsLoading(false);
  const handleImageError = () => {
    setIsLoading(false);
    setError("Failed to load image");
  };

  return (
    <div
      className={`relative w-full h-screen ${className}`}
      role="img"
      aria-label={alt}
    >
      {isLoading && (
        <Skeleton className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      {error ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500">
          {error}
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className={`object-cover object-center ${
            isLoading ? "invisible" : "visible"
          }`}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      )}
    </div>
  );
}
