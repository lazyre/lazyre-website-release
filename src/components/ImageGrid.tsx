import React from "react";
import Image from "next/image";

type ImageGridProps = {
  images: Array<{ src: string; alt: string }>;
};

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  return (
    <section className="min-h-screen w-full" aria-label="Image Gallery">
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-2">
        {images.map((image, index) => (
          <div
            key={`gridimage-${index}`}
            className="relative overflow-hidden h-[500px]"
          >
            <Image
              src={image.src}
              fill
              alt={image.alt}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGrid;
