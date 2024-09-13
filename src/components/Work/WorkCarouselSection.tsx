import ContentWrapper from "../ContentWrapper";
import CustomCarousel from "../CustomCarousel";
import SectionHeading from "../SectionHeading";
import { Card, CardContent } from "../ui/card";
import RoundedImage from "../RoundedImage";
import { cn } from "@/lib/utils";

type WorkCarouselSectionProps = {
  images: Array<{
    src: string;
    alt: string;
    fit?: "cover" | "contain";
    bgColor?: string;
    paddingValue?: string;
  }>;
  title: string;
  subtitle: string;
  portrait?: boolean;
};

export default function WorkCarouselSection({
  images,
  title,
  subtitle,
  portrait,
}: WorkCarouselSectionProps) {
  return (
    <section aria-labelledby="work-carousel-title" className="mb-12">
      <ContentWrapper>
        <SectionHeading title={title} subtitle={subtitle} workHeading />
      </ContentWrapper>
      <CustomCarousel
        loop={false}
        navControls={true}
        basis={portrait ? "ImagePortraitBasis" : "ImageLandscapeBasis"}
      >
        {images.map((item, index) => (
          <div key={`work-carousel-${index}`} className="p-1">
            <Card className="bg-transparent shadow-none border-none">
              <CardContent
                className={cn(
                  "flex  items-center justify-center p-2 ",
                  portrait ? "aspect-square" : "aspect-video"
                )}
              >
                <RoundedImage
                  image={item.src}
                  alt={item.alt}
                  sliderImages
                  portrait={portrait}
                  bgColor={item.bgColor}
                  paddingValue={item.paddingValue}
                  fit={item.fit}
                  priority={index < 3}
                />
              </CardContent>
            </Card>
          </div>
        ))}
      </CustomCarousel>
    </section>
  );
}
