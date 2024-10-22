import AnimatedGreeting from "@/components/Contact/AnimatedGreeting";
import ContactForm from "@/components/Contact/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Lazyre",
  description:
    "Reach out to Lazyre for expert solutions in design, technology, web development, digital marketing, branding, multimedia, and cutting-edge experimental technologies. Let's turn your ideas into innovative digital solutions.",

  // Open Graph
  openGraph: {
    title: "Contact Us | Lazyre",
    description:
      "Connect with Lazyre for inquiries about our services in design, technology, web development, digital marketing, branding, multimedia, and experimental technologies. Let’s collaborate to bring your digital vision to life.",
    type: "website",
    url: "https://lazyre.com/contact",
    images: [
      {
        url: "https://cdn.lazyre.com/images/about/cover.webp", // Example image URL
        width: 1200,
        height: 630,
        alt: "Contact Lazyre",
      },
    ],
    locale: "en_US",
    siteName: "Lazyre",
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Lazyre",
    description:
      "Get in touch with Lazyre to explore our range of services in design, technology, web development, and digital marketing. We are ready to help bring your ideas to life.",
    images: ["https://cdn.lazyre.com/images/about/cover.webp"],
    site: "@lazyrehub",
    creator: "@lazyrehub",
  },

  // Keywords
  keywords: [
    "contact Lazyre",
    "get in touch Lazyre",
    "software development contact",
    "design services contact",
    "web development inquiries",
    "digital marketing contact",
    "branding services",
    "multimedia solutions contact",
    "experimental technologies contact",
  ],

  // Alternates and canonical
  alternates: {
    canonical: "https://lazyre.com/contact",
    languages: {
      "en-US": "https://lazyre.com/contact",
    },
  },
};

export default function ContactPage() {
  return (
    <div className="relative flex flex-col lg:flex-row min-h-screen font-sans pt-36">
      <div className="relative lg:w-1/2 h-full">
        <AnimatedGreeting />
      </div>
      <div className="lg:w-1/2 relative ">
        <ContactForm />
      </div>
    </div>
  );
}
