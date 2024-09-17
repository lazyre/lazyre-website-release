import AnimatedGreeting from "@/components/Contact/AnimatedGreeting";
import ContactForm from "@/components/Contact/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Lazyre for inquiries about our services in design, technology, web development, digital marketing, branding, multimedia, and experimental technologies. We're here to help bring your digital vision to life.",
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
