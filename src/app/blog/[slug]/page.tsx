import { notFound } from "next/navigation";
import { getArticleBySlug } from "@/utils/api";
import { Metadata } from "next";
import ContentWrapper from "@/components/ContentWrapper";
import ArticleContent from "./ArticleContent";
import TableOfContents from "./TableOfContents";
import { formatDate } from "@/utils/dateFormatter";
import { Badge } from "@/components/ui/badge";
import ShareLinks from "./ShareLinks";
import { Suspense } from "react";
import Loading from "./loading";

export const revalidate = 3600; // Revalidate every hour

interface ArticlePageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title} | Lazyre Blog`,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} | Lazyre Blog`,
      description: article.excerpt || "",
      type: "article",
      url: `https://lazyre.com/blog/${article.slug}`,
      images: [
        {
          url: article.featured_image_url || "",
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | Lazyre Blog`,
      description: article.excerpt || "",
      images: [article.featured_image_url || ""],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  try {
    const article = await getArticleBySlug(params.slug);

    if (!article) {
      notFound();
    }
    const shareUrl = `https://lazyre.com/blog/${article.slug}`;

    return (
      <Suspense fallback={<Loading />}>
        <main id="main-content" className="my-16 xl:my-24">
          <ContentWrapper>
            <article className="prose prose-lg prose-indigo mx-auto">
              <Badge variant={"default"}>{article.category.name}</Badge>
              <p className="text-foreground">
                {formatDate(article.published_at)}
              </p>
              <h1 className="text-foreground">{article.title}</h1>
              <ShareLinks title={article.title} shareUrl={shareUrl} />
              {article.featured_image_url && (
                <img
                  src="/images/brand/lazyre_tech_cover.webp"
                  alt={article.title}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              )}
              <TableOfContents content={article.content} />
              <ArticleContent content={article.content} />
            </article>
          </ContentWrapper>
        </main>
      </Suspense>
    );
  } catch (error) {
    console.error("Error in ArticlePage:", error);
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold mb-4">Oops! Something went wrong.</h2>
        <p>
          We're having trouble loading this article. Please try again later.
        </p>
      </div>
    );
  }
}
