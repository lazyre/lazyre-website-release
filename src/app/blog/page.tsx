import { Suspense } from "react";
import { getBlogPageData, getCategoryById } from "@/utils/api";
import BlogContent from "./BlogContent";
import CategoryList from "./CategoryList";
import Loading from "../loading";
import { BlogPageData } from "@/types/blog";
import { Metadata } from "next";
import ContentWrapper from "@/components/ContentWrapper";
import { AllArticleLoadingState } from "./loading";

export const revalidate = 3600; // Revalidate every hour

interface BlogPageProps {
  searchParams: { category?: string };
}

export async function generateMetadata({
  searchParams,
}: BlogPageProps): Promise<Metadata> {
  const categoryId = searchParams.category || null;
  const category = categoryId ? await getCategoryById(categoryId) : null;

  return {
    title: category
      ? `${category.name} Articles | Lazyre Blog`
      : "Latest Insights & Industry News | Lazyre Blog",
    description: category
      ? `Explore the latest insights and industry trends on ${category.name} from Lazyre's experts. Stay updated on cutting-edge technologies, design, marketing, and more.`
      : "Stay informed with the latest articles on software development, AI, design, marketing, and industry trends. Read expert insights and practical guides on the Lazyre Blog.",

    openGraph: {
      title: category
        ? `${category.name} Articles | Lazyre Blog`
        : "Latest Insights & Industry News | Lazyre Blog",
      description: category
        ? `Explore the latest insights and industry trends on ${category.name} from Lazyre's experts. Stay updated on cutting-edge technologies, design, marketing, and more.`
        : "Stay informed with the latest articles on software development, AI, design, marketing, and industry trends. Read expert insights and practical guides on the Lazyre Blog.",
      type: "website",
      url: `https://lazyre.com/blog${
        category ? `/category/${category.id}` : ""
      }`,
      images: [
        {
          url: "https://cdn.lazyre.com/images/about/cover.webp",
          width: 1200,
          height: 630,
          alt: category
            ? `${category.name} Articles Cover Image | Lazyre Blog`
            : "Latest Articles Cover Image | Lazyre Blog",
          type: "image/webp",
          secureUrl: "https://cdn.lazyre.com/images/about/cover.webp",
        },
      ],
    },

    keywords: [
      "Lazyre blog",
      "technology articles",
      "AI-powered services insights",
      "software development trends",
      "digital solutions blog",
      "latest technology news",
      "innovative technology articles",
    ],

    twitter: {
      card: "summary_large_image",
      title: category
        ? `${category.name} Articles | Lazyre Blog`
        : "Latest Insights & Industry News | Lazyre Blog",
      description: category
        ? `Discover the latest articles on ${category.name} from Lazyre's experts. Learn more about emerging trends, technologies, and best practices.`
        : "Explore the latest articles on software development, AI, marketing, and design. Read insights and guides from Lazyre's blog.",
      images: [
        {
          url: "https://cdn.lazyre.com/images/about/cover.webp",
          alt: category
            ? `${category.name} Articles Cover Image | Lazyre Blog`
            : "Latest Articles Cover Image | Lazyre Blog",
          width: 800,
          height: 418,
        },
      ],
    },
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const pageSize = 10;
  const categoryId = searchParams.category || null;

  try {
    const initialData: BlogPageData = await getBlogPageData(
      1,
      pageSize,
      categoryId
    );

    return (
      <main className="my-16 xl:my-44">
        <ContentWrapper home>
          <CategoryList />
          <Suspense fallback={<AllArticleLoadingState />}>
            <BlogContent
              initialData={initialData}
              pageSize={pageSize}
              categoryId={categoryId}
            />
          </Suspense>
        </ContentWrapper>
      </main>
    );
  } catch (error) {
    console.error("Error in BlogPage:", error);
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
