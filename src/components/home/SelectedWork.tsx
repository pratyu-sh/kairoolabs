"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, ExternalLink } from "lucide-react";
import { getFeaturedProjects } from "@/lib/projects";

const filterCategories = [
  "All",
  "E-commerce",
  "Architecture",
  "Healthcare",
  "AI & Mobile",
];

export function SelectedWork() {
  const [activeCategory, setActiveCategory] = useState("All");
  const allProjects = getFeaturedProjects();

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => {
          if (activeCategory === "E-commerce")
            return p.category.toLowerCase().includes("e-commerce");
          if (activeCategory === "Architecture")
            return p.category.toLowerCase().includes("architecture");
          if (activeCategory === "Healthcare")
            return p.category.toLowerCase().includes("healthcare");
          if (activeCategory === "AI & Mobile")
            return (
              p.category.toLowerCase().includes("ai") ||
              p.category.toLowerCase().includes("mobile")
            );
          return true;
        });

  return (
    <section className="py-24 md:py-32 border-t border-[#1a1a1a] bg-[#080808] relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#C8FF00]/[0.025] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-white/[0.015] rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#141414] px-4 py-1.5 mb-5 shadow-sm"
            >
              <Sparkles size={12} className="text-[#C8FF00]" />
              <span className="font-mono text-xs text-[#8A8A8A] tracking-wider uppercase">
                Featured Case Studies
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-display text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#F5F5F5] leading-tight"
            >
              Built for <span className="font-medium text-[#C8FF00]">real businesses.</span>
            </motion.h2>

            <p className="mt-4 text-sm sm:text-base text-[#8A8A8A] font-light leading-relaxed">
              Explore our recent digital flagships, autonomous systems, and high-conversion commercial products.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 self-start lg:self-auto"
          >
            <Link
              href="/work"
              className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-xs sm:text-sm font-medium text-[#F5F5F5] hover:border-[#C8FF00] hover:text-[#C8FF00] hover:bg-[#C8FF00]/5 transition-all duration-300"
            >
              <span>View Full Archive ({allProjects.length})</span>
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </Link>
          </motion.div>
        </div>

        {/* Interactive Filter Pills Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-white/5">
          {filterCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 sm:px-5 py-2 rounded-full font-mono text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "text-[#080808] font-bold"
                    : "text-[#8A8A8A] hover:text-[#F5F5F5] hover:bg-white/5 border border-white/5"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePortfolioTab"
                    className="absolute inset-0 rounded-full bg-[#C8FF00] shadow-[0_0_20px_rgba(200,255,0,0.35)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Animated Project Grid with Real Images */}
        <motion.div layout className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 35, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="h-full"
              >
                <Link
                  href={`/work/${project.slug}`}
                  className="group relative flex flex-col h-full rounded-3xl border border-[#222222] bg-[#111111] overflow-hidden hover:border-[#C8FF00]/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(200,255,0,0.1)]"
                >
                  {/* Visual Showcase Card with Next.js Image & Overlays */}
                  <div className="relative h-72 sm:h-80 md:h-96 w-full overflow-hidden bg-[#0d0d0d]">
                    {/* Project Image with Zoom Animation */}
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 group-hover:brightness-105"
                      priority={i < 2}
                    />

                    {/* Dark gradient & vignette overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/25 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500" />

                    {/* Top Floating Info Bar */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                      <div className="flex items-center gap-2">
                        <span className="backdrop-blur-md bg-black/60 border border-white/15 px-3 py-1 rounded-full font-mono text-[11px] text-[#F5F5F5] uppercase tracking-wider shadow-lg">
                          {project.industry}
                        </span>
                        {project.liveUrl && (
                          <span className="backdrop-blur-md bg-emerald-950/80 border border-emerald-500/40 px-2.5 py-1 rounded-full font-mono text-[10px] text-emerald-400 uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Live
                          </span>
                        )}
                      </div>

                      {/* Corner Arrow Disc */}
                      <div className="flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-md bg-black/60 border border-white/20 text-white group-hover:bg-[#C8FF00] group-hover:border-[#C8FF00] group-hover:text-[#080808] transition-all duration-300 shadow-xl">
                        <ArrowUpRight
                          size={16}
                          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                        />
                      </div>
                    </div>

                    {/* Hover Floating Action Bar */}
                    <div className="absolute inset-x-0 bottom-4 flex justify-center z-10 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/80 backdrop-blur-md px-5 py-2 font-mono text-xs font-semibold tracking-wider text-white shadow-2xl">
                        <span>VIEW CASE STUDY</span>
                        <ArrowUpRight size={13} className="text-[#C8FF00]" />
                      </span>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-7 sm:p-8 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center justify-between gap-4 mb-2">
                        <p className="font-mono text-xs text-[#C8FF00] tracking-wider uppercase font-semibold">
                          {project.category}
                        </p>
                        {project.liveUrl && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#8A8A8A] group-hover:text-emerald-400 transition-colors">
                            <span>live preview</span>
                            <ExternalLink size={10} />
                          </span>
                        )}
                      </div>

                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F5F5F5] group-hover:text-[#C8FF00] transition-colors duration-300 mb-3">
                        {project.title}
                      </h3>

                      <p className="text-sm text-[#8A8A8A] font-light leading-relaxed mb-6">
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* Services Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-5 border-t border-white/5">
                      {project.services.map((service) => (
                        <span
                          key={service}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-mono text-[#8A8A8A] group-hover:border-white/20 transition-colors"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
