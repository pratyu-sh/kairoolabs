"use client";

import { motion } from "framer-motion";
import { Sparkles, Brain, Bot, Network, Workflow, MessageSquareCode } from "lucide-react";

const aiCapabilities = [
  { name: "AI AGENTS", icon: Bot },
  { name: "VOICE AI", icon: MessageSquareCode },
  { name: "LLM APPLICATIONS", icon: Brain },
  { name: "RAG PIPELINES", icon: Network },
  { name: "AI AUTOMATION", icon: Workflow },
  { name: "AI CREATIVE", icon: Sparkles },
];

const workflow = [
  { step: "CUSTOMER", desc: "User interaction & intent" },
  { step: "INTERFACE", desc: "Product & experience layer" },
  { step: "AI AGENT", desc: "Autonomous intelligence core" },
  { step: "KNOWLEDGE", desc: "Vector search & business context (RAG)" },
  { step: "DECISION", desc: "Routing logic & safety guardrails" },
  { step: "AUTOMATION", desc: "Action & function execution" },
  { step: "BUSINESS SYSTEM", desc: "CRM, Database, ERP & APIs" },
];

export function AISection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#0c0c0c] border-t border-[#1a1a1a]">
      {/* Background radial glow */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, #C8FF00, transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#141414] px-4 py-1.5 mb-5"
          >
            <span className="font-mono text-xs text-[#8A8A8A] tracking-wider uppercase">
              AI Native Architecture
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#F5F5F5] leading-tight"
          >
            AI isn&apos;t an add-on.{" "}
            <br className="hidden sm:inline" />
            <span className="font-medium text-[#C8FF00]">It&apos;s a new layer</span> of the product.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 max-w-xl mx-auto text-[#8A8A8A] text-sm sm:text-base font-light leading-relaxed"
          >
            We integrate AI where it creates real leverage — from intelligent products and agents
            to automated workflows and high-speed creative production.
          </motion.p>
        </div>

        {/* Content Matrix: Left Capabilities + Right Animated Pipeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
          {/* Left: Capability Pill Badges */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col gap-3"
          >
            <p className="font-mono text-xs text-[#555555] tracking-widest uppercase mb-2">
              Capabilities
            </p>
            {aiCapabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.name}
                  className="flex items-center gap-3 p-3.5 rounded-2xl border border-white/10 bg-[#141414] hover:border-[#C8FF00]/40 transition-colors group"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-[#8A8A8A] group-hover:text-[#C8FF00] transition-colors">
                    <Icon size={16} />
                  </div>
                  <span className="font-mono text-xs font-semibold tracking-wider text-[#F5F5F5] group-hover:text-[#C8FF00] transition-colors">
                    {cap.name}
                  </span>
                </div>
              );
            })}
          </motion.div>

          {/* Right: Connected Workflow Pipeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border border-white/10"
          >
            <p className="font-mono text-xs text-[#C8FF00] tracking-widest uppercase mb-6">
              Automated Pipeline Execution
            </p>

            <div className="flex flex-col gap-0">
              {workflow.map((item, i) => (
                <div key={item.step} className="flex items-stretch gap-4">
                  {/* Step Connector Drop */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`h-3 w-3 rounded-full border-2 ${
                        i === 2
                          ? "border-[#C8FF00] bg-[#C8FF00] shadow-[0_0_10px_#C8FF00]"
                          : "border-[#444444] bg-[#1a1a1a]"
                      } mt-1.5 shrink-0`}
                    />
                    {i < workflow.length - 1 && (
                      <div
                        className={`w-px flex-1 ${
                          i === 2 ? "bg-[#C8FF00]/40" : "bg-white/10"
                        }`}
                        style={{ minHeight: "26px" }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-4">
                    <p
                      className={`font-mono text-xs font-bold tracking-wider ${
                        i === 2 ? "text-[#C8FF00]" : "text-[#F5F5F5]"
                      }`}
                    >
                      {item.step}
                    </p>
                    <p className="text-xs text-[#8A8A8A] font-light mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
