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
  metadataBase: new URL("https://www.lazyre.com"),
  title: {
    default:
      "Lazyre - Redefining Digital Presence | Impactful Digital Experiences & Products",
    template: "%s | Lazyre",
  },
  description:
    "Lazyre is a global software development company with divisions including Lazyre Design, Lazyre Tech, Lazyre Web, Lazyre Digitalytics, Lazyre Build, Lazyre Studios, and Lazyre Lab. We deliver impactful digital products and experiences across various sectors worldwide.",
  keywords: [
    "Lazyre",
    "Lazyre Design",
    "Lazyre Tech",
    "Lazyre Web",
    "Lazyre Digitalytics",
    "Lazyre Build",
    "Lazyre Studios",
    "Lazyre Lab",
    "digital presence",
    "custom apps",
    "UI/UX design",
    "web technologies",
    "SEO",
    "digital marketing",
    "branding",
    "AR",
    "VR",
    "AI",
    "blockchain",
    "e-commerce",
    "cloud computing",
    "global services",
    "digital experiences",
  ],
  authors: [{ name: "Lazyre Team" }],
  creator: "Lazyre",
  publisher: "Lazyre",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    title:
      "Lazyre - Redefining Digital Presence | Impactful Digital Experiences & Products",
    description:
      "Explore Lazyre's global services through its brands: Lazyre Design, Tech, Web, Digitalytics, Build, Studios, and Lab. Redefine your digital presence with our innovative solutions worldwide.",
    url: "https://www.lazyre.com",
    siteName: "Lazyre",
    // images: [
    //   {
    //     url: '/opengraph-image.jpg',
    //     width: 1200,
    //     height: 630,
    //     alt: 'Lazyre - Global Digital Presence Redefined',
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Lazyre - Redefining Digital Presence",
    description:
      "Delivering impactful digital experiences globally through Lazyre’s Design, Tech, Web, Digitalytics, Build, Studios, and Lab brands, using cutting-edge technologies like AR, VR, AI, and blockchain.",
    creator: "@lazyre",
    // images: ['/twitter-image.jpg'],
  },
  // verification: {
  //   google: 'google-site-verification-code',
  //   yandex: 'yandex-verification-code',
  //   yahoo: 'yahoo-site-verification-code',
  // },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "mobile-web-app-capable": "yes",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
