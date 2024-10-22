import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://lazyre.com"; // Replace with your actual domain

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/private/",
          "/login",
          "/signup",
          "/reset-password",
          "/checkout",
          "/user/",
          "/*.json$", // Disallow JSON files
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/private/",
          "/login",
          "/signup",
          "/reset-password",
          "/checkout",
          "/user/",
        ],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/private/",
          "/login",
          "/signup",
          "/reset-password",
          "/checkout",
          "/user/",
        ],
      },
      {
        userAgent: "Slurp",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/private/",
          "/login",
          "/signup",
          "/reset-password",
          "/checkout",
          "/user/",
        ],
      },
      {
        userAgent: "DuckDuckBot",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/private/",
          "/login",
          "/signup",
          "/reset-password",
          "/checkout",
          "/user/",
        ],
      },
      {
        userAgent: "Baiduspider",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/private/",
          "/login",
          "/signup",
          "/reset-password",
          "/checkout",
          "/user/",
        ],
      },
      {
        userAgent: "YandexBot",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/private/",
          "/login",
          "/signup",
          "/reset-password",
          "/checkout",
          "/user/",
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
