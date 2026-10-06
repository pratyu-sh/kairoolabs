"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/studio", label: "About" },
  { href: "/insights", label: "Insights" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      // On homepage, only show floating sticky nav after scrolling past initial hero
      if (window.scrollY > (isHome ? 120 : 20)) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 py-3.5",
          isHome && !scrolled
            ? "pointer-events-none opacity-0 -translate-y-4"
            : "pointer-events-auto opacity-100 translate-y-0"
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between glass-panel rounded-full px-5 py-2.5 border border-white/10 shadow-2xl">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-1.5 font-display text-lg font-bold tracking-tight text-[#F5F5F5] hover:text-[#C8FF00] transition-colors"
          >
            <span>kairoo</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#C8FF00]" />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6 text-xs font-medium tracking-wide">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors hover:text-[#C8FF00]",
                  pathname === link.href ? "text-[#C8FF00] font-semibold" : "text-[#8A8A8A]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-1.5 rounded-full bg-[#C8FF00] pl-4 pr-1.5 py-1.5 text-xs font-semibold text-[#080808] hover:bg-[#d8ff33] transition-all"
            >
              <span>Start a Project</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#080808] text-[#C8FF00] transition-transform group-hover:rotate-45">
                <ArrowRight size={10} />
              </span>
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-1.5 text-[#8A8A8A] hover:text-[#F5F5F5] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-[#080808] flex flex-col p-6"
          >
            {/* Header row */}
            <div className="flex items-center justify-between pb-6 border-b border-[#222222]">
              <Link
                href="/"
                className="flex items-center gap-1.5 font-display text-xl font-bold tracking-tight text-[#F5F5F5]"
              >
                <span>kairoo</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#C8FF00]" />
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-full border border-[#222222] text-[#8A8A8A] hover:text-[#F5F5F5]"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            {/* Mobile links */}
            <div className="flex flex-col gap-1 mt-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between py-4 text-xl font-display font-medium text-[#F5F5F5] border-b border-[#181818] hover:text-[#C8FF00] transition-colors"
                >
                  {link.label}
                  <span className="text-[#8A8A8A] text-sm">→</span>
                </Link>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="mt-auto pt-6">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full rounded-full bg-[#C8FF00] py-4 text-sm font-semibold text-[#080808]"
              >
                Start a Project →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
