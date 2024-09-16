"use client";

import { useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getCategories } from "@/utils/api";
import { Category } from "@/types/blog";
import ContentWrapper from "@/components/ContentWrapper";
import { useCursor } from "@/contexts/CursorContext";

export default function CategoryList() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [filter, setFilter] = useState("");

  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    searchParams.get("category")
  );

  const {
    data: categories,
    isLoading,
    error,
  } = useQuery<Category[], Error>({
    queryKey: ["categories"],
    queryFn: getCategories,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  const handleCategoryChange = (categoryId: string | null) => {
    startTransition(() => {
      setSelectedCategory(categoryId);
      const params = new URLSearchParams(searchParams);
      if (categoryId) {
        params.set("category", categoryId);
      } else {
        params.delete("category");
      }
      router.push(`/blog?${params.toString()}`);
    });
  };

  const filteredCategories = categories?.filter((category) =>
    category.name.toLowerCase().includes(filter.toLowerCase())
  );

  const { setCursorType, setCursorText } = useCursor();

  if (isLoading) return <LoadingState />;
  if (error) return <ErrorState error={error} />;

  return (
    <nav
      aria-label="Blog categories"
      className="space-y-4 my-12"
      onMouseEnter={() => {
        setCursorType("text");
        setCursorText("Drag");
      }}
      onMouseLeave={() => {
        setCursorType("default");
        setCursorText("");
      }}
    >
      <h2 className="sr-only">Categories</h2>
      <Input
        type="text"
        placeholder="Search categories..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-4"
      />
      <Carousel>
        <CarouselContent>
          <CarouselItem key="all" className="basis-auto">
            <CategoryButton
              isSelected={selectedCategory === null}
              onClick={() => handleCategoryChange(null)}
              disabled={isPending}
            >
              All
            </CategoryButton>
          </CarouselItem>
          {filteredCategories?.map((category) => (
            <CarouselItem key={category.id} className="basis-auto">
              <CategoryButton
                isSelected={selectedCategory === category.id}
                onClick={() => handleCategoryChange(category.id)}
                disabled={isPending}
              >
                {category.name}
              </CategoryButton>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
          <CarouselNext /> */}
      </Carousel>
      {filteredCategories?.length === 0 && (
        <p className="text-gray-500">No categories found</p>
      )}
    </nav>
  );
}

interface CategoryButtonProps {
  isSelected: boolean;
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
}

function CategoryButton({
  isSelected,
  onClick,
  disabled,
  children,
}: CategoryButtonProps) {
  return (
    <Button
      variant={isSelected ? "default" : "outline"}
      onClick={onClick}
      disabled={disabled}
      className="min-w-[100px] whitespace-nowrap"
    >
      {children}
    </Button>
  );
}

function LoadingState() {
  return (
    <ContentWrapper>
      <div className="space-y-4">
        <Skeleton className="h-10 w-full" />
        <div className="flex space-x-2">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-10 w-24" />
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
}

function ErrorState({ error }: { error: Error }) {
  return (
    <ContentWrapper>
      <div role="alert" className="text-red-500">
        Error loading categories: {error.message}
      </div>
    </ContentWrapper>
  );
}
