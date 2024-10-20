import Image from "next/image";
import RoundedImage from "./RoundedImage";
import VideoPlayer from "./VideoPlayer";

interface ShowcaseItemProps {
  imageSrc?: string;
  videoSrc?: string;
  altText: string;
  description?: string;
  isSquare?: boolean;
  fit?: "cover" | "contain" | undefined;
  bgColor?: string;
  paddingValue?: string;
}

function ShowcaseItem({
  imageSrc,
  videoSrc,
  altText,
  description,
  isSquare = true,
  fit,
  bgColor,
  paddingValue,
}: ShowcaseItemProps) {
  return (
    <div
      className={`overflow-hidden flex flex-col ${
        isSquare ? "aspect-square" : "aspect-[3/4]"
      }`}
    >
      {/* <div className="relative w-full h-full rounded-xl overflow-hidden">
        <Image
          src={imageSrc}
          alt={altText}
          fill
          style={{ objectFit: "cover" }}
        />
      </div> */}
      {imageSrc ? (
        <RoundedImage
          image={imageSrc}
          alt={altText}
          fit={fit}
          bgColor={bgColor}
          paddingValue={paddingValue}
        />
      ) : (
        <VideoPlayer
          src={videoSrc}
          autoPlay={true}
          loop={true}
          muted={true}
          className="w-full"
        />
      )}
      <div className="mt-4">
        <p className="text-base sm:text-lg md:text-xl">{description}</p>
      </div>
    </div>
  );
}

interface ShowcaseGridProps {
  items: ShowcaseItemProps[];
}

export default function ShowcaseGrid({ items }: ShowcaseGridProps) {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 3 }, (_, colIndex) => (
          <div
            key={colIndex}
            className={`flex flex-col gap-8 ${
              colIndex === 0 ? "" : colIndex === 1 ? "" : ""
            }`}
          >
            {items
              .filter((_, index) => index % 3 === colIndex)
              .map((item, index) => (
                <ShowcaseItem key={index} {...item} />
              ))}
          </div>
        ))}
      </div>
    </section>
  );
}
