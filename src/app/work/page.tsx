"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/projects";

const categories = ["All", "E-commerce", "Architecture", "Healthcare", "AI", "Mobile"];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) =>
          p.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
          p.industry.toLowerCase().includes(activeCategory.toLowerCase())
        );

  return (
    <div className="min-h-screen bg-[#080808] pt-28 md:pt-36 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-[#C8FF00]/[0.02] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-white/[0.015] rounded-full blur-[120px] pointer-events-none" />

      {/* Clean Page Header */}
      <div className="mx-auto max-w-7xl px-6 md:px-8 pb-12 md:pb-16 border-b border-[#1f1f1f] relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#141414] px-4 py-1.5 mb-5 shadow-sm"
          >
            <Sparkles size={12} className="text-[#C8FF00]" />
            <span className="font-mono text-xs text-[#8A8A8A] tracking-wider uppercase">
              Portfolio &amp; Client Work
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#F5F5F5] leading-tight mb-6"
          >
            Built for <span className="font-medium text-[#C8FF00]">real businesses.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-2xl text-sm sm:text-base md:text-lg text-[#8A8A8A] font-light leading-relaxed"
          >
            A curated portfolio of high-conversion digital flagships, autonomous AI workflows,
            and launch-ready mobile &amp; web software.
          </motion.p>
        </div>
      </div>

      {/* Filter Tabs Bar */}
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-8 relative z-10">
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative rounded-full px-5 py-2 text-xs font-mono tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "text-[#080808] font-bold"
                    : "border border-white/10 bg-white/[0.03] text-[#8A8A8A] hover:border-white/20 hover:text-[#F5F5F5]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeWorkPageTab"
                    className="absolute inset-0 rounded-full bg-[#C8FF00] shadow-[0_0_20px_rgba(200,255,0,0.35)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="mx-auto max-w-7xl px-6 pb-24 md:px-8 md:pb-32 relative z-10">
        <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 25, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
              >
                <Link
                  href={`/work/${project.slug}`}
                  className="group relative flex flex-col justify-between h-full rounded-3xl border border-[#222222] bg-[#111111] overflow-hidden hover:border-[#C8FF00]/40 transition-all duration-300 hover:shadow-[0_0_35px_rgba(200,255,0,0.1)]"
                >
                  {/* Visual Image Showcase Area */}
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#0d0d0d]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 group-hover:brightness-105"
                      priority={i < 3}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/25 to-transparent opacity-85 group-hover:opacity-65 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-transparent transition-colors duration-500" />

                    {/* Top Floating Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                      <span className="backdrop-blur-md bg-black/60 border border-white/15 px-3 py-1 rounded-full font-mono text-[10px] text-[#F5F5F5] uppercase tracking-wider shadow-lg">
                        {project.industry}
                      </span>

                      {project.liveUrl && (
                        <span className="backdrop-blur-md bg-emerald-950/80 border border-emerald-500/40 px-2.5 py-1 rounded-full font-mono text-[10px] text-emerald-400 uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Live
                        </span>
                      )}
                    </div>

                    {/* Hover Button */}
                    <div className="absolute inset-x-0 bottom-4 flex justify-center z-10 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/80 backdrop-blur-md px-4 py-2 font-mono text-xs font-semibold tracking-wider text-white shadow-xl">
                        <span>CASE STUDY</span>
                        <ArrowUpRight size={13} className="text-[#C8FF00]" />
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <p className="font-mono text-xs text-[#C8FF00] tracking-wider uppercase font-semibold">
                          {project.category}
                        </p>
                        <ArrowUpRight
                          size={16}
                          className="text-[#555555] group-hover:text-[#C8FF00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-0.5"
                        />
                      </div>
                      <h2 className="font-display text-2xl font-bold text-[#F5F5F5] group-hover:text-[#C8FF00] transition-colors mb-3">
                        {project.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-[#8A8A8A] font-light leading-relaxed mb-6 line-clamp-3">
                        {project.shortDescription}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                      {project.services.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 font-mono text-[10px] text-[#8A8A8A] group-hover:border-white/20 transition-colors"
                        >
                          {s}
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
    </div>
  );
}
