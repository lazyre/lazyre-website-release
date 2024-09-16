import { Suspense } from "react";
import { getBlogPageData, getCategoryById } from "@/utils/api";
import BlogContent from "./BlogContent";
import CategoryList from "./CategoryList";
import Loading from "../loading";
import { BlogPageData } from "@/types/blog";
import { Metadata } from "next";
import ContentWrapper from "@/components/ContentWrapper";

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
      ? `${category.name} Articles | Your Blog Name`
      : "Latest Articles | Your Blog Name",
    description: category
      ? `Read our latest articles about ${category.name}.`
      : "Read our latest articles on various topics.",
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
      <main className="mt-40 mb-20">
        <ContentWrapper home>
          <Suspense fallback={<Loading />}>
            <CategoryList />
          </Suspense>
          <Suspense fallback={<Loading />}>
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
      <div>
        An error occurred while loading the blog. Please try again later.
      </div>
    );
  }
}
