import { notFound, redirect } from "next/navigation";
import { getArticleBySlug, getArticlesByCategory } from "@/utils/api";
import { Metadata } from "next";
import ContentWrapper from "@/components/ContentWrapper";
import ArticleContent from "./ArticleContent";
import TableOfContents from "./TableOfContents";
import { formatDate } from "@/utils/dateFormatter";
import { Badge } from "@/components/ui/badge";
import ShareLinks from "./ShareLinks";
import { Suspense } from "react";
import Loading from "./loading";
import Link from "next/link";

export const revalidate = 3600; // Revalidate every hour

interface ArticlePageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  if (params.slug === "tag") {
    return {
      title: "All Tags | Lazyre Blog",
      description:
        "Explore all tags for our articles, covering various topics including design, technology, AI, marketing, and more.",
    };
  }

  const article = await getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: "Article Not Found | Lazyre Blog",
      description:
        "The article you're looking for could not be found. Explore our latest articles for more insights.",
    };
  }

  return {
    title: `${article.title} | Lazyre Blog`,
    description:
      article.excerpt ||
      `Read about ${article.title}, part of Lazyre’s extensive work portfolio, featuring innovative solutions in design, technology, AI, and more.`,

    openGraph: {
      title: `${article.title} | Lazyre Blog`,
      description:
        article.excerpt ||
        `Discover more about ${article.title} from Lazyre’s portfolio, showcasing innovative and impactful solutions in digital products and services.`,
      type: "article",
      url: `https://lazyre.com/blog/${article.slug}`,
      publishedTime: article.published_at || new Date().toISOString(),
      modifiedTime:
        article.updated_at || article.published_at || new Date().toISOString(),
      authors: [article.author.name],
      tags: article.tags.map((tag) => tag.name),
      siteName: "Lazyre Blog",
      images: [
        {
          url:
            article.featured_image_url ||
            "https://cdn.lazyre.com/images/metadata/og/og-lazyre-cover.png",
          width: 1200,
          height: 630,
          alt: article.title || "Lazyre Blog Article",
          type: "image/webp",
          secureUrl:
            article.featured_image_url ||
            "https://cdn.lazyre.com/images/metadata/og/og-lazyre-cover.png",
        },
      ],
    },

    keywords: article.tags.map((tag) => tag.name),

    // Article metadata
    authors: [
      {
        name: article.author.name,
        url: article.author.twitter_handle ? article.author.twitter_handle : "",
      },
    ],
    publisher: "Lazyre",
    creator: article.author.name,

    twitter: {
      card: "summary_large_image",
      title: `${article.title} | Lazyre Blog`,
      description:
        article.excerpt ||
        `Explore insights on ${article.title} from Lazyre’s portfolio, featuring groundbreaking solutions in design, technology, and AI.`,
      images: [
        {
          url:
            article.featured_image_url ||
            "https://cdn.lazyre.com/images/metadata/og/og-lazyre-cover.png",
          alt: article.title || "Lazyre Blog Article",
          width: 800,
          height: 418,
        },
      ],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  if (params.slug === "tag") {
    redirect("/blog");
  }
  try {
    const article = await getArticleBySlug(params.slug);

    if (!article) {
      notFound();
    }
    const moreArticles = await getArticlesByCategory(
      article.category_id as string,
      article.id
    );

    const shareUrl = `https://lazyre.com/blog/${article.slug}`;

    return (
      <Suspense fallback={<Loading />}>
        <main id="main-content" className="my-24">
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
                  src={article.featured_image_url}
                  alt={article.title}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              )}
              {/* <TableOfContents content={article.content} /> */}
              <ArticleContent content={article.content} />
              {article.tags.length > 0 && (
                <div>
                  <h3 className="text-foreground">Tags</h3>
                  <ul className="flex gap-4 list-none p-0 m-0">
                    {article.tags.map((tag, index) => (
                      <li key={tag.id}>
                        <Link
                          href={`/blog/tag/${tag.slug}`}
                          className="text-foreground opacity-80 hover:opacity-100 no-underline hover:text-primary hover:underline"
                        >
                          {tag.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {moreArticles && moreArticles.length > 0 && (
                <div>
                  <h3 className="text-foreground">You may also like</h3>
                  <ul className="flex flex-row gap-4 underline">
                    {moreArticles.map((article, index) => (
                      <li key={article.id}>
                        <Link
                          href={`/blog/${article.slug}`}
                          className="text-foreground hover:text-primary hover:underline"
                        >
                          {article.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          </ContentWrapper>
        </main>
      </Suspense>
    );
  } catch (error) {
    console.error("Error in ArticlePage:", error);
    return (
      <div className="text-center py-10 h-screen w-full flex justify-center flex-col">
        <h2 className="text-2xl font-bold mb-4">Oops! Something went wrong.</h2>
        <p>
          We're having trouble loading this article. Please try again later.
        </p>
      </div>
    );
  }
}
