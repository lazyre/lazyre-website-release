"use client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getBlogPageData } from "@/utils/api";
import { Article, BlogPageData } from "@/types/blog";
import FeaturedArticles from "./FeaturedArticles";
import { Card, CardContent } from "@/components/ui/card";
import TransitionLink from "@/components/TransitionLink";
import { useCursor, CursorType } from "@/contexts/CursorContext";
import { Skeleton } from "@/components/ui/skeleton";
import { formatDate } from "@/utils/dateFormatter";
import { ArticleLoadingState } from "./loading";

interface BlogContentProps {
  initialData: BlogPageData;
  pageSize: number;
  categoryId: string | null;
}

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

  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <FeaturedArticles featuredArticles={featuredArticles} />
      <h2 className="text-3xl font-bold mt-12 mb-6">Latest Articles</h2>
      <Separator className="mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading
          ? Array.from({ length: pageSize }).map((_, index) => (
              <ArticleLoadingState key={index} />
            ))
          : articles.map((article: Article) => (
              <ArticleCard
                key={article.id}
                article={article}
                setCursorType={setCursorType}
                setCursorText={setCursorText}
              />
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

interface ArticleCardProps {
  article: Article;
  setCursorType: (type: CursorType) => void;
  setCursorText: (text: string) => void;
}

function ArticleCard({
  article,
  setCursorType,
  setCursorText,
}: ArticleCardProps) {
  return (
    <Card
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
      <TransitionLink href={`/blog/${article.slug}`} className="group">
        <CardContent className="p-0">
          {article.featured_image_url && (
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src={article.featured_image_url}
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
  );
}
