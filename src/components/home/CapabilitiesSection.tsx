"use client";

import { motion } from "framer-motion";

const categories = [
  {
    id: "digital-products",
    title: "Digital Products",
    icon: "⬡",
    capabilities: [
      "Web Development",
      "Web Applications",
      "SaaS",
      "E-commerce",
      "Dashboards",
      "Internal Tools",
      "MVP Development",
    ],
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    icon: "◈",
    capabilities: [
      "AI Agents",
      "AI Chatbots",
      "Voice Agents",
      "RAG Systems",
      "LLM Applications",
      "Business Automation",
      "AI Integrations",
      "WhatsApp Automation",
    ],
  },
  {
    id: "launch-infra",
    title: "Launch & Infrastructure",
    icon: "⬟",
    capabilities: [
      "Cloud Deployment",
      "APIs",
      "Payments",
      "Analytics",
      "Database Architecture",
      "Third-party Integrations",
      "Performance",
      "Security",
    ],
  },
  {
    id: "ai-creative",
    title: "AI Creative & Distribution",
    icon: "◉",
    capabilities: [
      "AI Commercials",
      "AI Product Videos",
      "Ad Creatives",
      "Social Content",
      "Product Visuals",
      "Landing Pages",
      "Campaign Assets",
      "Launch Content",
    ],
  },
];

export function CapabilitiesSection() {
  return (
    <section className="py-24 md:py-32 border-t border-[#222222]">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-2xl"
        >
          <h2 className="font-display text-4xl font-bold tracking-tight text-[#F5F5F5] md:text-5xl">
            Everything you need to move from idea to launch.
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-px bg-[#222222] md:grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-[#111111] p-8 hover:bg-[#131313] transition-colors"
            >
              {/* Icon */}
              <span className="text-2xl text-[#C8FF00] mb-4 block" aria-hidden="true">
                {cat.icon}
              </span>

              {/* Title */}
              <h3 className="font-display text-base font-bold text-[#F5F5F5] mb-6">
                {cat.title}
              </h3>

              {/* Capabilities list */}
              <ul className="space-y-2.5">
                {cat.capabilities.map((cap) => (
                  <li
                    key={cap}
                    className="flex items-center gap-2.5 text-sm text-[#8A8A8A]"
                  >
                    <span className="h-px w-3 bg-[#333333]" aria-hidden="true" />
                    {cap}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
