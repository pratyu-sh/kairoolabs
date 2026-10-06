import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { getProjectBySlug, projects } from "@/lib/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const staticSlugs = projects.map((p) => ({ slug: p.slug }));
  staticSlugs.push({ slug: "bag-boutique" });
  staticSlugs.push({ slug: "archotech" });
  return staticSlugs;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Work — Kairoo Labs" };
  return {
    title: `${project.title} — Kairoo Labs`,
    description: project.shortDescription,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex(
    (p) =>
      p.slug === slug ||
      (p.slug === "bag-boutique-delhi" && slug === "bag-boutique") ||
      (p.slug === "architecture-studio" && slug === "archotech")
  );
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="min-h-screen bg-[#080808] pt-28 md:pt-36">
      {/* Clean Header */}
      <div className="mx-auto max-w-7xl px-6 md:px-8 pb-12 md:pb-16 border-b border-[#1f1f1f]">
        {/* Back Link & Live Link */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#8A8A8A] hover:text-[#C8FF00] transition-colors"
          >
            <ArrowLeft size={12} />
            <span>Back to All Work</span>
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-400 transition-all"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Live Website</span>
              <ExternalLink size={12} />
            </a>
          )}
        </div>

        <div className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="font-mono text-xs text-[#C8FF00] tracking-wider uppercase">
              {project.industry}
            </span>
            <span className="text-[#333333]">·</span>
            <span className="font-mono text-xs text-[#8A8A8A] tracking-wider uppercase">
              {project.category}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#F5F5F5] leading-tight mb-6">
            {project.description}
          </h1>

          {/* Service Tags */}
          <div className="flex flex-wrap gap-2">
            {project.services.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs font-mono text-[#F5F5F5]"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Visual Showcase Card with High-Res Project Image */}
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-8">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-3xl h-[45vh] sm:h-[55vh] md:h-[65vh] border border-[#222222] bg-[#111111] overflow-hidden shadow-2xl block hover:border-[#C8FF00]/40 transition-all duration-500"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/30" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
              <span className="font-mono text-xs font-semibold tracking-widest text-white flex items-center gap-2 rounded-full border border-white/20 bg-black/75 px-6 py-3 shadow-2xl">
                <span>VISIT LIVE WEBSITE</span>
                <ExternalLink size={14} className="text-[#C8FF00]" />
              </span>
            </div>
          </a>
        ) : (
          <div className="relative rounded-3xl h-[45vh] sm:h-[55vh] md:h-[65vh] border border-[#222222] bg-[#111111] overflow-hidden shadow-2xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
          </div>
        )}
      </div>

      {/* Case Study Content Grid */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Sticky Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 glass-panel rounded-3xl p-7 border border-white/10 space-y-8">
              <div>
                <p className="font-mono text-xs text-[#8A8A8A] tracking-wider uppercase mb-2">
                  Project
                </p>
                <p className="font-display text-2xl font-bold text-[#F5F5F5]">
                  {project.title}
                </p>
                <p className="text-xs text-[#8A8A8A] mt-1">{project.category}</p>
              </div>

              <div>
                <p className="font-mono text-xs text-[#8A8A8A] tracking-wider uppercase mb-3">
                  Technology Stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technology.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-[#F5F5F5] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-2 w-full rounded-full border border-emerald-500/30 bg-emerald-500/10 py-3 text-xs sm:text-sm font-semibold text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-400 transition-all"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                )}
                <Link
                  href="/contact"
                  className="group flex items-center justify-center gap-2 w-full rounded-full bg-[#C8FF00] py-3 text-xs sm:text-sm font-semibold text-[#080808] hover:bg-[#d8ff33] transition-all"
                >
                  <span>Build A Similar Product</span>
                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Main Content */}
          <div className="lg:col-span-8 space-y-14">
            {/* Overview */}
            <section className="glass-panel rounded-3xl p-8 sm:p-10 border border-white/10">
              <span className="font-mono text-xs text-[#C8FF00] tracking-wider uppercase mb-3 block">
                Overview
              </span>
              <p className="font-display text-xl sm:text-2xl font-normal text-[#F5F5F5] leading-relaxed">
                {project.shortDescription}
              </p>
            </section>

            {/* Challenge */}
            <section className="space-y-3">
              <span className="font-mono text-xs text-[#8A8A8A] tracking-wider uppercase block">
                The Challenge
              </span>
              <p className="text-sm sm:text-base text-[#8A8A8A] font-light leading-relaxed">
                {project.challenge}
              </p>
            </section>

            {/* Approach */}
            <section className="space-y-3">
              <span className="font-mono text-xs text-[#8A8A8A] tracking-wider uppercase block">
                Engineering Approach
              </span>
              <p className="text-sm sm:text-base text-[#8A8A8A] font-light leading-relaxed">
                {project.approach}
              </p>
            </section>

            {/* Solution */}
            <section className="space-y-3">
              <span className="font-mono text-xs text-[#8A8A8A] tracking-wider uppercase block">
                The Shipped Solution
              </span>
              <p className="text-sm sm:text-base text-[#8A8A8A] font-light leading-relaxed">
                {project.solution}
              </p>
            </section>

            {/* Outcomes */}
            {project.results.length > 0 && (
              <section className="glass-panel rounded-3xl p-8 sm:p-10 border border-white/10">
                <span className="font-mono text-xs text-[#C8FF00] tracking-wider uppercase mb-6 block">
                  Measurable Impact &amp; Results
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.results.map((result, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 rounded-2xl border border-white/5 bg-[#141414]"
                    >
                      <CheckCircle2 size={18} className="text-[#C8FF00] shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-[#F5F5F5] font-light leading-relaxed">
                        {result}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>

      {/* Next Project Footer Bar */}
      <div className="mx-auto max-w-7xl px-6 pb-20 md:px-8">
        <Link
          href={`/work/${nextProject.slug}`}
          className="group block rounded-3xl border border-[#222222] bg-[#111111] p-8 sm:p-10 hover:border-[#C8FF00]/40 transition-all duration-300"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="font-mono text-xs text-[#8A8A8A] tracking-wider uppercase mb-2">
                Next Case Study
              </p>
              <h3 className="font-display text-2xl sm:text-4xl font-normal text-[#F5F5F5] group-hover:text-[#C8FF00] transition-colors">
                {nextProject.title}
              </h3>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-white/10 text-[#F5F5F5] group-hover:bg-[#C8FF00] group-hover:text-[#080808] transition-all">
              <ArrowRight size={20} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
