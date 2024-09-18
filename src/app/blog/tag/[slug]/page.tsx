import { notFound, redirect } from "next/navigation";
import { getArticlesByTag } from "@/utils/api";
import ContentWrapper from "@/components/ContentWrapper";
import { capitalizeWords } from "@/utils/capitalizeWord";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/utils/dateFormatter";
import Image from "next/image";

export const revalidate = 3600; // Revalidate every hour

interface ArticlePageProps {
  params: { slug: string };
}

export default async function ArticlesByTagPage({ params }: ArticlePageProps) {
  if (params.slug === "tag") {
    redirect("/blog");
  }
  try {
    const articleArray = await getArticlesByTag(params.slug);

    if (articleArray.length == 0) {
      notFound();
    }

    return (
      <main id="main-content" className="my-16 xl:my-24">
        <ContentWrapper>
          <h2 className="text-3xl font-bold my-8">
            Recent Articles Related to{" "}
            {capitalizeWords(
              params.slug
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")
            )}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articleArray.map((article) => (
              <Card key={article.id} className="overflow-hidden">
                <Link href={`/blog/${article.slug}`} className="group">
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
                </Link>
              </Card>
            ))}
          </div>
        </ContentWrapper>
      </main>
    );
  } catch (error) {
    console.error("Error in ArticlePage:", error);
    return (
      <div className="text-center py-10 h-screen w-full flex justify-center flex-col">
        <h2 className="text-2xl font-bold mb-4">Oops! Tag not found.</h2>
        <p>We're having trouble loading this tag. Please try again later.</p>
      </div>
    );
  }
}
