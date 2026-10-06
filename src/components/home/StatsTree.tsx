"use client";

import { motion } from "framer-motion";
import { Code2, ShieldCheck, Users, Cpu } from "lucide-react";

const stats = [
  {
    icon: Code2,
    number: "35+",
    label: "Products Shipped",
    subtext: "AI Agents, SaaS & Web Apps",
  },
  {
    icon: ShieldCheck,
    number: "99.9%",
    label: "Production Reliability",
    subtext: "Enterprise Cloud & Resilient APIs",
  },
  {
    icon: Users,
    number: "10M+",
    label: "Global Reach",
    subtext: "Active Users Across Deployments",
  },
  {
    icon: Cpu,
    number: "24/7",
    label: "Autonomous Scale",
    subtext: "Self-Healing AI Pipelines & Workflows",
  },
];

export function StatsTree() {
  return (
    <section className="py-24 md:py-32 relative bg-[#080808] border-t border-[#1a1a1a]">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Centered Pill Badge & Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#C8FF00]/25 bg-[#C8FF00]/10 px-4 py-1.5 mb-6"
          >
            <span className="font-mono text-xs text-[#C8FF00] tracking-wider uppercase">
              Proven Impact &amp; Scale
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#F5F5F5] leading-[1.15]"
          >
            Engineered for velocity &amp;{" "}
            <br className="hidden sm:inline" />
            <span className="text-[#C8FF00] font-medium">measurable business results.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-sm sm:text-base text-[#8A8A8A] font-light max-w-xl mx-auto leading-relaxed"
          >
            From zero-to-one MVPs to enterprise AI workflows — we combine speed with engineering rigor to ship software that scales effortlessly.
          </motion.p>
        </div>

        {/* Connected Tree & Network Diagram */}
        <div className="relative pt-2">
          {/* Connector tree lines (Desktop) */}
          <div className="hidden md:block relative w-full h-16 mb-6" aria-hidden="true">
            {/* Center drop line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-b from-[#C8FF00]/40 to-white/10" />
            {/* Horizontal connector bar */}
            <div className="absolute top-8 left-[12.5%] right-[12.5%] h-px bg-white/15" />
            {/* Vertical drop lines to the 4 nodes */}
            <div className="absolute top-8 left-[12.5%] w-px h-8 bg-white/15" />
            <div className="absolute top-8 left-[37.5%] w-px h-8 bg-white/15" />
            <div className="absolute top-8 left-[62.5%] w-px h-8 bg-white/15" />
            <div className="absolute top-8 left-[87.5%] w-px h-8 bg-white/15" />
          </div>

          {/* 4 Stats Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4">
            {stats.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Circular Node with Lime Accent Glow */}
                  <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#C8FF00]/40 bg-[#141414] text-[#C8FF00] shadow-[0_0_25px_rgba(200,255,0,0.18)] group-hover:scale-110 group-hover:bg-[#C8FF00] group-hover:text-[#080808] transition-all duration-300">
                    <Icon size={24} className="stroke-[2.2]" />
                    <span className="absolute inset-0 rounded-full border border-[#C8FF00]/30 animate-ping opacity-25 pointer-events-none" />
                  </div>

                  {/* Big Number */}
                  <span className="font-display text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#F5F5F5] group-hover:text-[#C8FF00] transition-colors mb-2">
                    {item.number}
                  </span>

                  {/* Label */}
                  <span className="text-sm font-medium text-[#F5F5F5] group-hover:text-[#C8FF00] transition-colors">
                    {item.label}
                  </span>
                  <span className="text-xs text-[#8A8A8A] mt-1 max-w-[210px] leading-relaxed">
                    {item.subtext}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
