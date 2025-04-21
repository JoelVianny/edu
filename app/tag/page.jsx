"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do I need to speak Russian to study in Russia?",
    answer:
      "While many programs are offered in Russian, there are also a growing number of English-taught programs, especially at the Master's and PhD levels. It's helpful to learn some Russian for daily life.",
  },
  {
    question: "Are there scholarships available for international students?",
    answer:
      "Yes! Russia offers government-funded scholarships (like the Open Doors program) that cover tuition, accommodation, and sometimes a monthly stipend.",
  },
  {
    question: "What are the admission requirements for international students?",
    answer:
      "Admission requirements vary by university and program. Typically, you'll need academic transcripts, a passport copy, and sometimes a language proficiency certificate.",
  },
  {
    question: "Can I work while studying in Russia?",
    answer:
      "Yes, international students can work part-time while studying, but you'll need to obtain a work permit unless the job is at the university.",
  },
  {
    question: "Is a Russian degree recognized internationally?",
    answer:
      "Yes, degrees from many Russian universities are internationally recognized, especially those listed in global university rankings.",
  },
  {
    question: "How much does it cost to study in Russia?",
    answer:
      "Tuition fees vary by university and program, but on average, they range from $1,500 to $6,000 per year. Living costs are also relatively affordable.",
  },
  {
    question: "Do universities in Russia provide accommodation?",
    answer:
      "Yes, most universities offer dormitories or student housing, often at subsidized rates. You can also choose private accommodation.",
  },
];

export default function Tag() {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  useEffect(() => {
    contentRefs.current.forEach((ref, idx) => {
      if (ref) {
        ref.style.maxHeight =
          idx === activeIndex ? `${ref.scrollHeight}px` : "0px";
      }
    });
  }, [activeIndex]);

  return (
    <div className=" bg-gray-100 px-4 py-12 ">
      <h2 className="text-3xl font-bold text-slate-900 mb-8  text-center">
        Frequently asked questions
      </h2>

      <div className="max-w-2xl mx-auto mt-8 divide-y-5 divide-gray-500">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`${
              index !== faqs.length - 1 ? "border-b border-gray-200" : ""
            }`}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="flex justify-between items-center w-full py-4 text-left font-medium text-gray-900 focus:outline-none"
            >
              {faq.question}
              <ChevronDown
                className={`w-5 h-5 transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              ref={(el) => (contentRefs.current[index] = el)}
              className="overflow-hidden transition-all duration-300 text-gray-600"
              style={{ maxHeight: "0px" }}
            >
              <p className="pb-4">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
