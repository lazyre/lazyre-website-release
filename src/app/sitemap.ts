import { MetadataRoute } from "next";
import { getCategories, getTags, fetchAllArticles } from "@/utils/api";

const BASE_URL = "https://lazyre.com";

const createSitemapEntry = (
  path: string,
  priority: number,
  changeFreq:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never"
) => ({
  url: `${BASE_URL}${path}`,
  lastModified: new Date(),
  changeFrequency: changeFreq,
  priority: priority,
});

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch all necessary data
  const [articles, categories, tags] = await Promise.all([
    fetchAllArticles(),
    getCategories(),
    getTags(),
  ]);

  // Static pages
  const staticPages = [
    createSitemapEntry("", 1, "weekly"),
    createSitemapEntry("/about", 0.8, "monthly"),
    createSitemapEntry("/brand", 0.8, "weekly"),
    createSitemapEntry("/work", 0.9, "weekly"),
    createSitemapEntry("/contact", 0.7, "monthly"),
    createSitemapEntry("/blog", 0.9, "daily"),
  ];

  // Brand pages
  const brandPages = [
    "tech",
    "design",
    "build",
    "web",
    "digitalytics",
    "studios",
    "lab",
  ].map((brand) => createSitemapEntry(`/brand/${brand}`, 0.7, "monthly"));

  // Work pages
  const workPages = [
    "safe-shift",
    "voxel-verse",
    "revenue",
    "job-cards",
    "pharma-souq",
    "bloeiende-werelden",
  ].map((work) => createSitemapEntry(`/work/${work}`, 0.6, "monthly"));

  // Blog article pages
  const articlePages = articles.map((article) => ({
    url: `${BASE_URL}/blog/${article.slug}`,
    lastModified: article.updated_at || article.published_at || new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  // Category pages
  const categoryPages = categories.map((category) => ({
    url: `${BASE_URL}/blog?category=${category.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  // Tag pages
  const tagPages = tags.map((tag) => ({
    url: `${BASE_URL}/blog/tag/${tag.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  // Combine all pages
  return [
    ...staticPages,
    ...brandPages,
    ...workPages,
    ...articlePages,
    ...categoryPages,
    ...tagPages,
  ];
}
