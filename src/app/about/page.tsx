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

export const metadata: Metadata = {
  // Title and description optimized for "About Us" page
  title: "About Us - Crafting Digital Excellence | Lazyre",
  description:
    "Discover Lazyre, a global leader in innovative software development and digital solutions. We create remarkable digital products, blending cutting-edge technology with human-centered design to drive your business forward.",

  keywords: [
    "about Lazyre",
    "software development team",
    "digital solutions experts",
    "innovative technology solutions",
    "AI-powered services",
    "cutting-edge software company",
    "global digital solutions",
  ],

  // Open Graph metadata for social media sharing
  openGraph: {
    siteName: "Lazyre - Software Development & Digital Solutions",
    locale: "en_US",
    type: "website",
    title: "About Lazyre - Leading Software Development & Digital Solutions",
    description:
      "Learn more about Lazyre, where innovation meets creativity. We specialize in software development, AI-powered solutions, cloud computing, and digital transformation. Let's create the future together.",
    url: "https://lazyre.com/about",
    images: [
      {
        url: "https://cdn.lazyre.com/images/about/cover.webp",
        width: 1200,
        height: 630,
        alt: "Lazyre - About Us",
        type: "image/webp",
        secureUrl: "https://cdn.lazyre.com/images/about/cover.webp",
      },
    ],
  },

  // Twitter metadata optimized for engagement
  twitter: {
    card: "summary_large_image",
    site: "@lazyrehub",
    creator: "@lazyrehub",
    title: "About Lazyre - Leading Software Development & AI Solutions",
    description:
      "Explore Lazyre's journey of innovation and excellence in software development, AI, cloud solutions, and digital marketing. Partner with us to elevate your business.",
    images: [
      {
        url: "https://cdn.lazyre.com/images/about/cover.webp",
        alt: "Lazyre - About Us",
        width: 800,
        height: 418,
      },
    ],
  },
};

interface ShowcaseItemProps {
  imageSrc: string;
  altText: string;
  description?: string;
  isSquare?: boolean;
  fit?: "cover" | "contain" | undefined;
  bgColor?: string;
  paddingValue?: string;
}

const showcaseItems: ShowcaseItemProps[] = [
  {
    imageSrc:
      "https://cdn.lazyre.com/images/work/revenue/revenue-dashboard-cover.webp",
    altText: "Revenue cover image",
    description:
      "Clean, user-friendly dashboard for real-time energy and IoT management insights.",
    isSquare: true,
  },
  {
    imageSrc:
      "https://cdn.lazyre.com/images/work/job-cards/job-cards-dashboard-showcase.webp",
    altText: "Job cards cover image",
    description:
      "Streamlined ERP system designed for efficient work order and payment management.",
    isSquare: false,
  },
  {
    imageSrc:
      "https://cdn.lazyre.com/images/work/safe-shift/safeshift-cover-image.webp",
    altText: "Safe shift cover image",
    description:
      "Digital pass system for workplace health tracking and incident management.",
    isSquare: true,
  },
  {
    imageSrc:
      "https://cdn.lazyre.com/images/work/bloeiende-werelden/bloeiende-werelden-ecommerce.webp",
    altText: "Bloeiende werelden cover image",
    fit: "cover",
    description:
      "Localized e-commerce platform offering a personalized floral shopping experience.",
    isSquare: false,
  },
  {
    imageSrc:
      "https://cdn.lazyre.com/images/work/pharma-souq/pharma-souq-security-showcase.webp",
    altText: "Pharma souq cover image",
    fit: "cover",
    bgColor: "#22C55E",
    description:
      "POS system with secure prescription scanning and inventory management for pharmacies.",
    isSquare: true,
  },
  {
    imageSrc:
      "https://cdn.lazyre.com/images/work/voxel-verse/voxel-verse-arab-showcase.webp",
    altText: "Voxel verse cover image",
    fit: "cover",
    description:
      "Voxel-based digital art showcasing Dubai’s cityscape in stunning detail.",
    isSquare: false,
  },
];

const introData = {
  headline: "Empowering Ideas, Building Innovation",
  subheadline: "Where Creativity Meets Technology",
  description: [
    "Lazyre is a dynamic software development company driven by a passion for innovation and creativity. We specialize in providing tailored digital solutions that blend cutting-edge technology with thoughtful design. Our team is committed to delivering exceptional quality across a range of services, from custom app development to branding and marketing.",
    "At Lazyre, we don’t just follow trends—we set them, ensuring that every project we take on is not only functional but also forward-thinking. Our mission is to help businesses thrive in an ever-evolving digital landscape.",
  ],
  stats: [
    { value: "10+", label: "members", description: "" },
    { value: "150+", label: "completed projects", description: "" },
    { value: "7+", label: "years of experience", description: "" },
  ],
};

const portfolioData = {
  headline: "A Journey of Collaboration",
  companies: [
    {
      logo: "https://cdn.lazyre.com/images/client/almishkal-logo.svg",
      name: "Name",
      description:
        "Voxel-based design to create stunning 3D representations of iconic landmarks and cultural elements",
    },
    {
      logo: "https://cdn.lazyre.com/images/client/bw-logo.svg",
      name: "Name",
      description:
        "Developed an e-commerce platform with multilingual support.",
    },
    {
      logo: "https://cdn.lazyre.com/images/client/netflix-logo.svg",
      name: "Name",
      description:
        "Creation of engaging promotional cover images and thumbnails for new shows and movies",
    },
    {
      logo: "https://cdn.lazyre.com/images/client/kupdae-logo.svg",
      name: "Name",
      description:
        "Delivered complete branding solutions and T-shirt designs to establish a vibrant brand identity.",
    },
    {
      logo: "https://cdn.lazyre.com/images/client/toys-r-us-logo.svg",
      name: "Name",
      description:
        "Creation of promotional flyers and in-store signage for sales events and special offers.",
    },
    {
      logo: "https://cdn.lazyre.com/images/client/byte-logo.svg",
      name: "Name",
      description:
        "Developed an ERP solution for efficient inventory tracking, enhancing operational workflow and accuracy.",
    },
    {
      logo: "https://cdn.lazyre.com/images/client/mc-logo.svg",
      name: "Name",
      description:
        "Designed basic branding elements and office stationery to establish a professional identity.",
    },
    {
      logo: "https://cdn.lazyre.com/images/client/aeon-logo.svg",
      name: "Name",
      description:
        "Developed a custom health monitoring app for factory workers.",
    },
    {
      logo: "https://cdn.lazyre.com/images/client/midtec-logo.svg",
      name: "Name",
      description: "Implemented a comprehensive ERP solution for work orders.",
    },
  ],
  buttonText: "All Outcomes",
};

const features = [
  {
    number: "01",
    title: "Tailored Innovation",
    description:
      "Innovative solutions tailored to your business needs. We combine creativity and technology to deliver forward-thinking products that go beyond the ordinary.",
  },
  {
    number: "02",
    title: "Collaborative Approach",
    description:
      "We prioritize collaboration and transparency, ensuring you’re involved in every step of the process. Our expert team provides dedicated support to bring your vision to life.",
  },
  {
    number: "03",
    title: "Quality & Reliability",
    description:
      "Quality and reliability are at the core of everything we do. With extensive experience in multiple industries, we ensure seamless delivery of projects on time and within budget.",
  },
];

const faqData = {
  title: "Frequently Asked Questions",
  description:
    "We understand that every project is unique, and you likely have questions before getting started. Below, we’ve compiled answers to the most common questions we receive about our services, processes, and what you can expect when working with us. If you don’t see your question here, don’t hesitate to reach out. We’re always happy to discuss your specific needs and how we can help bring your vision to life.",
  faqs: [
    {
      question: "What services does Lazyre specialize in?",
      answer:
        "Lazyre offers a comprehensive range of services, including custom software development, branding and design, web development, digital marketing, and AI-powered solutions. Each of our services is backed by a specialized brand to ensure expert attention. Whether you need an e-commerce platform, a mobile app, or a complete rebranding strategy, we have the skills and experience to tailor our solutions to your business needs. Our holistic approach ensures that your project gets the dedicated focus it deserves while benefiting from the synergy of our diverse expertise.",
    },
    {
      question: "How does Lazyre manage to offer such diverse services?",
      answer:
        "Lazyre’s strength lies in its specialized brands, each focused on a specific area of expertise. This structure allows us to handle a wide range of services efficiently while maintaining high standards. Our team members are not only skilled in their respective fields but also collaborate seamlessly across brands. This synergy enables us to combine different skill sets and knowledge, resulting in innovative solutions that cater to diverse client needs. By fostering a culture of continuous learning and adaptation, we stay ahead of industry trends, ensuring that our diverse offerings remain relevant and effective.",
    },
    {
      question: "How do you handle project timelines and delivery?",
      answer:
        "We work closely with our clients to establish clear timelines and milestones at the outset of each project. Our process is highly collaborative, ensuring that you're always aware of the project's progress. We follow an agile development methodology, which allows us to remain flexible and responsive to changes. If adjustments are needed along the way, we communicate openly and adjust our workflows to accommodate new requirements. Ultimately, we strive to deliver on time without compromising quality, making sure that the final product aligns with your vision.",
    },
    {
      question: "Can Lazyre handle projects of any size?",
      answer:
        "Yes, Lazyre is equipped to handle projects of any scale. Whether you're a startup looking for a single-page website or an established business in need of an advanced enterprise-level solution, we tailor our services to match the scope of your project. We take the time to understand your goals and apply the appropriate resources to ensure a successful outcome. Even as a small team, our brand-based structure allows us to maintain efficiency while delivering high-quality results for projects big or small.",
    },
    {
      question: "How do you ensure the quality of your work?",
      answer:
        "Quality assurance is an integral part of our workflow. Each project is assigned to a specialized team within one of our brands, ensuring a focused approach. We conduct thorough testing and revisions during every stage of the development process to ensure that the final product is polished and meets your expectations. Additionally, we maintain regular communication with you to gather feedback and make improvements along the way. This collaborative process, combined with our attention to detail, guarantees a final result that not only functions flawlessly but also elevates your business.",
    },
    {
      question: "What industries have you worked with?",
      answer:
        "We’ve had the privilege of working across a wide array of industries, from healthcare and energy to retail, e-commerce, and beyond. Our experience enables us to understand the specific challenges and opportunities within each sector. Whether it’s building a secure pharmacy POS system, creating an intuitive e-commerce platform, or designing a digital health pass system, we bring industry-specific expertise to each project. Our ability to adapt to different industries ensures that the solutions we provide are always relevant, efficient, and impactful.",
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
      <ContentWrapper>
        <CompanyIntro {...introData} />
      </ContentWrapper>
      <div className="xl:py-12">
        <CoverImage
          src={"https://cdn.lazyre.com/images/about/cover.webp"}
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
            heading="Our Brands, Our Expertise"
            description1="We, even as a small team, prioritize efficiency by dividing our work into specialized brands. Each brand is focused on a particular area of expertise, allowing us to streamline processes and deliver top-quality solutions. Whether it’s innovative design, cutting-edge technology, or impactful marketing, our brands help us to bring a higher level of precision and dedication to every project."
            description2="This structure ensures that every aspect of your project is handled by experts who are passionate about their field. By segregating our work, we can provide a tailored approach, ensuring no detail is overlooked. From app development to branding and beyond, our focused teams guarantee that we deliver the best results, while maintaining a seamless workflow throughout."
          />
        </div>
      </div>
      {/* </ContentWrapper> */}

      {/* <div className="xl:py-12"> */}
      <ImageGrid
        images={[
          {
            src: "https://cdn.lazyre.com/images/brand/tech/lazyre_tech_cover.webp",
            alt: "Lazyre Tech Cover",
          },
          {
            src: "https://cdn.lazyre.com/images/brand/build/lazyre_build_cover.webp",
            alt: "Lazyre Build Cover",
          },
          {
            src: "https://cdn.lazyre.com/images/brand/web/lazyre_web_cover.webp",
            alt: "Lazyre Web Cover",
          },
          {
            src: "https://cdn.lazyre.com/images/brand/design/lazyre_design_cover.webp",
            alt: "Lazyre Design Cover",
          },
          {
            src: "https://cdn.lazyre.com/images/brand/studios/lazyre_studios_cover.webp",
            alt: "Lazyre Studios Cover",
          },
          {
            src: "https://cdn.lazyre.com/images/brand/lab/lazyre_lab_cover.webp",
            alt: "Lazyre Lab Cover",
          },
        ]}
      />
      {/* </div> */}

      <FAQSection {...faqData} />
    </>
  );
};

export default Page;
