"use client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import ContentWrapper from "@/components/ContentWrapper";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { getBlogPageData } from "@/utils/api";
import { Article, BlogPageData } from "@/types/blog";
import FeaturedArticles from "./FeaturedArticles";
import { Card, CardContent } from "@/components/ui/card";
import TransitionLink from "@/components/TransitionLink";
import { useCursor } from "@/contexts/CursorContext";

interface BlogContentProps {
  initialData: BlogPageData;
  pageSize: number;
  categoryId: string | null;
}

export const formatDate = (dateString: string | null): string => {
  if (!dateString) return "";
  return format(new Date(dateString), "dd MMMM yyyy");
};

export default function BlogContent({
  initialData,
  pageSize,
  categoryId,
}: BlogContentProps) {
  const {
    data,
    isLoading,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery<BlogPageData, Error>({
    queryKey: ["blogData", pageSize, categoryId],
    queryFn: ({ pageParam = 1 }) =>
      getBlogPageData(pageParam as number, pageSize, categoryId),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.articles.length === pageSize ? allPages.length + 1 : undefined,
    initialPageParam: 1,
    initialData: { pages: [initialData], pageParams: [1] },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  const { featuredArticles, articles, totalArticles } = useMemo(() => {
    if (!data || !data.pages || data.pages.length === 0) {
      return {
        featuredArticles: [],
        articles: [],
        totalArticles: 0,
      };
    }
    return {
      featuredArticles: data.pages[0].featuredArticles.map((article) => ({
        ...article,
        category: article.category || { name: "Uncategorized" },
      })),
      articles: data.pages.flatMap((page) => page.articles),
      totalArticles: data.pages[0].totalArticles,
    };
  }, [data]);

  const { setCursorType, setCursorText } = useCursor();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <FeaturedArticles featuredArticles={featuredArticles} />
      <h2 className="text-3xl font-bold mt-12 mb-6">Latest Articles</h2>
      <Separator className="mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article: Article) => (
          <Card
            key={article.id}
            className="overflow-hidden"
            onMouseEnter={() => {
              setCursorType("text");
              setCursorText("LinkIcon");
            }}
            onMouseLeave={() => {
              setCursorType("default");
              setCursorText("");
            }}
          >
            <TransitionLink href={`/article/${article.slug}`} className="group">
              <CardContent className="p-0">
                {article.featured_image_url && (
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src="/images/brand/lazyre_lab_cover.webp"
                      alt={article.featured_image_alt || ""}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-4">
                  <Badge variant="secondary" className="mb-2">
                    {article.category.name}
                  </Badge>
                  <h3 className="text-xl font-semibold mb-2 group-hover:underline">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-2 mb-4">
                    {article.excerpt}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {formatDate(article.published_at)}
                  </p>
                </div>
              </CardContent>
            </TransitionLink>
          </Card>
        ))}
      </div>
      {hasNextPage && (
        <div className="flex justify-center mt-8">
          <Button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
            {isFetchingNextPage ? "Loading..." : "Load More"}
          </Button>
        </div>
      )}
      {totalArticles && (
        <p className="text-center mt-4 text-muted-foreground">
          Showing {articles.length} of {totalArticles - featuredArticles.length}{" "}
          articles
        </p>
      )}
    </>
  );
}
