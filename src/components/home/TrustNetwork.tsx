"use client";

import { motion } from "framer-motion";
import { Star, ShieldCheck, Sparkles } from "lucide-react";

const partners = [
  "NEXT.JS",
  "OPENAI",
  "ANTHROPIC",
  "SUPABASE",
  "AWS",
  "VERCEL",
  "TAILWIND",
  "TYPESCRIPT",
];

export function TrustNetwork() {
  return (
    <section className="py-24 md:py-32 relative bg-[#080808] border-t border-[#1a1a1a]">
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
              Testimonials
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#F5F5F5] leading-tight"
          >
            Proven impact for{" "}
            <span className="font-medium text-[#C8FF00]">ambitious enterprises</span>
          </motion.h2>
        </div>

        {/* Central Quote Card with surrounding node network (matching reference layout) */}
        <div className="relative max-w-4xl mx-auto mb-20">
          {/* Ambient background glow */}
          <div className="absolute inset-0 bg-[#C8FF00]/[0.025] blur-3xl rounded-full pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative glass-panel rounded-3xl p-8 sm:p-12 md:p-14 border border-white/10 text-center shadow-2xl"
          >
            {/* Avatar */}
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#2a2a2a] to-[#141414] border-2 border-[#C8FF00] p-1 shadow-lg">
              <div className="h-full w-full rounded-full bg-[#1e1e1e] flex items-center justify-center text-sm font-bold text-[#C8FF00] font-mono">
                KL
              </div>
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-[#C8FF00] text-[#C8FF00]" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="font-display text-lg sm:text-2xl md:text-2xl font-light text-[#F5F5F5] leading-relaxed max-w-2xl mx-auto mb-8">
              &ldquo;We rely on Kairoo Labs for end-to-end product architecture and AI automation.
              Their speed of execution, design aesthetic, and engineering quality are unmatched.
              They took our concept to a live production platform effortlessly.&rdquo;
            </blockquote>

            {/* Author */}
            <div>
              <p className="font-display text-base font-semibold text-[#F5F5F5]">
                Founder &amp; Product Lead
              </p>
              <p className="font-mono text-xs text-[#8A8A8A] mt-0.5">
                AI &amp; Digital Ventures · India
              </p>
            </div>
          </motion.div>
        </div>

        {/* Partner / Technology Logo Bar matching reference */}
        <div className="pt-12 border-t border-white/5 text-center">
          <p className="font-mono text-xs text-[#555555] tracking-widest uppercase mb-8">
            Engineering &amp; Platform Ecosystem
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-60">
            {partners.map((p) => (
              <span
                key={p}
                className="font-mono text-xs sm:text-sm font-bold tracking-widest text-[#8A8A8A] hover:text-[#C8FF00] transition-colors"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
