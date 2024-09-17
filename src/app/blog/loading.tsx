import ContentWrapper from "@/components/ContentWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="my-16 xl:my-20">
      <ContentWrapper>
        <CategoryLoadingState />
        <AllArticleLoadingState />
      </ContentWrapper>
    </div>
  );
}

export function AllArticleLoadingState() {
  return (
    <div className="mt-8">
      <Skeleton className="h-10 w-48" />
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 h-[50vh] mt-8">
        <Skeleton />
        <div className="grid grid-rows-2 gap-8 h-full">
          <Skeleton />
          <Skeleton />
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 h-[25vh] mt-8">
        <Skeleton />
        <Skeleton />
      </div>
      <Skeleton className="h-10 w-48 mt-16" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {[...Array(5)].map((_, i) => (
          <ArticleLoadingState key={i} />
        ))}
      </div>
    </div>
  );
}

export function CategoryLoadingState() {
  return (
    <div className="space-y-8 pt-6">
      <Skeleton className="h-10 w-full" />
      <div className="flex space-x-2">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="h-10 w-24" />
        ))}
      </div>
    </div>
  );
}

export function ArticleLoadingState() {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <Skeleton className="aspect-video w-full" />
        <div className="p-4">
          <Skeleton className="h-6 w-20 mb-2" />
          <Skeleton className="h-6 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </CardContent>
    </Card>
  );
}
