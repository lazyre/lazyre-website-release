import type { Metadata, Viewport } from "next";
import { inter, spaceGrotesk, spaceMono } from "@/lib/fonts";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Suspense } from "react";
import Loading from "./loading";
import Header from "@/components/header";
import { TransitionProvider } from "@/contexts/TransitionContext";
import FullScreenTransition from "@/components/FullScreenTransition";
import { CursorProvider } from "@/contexts/CursorContext";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  // Basic metadata - Optimized for homepage
  title: {
    default: "Lazyre | Redefining Digital Presence",
    template: "%s | Lazyre",
  },
  description:
    "Lazyre delivers innovative software development, AI solutions, and digital strategies. We deliver impactful digital products and experiences across various sectors worldwide.",
  keywords: [
    "software development",
    "AI solutions",
    "generativ AI solutions",
    "App Development",
    "Product marketing",
    "design solution",
    "ui-ux design",
    "brand building",
    "cloud computing",
    "digital marketing services",
    "custom web development",
    "ecommerce development",
    "enterprise solutions",
    "business automation",
    "digital transformation",
  ],

  // Robots and crawler directives - Maximum visibility
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Viewport and technical specifications - Mobile-first design
  // viewport: {
  //   width: "device-width",
  //   initialScale: 1,
  //   maximumScale: 5,
  //   userScalable: true,
  //   viewportFit: "cover",
  // },

  // Base URL
  metadataBase: new URL("https://lazyre.com"),

  // Open Graph metadata - Social sharing optimization
  openGraph: {
    siteName: "Lazyre - Redefining Digital Presence",
    locale: "en_US",
    type: "website",
    title: "Redefining Digital Presence | Lazyre",
    description:
      "Lazyre offers cutting-edge software solutions and digital transformation services. We specialize in AI-powered automation, cloud computing, and modern marketing. Get in touch today!",
    url: "https://lazyre.com",
    images: [
      {
        url: "https://cdn.lazyre.com/images/metadata/og/og-lazyre-cover.png",
        width: 1200,
        height: 630,
        alt: "Lazyre Official Website",
        type: "image/png",
        secureUrl:
          "https://cdn.lazyre.com/images/metadata/og/og-lazyre-cover.png",
      },
    ],
  },

  // Article metadata
  authors: [
    {
      name: "Lazyre Team",
      url: "https://lazyre.com/about",
    },
  ],
  publisher: "Lazyre",
  creator: "Lazyre",

  // Twitter metadata - Engagement optimization
  twitter: {
    card: "summary_large_image",
    site: "@lazyrehub",
    creator: "@lazyrehub",
    title: "Redefining Digital Presence | Lazyre",
    description:
      "Discover enterprise-grade software and AI solutions. Cloud computing, modern marketing, and digital transformation. Free consultation available.",
    images: [
      {
        url: "https://cdn.lazyre.com/images/metadata/twitter/twitter-lazyre-cover.png",
        alt: "Lazyre Official Website",
        width: 800,
        height: 418,
      },
    ],
  },

  // Search engine verification
  // verification: {
  //   google: 'google-site-verification-code',
  // },

  // Language alternatives
  alternates: {
    canonical: "https://lazyre.com",
    languages: {
      "en-US": "https://lazyre.com/en-US",
    },
  },

  // Archives and assets
  archives: ["https://lazyre.com/blog"],
  assets: ["https://cdn.lazyre.com"],

  // Mobile app metadata
  appleWebApp: {
    capable: true,
    title: "Lazyre Website",
    statusBarStyle: "black-translucent",
  },

  // App links for mobile integration
  // appLinks: {
  //   ios: {
  //     url: 'lazyre://',
  //     app_store_id: 'app-store-id',
  //   },
  //   android: {
  //     package: 'com.lazyre.app',
  //     app_name: 'Lazyre Solutions',
  //   },
  // },

  // Manifest
  // manifest: "/manifest.json",

  // Icons setup
  icons: {
    icon: [
      {
        url: "https://cdn.lazyre.com/images/metadata/favicon/favicon.ico",
        sizes: "any",
      },
      {
        url: "https://cdn.lazyre.com/images/metadata/favicon/icon.svg",
        type: "image/svg+xml",
      },
      {
        url: "https://cdn.lazyre.com/images/metadata/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "https://cdn.lazyre.com/images/metadata/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "https://cdn.lazyre.com/images/metadata/favicon/favicon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        url: "https://cdn.lazyre.com/images/metadata/favicon/android-chrome/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "https://cdn.lazyre.com/images/metadata/favicon/android-chrome/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        url: "https://cdn.lazyre.com/images/metadata/favicon/mstile/mstile-144x144.png",
        sizes: "144x144",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "https://cdn.lazyre.com/images/metadata/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        url: "https://cdn.lazyre.com/images/metadata/favicon/app-store-icon.png",
        sizes: "1024x1024",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "https://cdn.lazyre.com/images/metadata/favicon/safari-pinned-tab.svg",
      },
    ],
  },

  // Additional meta tags
  other: {
    "apple-mobile-web-app-capable": "yes",
    "mobile-web-app-capable": "yes",
    "application-name": "Lazyre Website",
    "msapplication-TileColor": "#ffffff",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${spaceMono.variable} font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TransitionProvider>
            <FullScreenTransition />
            <CursorProvider>
              <Header />
              <Suspense fallback={<Loading />}>{children}</Suspense>
              <Footer />
              <Toaster />
              <CustomCursor />
            </CursorProvider>
          </TransitionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Lazyre",
  url: "https://lazyre.com",
  logo: "https://lazyre.com/images/logo.webp",
  sameAs: [
    "https://x.com/lazyrehub",
    "https://www.instagram.com/lazyrehub/",
    "https://dribbble.com/lazyrehub",
    "https://www.behance.net/lazyrehub",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-8310766833",
    contactType: "Customer Service",
    areaServed: "Worldwide",
    availableLanguage: ["English"],
  },
  description:
    "Lazyre is a global software development company specializing in cutting-edge digital solutions. Our services include design, technology, web development, digital marketing, branding, multimedia, and experimental technologies such as AI, AR, VR, and blockchain.",
  foundingDate: "2018-10-22",
  founders: [
    {
      "@type": "Person",
      name: "Ruksad Mohammed",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mangalore",
    addressRegion: "KA",
    postalCode: "575001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "12.9141",
    longitude: "74.8560",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Lazyre Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Software Development",
          description:
            "Custom software solutions for businesses of all sizes, including AI-powered automation, cloud computing, and application development.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Development",
          description:
            "Full-stack web development services including e-commerce solutions, CRM systems, and front-end/back-end development.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Design Services",
          description:
            "Professional design services including logo design, 3D design, branding, UI/UX design, business cards, brochures, and 3D modeling.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Digital Marketing",
          description:
            "Comprehensive digital marketing services including SEO, PPC, content marketing, and social media management.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Brand Creation",
          description:
            "Expert branding services including business strategy, brand positioning, and messaging, with a focus on building a cohesive brand identity.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Multimedia Solutions",
          description:
            "High-quality multimedia production, including photography, video editing, and artificial photography services.",
        },
      },
    ],
  },
  department: [
    {
      "@type": "Organization",
      name: "Lazyre Tech",
      url: "https://lazyre.com/brands/lazyre-tech",
      description:
        "Providing innovative technology solutions such as AI, cloud computing, and network security.",
    },
    {
      "@type": "Organization",
      name: "Lazyre Design",
      url: "https://lazyre.com/brands/lazyre-design",
      description:
        "Offering modern design services, including UI/UX, 3D design, branding, and graphic design.",
    },
    {
      "@type": "Organization",
      name: "Lazyre Web",
      url: "https://lazyre.com/brands/lazyre-web",
      description:
        "Specialized in web technologies and development, offering front-end, back-end, and full-stack solutions.",
    },
    {
      "@type": "Organization",
      name: "Lazyre Digitalytics",
      url: "https://lazyre.com/brands/lazyre-digitalytics",
      description:
        "Delivering cutting-edge digital marketing strategies and analytics to help grow your brand.",
    },
    {
      "@type": "Organization",
      name: "Lazyre Build",
      url: "https://lazyre.com/brands/lazyre-build",
      description:
        "Expert brand creation services, helping businesses with brand strategy, positioning, and messaging.",
    },
    {
      "@type": "Organization",
      name: "Lazyre Studios",
      url: "https://lazyre.com/brands/lazyre-studios",
      description:
        "Multimedia production, photography, and showreels, bringing your brand to life through visuals.",
    },
    {
      "@type": "Organization",
      name: "Lazyre Lab",
      url: "https://lazyre.com/brands/lazyre-lab",
      description:
        "Research and development hub for experimental technologies like AR, VR, blockchain, and AI.",
    },
  ],
};
