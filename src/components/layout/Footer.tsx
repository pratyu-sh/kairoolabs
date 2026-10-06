"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ArrowUp, Mail, Sparkles, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

// Register ScrollTrigger safely on client
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// -------------------------------------------------------------------------
// 1. THEME-ADAPTIVE INLINE STYLES FOR CINEMATIC REVEAL
// -------------------------------------------------------------------------
const STYLES = `
.cinematic-footer-wrapper {
  -webkit-font-smoothing: antialiased;
  
  --pill-bg-1: color-mix(in oklch, var(--foreground) 4%, transparent);
  --pill-bg-2: color-mix(in oklch, var(--foreground) 1.5%, transparent);
  --pill-shadow: rgba(0, 0, 0, 0.6);
  --pill-highlight: color-mix(in oklch, var(--foreground) 12%, transparent);
  --pill-inset-shadow: rgba(0, 0, 0, 0.8);
  --pill-border: color-mix(in oklch, var(--foreground) 10%, transparent);
  
  --pill-bg-1-hover: color-mix(in oklch, var(--foreground) 10%, transparent);
  --pill-bg-2-hover: color-mix(in oklch, var(--foreground) 4%, transparent);
  --pill-border-hover: #C8FF00;
  --pill-shadow-hover: rgba(200, 255, 0, 0.2);
  --pill-highlight-hover: color-mix(in oklch, var(--foreground) 25%, transparent);
}

@keyframes footer-breathe {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.45; }
  100% { transform: translate(-50%, -50%) scale(1.15); opacity: 0.85; }
}

@keyframes footer-scroll-marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@keyframes footer-heartbeat {
  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 4px rgba(239, 68, 68, 0.4)); }
  15%, 45% { transform: scale(1.22); filter: drop-shadow(0 0 10px rgba(239, 68, 68, 0.8)); }
  30% { transform: scale(1); }
}

.animate-footer-breathe {
  animation: footer-breathe 8s ease-in-out infinite alternate;
}

.animate-footer-scroll-marquee {
  animation: footer-scroll-marquee 35s linear infinite;
}

.animate-footer-heartbeat {
  animation: footer-heartbeat 2s cubic-bezier(0.25, 1, 0.5, 1) infinite;
}

/* Theme-adaptive Grid Background */
.footer-bg-grid {
  background-size: 56px 56px;
  background-image: 
    linear-gradient(to right, rgba(245, 245, 245, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(245, 245, 245, 0.03) 1px, transparent 1px);
  mask-image: linear-gradient(to bottom, transparent, black 25%, black 75%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 25%, black 75%, transparent);
}

/* Theme-adaptive Aurora Glow with Kairoo Lime Accent */
.footer-aurora {
  background: radial-gradient(
    circle at 50% 50%, 
    rgba(200, 255, 0, 0.12) 0%, 
    rgba(200, 255, 0, 0.03) 35%, 
    transparent 70%
  );
}

/* Glass Pill Theming */
.footer-glass-pill {
  background: linear-gradient(145deg, var(--pill-bg-1) 0%, var(--pill-bg-2) 100%);
  box-shadow: 
      0 10px 30px -10px var(--pill-shadow), 
      inset 0 1px 1px var(--pill-highlight), 
      inset 0 -1px 2px var(--pill-inset-shadow);
  border: 1px solid var(--pill-border);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.footer-glass-pill:hover {
  background: linear-gradient(145deg, var(--pill-bg-1-hover) 0%, var(--pill-bg-2-hover) 100%);
  border-color: var(--pill-border-hover);
  box-shadow: 
      0 16px 36px -8px var(--pill-shadow-hover), 
      inset 0 1px 1px var(--pill-highlight-hover);
}

/* Giant Architectural Background Text Masking */
.footer-giant-bg-text {
  font-size: 26vw;
  line-height: 0.72;
  font-weight: 900;
  letter-spacing: -0.06em;
  color: transparent;
  -webkit-text-stroke: 1px rgba(245, 245, 245, 0.045);
  background: linear-gradient(180deg, rgba(245, 245, 245, 0.07) 0%, transparent 65%);
  -webkit-background-clip: text;
  background-clip: text;
}

/* Metallic Text Glow */
.footer-text-glow {
  background: linear-gradient(180deg, #FFFFFF 10%, rgba(245, 245, 245, 0.65) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0px 0px 24px rgba(200, 255, 0, 0.12));
}
`;

// -------------------------------------------------------------------------
// 2. MAGNETIC BUTTON PRIMITIVE
// -------------------------------------------------------------------------
interface MagneticButtonProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
  href?: string;
  target?: string;
  rel?: string;
}

const MagneticButton = React.forwardRef<HTMLElement, MagneticButtonProps>(
  ({ className, children, as = "button", ...props }, forwardedRef) => {
    const Component = (as || "button") as React.ElementType;
    const localRef = useRef<HTMLElement>(null);

    useEffect(() => {
      if (typeof window === "undefined") return;
      const element = localRef.current;
      if (!element) return;

      const ctx = gsap.context(() => {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = element.getBoundingClientRect();
          const h = rect.width / 2;
          const w = rect.height / 2;
          const x = e.clientX - rect.left - h;
          const y = e.clientY - rect.top - w;

          gsap.to(element, {
            x: x * 0.35,
            y: y * 0.35,
            rotationX: -y * 0.1,
            rotationY: x * 0.1,
            scale: 1.04,
            ease: "power2.out",
            duration: 0.35,
          });
        };

        const handleMouseLeave = () => {
          gsap.to(element, {
            x: 0,
            y: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            ease: "elastic.out(1, 0.35)",
            duration: 1.1,
          });
        };

        element.addEventListener("mousemove", handleMouseMove);
        element.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          element.removeEventListener("mousemove", handleMouseMove);
          element.removeEventListener("mouseleave", handleMouseLeave);
        };
      }, element);

      return () => ctx.revert();
    }, []);

    return (
      <Component
        ref={(node: HTMLElement | null) => {
          (localRef as React.MutableRefObject<HTMLElement | null>).current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) (forwardedRef as React.MutableRefObject<HTMLElement | null>).current = node;
        }}
        className={cn("cursor-pointer", className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
MagneticButton.displayName = "MagneticButton";

// -------------------------------------------------------------------------
// 3. STUDIO MARQUEE ITEM
// -------------------------------------------------------------------------
const MarqueeItem = () => (
  <div className="flex items-center space-x-8 md:space-x-12 px-6">
    <span>Autonomous AI Agents</span> <span className="text-[#C8FF00]">✦</span>
    <span>Full-Stack Web &amp; Mobile</span> <span className="text-white/40">✦</span>
    <span>Enterprise Automation</span> <span className="text-[#C8FF00]">✦</span>
    <span>High-Performance Next.js</span> <span className="text-white/40">✦</span>
    <span>Custom RAG &amp; LLM Systems</span> <span className="text-[#C8FF00]">✦</span>
    <span>Cloud Architecture</span> <span className="text-white/40">✦</span>
    <span>Dehradun HQ · Shipped Globally</span> <span className="text-[#C8FF00]">✦</span>
  </div>
);

// -------------------------------------------------------------------------
// 4. MAIN CINEMATIC FOOTER COMPONENT
// -------------------------------------------------------------------------
export function Footer() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const giantTextRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!wrapperRef.current) return;

    const ctx = gsap.context(() => {
      // Background Parallax on giant brand mark
      gsap.fromTo(
        giantTextRef.current,
        { y: "12vh", scale: 0.85, opacity: 0 },
        {
          y: "0vh",
          scale: 1,
          opacity: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 85%",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );

      // Staggered Content Reveal
      gsap.fromTo(
        [headingRef.current, linksRef.current],
        { y: 45, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 50%",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      {/* 
        The "Curtain Reveal" Wrapper:
        It sits in standard document flow. With clip-path, its fixed contents
        are cleanly revealed as the user scrolls past preceding sections.
      */}
      <div
        ref={wrapperRef}
        className="relative h-screen min-h-[640px] md:min-h-[720px] w-full"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <footer className="fixed bottom-0 left-0 flex h-screen min-h-[640px] md:min-h-[720px] w-full flex-col justify-between overflow-hidden bg-[#080808] text-[#F5F5F5] cinematic-footer-wrapper">
          
          {/* Ambient Lighting & Blueprint Grid */}
          <div className="footer-aurora absolute left-1/2 top-1/2 h-[60vh] w-[85vw] -translate-x-1/2 -translate-y-1/2 animate-footer-breathe rounded-[50%] blur-[90px] pointer-events-none z-0" />
          <div className="footer-bg-grid absolute inset-0 z-0 pointer-events-none" />

          {/* Giant background brand watermark */}
          <div
            ref={giantTextRef}
            className="footer-giant-bg-text font-display absolute -bottom-[4vh] left-1/2 -translate-x-1/2 whitespace-nowrap z-0 pointer-events-none select-none"
          >
            KAIROO
          </div>

          {/* 1. Diagonal Sleek Studio Marquee (Top of footer) */}
          <div className="absolute top-8 sm:top-12 left-0 w-full overflow-hidden border-y border-white/10 bg-[#080808]/75 backdrop-blur-md py-3.5 sm:py-4 z-10 -rotate-1 sm:-rotate-2 scale-105 sm:scale-110 shadow-2xl">
            <div className="flex w-max animate-footer-scroll-marquee font-mono text-[11px] sm:text-xs md:text-sm font-medium tracking-[0.22em] text-[#8A8A8A] uppercase">
              <MarqueeItem />
              <MarqueeItem />
            </div>
          </div>

          {/* 2. Main Center Content */}
          <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 mt-16 sm:mt-20 md:mt-16 w-full max-w-5xl mx-auto">
            <div ref={headingRef} className="text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#C8FF00]/30 bg-[#C8FF00]/10 px-4 py-1.5 mb-5">
                <Sparkles size={12} className="text-[#C8FF00]" />
                <span className="font-mono text-[11px] text-[#C8FF00] tracking-wider uppercase">
                  Start Your Next Chapter
                </span>
              </div>
              <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight footer-text-glow leading-[1.05]">
                Ready to build <span className="text-[#C8FF00] font-medium">what&apos;s next?</span>
              </h2>
              <p className="mt-4 max-w-xl mx-auto text-xs sm:text-sm md:text-base text-[#8A8A8A] font-light leading-relaxed">
                We partner with ambitious founders and fast-moving teams to engineer resilient software, intelligent agents, and category-defining digital flagships.
              </p>
            </div>

            {/* Interactive Magnetic Action Pills */}
            <div ref={linksRef} className="flex flex-col items-center gap-5 sm:gap-6 w-full">
              {/* Primary Actions */}
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 w-full">
                <MagneticButton
                  as={Link}
                  href="/contact"
                  className="footer-glass-pill px-7 sm:px-9 py-3.5 sm:py-4 rounded-full text-[#F5F5F5] font-semibold text-xs sm:text-sm md:text-base flex items-center gap-3 group border-[#C8FF00]/30 hover:text-[#C8FF00]"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#C8FF00] text-[#080808] transition-transform duration-300 group-hover:rotate-45">
                    <ArrowRight size={13} />
                  </span>
                  <span>Start a Project</span>
                </MagneticButton>

                <MagneticButton
                  as="a"
                  href="mailto:labs.kairoo@gmail.com"
                  className="footer-glass-pill px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-[#F5F5F5] font-semibold text-xs sm:text-sm md:text-base flex items-center gap-3 group hover:text-[#C8FF00]"
                >
                  <Mail size={16} className="text-[#8A8A8A] group-hover:text-[#C8FF00] transition-colors" />
                  <span>labs.kairoo@gmail.com</span>
                </MagneticButton>

                <MagneticButton
                  as="a"
                  href="tel:8077868866"
                  className="footer-glass-pill px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-[#F5F5F5] font-semibold text-xs sm:text-sm md:text-base flex items-center gap-3 group hover:text-[#C8FF00]"
                >
                  <Phone size={15} className="text-[#8A8A8A] group-hover:text-[#C8FF00] transition-colors" />
                  <span>8077868866</span>
                </MagneticButton>

                <MagneticButton
                  as={Link}
                  href="/work"
                  className="footer-glass-pill px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-[#F5F5F5] font-semibold text-xs sm:text-sm md:text-base flex items-center gap-3 group hover:text-[#C8FF00]"
                >
                  <span>Explore Work</span>
                  <span className="text-xs text-[#8A8A8A] font-mono group-hover:text-[#C8FF00]">→</span>
                </MagneticButton>
              </div>

              {/* Secondary Navigation Matrix */}
              <div className="flex flex-wrap justify-center gap-2.5 sm:gap-4 md:gap-5 w-full mt-1 sm:mt-2">
                <MagneticButton
                  as={Link}
                  href="/services"
                  className="footer-glass-pill px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-[#8A8A8A] font-mono text-[11px] sm:text-xs tracking-wider uppercase hover:text-[#F5F5F5]"
                >
                  Services
                </MagneticButton>

                <MagneticButton
                  as={Link}
                  href="/work"
                  className="footer-glass-pill px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-[#8A8A8A] font-mono text-[11px] sm:text-xs tracking-wider uppercase hover:text-[#F5F5F5]"
                >
                  Selected Work
                </MagneticButton>

                <MagneticButton
                  as={Link}
                  href="/studio"
                  className="footer-glass-pill px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-[#8A8A8A] font-mono text-[11px] sm:text-xs tracking-wider uppercase hover:text-[#F5F5F5]"
                >
                  Studio &amp; HQ
                </MagneticButton>

                <MagneticButton
                  as={Link}
                  href="/insights"
                  className="footer-glass-pill px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-[#8A8A8A] font-mono text-[11px] sm:text-xs tracking-wider uppercase hover:text-[#F5F5F5]"
                >
                  Insights
                </MagneticButton>

                <MagneticButton
                  as={Link}
                  href="/contact"
                  className="footer-glass-pill px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-[#8A8A8A] font-mono text-[11px] sm:text-xs tracking-wider uppercase hover:text-[#F5F5F5]"
                >
                  Dehradun · India
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* 3. Bottom Bar / Credits & Back to Top */}
          <div className="relative z-20 w-full pb-6 sm:pb-8 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 border-t border-white/5 bg-[#080808]/40 backdrop-blur-sm">
            
            {/* Copyright */}
            <div className="text-[#8A8A8A] text-[10px] sm:text-xs font-mono tracking-wider uppercase order-2 md:order-1 text-center md:text-left">
              © 2026 Kairoo Labs. All rights reserved.
            </div>

            {/* "Crafted with Love" Badge */}
            <div className="footer-glass-pill px-5 sm:px-6 py-2.5 sm:py-3 rounded-full flex items-center gap-2 order-1 md:order-2 cursor-default border-white/10">
              <span className="text-[#8A8A8A] text-[10px] sm:text-xs font-mono uppercase tracking-wider">
                Crafted with
              </span>
              <span className="animate-footer-heartbeat text-sm md:text-base text-red-500">
                ❤
              </span>
              <span className="text-[#8A8A8A] text-[10px] sm:text-xs font-mono uppercase tracking-wider">
                by
              </span>
              <span className="text-[#F5F5F5] font-display font-bold text-xs sm:text-sm tracking-tight ml-0.5">
                Kairoo Labs
              </span>
            </div>

            {/* Magnetic Back to top */}
            <MagneticButton
              as="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full footer-glass-pill flex items-center justify-center text-[#8A8A8A] hover:text-[#C8FF00] hover:border-[#C8FF00] group order-3"
            >
              <ArrowUp size={16} className="transform group-hover:-translate-y-1 transition-transform duration-300" />
            </MagneticButton>

          </div>
        </footer>
      </div>
    </>
  );
}
