import { Database } from "./database";
import { ContentBlock } from "./contentBlock";

export type Category = Database["public"]["Tables"]["categories"]["Row"];
export type Tag = Database["public"]["Tables"]["tags"]["Row"];
export type Author = Database["public"]["Tables"]["authors"]["Row"];

export type Article = Database["public"]["Tables"]["articles"]["Row"] & {
  author: Author;
  category: Category;
};
export type FeaturedArticle =
  Database["public"]["Tables"]["featured_articles"]["Row"] & {
    article: Article;
    category: Category;
  };

export interface BlogPageData {
  articles: Article[];
  featuredArticles: Article[];
  totalArticles: number | null;
  categories: Category[];
}
