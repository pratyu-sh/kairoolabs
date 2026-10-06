"use client";

import { motion } from "framer-motion";

const differentiators = [
  {
    number: "01",
    title: "Engineering First",
    copy: "We don't just create concepts. We build production-ready systems.",
    icon: "◻",
  },
  {
    number: "02",
    title: "AI Native",
    copy: "We identify where AI can fundamentally improve products and operations.",
    icon: "◈",
  },
  {
    number: "03",
    title: "Design Obsessed",
    copy: "Powerful technology should still feel simple and intuitive.",
    icon: "◉",
  },
  {
    number: "04",
    title: "Distribution Mindset",
    copy: "Building the product is only half the journey. We help take it to the market.",
    icon: "◇",
  },
];

const processSteps = [
  { step: "01", title: "Discover", desc: "Understand the problem, users and business." },
  { step: "02", title: "Design", desc: "Create the product experience and technical direction." },
  { step: "03", title: "Build", desc: "Develop the product using modern technology." },
  { step: "04", title: "Launch", desc: "Deploy, integrate and prepare the product for real users." },
  { step: "05", title: "Distribute", desc: "Create campaigns, content and digital experiences that help the product reach its audience." },
];

export function WhyKairoo() {
  return (
    <>
      {/* Why Kairoo */}
      <section className="py-24 md:py-32 border-t border-[#222222]">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <h2 className="font-display text-4xl font-bold tracking-tight text-[#F5F5F5] md:text-5xl">
              One team. From idea to intelligence.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-px bg-[#222222] sm:grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden">
            {differentiators.map((d, i) => (
              <motion.div
                key={d.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="bg-[#111111] p-8 hover:bg-[#131313] transition-colors"
              >
                <span className="font-mono text-xs text-[#333333] tracking-widest mb-4 block">
                  {d.number}
                </span>
                <span className="text-2xl text-[#C8FF00] mb-4 block" aria-hidden="true">
                  {d.icon}
                </span>
                <h3 className="font-display text-lg font-bold text-[#F5F5F5] mb-3">
                  {d.title}
                </h3>
                <p className="text-sm text-[#8A8A8A] leading-relaxed">{d.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32 border-t border-[#222222]">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <h2 className="font-display text-4xl font-bold tracking-tight text-[#F5F5F5] md:text-5xl">
              How we build.
            </h2>
          </motion.div>

          {/* Steps */}
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-5 top-6 bottom-6 w-px bg-[#222222] hidden md:block" />

            <div className="flex flex-col gap-0">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group relative flex items-start gap-8 border-b border-[#222222] py-8 last:border-0 hover:bg-[#111111]/50 transition-colors rounded-xl px-4 -mx-4"
                >
                  {/* Step indicator */}
                  <div className="relative shrink-0 h-10 w-10 rounded-full border border-[#222222] bg-[#111111] flex items-center justify-center group-hover:border-[#C8FF00] transition-colors">
                    <span className="font-mono text-xs font-semibold text-[#8A8A8A] group-hover:text-[#C8FF00] transition-colors">
                      {step.step}
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-display text-xl font-bold text-[#F5F5F5] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[#8A8A8A] max-w-lg">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
