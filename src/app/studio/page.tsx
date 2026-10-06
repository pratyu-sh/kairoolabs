import type { Metadata } from "next";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Studio — Kairoo Labs",
  description:
    "A small studio built to do ambitious work. Based in Dehradun, India. Founded 2026.",
};

const technologies = [
  "Next.js", "React", "TypeScript", "Node.js", "Python",
  "PostgreSQL", "Supabase", "MongoDB", "AWS", "Vercel",
  "OpenAI", "Anthropic", "LangChain", "Tailwind CSS", "Framer Motion",
  "React Native", "Expo", "Stripe", "Cloudflare", "Docker",
];

const values = [
  {
    number: "01",
    title: "Build things that work.",
    copy: "We care about quality, not just speed. Every project is built to function correctly, scale reliably, and stand up in production.",
  },
  {
    number: "02",
    title: "Communicate clearly.",
    copy: "No jargon. No opaque processes. We keep clients informed and involved at every stage of the project.",
  },
  {
    number: "03",
    title: "Stay at the frontier.",
    copy: "The technology landscape shifts constantly. We make it our job to stay current so our clients benefit from what's actually possible today.",
  },
  {
    number: "04",
    title: "Ship, then improve.",
    copy: "Perfection is the enemy of progress. We get products live and in front of users, then iterate based on real feedback.",
  },
];

export default function StudioPage() {
  return (
    <div className="min-h-screen bg-[#080808] pt-28 md:pt-36">
      {/* Clean Page Header */}
      <div className="mx-auto max-w-7xl px-6 md:px-8 pb-12 md:pb-16 border-b border-[#1f1f1f]">
        <div className="max-w-3xl">
          <span className="font-mono text-xs text-[#C8FF00] tracking-wider uppercase mb-3 block">
            About Kairoo Labs
          </span>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#F5F5F5] leading-tight mb-6">
            A small studio built to do{" "}
            <span className="font-medium text-[#C8FF00]">ambitious work.</span>
          </h1>
          <p className="max-w-xl text-sm sm:text-base md:text-lg text-[#8A8A8A] font-light leading-relaxed">
            Founded in 2026, based in Dehradun, India. We help founders and businesses turn
            ideas into real products, intelligent systems, and scalable operations.
          </p>
        </div>
      </div>

      {/* Story & Philosophy Section */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-stretch">
          {/* Left: Story */}
          <div className="lg:col-span-6 glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-[#C8FF00] tracking-wider uppercase mb-4 block">
                Our Narrative
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-normal text-[#F5F5F5] mb-6">
                Why we started Kairoo
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#8A8A8A] font-light leading-relaxed">
                <p>
                  Most businesses have to hire multiple disconnected teams just to build and launch a digital product — one for design, one for development, one for AI, and another for marketing.
                </p>
                <p>
                  That fragmentation creates delays and dilution. We built Kairoo Labs to be the single partner capable of executing the full journey: <strong className="text-[#F5F5F5] font-medium">IDEA → BUILD → SHIP → DISTRIBUTE → GROW</strong>.
                </p>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-white/10 flex items-center gap-4">
              <span className="h-2 w-2 rounded-full bg-[#C8FF00]" />
              <span className="font-mono text-xs text-[#8A8A8A] uppercase tracking-wider">
                Engineering First · AI Native
              </span>
            </div>
          </div>

          {/* Right: Philosophy 4-Pillars */}
          <div
            id="philosophy"
            className="lg:col-span-6 glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 flex flex-col justify-between"
          >
            <span className="font-mono text-xs text-[#8A8A8A] tracking-wider uppercase mb-6 block">
              Guiding Principles
            </span>

            <div className="space-y-4 my-auto">
              {["THINK BIG.", "BUILD WELL.", "SHIP FAST.", "STAY CURIOUS."].map((phrase, i) => (
                <p
                  key={phrase}
                  className={`font-display text-3xl sm:text-4xl md:text-5xl font-normal py-4 border-b border-white/5 last:border-0 ${
                    i % 2 === 0 ? "text-[#F5F5F5]" : "text-[#8A8A8A]"
                  }`}
                >
                  {phrase}
                </p>
              ))}
            </div>

            <p className="font-mono text-xs text-[#555555] tracking-widest uppercase pt-6">
              Dehradun Studio Framework
            </p>
          </div>
        </div>
      </div>

      {/* Values Grid */}
      <div className="mx-auto max-w-7xl px-6 pb-20 md:px-8 md:pb-28">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-[#8A8A8A] tracking-wider uppercase mb-3 block">
            Values
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-normal text-[#F5F5F5]">
            How we <span className="font-medium text-[#C8FF00]">operate</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((val) => (
            <div
              key={val.number}
              className="glass-panel rounded-3xl p-7 border border-white/10 hover:border-[#C8FF00]/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs text-[#E8590C] sm:text-[#F05A28] font-bold tracking-widest block mb-4">
                  {val.number}
                </span>
                <h3 className="font-display text-xl font-bold text-[#F5F5F5] mb-3 leading-snug">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#8A8A8A] font-light leading-relaxed">
                  {val.copy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technology Ecosystem */}
      <div className="mx-auto max-w-7xl px-6 pb-20 md:px-8">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/10">
          <span className="font-mono text-xs text-[#8A8A8A] tracking-wider uppercase mb-3 block">
            Tools &amp; Stack
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-normal text-[#F5F5F5] mb-8">
            Technologies we engineer with
          </h2>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs sm:text-sm font-mono text-[#8A8A8A] hover:border-[#C8FF00] hover:text-[#F5F5F5] transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Location Section */}
      <div className="mx-auto max-w-7xl px-6 pb-24 md:px-8">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-[#8A8A8A]">
              <MapPin size={12} className="text-[#C8FF00]" />
              <span>Dehradun, Uttarakhand, India</span>
            </div>
            <h3 className="font-display text-3xl sm:text-4xl font-normal text-[#F5F5F5]">
              Built at the foothills of the Himalayas.
            </h3>
            <p className="text-sm text-[#8A8A8A] font-light leading-relaxed max-w-xl">
              We work remotely with founders and companies globally. Reach out to connect or collaborate.
            </p>
          </div>

          <div className="md:col-span-5 rounded-2xl border border-white/10 bg-[#141414] p-6 text-center">
            <p className="font-mono text-xs text-[#555555] tracking-widest uppercase">
              Coordinates
            </p>
            <p className="font-mono text-lg font-bold text-[#F5F5F5] mt-1">
              30.3165° N, 78.0322° E
            </p>
            <div className="mt-4 flex flex-col items-center gap-1.5">
              <a
                href="mailto:labs.kairoo@gmail.com"
                className="font-mono text-xs text-[#C8FF00] hover:underline"
              >
                labs.kairoo@gmail.com
              </a>
              <a
                href="tel:8077868866"
                className="font-mono text-xs text-[#8A8A8A] hover:text-[#C8FF00] transition-colors"
              >
                +91 8077868866
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
