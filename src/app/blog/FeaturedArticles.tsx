import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Article } from "@/types/blog";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "./BlogContent";
import TransitionLink from "@/components/TransitionLink";
import { useCursor } from "@/contexts/CursorContext";

interface FeaturedArticlesProps {
  featuredArticles: Article[] | null;
}

export default function FeaturedArticles({
  featuredArticles,
}: FeaturedArticlesProps) {
  const { gridClassName, getArticleClassName } = useMemo(() => {
    if (!featuredArticles)
      return { gridClassName: "", getArticleClassName: () => "" };

    const count = featuredArticles.length;

    const gridClassName = cn(
      "grid gap-6",
      count === 1 ? "grid-cols-1 h-96" : "grid-cols-1 sm:grid-cols-2",
      count > 2 && "sm:grid-rows-[repeat(3,_minmax(0,_1fr))]"
    );

    const getArticleClassName = (index: number) =>
      cn(
        "relative flex flex-col  overflow-hidden transition-shadow hover:shadow-lg h-96 xl:h-auto",
        count > 2 && index === 0 && "sm:row-span-2 sm:col-span-1",
        index === 0 ? "bg-transparent justify-end" : "bg-card justify-between"
      );

    return { gridClassName, getArticleClassName };
  }, [featuredArticles]);

  if (!featuredArticles || featuredArticles.length === 0) return null;

  const { setCursorText, setCursorType } = useCursor();

  return (
    <>
      <h2 className="text-3xl font-bold mb-6">Featured Articles</h2>
      <div className={gridClassName}>
        {featuredArticles.map((article, index) => (
          <Card
            key={article.id}
            className={getArticleClassName(index)}
            onMouseEnter={() => {
              setCursorType("text");
              setCursorText("LinkIcon");
            }}
            onMouseLeave={() => {
              setCursorType("default");
              setCursorText("");
            }}
          >
            <TransitionLink
              href={`/article/${article.slug}`}
              className="group h-full"
            >
              {article.featured_image_url && index === 0 && (
                <div className="absolute top-0 left-0 inset-0 -z-10">
                  <Image
                    src="/images/brand/lazyre_web_cover.webp"
                    alt={article.featured_image_alt || ""}
                    fill
                    className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 w-full bg-gradient-to-b from-black/90 via-black/60 to-black/40" />
                </div>
              )}
              <CardContent className="p-6 flex flex-col h-full ">
                <div className="flex-grow">
                  <Badge
                    variant={index === 0 ? "default" : "secondary"}
                    className="mb-2"
                  >
                    {article.category.name}
                  </Badge>
                  <h3
                    className={cn(
                      "text-2xl font-bold mb-2 group-hover:underline",
                      index === 0 && "text-white"
                    )}
                  >
                    {article.title}
                  </h3>
                  <p
                    className={cn(
                      "line-clamp-2 mb-4",
                      index === 0 && "text-gray-300"
                    )}
                  >
                    {article.excerpt}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className={cn("text-sm", index === 0 && "text-gray-300")}>
                    {formatDate(article.published_at)}
                  </p>
                </div>
              </CardContent>
            </TransitionLink>
          </Card>
        ))}
      </div>
    </>
  );
}
