import ContentWrapper from "@/components/ContentWrapper";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="my-16 xl:my-24">
      <ContentWrapper>
        <article className="prose prose-lg prose-indigo mx-auto">
          <Skeleton className="h-10 w-24" />
          <Skeleton className="h-10 w-48 mt-8" />
          <Skeleton className="h-10 w-full my-8" />
          <div className="flex space-x-2">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-10 w-10" />
            ))}
          </div>
          <Skeleton className="w-full h-screen my-8" />
        </article>
      </ContentWrapper>
    </div>
  );
}
