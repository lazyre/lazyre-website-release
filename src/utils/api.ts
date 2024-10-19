import { supabase } from "@/lib/supabase";
import {
  Article,
  Tag,
  Category,
  Author,
  FeaturedArticle,
  BlogPageData,
} from "@/types/blog";

export async function getCategories(): Promise<Category[]> {
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .order("name");

  if (error) throw error;
  return data;
}

export async function getTags(): Promise<Tag[]> {
  const { data, error } = await supabase.from("tags").select("*").order("name");

  if (error) throw error;
  return data;
}

export async function getArticleTags(articleId: string): Promise<Tag[]> {
  const { data, error } = await supabase
    .from("article_tags")
    .select(
      `
      tags (
        id,
        name,
        slug,
        created_at,
        updated_at
      )
    `
    )
    .eq("article_id", articleId);

  if (error) throw error;
  const tags: Tag[] = data.flatMap((item: any) => item.tags);
  return tags;
}

export async function getAuthors(): Promise<Author[]> {
  const { data, error } = await supabase
    .from("authors")
    .select("*")
    .order("name");

  if (error) throw error;
  return data;
}

export async function getArticles(
  limit: number = 10,
  offset: number = 0,
  categoryId: string | null
): Promise<Article[]> {
  let query = supabase
    .from("articles")
    .select("*, author:authors(*), category:categories(*)")
    .eq("status", "published")
    .order("published_at", { ascending: false })
    .range(offset, offset + limit - 1);

  if (categoryId) {
    query = query.eq("category_id", categoryId);
  }

  const { data, error } = await query;

  if (error) throw error;
  return data;
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const { data, error } = await supabase
    .from("articles")
    .select(
      "*, author:authors(*), category:categories(*), article_tags(tag_id), tags:tags(*)"
    )
    .eq("slug", slug)
    .eq("status", "published")
    .single();

  if (error) console.log(error);
  return data;
}

export async function getArticlesByCategory(
  categoryId: string,
  currentArticleId?: string
): Promise<Article[] | null> {
  let query = supabase
    .from("articles")
    .select("*")
    .eq("category_id", categoryId)
    .eq("status", "published");

  if (currentArticleId) {
    query = query.neq("id", currentArticleId); // Exclude the current article if ID is provided
  }

  const { data, error } = await query
    .order("published_at", { ascending: false }) // Sort by most recent
    .limit(5);

  if (error) throw error;
  return data;
}

export async function getArticlesByTag(tagSlug: string): Promise<Article[]> {
  const { data, error } = await supabase
    .from("articles")
    .select(
      `
      *,
      author:authors(*),
      category:categories(*),
      article_tags!inner(tag_id),
      tags!inner(*)
    `
    )
    .eq("tags.slug", tagSlug)
    .eq("status", "published")
    .order("published_at", { ascending: false })
    .limit(10);

  if (error) {
    console.error("Error fetching articles by tag:", error);
    throw error;
  }

  return data;
}

export async function getFeaturedArticles(): Promise<FeaturedArticle[]> {
  let query = supabase
    .from("featured_articles")
    .select(
      `
      *,
      article:articles(*),
      category:categories(*)
    `
    )
    .lte("start_date", new Date().toISOString())
    .or(`end_date.is.null, end_date.gt.${new Date().toISOString()}`)
    // .eq("status", "published") had to remove this
    .order("priority", { ascending: true })
    .limit(5);

  const { data, error } = await query;

  if (error) throw error;
  return data as FeaturedArticle[];
}

export async function getHomeArticles(): Promise<Article[]> {
  let query = supabase
    .from("articles")
    .select("*, author:authors(*), category:categories(*)")
    .eq("status", "published")
    .order("published_at", { ascending: false })
    .limit(5);

  const { data, error } = await query;

  if (error) throw error;
  return data as Article[];
}

export async function getCategoryById(
  categoryId: string
): Promise<Category | null> {
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .eq("id", categoryId)
    .single();

  if (error) {
    console.error("Error fetching category:", error);
    return null;
  }

  return data;
}

export async function getBlogPageData(
  page: number,
  pageSize: number,
  categoryId: string | null
): Promise<BlogPageData> {
  try {
    const offset = (page - 1) * pageSize;

    // Fetch articles
    let articlesQuery = supabase
      .from("articles")
      .select("*, author:authors(*), category:categories(*)", {
        count: "exact",
      })
      .eq("status", "published")
      .order("published_at", { ascending: false })
      .range(offset, offset + pageSize - 1);

    // Fetch featured articles
    let featuredArticlesQuery = supabase
      .from("featured_articles")
      .select(
        `
        *,
        article:articles(*, author:authors(*), category:categories(*)),
        category:categories(*)
      `
      )
      // .eq("status", "published") had to remove this
      .lte("start_date", new Date().toISOString())
      .or(`end_date.is.null, end_date.gt.${new Date().toISOString()}`)
      .order("priority", { ascending: true })
      .limit(5);

    // Fetch categories
    const categoriesQuery = supabase
      .from("categories")
      .select("*")
      .order("name");

    if (categoryId) {
      articlesQuery = articlesQuery.eq("category_id", categoryId);
      featuredArticlesQuery = featuredArticlesQuery.eq(
        "category_id",
        categoryId
      );
    }

    const [
      { data: articles, count: totalArticles, error: articlesError },
      { data: featuredArticles, error: featuredArticlesError },
      { data: categories, error: categoriesError },
    ] = await Promise.all([
      articlesQuery,
      featuredArticlesQuery,
      categoriesQuery,
    ]);

    if (articlesError)
      throw new Error(`Error fetching articles: ${articlesError.message}`);
    if (featuredArticlesError)
      throw new Error(
        `Error fetching featured articles: ${featuredArticlesError.message}`
      );
    if (categoriesError)
      throw new Error(`Error fetching categories: ${categoriesError.message}`);

    // Filter out featured articles from the main article list on the server side
    const featuredArticleIds = new Set(
      featuredArticles.map((fa) => fa.article_id)
    );
    const filteredArticles = articles.filter(
      (article) => !featuredArticleIds.has(article.id)
    );

    return {
      articles: filteredArticles,
      featuredArticles: featuredArticles.map((fa) => ({
        ...fa.article,
        category: fa.category ||
          fa.article.category || { name: "Uncategorized" },
      })),
      totalArticles: totalArticles || 0,
      categories: categories || [],
    };
  } catch (error) {
    console.error("Error in getBlogPageData:", error);
    throw error;
  }
}
