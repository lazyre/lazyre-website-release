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
      : "Latest Articles | Lazyre Blog",
    description: category
      ? `Read our latest articles about ${category.name}.`
      : "Read our latest articles on various topics.",
    openGraph: {
      title: category
        ? `${category.name} Articles | Lazyre Blog`
        : "Latest Articles | Lazyre Blog",
      description: category
        ? `Read our latest articles about ${category.name}.`
        : "Read our latest articles on various topics.",
      type: "website",
      url: "https://lazyre.com/blog",
    },
    twitter: {
      card: "summary_large_image",
      title: category
        ? `${category.name} Articles | Lazyre Blog`
        : "Latest Articles | Lazyre Blog",
      description: category
        ? `Read our latest articles about ${category.name}.`
        : "Read our latest articles on various topics.",
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
