import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col space-y-4 p-8 xl:p-16 h-screen w-screen justify-center">
      <Skeleton className="h-20 w-1/2" />
      <Skeleton className="h-20 w-1/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  );
}
