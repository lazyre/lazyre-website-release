import { ContentBlock } from "@/types/contentBlock";
// lib/database.types.ts
export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          id: string;
          name: string;
          slug: string;
          description: string | null;
          created_at: string;
          updated_at: string;
        };
      };
      tags: {
        Row: {
          id: string;
          name: string;
          slug: string;
          created_at: string;
          updated_at: string;
        };
      };
      authors: {
        Row: {
          id: string;
          name: string;
          bio: string | null;
          avatar_url: string | null;
          twitter_handle: string | null;
          website_url: string | null;
          created_at: string;
          updated_at: string;
        };
      };
      articles: {
        Row: {
          id: string;
          title: string;
          slug: string;
          excerpt: string | null;
          content: ContentBlock[];
          featured_image_url: string | null;
          featured_image_alt: string | null;
          featured_image_caption: string | null;
          meta_title: string | null;
          meta_description: string | null;
          word_count: number | null;
          author_id: string | null;
          category_id: string | null;
          status: string;
          published_at: string | null;
          created_at: string;
          updated_at: string;
        };
      };
      article_tags: {
        Row: {
          article_id: string;
          tag_id: string;
        };
      };
      featured_articles: {
        Row: {
          id: string;
          article_id: string;
          category_id: string;
          priority: number;
          start_date: string;
          end_date: string | null;
          created_at: string;
          updated_at: string;
        };
      };
    };
  };
}
