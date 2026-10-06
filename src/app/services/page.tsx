import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services — Kairoo Labs",
  description:
    "Technology built around your ambition. Digital products, AI & automation, launch infrastructure, and AI creative.",
};

const services = [
  {
    id: "digital-products",
    category: "01",
    title: "Digital Products",
    headline: "From first prototype to production.",
    description:
      "We design and build digital products that solve real problems — websites, web applications, SaaS platforms, mobile apps and internal tools.",
    whoItsFor: ["Founders building an MVP", "Startups scaling their product", "Businesses needing a new web presence"],
    deliver: [
      "Product strategy and architecture",
      "UI/UX design",
      "Front-end and back-end development",
      "Database and API design",
      "Testing and quality assurance",
      "Deployment and handoff",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "Tailwind"],
    project: { title: "BiteReel", slug: "bitereel" },
  },
  {
    id: "ai-automation",
    category: "02",
    title: "AI & Automation",
    headline: "Put AI where it actually matters.",
    description:
      "We build AI systems that create real leverage — from intelligent agents and RAG applications to business workflow automation and AI-powered integrations.",
    whoItsFor: [
      "Businesses automating manual processes",
      "Founders building AI products",
      "Teams integrating AI into existing systems",
    ],
    deliver: [
      "AI agent design and development",
      "RAG / knowledge base systems",
      "LLM application development",
      "Voice AI and chatbots",
      "Workflow automation",
      "WhatsApp and messaging automation",
    ],
    technologies: ["OpenAI", "Anthropic", "LangChain", "Pinecone", "Node.js", "Python", "Supabase"],
    project: { title: "WakeUp AI", slug: "wakeup-ai" },
  },
  {
    id: "product-design",
    category: "03",
    title: "Product Design",
    headline: "Technology that feels human.",
    description:
      "Powerful systems should still feel intuitive. We design product experiences that balance function with clarity — from information architecture to pixel-perfect UI.",
    whoItsFor: [
      "Products that need better UX",
      "Founders validating ideas with prototypes",
      "Teams redesigning existing products",
    ],
    deliver: [
      "User research and persona mapping",
      "Information architecture",
      "Wireframing and prototyping",
      "UI design and design systems",
      "Interaction design",
      "Usability testing",
    ],
    technologies: ["Figma", "Framer", "Storybook", "Tailwind"],
    project: { title: "MedFlow Digital", slug: "healthcare-digital-experience" },
  },
  {
    id: "launch",
    category: "04",
    title: "Launch & Infrastructure",
    headline: "Ship with confidence.",
    description:
      "We handle the infrastructure, integrations and tooling required to take products from development into production — and keep them running well.",
    whoItsFor: [
      "Products ready to launch",
      "Teams needing DevOps support",
      "Systems requiring third-party integrations",
    ],
    deliver: [
      "Cloud architecture and deployment",
      "CI/CD pipelines",
      "API design and integration",
      "Payment integration",
      "Analytics and monitoring",
      "Performance and security audits",
    ],
    technologies: ["AWS", "Vercel", "Railway", "Docker", "Stripe", "Cloudflare"],
    project: { title: "Veld Apparel", slug: "apparel-ecommerce" },
  },
  {
    id: "ai-creative",
    category: "05",
    title: "AI Creative & Distribution",
    headline: "Build it. Ship it. Get it seen.",
    description:
      "We use AI to produce high-quality campaign assets, product visuals and launch content — then help distribute them through the right digital channels.",
    whoItsFor: [
      "Marketing teams needing AI assets",
      "Brands launching new products",
      "Campaigns needing faster creative production",
    ],
    deliver: [
      "AI commercials and product videos",
      "Ad creatives and social content",
      "Campaign landing pages",
      "Launch strategy and content",
      "Product visual production",
      "Distribution planning",
    ],
    technologies: ["Runway", "ElevenLabs", "Midjourney", "Next.js", "Framer"],
    project: { title: "Forma Studio", slug: "architecture-studio" },
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#080808] pt-28 md:pt-36">
      {/* Clean Page Header */}
      <div className="mx-auto max-w-7xl px-6 md:px-8 pb-12 md:pb-16 border-b border-[#1f1f1f]">
        <div className="max-w-3xl">
          <span className="font-mono text-xs text-[#C8FF00] tracking-wider uppercase mb-3 block">
            End-To-End Capabilities
          </span>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#F5F5F5] leading-tight mb-6">
            Technology built around{" "}
            <span className="font-medium text-[#C8FF00]">your ambition.</span>
          </h1>
          <p className="max-w-xl text-sm sm:text-base md:text-lg text-[#8A8A8A] font-light leading-relaxed">
            From initial product concept to launch, distribution, and autonomous AI scale — Kairoo
            works across the complete lifecycle.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24 space-y-10">
        {services.map((service) => (
          <div
            key={service.id}
            id={service.id}
            className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 grid grid-cols-1 gap-10 lg:grid-cols-12 items-start"
          >
            {/* Left Header Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[#C8FF00] font-bold">
                  {service.category}
                </span>
                <span className="text-[#333333]">/</span>
                <span className="font-mono text-xs text-[#8A8A8A] tracking-wider uppercase">
                  Capability
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F5F5F5]">
                {service.title}
              </h2>
              <p className="text-sm font-medium text-[#C8FF00]">{service.headline}</p>
              <p className="text-sm text-[#8A8A8A] font-light leading-relaxed">
                {service.description}
              </p>

              <div className="pt-2">
                <Link
                  href={`/work/${service.project.slug}`}
                  className="group inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-[#F5F5F5] hover:text-[#C8FF00] transition-colors"
                >
                  <span>Featured Case Study: {service.project.title}</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Details Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Who it's for */}
              <div className="rounded-2xl border border-white/5 bg-[#141414] p-5">
                <p className="font-mono text-xs text-[#8A8A8A] tracking-wider uppercase mb-3">
                  Target Audience
                </p>
                <ul className="space-y-2">
                  {service.whoItsFor.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-[#F5F5F5] font-light">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#C8FF00] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What we deliver */}
              <div className="rounded-2xl border border-white/5 bg-[#141414] p-5">
                <p className="font-mono text-xs text-[#8A8A8A] tracking-wider uppercase mb-3">
                  Deliverables
                </p>
                <ul className="space-y-2">
                  {service.deliver.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-[#F5F5F5] font-light">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#E8590C] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="sm:col-span-2 rounded-2xl border border-white/5 bg-[#141414] p-5">
                <p className="font-mono text-xs text-[#8A8A8A] tracking-wider uppercase mb-3">
                  Technology Stack &amp; Tooling
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[11px] text-[#F5F5F5]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
