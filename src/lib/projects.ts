export interface Project {
  slug: string;
  title: string;
  category: string;
  industry: string;
  shortDescription: string;
  description: string;
  challenge: string;
  approach: string;
  solution: string;
  services: string[];
  technology: string[];
  results: string[];
  featured: boolean;
  color: string;
  gradient: string;
  liveUrl?: string;
  image: string;
}

export const projects: Project[] = [
  {
    slug: "bag-boutique-delhi",
    title: "Bag Boutique Delhi",
    category: "E-commerce / Luxury Fashion",
    industry: "Luxury Retail & Fashion",
    shortDescription:
      "A luxury e-commerce and bridal handbag boutique platform for Karol Bagh, New Delhi's premier designer accessories brand.",
    description:
      "We designed and engineered an editorial-grade, high-conversion e-commerce flagship for Bag Boutique — Karol Bagh, New Delhi's top-rated destination for couture bridal bags, party clutches, and designer accessories.",
    challenge:
      "With a high-volume physical showroom in Karol Bagh, New Delhi and 286+ 4.6★ reviews, the brand had strong local reputation but needed an elevated online presence to serve modern shoppers and convert high-ticket bridal inquiries across India without friction.",
    approach:
      "We took inspiration from global luxury fashion houses: refined typography, fluid micro-interactions, curated occasion-based collections (Bridal, Party, Everyday), and seamless WhatsApp VIP concierge integration for bespoke bridal requests.",
    solution:
      "A lightning-fast Next.js digital flagship with responsive product catalogs, high-resolution product showcases, search & filtering, wishlist capability, and instant WhatsApp ordering channels tailored for Indian luxury shoppers.",
    services: ["E-commerce", "UX/UI Design", "Next.js Development", "Brand Strategy"],
    technology: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    results: [
      "Sub-second page load times with Next.js image optimization",
      "Seamless bridal shopping journey with direct WhatsApp concierge",
      "Editorial digital presence reflecting their 4.6★ Delhi boutique reputation",
      "Mobile-first design capturing high-intent bridal and evening wear traffic",
    ],
    featured: true,
    color: "#D4AF37",
    gradient: "from-amber-950/40 via-stone-900/40 to-neutral-900/30",
    liveUrl: "https://bag-botique.vercel.app/",
    image: "/images/projects/bag-boutique.jpg",
  },
  {
    slug: "healthcare-digital-experience",
    title: "MedFlow Digital",
    category: "Healthcare / Digital Experience",
    industry: "Healthcare",
    shortDescription:
      "A modern digital experience for a multi-specialty healthcare practice, built to convert visitors into patients.",
    description:
      "We redesigned and rebuilt the complete digital experience for a growing healthcare business — transforming their online presence into a lead generation engine.",
    challenge:
      "The client had an outdated website that failed to communicate trust, made appointment booking cumbersome, and had poor mobile performance — resulting in high bounce rates and lost patient inquiries.",
    approach:
      "We began with a deep audit of user journeys, competitor benchmarks, and patient intent research. We designed a new information architecture that put patient needs first, with clear pathways to services and a low-friction booking experience.",
    solution:
      "A fully custom Next.js website with smooth scroll interactions, service-specific landing pages, an integrated appointment inquiry system, and a lead generation flow optimised for conversion. We also created a lightweight content system so the team can update content without a developer.",
    services: ["Website", "UX", "Development", "Lead Generation"],
    technology: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Resend"],
    results: [
      "Significant improvement in appointment inquiry rate",
      "Dramatically reduced page load time",
      "Strong mobile performance improvement",
      "Improved search visibility for local healthcare queries",
    ],
    featured: true,
    color: "#4ECDC4",
    gradient: "from-teal-900/30 to-cyan-900/20",
    image: "/images/projects/healthcare.jpg",
  },
  {
    slug: "architecture-studio",
    title: "Archotech Studio",
    category: "Architecture / Digital Experience",
    industry: "Architecture & Design",
    shortDescription:
      "A cinematic, award-winning portfolio for Archotech & Associates, built to showcase luxury residential and commercial spaces.",
    description:
      "A visually immersive, cinematic digital portfolio for Archotech & Associates — designed to reflect the architectural precision, thought, and purpose of their built environments.",
    challenge:
      "Archotech required a digital experience that matched the caliber of their award-winning architectural commissions: editorial, immersive, and deeply cinematic, transcending standard grid templates.",
    approach:
      "We treated the web experience as an architectural extension — full-bleed spatial imagery, minimalist typography, refined motion curves, and fluid transitions that let the structural craftsmanship take center stage.",
    solution:
      "A bespoke high-performance web experience featuring smooth scroll dynamics, cinematic project showcases, high-fidelity gallery viewports, and rapid inquiry routing for luxury residential and commercial clients.",
    services: ["Web Design", "Visual Storytelling", "Front-End Engineering", "Brand Direction"],
    technology: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    results: [
      "Cinematic digital showcase reflecting award-winning architectural commissions",
      "Sub-second asset streaming for ultra-high-resolution project photography",
      "International luxury residential and commercial inquiry growth",
      "Featured as a benchmark portfolio in modern architectural web design",
    ],
    featured: true,
    color: "#E8D5B7",
    gradient: "from-amber-900/30 to-stone-900/20",
    liveUrl: "https://archotech.vercel.app/",
    image: "/images/projects/architecture.jpg",
  },
  {
    slug: "apparel-ecommerce",
    title: "Veld Apparel",
    category: "E-commerce / Fashion",
    industry: "Fashion",
    shortDescription:
      "A conversion-focused e-commerce experience for an independent fashion label with a distinct visual identity.",
    description:
      "End-to-end e-commerce design and development for an independent apparel brand — built for conversion, built to feel premium.",
    challenge:
      "The brand had strong product and visual identity but a generic Shopify template that undercut their premium positioning and delivered poor conversion rates.",
    approach:
      "We audited the full purchase journey, identified conversion friction points, and redesigned the experience from the landing page through to checkout — with the brand's visual language built in throughout.",
    solution:
      "A custom Next.js e-commerce frontend with full Shopify integration, product configurators, an optimised checkout flow, size guides, UGC integration, and campaign-specific landing pages.",
    services: ["Website", "E-commerce", "UX", "Conversion"],
    technology: ["Next.js", "TypeScript", "Shopify Storefront API", "Tailwind CSS", "Framer Motion"],
    results: [
      "Material increase in add-to-cart conversion",
      "Reduced cart abandonment",
      "Increased average order value",
      "Improved mobile shopping experience",
    ],
    featured: true,
    color: "#F4A261",
    gradient: "from-orange-900/30 to-rose-900/20",
    image: "/images/projects/apparel.jpg",
  },
  {
    slug: "wakeup-ai",
    title: "WakeUp AI",
    category: "AI / Mobile Product",
    industry: "Productivity / AI",
    shortDescription:
      "An AI-powered morning productivity companion — built from product strategy to shipped mobile application.",
    description:
      "We took WakeUp AI from early product concept to a shipped mobile application — handling product strategy, design, AI integration, and development.",
    challenge:
      "The founder had a clear vision for an AI morning routine product but no technical team and needed to validate the concept quickly before pursuing investment.",
    approach:
      "We ran a rapid product strategy sprint to define the core experience, then moved into design and development in parallel — prioritising the AI core loop and getting to a testable prototype as fast as possible.",
    solution:
      "A React Native mobile application with a custom AI conversation layer, personalised wake routines, voice interaction, and smart daily briefing — all built around a proprietary AI workflow we designed and implemented.",
    services: ["Product Design", "AI", "Mobile Development", "Product Strategy"],
    technology: ["React Native", "TypeScript", "OpenAI API", "Node.js", "Supabase", "Expo"],
    results: [
      "MVP shipped in under 8 weeks",
      "Secured early user base for validation",
      "Foundation for seed round conversations",
      "Core AI loop performing to spec",
    ],
    featured: true,
    color: "#7C3AED",
    gradient: "from-violet-900/30 to-purple-900/20",
    image: "/images/projects/ai-product.jpg",
  },
  {
    slug: "bitereel",
    title: "BiteReel",
    category: "Food / Social Product",
    industry: "Food & Social",
    shortDescription:
      "A social food discovery platform — where people find and share great places to eat through short-form video.",
    description:
      "BiteReel is a full-stack social product for food discovery — built with a focus on media performance, engagement loops, and a seamless creator experience.",
    challenge:
      "The founding team had product clarity but needed an engineering partner to design the architecture and build the platform from the ground up — including real-time media handling, authentication, and recommendation logic.",
    approach:
      "We designed the full data architecture before writing a line of code — ensuring the media pipeline, social graph, and recommendation system were built to scale. Then we moved fast on development while maintaining code quality.",
    solution:
      "A full-stack social platform built with React, Node.js, and MongoDB — featuring short-form video upload and streaming, social follow/discovery graphs, location-based restaurant data, user authentication, and a basic recommendation feed.",
    services: ["Product Design", "React", "Node.js", "MongoDB", "Authentication", "Media"],
    technology: ["React", "Node.js", "MongoDB", "TypeScript", "AWS S3", "Cloudfront", "JWT", "FFmpeg"],
    results: [
      "Full platform shipped for beta launch",
      "Media pipeline handling video processing at scale",
      "Solid architecture ready for user growth",
      "Creator onboarding flow with strong completion rate",
    ],
    featured: false,
    color: "#EF4444",
    gradient: "from-red-900/30 to-orange-900/20",
    image: "/images/projects/food-social.jpg",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(
    (p) =>
      p.slug === slug ||
      (p.slug === "bag-boutique-delhi" && slug === "bag-boutique") ||
      (p.slug === "architecture-studio" && slug === "archotech")
  );
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
