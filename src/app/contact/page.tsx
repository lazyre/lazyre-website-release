import AnimatedGreeting from "@/components/Contact/AnimatedGreeting";
import ContactForm from "@/components/Contact/ContactForm";

export default function ContactPage() {
  return (
    <div className="relative flex flex-col lg:flex-row min-h-screen   text-white font-sans pt-36">
      <div className="relative lg:w-1/2 h-full">
        <AnimatedGreeting />
      </div>
      <div className="lg:w-1/2 relative ">
        <ContactForm />
      </div>
    </div>
  );
}
