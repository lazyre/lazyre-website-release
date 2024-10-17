import About from "@/components/home/about";
import Blog from "@/components/home/blog";
import Brand from "@/components/home/brand";
import Client from "@/components/home/client";
import Hero from "@/components/home/hero";
import Work from "@/components/home/work";

export default function Home() {
  return (
    <main>
      <Hero />
      <Brand />
      {/* <About /> */}
      <Work />
      <Client />
      <Blog />
    </main>
  );
}
