import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

const faqData = [
  {
    question: "How do your templates support different business needs?",
    answer:
      "Our modular templates cover a spectrum of startup use-cases—from rapid MVP launches to enterprise-level platforms—enabling robust design, scalable architecture, and quick deployment.",
  },
  {
    question: "What technologies and frameworks are supported?",
    answer:
      "We offer templates built with modern stacks including React, Tailwind, Node.js, and more. Each template lists supported technologies and deployment options.",
  },
  {
    question: "Can templates be customized for my brand and workflow?",
    answer:
      "Absolutely. Every template is fully configurable — change branding, layouts, and integrations to match your unique identity and operational needs.",
  },
  {
    question: "How does your team provide ongoing support or updates?",
    answer:
      "Our support includes onboarding guidance, documentation, and regular product updates—so your product stays current and secure.",
  },
  {
    question: "What’s included with each template purchase?",
    answer:
      "You’ll get source files, detailed docs, access to our support team, and demo content to jumpstart development.",
  },
  {
    question: "How secure and performance-optimized are your templates?",
    answer:
      "All templates follow best practices for modern web security and performance, with regular reviews to ensure reliability as you scale.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="faq" className="bg-primary/5 w-full">
      <div className="section-container section-padding responsive-flex gap-8">
        <div className="lg:w-1/3">
          <p className="section-badge">FAQ</p>
          <h1 className="section-title">
            Answers to Your Tech & Product Questions
          </h1>
          <div className="section-description">
            Accelerate your project with our expertly designed templates and
            solutions—spanning UI/UX, development, deployment, and strategy.
            Explore answers to the most common questions from founders, teams,
            and innovators.
          </div>
        </div>

        <div className="border-neutral/50 lg:w-2/3">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border-neutral/10 border-b last:border-none focus:ring-0 focus:outline-none"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  aria-expanded={isOpen}
                  className={`group flex w-full items-center gap-3 border-none bg-transparent px-4 py-6 text-left font-semibold transition-colors focus:ring-0 focus:ring-offset-0 focus:outline-none ${
                    isOpen ? "text-primary" : "hover:text-primary"
                  }`}
                >
                  <ArrowUpRightIcon
                    className={`h-5 w-5 flex-shrink-0 transition-transform duration-300 ease-in-out ${
                      isOpen
                        ? "text-primary rotate-90"
                        : "text-base-content/80 rotate-0"
                    }`}
                  />
                  <span
                    className={`text-xl ${isOpen ? "font-semibold" : "font-medium"}`}
                  >
                    {item.question}
                  </span>
                </button>
                {isOpen && (
                  <div className="text-base-content/80 mt-1 px-16 pb-6 leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
