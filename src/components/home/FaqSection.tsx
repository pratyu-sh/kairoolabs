"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    number: "01",
    question: "Can Kairoo turn my idea into a real, production-ready product?",
    answer:
      "Yes. We handle the complete journey from idea, product strategy, and UI/UX design to full-stack engineering, AI integrations, deployment, and market launch.",
  },
  {
    number: "02",
    question: "What types of services and technologies does Kairoo specialize in?",
    answer:
      "We build modern digital products (Websites, Web Apps, SaaS, MVPs), AI systems (AI Agents, Chatbots, Voice AI, RAG, Business Automation), Cloud & Launch Infrastructure, and AI Creative distribution assets.",
  },
  {
    number: "03",
    question: "How do you integrate AI into our existing business workflows?",
    answer:
      "We identify high-leverage friction points in your operations, design custom AI agent workflows and knowledge bases (RAG), and connect them directly to your existing tools, databases, and messaging channels like WhatsApp or CRMs.",
  },
  {
    number: "04",
    question: "What is your typical turnaround timeline for MVP development?",
    answer:
      "Most MVPs and core web applications ship within 4 to 8 weeks, maintaining strict engineering and design standards. We prioritize speed-to-market so you can validate with real users quickly.",
  },
  {
    number: "05",
    question: "Do you help with distribution and growth after launch?",
    answer:
      "Building the product is only half the journey. We create AI commercials, high-converting landing pages, ad creatives, and launch campaigns to ensure your product reaches the right audience.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 md:py-32 relative bg-[#0c0c0c] border-t border-[#1a1a1a]">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#141414] px-4 py-1.5 mb-5"
          >
            <span className="font-mono text-xs text-[#8A8A8A] tracking-wider uppercase">
              FAQ
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#F5F5F5] leading-tight"
          >
            Questions? <span className="font-medium text-[#C8FF00]">Glad you asked</span>
          </motion.h2>
        </div>

        {/* 2-Column Clean FAQ Accordion matching reference */}
        <div className="max-w-4xl mx-auto divide-y divide-white/10">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={faq.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="py-6 sm:py-8"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-start justify-between gap-6 text-left group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    {/* Number Badge */}
                    <span className="font-mono text-xs sm:text-sm text-[#E8590C] sm:text-[#F05A28] font-bold mt-1">
                      {faq.number}
                    </span>
                    <h3 className="font-display text-lg sm:text-xl md:text-2xl font-normal text-[#F5F5F5] group-hover:text-[#C8FF00] transition-colors leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  {/* Toggle Icon */}
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-[#8A8A8A] group-hover:border-[#C8FF00] group-hover:text-[#C8FF00] transition-colors">
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 pl-8 sm:pl-12 text-sm sm:text-base text-[#8A8A8A] font-light leading-relaxed max-w-2xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
