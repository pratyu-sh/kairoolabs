"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Cpu, Layers, Sparkles, Terminal } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    id: "web-apps",
    title: "Digital Products & SaaS",
    category: "Build",
    tag: "Web & Apps",
    desc: "From websites and MVPs to full-scale SaaS platforms, we design and engineer products that solve real problems.",
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "Supabase"],
    gradient: "from-orange-900/40 via-stone-900/40 to-black",
    color: "#F05A28",
    icon: Layers,
    href: "/services#digital-products",
  },
  {
    id: "ai-systems",
    title: "AI Agents & Automation",
    category: "AI Native",
    tag: "Intelligence",
    desc: "We build AI systems that create real leverage — intelligent agents, RAG pipelines, voice bots, and automated business workflows.",
    technologies: ["OpenAI", "Anthropic", "LangChain", "Python", "Vector DB"],
    gradient: "from-lime-900/40 via-emerald-950/40 to-black",
    color: "#C8FF00",
    icon: Cpu,
    href: "/services#ai-automation",
  },
  {
    id: "cloud-infra",
    title: "Launch & Infrastructure",
    category: "Ship",
    tag: "Cloud & APIs",
    desc: "We handle the technology, integrations, CI/CD and infrastructure required to turn prototypes into reliable production systems.",
    technologies: ["AWS", "Vercel", "Docker", "Stripe", "PostgreSQL"],
    gradient: "from-blue-900/40 via-slate-900/40 to-black",
    color: "#38BDF8",
    icon: Terminal,
    href: "/services#launch",
  },
  {
    id: "ai-creative",
    title: "AI Creative & Distribution",
    category: "Distribute",
    tag: "Reach & Growth",
    desc: "We produce high-conversion campaign assets, AI commercials, product visuals and landing pages to get products seen.",
    technologies: ["AI Commercials", "Landing Pages", "Ad Creative", "Campaigns"],
    gradient: "from-purple-900/40 via-rose-950/40 to-black",
    color: "#A855F7",
    icon: Sparkles,
    href: "/services#ai-creative",
  },
];

export function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section className="py-24 md:py-32 border-t border-[#1a1a1a] bg-[#0c0c0c]">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#141414] px-4 py-1.5 mb-5"
            >
              <span className="font-mono text-xs text-[#8A8A8A] tracking-wider uppercase">
                Services
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-display text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#F5F5F5] leading-tight max-w-3xl"
            >
              All set for seamless{" "}
              <span className="font-medium text-[#C8FF00]">digital execution</span>
            </motion.h2>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous service"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#262626] bg-[#141414] text-[#8A8A8A] hover:border-[#F5F5F5] hover:text-[#F5F5F5] transition-all"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next service"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#262626] bg-[#141414] text-[#8A8A8A] hover:border-[#F5F5F5] hover:text-[#F5F5F5] transition-all"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* 4 Cards Grid / Showcase deck */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative flex flex-col justify-between rounded-3xl border border-[#222222] bg-[#111111] overflow-hidden p-7 hover:border-[#383838] transition-all duration-300 hover:shadow-2xl"
              >
                {/* Visual Backdrop with gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${item.gradient} opacity-25 group-hover:opacity-45 transition-opacity duration-300`}
                />

                {/* Top Section: Category badge and Icon */}
                <div className="relative z-10 flex items-center justify-between mb-8">
                  <span className="rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-3 py-1 font-mono text-[11px] text-[#8A8A8A] tracking-wider uppercase">
                    {item.tag}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-[#F5F5F5] group-hover:text-[#C8FF00] group-hover:border-[#C8FF00]/40 transition-colors">
                    <Icon size={18} />
                  </div>
                </div>

                {/* Middle: Content */}
                <div className="relative z-10 mb-8">
                  <h3 className="font-display text-2xl font-bold text-[#F5F5F5] leading-snug mb-3 group-hover:text-[#C8FF00] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#8A8A8A] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom: Tech tags & Link */}
                <div className="relative z-10 pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5 max-w-[75%]">
                    {item.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 font-mono text-[10px] text-[#8A8A8A]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={item.href}
                    aria-label={`Explore ${item.title}`}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[#F5F5F5] group-hover:bg-[#C8FF00] group-hover:text-[#080808] transition-all"
                  >
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="mt-12 flex justify-center items-center gap-2">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentIndex ? "w-8 bg-[#C8FF00]" : "w-2 bg-[#2a2a2a] hover:bg-[#444444]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
