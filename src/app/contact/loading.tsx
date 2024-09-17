import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="pt-36 grid grid-cols-2 gap-2 h-screen">
      <Skeleton />
      <Skeleton />
    </div>
  );
}
