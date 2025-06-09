import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

const faqs = [
  {
    question: "Is the material used in Sweet Steps casts safe for babies?",
    answer:
      "Absolutely! We use clinically tested, non-toxic, skin-safe materials that are gentle and completely safe for newborns and infants.",
  },
  {
    question: "How long does the casting process take?",
    answer:
      "The actual molding process takes only a few minutes. However, creating the final detailed 3D cast can take up to 7–10 days for perfection.",
  },
  {
    question: "Can I choose the frame or base design?",
    answer:
      "Yes, Sweet Steps offers a variety of customizable options for frames, name tags, and background styles to match your decor.",
  },
  {
    question: "What if my baby moves during the casting?",
    answer:
      "Our quick-set material ensures minimal disruption. In rare cases, we’ll happily redo the mold free of charge during the same session.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="flex flex-col gap-8 px-4 py-10 font-sans text-black bg-white md:flex-row md:px-8">
      {/* Left Side */}
      <div className="flex-1">
        <h2 className="mb-4 text-4xl font-bold text-gray-900">General FAQ’s</h2>
        <p className="max-w-md text-gray-600">
          Answers to commonly asked questions about our templates, services, and
          purchasing process.
        </p>
        <button className="px-6 py-3 mt-6 text-white transition-transform bg-black rounded-full hover:scale-105">
          Ask A Question
        </button>
      </div>

      {/* Right Side */}
      <div className="flex-1 space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="text-white transition-colors bg-black shadow-md rounded-xl hover:bg-gray-900"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full p-4 text-left focus:outline-none"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen
                    ? "max-h-40 opacity-100 p-4 pt-0"
                    : "max-h-0 opacity-0 p-0"
                }`}
              >
                <p className="text-sm text-white">{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;
