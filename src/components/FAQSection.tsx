"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQSectionProps {
  title: string;
  description: string;
  faqs: FAQItem[];
}

// const AccordionItem = ({
//   item,
//   isOpen,
//   onToggle,
// }: {
//   item: FAQItem;
//   isOpen: boolean;
//   onToggle: () => void;
// }) => {
//   return (
//     <div className="border-b border-gray-200">
//       <button
//         className="flex justify-end items-center w-full py-16 text-left gap-4 px-6 md:px-12 xl:px-0"
//         onClick={onToggle}
//       >
//         <span className="text-base sm:text-lg md:text-xl font-bold ">
//           {item.question}
//         </span>
//         <motion.span
//           animate={{ rotate: isOpen ? 180 : 0 }}
//           transition={{ duration: 0.3 }}
//         >
//           <ChevronDown className="w-6 h-6" />
//         </motion.span>
//       </button>
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <p className="py-4 text-base sm:text-lg md:text-xl leading-relaxed px-6 md:px-12 xl:px-0">
//               {item.answer}
//             </p>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

export default function FAQSection({
  title,
  description,
  faqs,
}: FAQSectionProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 ">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 max-w-3xl px-6 md:px-12 xl:px-0">
          {title}
        </h1>
        <div className="md:w-3/4 md:ml-auto mb-12 px-6 md:px-12 xl:pl-12 xl:pr-0">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            {description}
          </p>
        </div>
        <div className="space-y-4">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionElement key={index} item={faq} id={index} />
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

interface FAQItem {
  question: string;
  answer: string;
}
interface AccordionElementProps {
  item: FAQItem;
  id: number;
}

const AccordionElement: React.FC<AccordionElementProps> = ({ item, id }) => {
  return (
    <AccordionItem value={String(id)} className="border-b border-foreground">
      <AccordionTrigger className="flex justify-end items-center w-full py-16 text-left gap-4 px-6 md:px-12 xl:px-0 text-base sm:text-lg md:text-xl font-bold">
        {item.question}
      </AccordionTrigger>
      <AccordionContent className="py-4 text-base sm:text-lg md:text-xl leading-relaxed px-6 md:px-12 xl:px-0">
        {item.answer}
      </AccordionContent>
    </AccordionItem>
  );
};
