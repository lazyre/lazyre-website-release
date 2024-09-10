import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Your App Name",
  description: "Your app description",
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
              <CustomCursor />
            </CursorProvider>
          </TransitionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
