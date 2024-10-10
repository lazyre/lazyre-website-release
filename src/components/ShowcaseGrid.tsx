import Image from "next/image";
import RoundedImage from "./RoundedImage";

interface ShowcaseItemProps {
  imageSrc: string;
  altText: string;
  description?: string;
  isSquare?: boolean;
  fit?: "cover" | "contain" | undefined;
  bgColor?: string;
  paddingValue?: string;
}

function ShowcaseItem({
  imageSrc,
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
      <RoundedImage
        image={imageSrc}
        alt={altText}
        fit={fit}
        bgColor={bgColor}
        paddingValue={paddingValue}
      />
      <div className="mt-4">
        <p className="text-xl">{description}</p>
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
