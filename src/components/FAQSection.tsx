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

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection({
  title,
  description,
  faqs,
}: FAQSectionProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24">
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

interface AccordionElementProps {
  item: FAQItem;
  id: number;
}

const AccordionElement: React.FC<AccordionElementProps> = ({ item, id }) => {
  return (
    <AccordionItem value={String(id)} className="border-b border-foreground">
      <AccordionTrigger className="flex justify-between items-center w-full py-8 text-left px-6 md:px-12 xl:px-0 text-base sm:text-lg md:text-xl font-bold">
        <span className="text-left pr-4">{item.question}</span>
      </AccordionTrigger>
      <AccordionContent className="py-4 text-base sm:text-lg md:text-xl leading-relaxed px-6 md:px-12 xl:px-0">
        {item.answer}
      </AccordionContent>
    </AccordionItem>
  );
};
