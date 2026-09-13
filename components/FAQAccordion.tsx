"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQItem, faqData } from "@/lib/faqData";

interface FAQAccordionProps {
  items?: FAQItem[];
  limit?: number;
}

export default function FAQAccordion({ items = faqData, limit }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const displayItems = limit ? items.slice(0, limit) : items;

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col divide-y divide-[#E3DCCB]">
      {displayItems.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="py-6 transition-colors">
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex items-center justify-between text-left gap-4 focus:outline-none group"
              aria-expanded={isOpen}
            >
              <span className="font-editorial text-xl sm:text-2xl text-[#20201C] group-hover:text-[#8B806D] transition-colors font-normal">
                {faq.question}
              </span>
              <div
                className={`p-2 rounded-full bg-[#EDE7DA] text-[#20201C] transition-transform duration-300 shrink-0 ${
                  isOpen ? "rotate-180 bg-[#E3DCCB]" : ""
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div className="mt-4 pr-10 animate-fade-in">
                <p className="text-sm sm:text-base text-[#77736A] font-light leading-relaxed">
                  {faq.answer}
                </p>
                {faq.category && (
                  <span className="inline-block mt-3 text-[10px] font-mono tracking-widest uppercase text-[#8B806D] opacity-80">
                    Category: {faq.category}
                  </span>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
