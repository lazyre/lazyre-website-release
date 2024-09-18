"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { useState } from "react";
import BlogList from "./BlogList";

export default function BlogQueryWrapper() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <BlogList />
    </QueryClientProvider>
  );
}
