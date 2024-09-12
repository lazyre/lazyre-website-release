import React from "react";
import { Metadata } from "next";
import FixedHero from "@/components/FixedHero";
type PageProps = {
  params: { id: string };
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  return {
    title: `About Us`,
    description: "About us",
  };
}

const Page: React.FC<PageProps> = ({ params }) => {
  return (
    <>
      <FixedHero
        title={"About Us"}
        subtitle={
          "We are humans creating remarkable digital products and brands for other humans."
        }
        video={"/videos/logo/lazyre_logo_cubic.mp4"}
        altText={"lazyre logo reveal"}
        workHero
      />
    </>
  );
};

export default Page;
