"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function BannerCTA() {
  return (
    <section className="p-3 sm:p-5 md:p-6 bg-[#080808]">
      {/* Large Rounded Container Card matching the reference bottom CTA banner */}
      <div className="relative rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-[#222222] bg-[#0d0d0d] min-h-[380px] md:min-h-[460px] flex flex-col justify-between p-8 sm:p-12 md:p-16 shadow-2xl">
        {/* Background Visual Graphics & Watermark */}
        <div className="absolute inset-0 z-0">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E8590C]/[0.08] sm:bg-[#F05A28]/[0.06] rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-[#C8FF00]/[0.05] rounded-full blur-[120px] pointer-events-none" />

          {/* Large Architectural Watermark */}
          <div className="absolute right-0 bottom-0 top-0 w-1/2 flex items-center justify-end pointer-events-none select-none opacity-[0.04] overflow-hidden pr-8">
            <span className="font-display font-black text-[22vw] tracking-tighter text-[#F5F5F5] uppercase leading-none">
              kairoo
            </span>
          </div>

          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(245,245,245,1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,245,245,1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Top Tag */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 py-1.5 mb-6">
            <Sparkles size={12} className="text-[#C8FF00]" />
            <span className="font-mono text-xs text-[#8A8A8A] tracking-wider uppercase">
              Ready To Launch
            </span>
          </div>
        </div>

        {/* Content & Action Button */}
        <div className="relative z-10 max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#F5F5F5] leading-tight mb-6"
          >
            Have something <br />
            <span className="font-medium text-[#C8FF00]">worth building?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm sm:text-base md:text-lg text-[#8A8A8A] font-light leading-relaxed mb-8 max-w-xl"
          >
            Tell us what you&apos;re working on. We&apos;ll design, engineer, and distribute
            your product from concept to market scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-[#C8FF00] pl-7 pr-3 py-3.5 text-sm sm:text-base font-semibold text-[#080808] hover:bg-[#d8ff33] transition-all duration-300 shadow-[0_0_30px_rgba(200,255,0,0.25)]"
            >
              <span>Start a Project</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#080808] text-[#C8FF00] transition-transform duration-300 group-hover:rotate-45">
                <ArrowRight size={15} />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
