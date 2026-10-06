"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const industries = [
  "HEALTHCARE",
  "ARCHITECTURE",
  "FASHION",
  "FOOD",
  "STARTUPS",
  "RETAIL",
  "SERVICES",
  "TECHNOLOGY",
  "SAAS",
  "FINTECH",
];

export function StudioCTA() {
  return (
    <>
      {/* Industry marquee */}
      <section className="py-12 border-y border-[#222222] overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap" aria-hidden="true">
          {[...industries, ...industries].map((ind, i) => (
            <span key={i} className="flex items-center gap-6 px-6">
              <span className="font-mono text-xs font-semibold tracking-widest text-[#333333]">
                {ind}
              </span>
              <span className="h-1 w-1 rounded-full bg-[#333333]" />
            </span>
          ))}
        </div>
      </section>

      {/* Studio teaser */}
      <section className="py-24 md:py-32 border-b border-[#222222]">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <span className="font-mono text-xs text-[#8A8A8A] tracking-widest uppercase mb-4 block">
                The Studio
              </span>
              <h2 className="font-display text-4xl font-bold tracking-tight text-[#F5F5F5] md:text-5xl">
                A small studio built to do{" "}
                <span className="text-[#C8FF00]">ambitious work.</span>
              </h2>
              <p className="mt-6 text-[#8A8A8A] leading-relaxed">
                Kairoo Labs started with a simple idea: businesses shouldn&apos;t need five
                different teams to build the future.
              </p>
              <p className="mt-3 text-[#8A8A8A] leading-relaxed">
                Founded in 2026 and based in Dehradun, India, Kairoo Labs builds digital products,
                intelligent systems and automated experiences for ambitious businesses.
              </p>
              <Link
                href="/studio"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#C8FF00] hover:gap-3 transition-all"
              >
                Learn about the studio
                <ArrowRight size={14} />
              </Link>
            </motion.div>

            {/* Right — philosophy */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="rounded-2xl border border-[#222222] bg-[#111111] p-10"
            >
              {["THINK BIG.", "BUILD WELL.", "SHIP FAST.", "STAY CURIOUS."].map((phrase, i) => (
                <motion.p
                  key={phrase}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  className={`font-display text-3xl font-bold md:text-4xl py-4 border-b border-[#222222] last:border-0 ${
                    i === 0 ? "text-[#F5F5F5]" : i === 1 ? "text-[#8A8A8A]" : i === 2 ? "text-[#F5F5F5]" : "text-[#8A8A8A]"
                  }`}
                >
                  {phrase}
                </motion.p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-40">
        <div className="mx-auto max-w-7xl px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-mono text-xs text-[#8A8A8A] tracking-widest uppercase mb-6">
              Ready?
            </p>
            <h2 className="font-display text-5xl font-bold tracking-tight text-[#F5F5F5] md:text-7xl lg:text-8xl leading-tight mb-10">
              Have something{" "}
              <br className="hidden md:block" />
              worth{" "}
              <span className="text-[#C8FF00]">building?</span>
            </h2>
            <p className="max-w-lg mx-auto text-[#8A8A8A] text-lg mb-10">
              Tell us what you&apos;re working on. We&apos;ll figure out the next step together.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#C8FF00] px-10 py-4 text-base font-semibold text-[#080808] transition-all hover:bg-[#d4ff33] active:scale-95"
            >
              Start a Project
              <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
