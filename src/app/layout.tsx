import type { Metadata } from "next";
import { inter, spaceGrotesk, spaceMono } from "@/lib/fonts";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Suspense } from "react";
import Loading from "./loading";

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
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
