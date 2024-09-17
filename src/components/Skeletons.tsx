import { Skeleton } from "@/components/ui/skeleton";

export const ArticleSkeleton = () => (
  <div className="space-y-4">
    <Skeleton className="h-4 w-[200px]" />
    <Skeleton className="h-8 w-full" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-2/3" />
    <div className="flex justify-between items-center">
      <Skeleton className="h-4 w-[100px]" />
      <Skeleton className="h-10 w-10 rounded-full" />
    </div>
  </div>
);

export const FeaturedArticleSkeleton = () => (
  <div className="space-y-4">
    <Skeleton className="h-6 w-[150px]" />
    <Skeleton className="h-10 w-full" />
    <Skeleton className="h-6 w-full" />
    <Skeleton className="h-6 w-2/3" />
    <Skeleton className="h-[200px] w-full" />
  </div>
);

export const CategorySkeleton = () => (
  <div className="flex flex-wrap gap-2">
    {[...Array(5)].map((_, i) => (
      <Skeleton key={i} className="h-8 w-20" />
    ))}
  </div>
);
