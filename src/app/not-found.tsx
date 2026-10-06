import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#080808] flex items-center justify-center p-6">
      <div className="glass-panel rounded-3xl p-10 sm:p-14 border border-white/10 text-center max-w-lg shadow-2xl">
        <span className="inline-block font-mono text-xs text-[#C8FF00] tracking-widest uppercase mb-4 px-3 py-1 rounded-full border border-[#C8FF00]/30 bg-[#C8FF00]/10">
          404 Error
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-normal text-[#F5F5F5] mb-4">
          Nothing here.
        </h1>
        <p className="text-sm sm:text-base text-[#8A8A8A] font-light leading-relaxed mb-8">
          This page doesn&apos;t exist — but we&apos;d love to build something that does.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-xs sm:text-sm font-medium text-[#F5F5F5] hover:border-[#C8FF00] hover:text-[#C8FF00] transition-all"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#C8FF00] px-7 py-3 text-xs sm:text-sm font-semibold text-[#080808] hover:bg-[#d8ff33] transition-all"
          >
            <span>Start a Project</span>
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
