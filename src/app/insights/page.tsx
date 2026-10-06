import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights — Kairoo Labs",
  description: "Thinking on AI, product development, automation, and building in public from Kairoo Labs.",
};

const upcomingArticles = [
  {
    title: "AI in real products — what actually works in production",
    category: "AI Architecture",
    readTime: "6 min read",
  },
  {
    title: "How to scope an MVP without over-building or tech debt",
    category: "Product Strategy",
    readTime: "8 min read",
  },
  {
    title: "Distribution is a product decision, not just marketing",
    category: "Growth & Creative",
    readTime: "5 min read",
  },
  {
    title: "The modern AI & automation stack we recommend in 2026",
    category: "Engineering",
    readTime: "7 min read",
  },
];

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-[#080808] pt-28 md:pt-36">
      {/* Clean Page Header */}
      <div className="mx-auto max-w-7xl px-6 md:px-8 pb-12 md:pb-16 border-b border-[#1f1f1f]">
        <div className="max-w-3xl">
          <span className="font-mono text-xs text-[#C8FF00] tracking-wider uppercase mb-3 block">
            Studio Perspectives
          </span>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#F5F5F5] leading-tight mb-6">
            Thinking <span className="font-medium text-[#C8FF00]">out loud.</span>
          </h1>
          <p className="max-w-xl text-sm sm:text-base md:text-lg text-[#8A8A8A] font-light leading-relaxed">
            Writing on AI systems, product engineering, workflow automation, and building in public.
          </p>
        </div>
      </div>

      {/* Publications In Progress Grid */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <div className="glass-panel rounded-3xl p-8 sm:p-14 border border-white/10 max-w-4xl mx-auto text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#C8FF00]/10 border border-[#C8FF00]/30 text-[#C8FF00]">
            <BookOpen size={24} />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-normal text-[#F5F5F5] mb-4">
            Curated Publications In Progress
          </h2>
          <p className="text-sm text-[#8A8A8A] font-light max-w-lg mx-auto mb-10 leading-relaxed">
            We only publish in-depth technical breakdowns and real case learnings. Here is what our engineering and product team are writing next:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-10">
            {upcomingArticles.map((article, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl border border-white/5 bg-[#141414] hover:border-[#C8FF00]/30 transition-colors"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-[11px] text-[#C8FF00] uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span className="font-mono text-[10px] text-[#555555]">
                    {article.readTime}
                  </span>
                </div>
                <h3 className="font-display text-base font-semibold text-[#F5F5F5] leading-snug">
                  {article.title}
                </h3>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#C8FF00] px-7 py-3.5 text-xs sm:text-sm font-semibold text-[#080808] hover:bg-[#d8ff33] transition-all"
          >
            <span>Start a Project Instead</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
