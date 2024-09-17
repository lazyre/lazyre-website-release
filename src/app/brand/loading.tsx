import ContentWrapper from "@/components/ContentWrapper";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <ContentWrapper>
      <div className="min-h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <div className="flex flex-col justify-start gap-6 sm:gap-8 md:gap-12 w-full px-4 sm:px-6 lg:px-8 max-w-7xl lg:items-left">
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-24 w-3/4" />
        </div>
      </div>
    </ContentWrapper>
  );
}
