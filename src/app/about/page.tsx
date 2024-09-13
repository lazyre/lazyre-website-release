import React from "react";
import { Metadata } from "next";
import FixedHero from "@/components/FixedHero";
import SectionHeading from "@/components/SectionHeading";
import CoverImage from "@/components/CoverImage";
import OverviewGrid from "@/components/OverviewGrid";
import ShowcaseGrid from "@/components/ShowcaseGrid";
import CompanyIntro from "@/components/CompanyIntro";
import ImageGrid from "@/components/ImageGrid";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import FeatureList from "@/components/FeatureList";
import FAQSection from "@/components/FAQSection";
import ContentWrapper from "@/components/ContentWrapper";
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

const showcaseItems = [
  {
    imageSrc: "/images/brand/lazyre_tech_cover.webp",
    altText: "logo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices maximus tortor eu posuere.",
    isSquare: true,
  },
  {
    imageSrc: "/images/brand/lazyre_build_cover.webp",
    altText: "card in hand",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices maximus tortor eu posuere.",
    isSquare: false,
  },
  {
    imageSrc: "/images/brand/lazyre_design_cover.webp",
    altText: "cards",
    isSquare: true,
  },
];

const introData = {
  headline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
  subheadline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
  description: [
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis porro repudiandae, ipsum fuga quaerat sed iure neque veritatis impedit incidunt inventore sapiente repellendus excepturi quae et consectetur, molestias eos dolore Sapiente impedit iure, fugit corrupti consequatur est dolorum. Dolorem temporibus libero esse. Beatae animi architecto a blanditiis dicta ea neque possimus. In excepturi fugiat omnis dignissimos laborum quod harum tempora. ",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices maximus tortor eu posuere. ",
  ],
  stats: [
    { value: "10+", label: "members", description: "" },
    { value: "150+", label: "completed projects", description: "" },
    { value: "7+", label: "years of experience", description: "" },
  ],
};

const portfolioData = {
  headline: "Lorem ipsum dolor sit amet. ",
  companies: [
    {
      logo: "/images/logos/logoipsum-220.svg",
      name: "Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices maximus tortor eu posuere. ",
    },
    {
      logo: "/images/logos/logoipsum-220.svg",
      name: "Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices maximus tortor eu posuere. ",
    },
    {
      logo: "/images/logos/logoipsum-220.svg",
      name: "Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices maximus tortor eu posuere. ",
    },
    {
      logo: "/images/logos/logoipsum-220.svg",
      name: "Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices maximus tortor eu posuere. ",
    },
    {
      logo: "/images/logos/logoipsum-220.svg",
      name: "Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices maximus tortor eu posuere. ",
    },
    {
      logo: "/images/logos/logoipsum-220.svg",
      name: "Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices maximus tortor eu posuere. ",
    },
    {
      logo: "/images/logos/logoipsum-220.svg",
      name: "Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices maximus tortor eu posuere. ",
    },
    {
      logo: "/images/logos/logoipsum-220.svg",
      name: "Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices maximus tortor eu posuere. ",
    },
    {
      logo: "/images/logos/logoipsum-220.svg",
      name: "Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices maximus tortor eu posuere. ",
    },
  ],
  buttonText: "All Outcomes",
};

const features = [
  {
    number: "01",

    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices maximus tortor eu posuere.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices maximus tortor eu posuere.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices maximus tortor eu posuere. ",
  },
  {
    number: "02",
    title: "Why choose us?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices maximus tortor eu posuere.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices maximus tortor eu posuere.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices maximus tortor eu posuere. ",
  },
  {
    number: "03",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices maximus tortor eu posuere.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices maximus tortor eu posuere.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices maximus tortor eu posuere. ",
  },
];

const faqData = {
  title: "Frequently Asked Questions",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora consectetur possimus libero distinctio officiis assumenda qui quidem quisquam saepe eligendi fuga, nulla tempore voluptatibus ipsum voluptates doloremque maiores impedit eius. Doloremque, deserunt odio. Vitae a esse reprehenderit ipsa consequatur et obcaecati, placeat accusantium recusandae saepe quibusdam totam ducimus! Libero placeat voluptatum aspernatur atque amet deleniti maxime nisi aliquid officia sed?",
  faqs: [
    {
      question: "Lorem ipsum dolor sit amet.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, doloribus cupiditate? Placeat nisi impedit error ratione temporibus nemo eius corrupti nesciunt esse voluptatum odit dolore, tenetur exercitationem. Harum, dignissimos quia?",
    },
    {
      question: "Lorem ipsum dolor sit amet.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices maximus tortor eu posuere.",
    },
    {
      question: "Lorem ipsum dolor sit amet.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices maximus tortor eu posuere.",
    },
  ],
};

const Page: React.FC<PageProps> = ({ params }) => {
  return (
    <>
      <ContentWrapper>
        <FixedHero
          title={"About Us"}
          subtitle={
            "We are humans creating remarkable digital products and brands for other humans."
          }
          video={"/videos/logo/lazyre_logo_cubic.mp4"}
          altText={"lazyre logo reveal"}
          workHero
        />
      </ContentWrapper>
      {/* <ContentWrapper>
        <SectionHeading
          title={"Our Goal"}
          subtitle={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam ligula, sollicitudin ac sollicitudin eu, faucibus eget magna. Etiam blandit, ligula sit amet suscipit viverra, nisl ipsum blandit dolor, nec hendrerit lectus ante eu purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod tellus ligula, id volutpat ligula tristique vel. Vestibulum iaculis tortor tempor nulla porta, sed fermentum augue vestibulum. Nam vulputate, nisl at auctor egestas, velit neque laoreet nibh, dapibus facilisis neque diam eu ligula. Vivamus a leo quis ipsum porttitor fringilla."
          }
          workHeading
        />
      </ContentWrapper> */}
      <ContentWrapper>
        <CompanyIntro {...introData} />
      </ContentWrapper>
      <div className="xl:py-12">
        <CoverImage
          src={"/images/brand/lazyre_build_cover.webp"}
          alt={`About us cover image`}
        />
      </div>
      <ContentWrapper>
        <FeatureList features={features} />
      </ContentWrapper>
      <ContentWrapper>
        <ShowcaseGrid items={showcaseItems} />
      </ContentWrapper>
      <ContentWrapper>
        <PortfolioShowcase {...portfolioData} />
      </ContentWrapper>
      {/* <ContentWrapper> */}
      <div className="min-h-screen flex justify-center items-center bg-black text-white">
        <div className="container">
          <OverviewGrid
            title=""
            heading="Celebrating the magic once more"
            description1="After the success that was Disney Upfront 2022 for both Disney and Raxo, we had the joy of collaborating again with the company for its Disney Upfront 2023 event, a gala that showcases and celebrates the many brands, shows, movies, characters and IPs that live under the vast, magical Disney umbrella."
            description2="The goal of the Upfront is to celebrate Disney's distinctive, innovative approach to dynamic storytelling backed by technology. For this purpose, they were missing the visual compass and identity for the event, which included branding and brand guidelines, logo and key visuals, such as backgrounds, transitions and video assets."
          />
        </div>
      </div>
      {/* </ContentWrapper> */}

      {/* <div className="xl:py-12"> */}
      <ImageGrid
        images={[
          { src: "/images/brand/lazyre_tech_cover.webp", alt: "" },
          { src: "/images/brand/lazyre_build_cover.webp", alt: "" },
          { src: "/images/brand/lazyre_web_cover.webp", alt: "" },
          { src: "/images/brand/lazyre_design_cover.webp", alt: "" },
          { src: "/images/brand/lazyre_studios_cover.webp", alt: "" },
          { src: "/images/brand/lazyre_lab_cover.webp", alt: "" },
        ]}
      />
      {/* </div> */}

      <FAQSection {...faqData} />
    </>
  );
};

export default Page;
