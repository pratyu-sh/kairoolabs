"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    id: "build",
    number: "01",
    title: "BUILD",
    headline: "Turn ideas into products.",
    copy: "From websites and MVPs to complex digital platforms, we design and engineer products that solve real problems.",
    capabilities: [
      "Websites",
      "Web Apps",
      "SaaS",
      "Mobile Apps",
      "E-commerce",
      "Internal Tools",
      "Digital Experiences",
    ],
    cta: "Explore Development",
    href: "/services#digital-products",
    accent: "#C8FF00",
  },
  {
    id: "ship",
    number: "02",
    title: "SHIP",
    headline: "Take products from concept to production.",
    copy: "We handle the technology, integrations and infrastructure required to turn prototypes into production-ready products.",
    capabilities: [
      "Development",
      "APIs",
      "AI Integration",
      "Payments",
      "Cloud",
      "Deployment",
      "Analytics",
    ],
    cta: "Explore Launch",
    href: "/services#launch",
    accent: "#C8FF00",
  },
  {
    id: "distribute",
    number: "03",
    title: "DISTRIBUTE",
    headline: "Put your product in front of people.",
    copy: "We combine technology, AI and creative production to help products reach the right audience.",
    capabilities: [
      "AI Ads",
      "Product Videos",
      "Social Content",
      "Campaigns",
      "Landing Pages",
      "Launch Strategy",
    ],
    cta: "Explore Distribution",
    href: "/services#ai-creative",
    accent: "#C8FF00",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export function BuildShipDistribute() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl font-bold tracking-tight text-[#F5F5F5] md:text-6xl">
            From idea to impact.
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 gap-4 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              className="group relative flex flex-col rounded-2xl border border-[#222222] bg-[#111111] p-8 overflow-hidden hover:border-[#C8FF00]/30 transition-colors duration-300"
            >
              {/* Number */}
              <span className="font-mono text-xs text-[#333333] tracking-widest mb-6">
                {card.number}
              </span>

              {/* Title */}
              <span className="font-mono text-xs font-semibold text-[#C8FF00] tracking-widest mb-3">
                {card.title}
              </span>

              {/* Headline */}
              <h3 className="font-display text-2xl font-bold text-[#F5F5F5] leading-snug mb-4">
                {card.headline}
              </h3>

              {/* Copy */}
              <p className="text-sm text-[#8A8A8A] leading-relaxed mb-8">
                {card.copy}
              </p>

              {/* Capabilities */}
              <div className="flex flex-wrap gap-2 mb-8">
                {card.capabilities.map((cap) => (
                  <span
                    key={cap}
                    className="rounded-full border border-[#222222] px-3 py-1 text-xs text-[#8A8A8A]"
                  >
                    {cap}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-auto">
                <Link
                  href={card.href}
                  className="group/link inline-flex items-center gap-2 text-sm font-medium text-[#C8FF00] hover:gap-3 transition-all"
                >
                  {card.cta}
                  <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-0.5" />
                </Link>
              </div>

              {/* Hover accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C8FF00] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
