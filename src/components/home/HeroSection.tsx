"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Play, Sparkles, ChevronDown, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { HeroCanvas } from "@/components/hero/HeroCanvas";

export function HeroSection() {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <>
      <section className="relative p-3 sm:p-4 md:p-6 pb-0">
        {/* Large Rounded Hero Frame Card matching the reference design */}
        <div className="relative rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-[#222222]/90 bg-[#0d0d0d] min-h-[88vh] md:min-h-[94vh] flex flex-col justify-between p-6 sm:p-8 md:p-12 shadow-2xl">
          {/* Ambient Background Visual & Interactive Node Canvas */}
          <div className="absolute inset-0 z-0">
            <HeroCanvas />

            {/* Giant Architectural Brand Watermark across back wall like reference */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.035] overflow-hidden">
              <span className="font-display font-black text-[28vw] tracking-tighter text-[#F5F5F5] uppercase leading-none transform -translate-y-4">
                kairoo
              </span>
            </div>

            {/* Subtle Studio Lighting Vignettes */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C8FF00]/[0.04] rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-10" />

            {/* Grid texture overlay */}
            <div
              className="absolute inset-0 opacity-[0.025] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(245,245,245,1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,245,245,1) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
          </div>

          {/* Top Row: Floating Header inside the Hero container */}
          <div className="relative z-20 flex items-center justify-between gap-4">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-2 font-display text-xl sm:text-2xl font-bold tracking-tight text-[#F5F5F5] hover:text-[#C8FF00] transition-colors"
            >
              <span>kairoo</span>
              <span className="h-2 w-2 rounded-full bg-[#C8FF00] transition-transform group-hover:scale-125" />
            </Link>

            {/* Center Pill Nav (Desktop) */}
            <div className="hidden lg:flex items-center gap-1.5 glass-panel rounded-full px-5 py-2 border border-white/10 text-xs font-medium tracking-wide">
              <Link
                href="/"
                className="px-3.5 py-1 rounded-full text-[#F5F5F5] hover:text-[#C8FF00] transition-colors"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="px-3.5 py-1 rounded-full text-[#8A8A8A] hover:text-[#F5F5F5] transition-colors flex items-center gap-1"
              >
                Services
                <ChevronDown size={12} className="opacity-60" />
              </Link>
              <Link
                href="/work"
                className="px-3.5 py-1 rounded-full text-[#8A8A8A] hover:text-[#F5F5F5] transition-colors flex items-center gap-1"
              >
                Work
                <ChevronDown size={12} className="opacity-60" />
              </Link>
              <Link
                href="/studio"
                className="px-3.5 py-1 rounded-full text-[#8A8A8A] hover:text-[#F5F5F5] transition-colors"
              >
                About
              </Link>
              <Link
                href="/insights"
                className="px-3.5 py-1 rounded-full text-[#8A8A8A] hover:text-[#F5F5F5] transition-colors"
              >
                Insights
              </Link>
            </div>

            {/* Right Top CTA Button */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="group flex items-center gap-2 rounded-full bg-[#C8FF00] pl-5 pr-2.5 py-2 text-xs sm:text-sm font-semibold text-[#080808] hover:bg-[#d8ff33] transition-all duration-300 active:scale-95 shadow-[0_0_20px_rgba(200,255,0,0.2)]"
              >
                <span>Start a Project</span>
                <span className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-[#080808] text-[#C8FF00] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowRight size={13} />
                </span>
              </Link>
            </div>
          </div>

          {/* Middle Spacer */}
          <div className="flex-1 min-h-[120px] md:min-h-[180px]" />

          {/* Bottom Area: Hero Typography & Floating "See How We Work" Preview Card */}
          <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            {/* Left Content Column */}
            <div className="lg:col-span-8">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md px-3.5 py-1.5"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#C8FF00] animate-pulse" />
                <span className="font-mono text-[11px] text-[#8A8A8A] tracking-wider uppercase">
                  AI & Software Development Studio · Dehradun, India
                </span>
              </motion.div>

              {/* Headline using clean geometric typography */}
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-normal leading-[1.08] tracking-tight text-[#F5F5F5] max-w-4xl"
              >
                We build, <span className="font-medium text-[#C8FF00]">ship</span> &amp;{" "}
                <br className="hidden sm:inline" />
                distribute <span className="text-[#8A8A8A] font-light">what&apos;s next.</span>
              </motion.h1>

              {/* Supporting Copy */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-6 max-w-2xl text-sm sm:text-base md:text-lg text-[#8A8A8A] font-light leading-relaxed"
              >
                Kairoo Labs is an AI &amp; software development studio helping ambitious businesses
                turn ideas into digital products, intelligent systems and launch-ready experiences
                — then get them in front of the right audience.
              </motion.p>

              {/* Bottom Action Pill Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <Link
                  href="/work"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-6 py-3 text-xs sm:text-sm font-medium text-[#F5F5F5] hover:border-[#C8FF00] hover:text-[#C8FF00] hover:bg-[#C8FF00]/5 transition-all"
                >
                  <span>Explore Our Work</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="text-xs sm:text-sm text-[#8A8A8A] hover:text-[#F5F5F5] transition-colors underline underline-offset-4"
                >
                  Automate My Business →
                </Link>
              </motion.div>
            </div>

            {/* Right Column: Floating Interactive Card (Matching reference '01/03 See how we work' widget) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="lg:col-span-4 flex justify-start lg:justify-end"
            >
              <div
                onClick={() => setShowVideoModal(true)}
                className="group relative w-full sm:w-auto max-w-md glass-panel rounded-2xl sm:rounded-3xl p-4 sm:p-5 flex items-center justify-between gap-5 border border-white/10 hover:border-[#C8FF00]/40 transition-all duration-300 cursor-pointer shadow-2xl hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
              >
                {/* Text info */}
                <div className="flex flex-col">
                  <span className="font-mono text-[11px] text-[#C8FF00] tracking-widest uppercase mb-1">
                    01 <span className="text-[#8A8A8A]">/ 04</span>
                  </span>
                  <h3 className="font-display text-base sm:text-lg font-semibold text-[#F5F5F5] group-hover:text-[#C8FF00] transition-colors">
                    See how we build &amp; ship.
                  </h3>
                  <p className="text-xs text-[#8A8A8A] mt-0.5">
                    Interactive pipeline overview
                  </p>
                </div>

                {/* Video / Interactive Thumbnail with Play button */}
                <div className="relative h-16 w-20 sm:h-20 sm:w-24 rounded-xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#252525] border border-white/10 shrink-0 flex items-center justify-center">
                  <div
                    className="absolute inset-0 opacity-40 bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at center, #C8FF00 10%, transparent 70%)",
                    }}
                  />
                  {/* Glowing Play Icon */}
                  <div className="relative z-10 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/90 text-[#080808] shadow-lg group-hover:scale-110 group-hover:bg-[#C8FF00] transition-all duration-300">
                    <Play size={14} className="fill-current ml-0.5" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Connected Tree & Capabilities Branch Section (Matching the Reference Branching Layout) */}
      <section className="py-20 md:py-28 relative">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          {/* Centered Pill Badge & Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#222222] bg-[#111111] px-4 py-1.5 mb-5"
            >
              <Sparkles size={12} className="text-[#C8FF00]" />
              <span className="font-mono text-xs text-[#8A8A8A] tracking-widest uppercase">
                End-To-End Architecture
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-3xl sm:text-5xl md:text-5xl font-normal tracking-tight text-[#F5F5F5] leading-tight"
            >
              Tailored solutions for your{" "}
              <span className="text-[#C8FF00] font-medium">business requirements</span>
            </motion.h2>
          </div>

          {/* Connected Branch Network Diagram */}
          <div className="relative pt-4">
            {/* Top Connector Branch Lines (Desktop/Tablet) */}
            <div className="hidden md:block relative w-full h-12 mb-8" aria-hidden="true">
              {/* Central drop line from header */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-6 bg-gradient-to-b from-[#333333] to-[#444444]" />
              {/* Horizontal crossbar connecting the 4 columns */}
              <div className="absolute top-6 left-[12.5%] right-[12.5%] h-px bg-[#262626]" />
              {/* 4 Downward connector drops */}
              <div className="absolute top-6 left-[12.5%] w-px h-6 bg-[#262626]" />
              <div className="absolute top-6 left-[37.5%] w-px h-6 bg-[#262626]" />
              <div className="absolute top-6 left-[62.5%] w-px h-6 bg-[#262626]" />
              <div className="absolute top-6 left-[87.5%] w-px h-6 bg-[#262626]" />
            </div>

            {/* 4 Interactive Nodes matching the reference image layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
              {[
                {
                  step: "01",
                  title: "Build",
                  metric: "Digital Products",
                  desc: "Websites, Web Apps, SaaS, MVPs & internal tools engineered to solve real problems.",
                  icon: "⬡",
                },
                {
                  step: "02",
                  title: "Ship",
                  metric: "Production Ready",
                  desc: "APIs, cloud infrastructure, AI integrations and payments built to scale flawlessly.",
                  icon: "◈",
                },
                {
                  step: "03",
                  title: "Distribute",
                  metric: "Market Reach",
                  desc: "AI commercials, launch content, targeted ad creatives and high-conversion landing pages.",
                  icon: "◉",
                },
                {
                  step: "04",
                  title: "Grow",
                  metric: "Continuous Scale",
                  desc: "Automated business workflows, intelligent agents, and post-launch product optimization.",
                  icon: "◇",
                },
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group flex flex-col items-center text-center p-6 rounded-2xl border border-[#222222] bg-[#111111]/80 hover:bg-[#151515] hover:border-[#C8FF00]/30 transition-all duration-300"
                >
                  {/* Circular Node Icon (like the reference orange/accent badge) */}
                  <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[#C8FF00]/40 bg-[#C8FF00]/10 text-[#C8FF00] shadow-[0_0_15px_rgba(200,255,0,0.12)] group-hover:scale-110 group-hover:bg-[#C8FF00] group-hover:text-[#080808] transition-all duration-300">
                    <span className="text-xl font-bold">{item.icon}</span>
                  </div>

                  {/* Metric / Heading */}
                  <h3 className="font-display text-2xl font-bold text-[#F5F5F5] mb-1">
                    {item.title}
                  </h3>
                  <span className="font-mono text-xs text-[#C8FF00] tracking-wider uppercase mb-3">
                    {item.metric}
                  </span>

                  {/* Description */}
                  <p className="text-xs text-[#8A8A8A] leading-relaxed max-w-xs">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Modal Preview for "See How We Work" */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6"
            onClick={() => setShowVideoModal(false)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl rounded-3xl border border-[#222222] bg-[#111111] p-6 sm:p-8 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#222222]">
                <div>
                  <span className="font-mono text-xs text-[#C8FF00] tracking-widest uppercase">
                    Kairoo Workflow Pipeline
                  </span>
                  <h4 className="font-display text-xl font-bold text-[#F5F5F5] mt-1">
                    IDEA → BUILD → SHIP → DISTRIBUTE → GROW
                  </h4>
                </div>
                <button
                  onClick={() => setShowVideoModal(false)}
                  className="rounded-full border border-[#222222] h-8 w-8 flex items-center justify-center text-[#8A8A8A] hover:text-[#F5F5F5] hover:border-[#F5F5F5] transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                {[
                  {
                    step: "01. Discover & Strategy",
                    detail: "Problem analysis, technical architecture, AI feasibility and user journey mapping.",
                  },
                  {
                    step: "02. Design & Prototype",
                    detail: "High-fidelity UI/UX, interaction systems, and clickable validation prototypes.",
                  },
                  {
                    step: "03. Engineering & AI Core",
                    detail: "Production Next.js, Node/Python backends, Supabase, and custom AI agent workflows.",
                  },
                  {
                    step: "04. Launch & Distribution",
                    detail: "Cloud deployment, CI/CD, analytics, and high-impact digital marketing assets.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3.5 rounded-xl border border-[#222222] bg-[#0c0c0c]"
                  >
                    <CheckCircle2 size={18} className="text-[#C8FF00] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-sm font-semibold text-[#F5F5F5]">{item.step}</h5>
                      <p className="text-xs text-[#8A8A8A] mt-0.5">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-end gap-3">
                <Link
                  href="/contact"
                  onClick={() => setShowVideoModal(false)}
                  className="rounded-full bg-[#C8FF00] px-6 py-2.5 text-xs sm:text-sm font-semibold text-[#080808] hover:bg-[#d8ff33] transition-all"
                >
                  Start Your Project →
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
