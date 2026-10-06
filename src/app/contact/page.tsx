"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Check, Phone, Mail, MapPin } from "lucide-react";
import { submitProjectInquiry, type FormData } from "./actions";

const PROJECT_TYPES = [
  "Website",
  "Web App",
  "Mobile App",
  "AI Product",
  "AI Automation",
  "E-commerce",
  "AI Creative",
  "Something Else",
];

const BUDGETS = [
  "₹50K – ₹1L",
  "₹1L – ₹3L",
  "₹3L – ₹5L",
  "₹5L+",
  "Not sure yet",
];

const TIMELINES = [
  "Immediately",
  "Within 1 month",
  "1–3 months",
  "3+ months",
  "Just exploring",
];

const TOTAL_STEPS = 5;

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState<FormData>({
    projectType: "",
    description: "",
    budget: "",
    timeline: "",
    name: "",
    email: "",
    company: "",
  });

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await submitProjectInquiry(form);
      if (result.success) {
        setSubmitted(true);
      } else {
        setError(result.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const canNext = () => {
    if (step === 1) return !!form.projectType;
    if (step === 2) return form.description.length >= 10;
    if (step === 3) return !!form.budget;
    if (step === 4) return !!form.timeline;
    if (step === 5) return !!form.name && !!form.email;
    return true;
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#080808] flex items-center justify-center p-6">
        <div className="max-w-xl mx-auto glass-panel rounded-3xl p-10 sm:p-14 border border-white/10 text-center shadow-2xl">
          <div className="mx-auto mb-6 h-16 w-16 rounded-full border border-[#C8FF00]/40 bg-[#C8FF00]/10 flex items-center justify-center">
            <Check size={28} className="text-[#C8FF00]" />
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-normal text-[#F5F5F5] mb-3">
            We&apos;ve got it.
          </h1>
          <p className="text-sm sm:text-base text-[#8A8A8A] font-light leading-relaxed mb-8">
            Thanks for reaching out. We&apos;ll review your project requirements and get back to you with a roadmap shortly.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-[#C8FF00] px-7 py-3 text-xs sm:text-sm font-semibold text-[#080808] hover:bg-[#d8ff33] transition-all"
          >
            Back to Kairoo
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080808] pt-28 md:pt-36">
      {/* Clean Page Header */}
      <div className="mx-auto max-w-7xl px-6 md:px-8 pb-12 md:pb-16 border-b border-[#1f1f1f]">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <span className="font-mono text-xs text-[#C8FF00] tracking-wider uppercase mb-3 block">
              Initiate Project
            </span>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#F5F5F5] leading-tight mb-4">
              Have something <span className="font-medium text-[#C8FF00]">worth building?</span>
            </h1>
            <p className="max-w-xl text-sm sm:text-base md:text-lg text-[#8A8A8A] font-light leading-relaxed">
              Tell us what you&apos;re working on via the brief below, or connect with our engineering team directly.
            </p>
          </div>

          {/* Quick Direct Actions in Header */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
            <a
              href="tel:8077868866"
              className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-[#141414] px-5 py-3 text-xs sm:text-sm font-mono text-[#F5F5F5] hover:border-[#C8FF00] hover:text-[#C8FF00] transition-all shadow-md"
            >
              <Phone size={14} className="text-[#C8FF00]" />
              <span>8077868866</span>
            </a>

            <a
              href="mailto:labs.kairoo@gmail.com"
              className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-[#141414] px-5 py-3 text-xs sm:text-sm font-mono text-[#F5F5F5] hover:border-[#C8FF00] hover:text-[#C8FF00] transition-all shadow-md"
            >
              <Mail size={14} className="text-[#C8FF00]" />
              <span>labs.kairoo@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Direct Contact Channels Cards */}
      <div className="mx-auto max-w-7xl px-6 pt-12 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card 1: Direct Phone / WhatsApp */}
          <a
            href="tel:8077868866"
            className="group rounded-3xl border border-[#222222] bg-[#111111] p-6 hover:border-[#C8FF00]/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#C8FF00]/10 border border-[#C8FF00]/25 text-[#C8FF00]">
                  <Phone size={18} />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                  Direct Line
                </span>
              </div>
              <p className="font-mono text-xs uppercase tracking-wider text-[#8A8A8A] mb-1">
                Call / WhatsApp
              </p>
              <p className="font-display text-xl sm:text-2xl font-bold text-[#F5F5F5] group-hover:text-[#C8FF00] transition-colors">
                8077868866
              </p>
            </div>
            <p className="text-xs text-[#8A8A8A] mt-3 font-light">
              Direct line to studio leadership for instant consultation and inquiries.
            </p>
          </a>

          {/* Card 2: Email */}
          <a
            href="mailto:labs.kairoo@gmail.com"
            className="group rounded-3xl border border-[#222222] bg-[#111111] p-6 hover:border-[#C8FF00]/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#C8FF00]/10 border border-[#C8FF00]/25 text-[#C8FF00]">
                  <Mail size={18} />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#C8FF00] bg-[#C8FF00]/10 border border-[#C8FF00]/20 px-2.5 py-1 rounded-full">
                  Email Brief
                </span>
              </div>
              <p className="font-mono text-xs uppercase tracking-wider text-[#8A8A8A] mb-1">
                General Inquiries &amp; RFPs
              </p>
              <p className="font-display text-lg sm:text-xl font-bold text-[#F5F5F5] group-hover:text-[#C8FF00] transition-colors break-all">
                labs.kairoo@gmail.com
              </p>
            </div>
            <p className="text-xs text-[#8A8A8A] mt-3 font-light">
              Send us project briefs, RFPs, or NDA requests. We reply within 24 hours.
            </p>
          </a>

          {/* Card 3: Studio Base */}
          <div className="rounded-3xl border border-[#222222] bg-[#111111] p-6 sm:col-span-2 lg:col-span-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-[#F5F5F5]">
                  <MapPin size={18} />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#8A8A8A] bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                  Global Remote
                </span>
              </div>
              <p className="font-mono text-xs uppercase tracking-wider text-[#8A8A8A] mb-1">
                Studio Base
              </p>
              <p className="font-display text-xl sm:text-2xl font-bold text-[#F5F5F5]">
                Dehradun, India
              </p>
            </div>
            <p className="text-xs text-[#8A8A8A] mt-3 font-light">
              Collaborating with founders and teams across IST, GMT, and US timezones.
            </p>
          </div>
        </div>
      </div>

      {/* Multi-Step Form Container */}
      <div className="mx-auto max-w-4xl px-6 py-16 md:px-8 md:py-24">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 md:p-14 border border-white/10 shadow-2xl">
          {/* Progress Indicator */}
          <div className="flex items-center justify-between gap-4 mb-10 pb-6 border-b border-white/5">
            <div className="flex items-center gap-2">
              {Array.from({ length: TOTAL_STEPS }, (_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i < step ? "bg-[#C8FF00]" : "bg-white/10"
                  } ${i === step - 1 ? "w-10 sm:w-14" : "w-4 sm:w-6"}`}
                />
              ))}
            </div>
            <span className="font-mono text-xs text-[#C8FF00] tracking-wider uppercase font-semibold">
              Step {step} of {TOTAL_STEPS}
            </span>
          </div>

          {/* Step 1 — Project Type */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <span className="font-mono text-xs text-[#8A8A8A] tracking-wider uppercase block mb-1">
                  Scope Discovery
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-normal text-[#F5F5F5]">
                  What are you looking to build?
                </h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {PROJECT_TYPES.map((type) => {
                  const isSelected = form.projectType === type;
                  return (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setForm((f) => ({ ...f, projectType: type }))}
                      className={`rounded-2xl border p-4 text-left transition-all duration-200 ${
                        isSelected
                          ? "border-[#C8FF00] bg-[#C8FF00]/10 text-[#C8FF00] shadow-[0_0_20px_rgba(200,255,0,0.15)] font-semibold"
                          : "border-white/10 bg-white/[0.03] text-[#8A8A8A] hover:border-white/20 hover:text-[#F5F5F5]"
                      }`}
                    >
                      <span className="text-xs sm:text-sm">{type}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 2 — Description */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <span className="font-mono text-xs text-[#8A8A8A] tracking-wider uppercase block mb-1">
                  Project Brief
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-normal text-[#F5F5F5]">
                  Tell us about your project.
                </h2>
                <p className="text-xs sm:text-sm text-[#8A8A8A] font-light mt-1">
                  What is the concept? Who is it for? What core problem does it solve?
                </p>
              </div>
              <textarea
                value={form.description}
                onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                rows={5}
                placeholder="Briefly describe your idea, goals, or systems you want to automate..."
                className="w-full rounded-2xl border border-white/10 bg-[#141414] p-5 text-sm sm:text-base text-[#F5F5F5] placeholder-[#555555] font-light leading-relaxed resize-none focus:border-[#C8FF00]/60 focus:outline-none transition-colors"
              />
              <p className="font-mono text-[11px] text-[#555555]">
                {form.description.length} characters (minimum 10)
              </p>
            </div>
          )}

          {/* Step 3 — Budget */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <span className="font-mono text-xs text-[#8A8A8A] tracking-wider uppercase block mb-1">
                  Investment
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-normal text-[#F5F5F5]">
                  What&apos;s your approximate budget?
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {BUDGETS.map((budget) => {
                  const isSelected = form.budget === budget;
                  return (
                    <button
                      key={budget}
                      type="button"
                      onClick={() => setForm((f) => ({ ...f, budget }))}
                      className={`rounded-2xl border p-4 text-left transition-all duration-200 ${
                        isSelected
                          ? "border-[#C8FF00] bg-[#C8FF00]/10 text-[#C8FF00] shadow-[0_0_20px_rgba(200,255,0,0.15)] font-semibold"
                          : "border-white/10 bg-white/[0.03] text-[#8A8A8A] hover:border-white/20 hover:text-[#F5F5F5]"
                      }`}
                    >
                      <span className="text-sm">{budget}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 4 — Timeline */}
          {step === 4 && (
            <div className="space-y-6">
              <div>
                <span className="font-mono text-xs text-[#8A8A8A] tracking-wider uppercase block mb-1">
                  Schedule
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-normal text-[#F5F5F5]">
                  When are you looking to start?
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {TIMELINES.map((timeline) => {
                  const isSelected = form.timeline === timeline;
                  return (
                    <button
                      key={timeline}
                      type="button"
                      onClick={() => setForm((f) => ({ ...f, timeline }))}
                      className={`rounded-2xl border p-4 text-left transition-all duration-200 ${
                        isSelected
                          ? "border-[#C8FF00] bg-[#C8FF00]/10 text-[#C8FF00] shadow-[0_0_20px_rgba(200,255,0,0.15)] font-semibold"
                          : "border-white/10 bg-white/[0.03] text-[#8A8A8A] hover:border-white/20 hover:text-[#F5F5F5]"
                      }`}
                    >
                      <span className="text-sm">{timeline}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 5 — Contact Info */}
          {step === 5 && (
            <div className="space-y-6">
              <div>
                <span className="font-mono text-xs text-[#8A8A8A] tracking-wider uppercase block mb-1">
                  Final Step
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-normal text-[#F5F5F5]">
                  How can we reach you?
                </h2>
              </div>
              <div className="space-y-4 pt-2">
                <div>
                  <label className="block font-mono text-xs text-[#8A8A8A] tracking-wider uppercase mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder="e.g. Alex Morgan"
                    className="w-full rounded-2xl border border-white/10 bg-[#141414] px-5 py-3.5 text-sm text-[#F5F5F5] placeholder-[#555555] focus:border-[#C8FF00]/60 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-[#8A8A8A] tracking-wider uppercase mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    placeholder="alex@company.com"
                    className="w-full rounded-2xl border border-white/10 bg-[#141414] px-5 py-3.5 text-sm text-[#F5F5F5] placeholder-[#555555] focus:border-[#C8FF00]/60 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-[#8A8A8A] tracking-wider uppercase mb-1.5">
                    Company / Organization (Optional)
                  </label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                    placeholder="Company name"
                    className="w-full rounded-2xl border border-white/10 bg-[#141414] px-5 py-3.5 text-sm text-[#F5F5F5] placeholder-[#555555] focus:border-[#C8FF00]/60 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {error && <p className="text-xs text-rose-400">{error}</p>}
            </div>
          )}

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-10 mt-10 border-t border-white/5">
            <button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              disabled={step === 1}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-[#8A8A8A] hover:text-[#F5F5F5] transition-colors disabled:opacity-20 disabled:pointer-events-none"
            >
              <ArrowLeft size={14} />
              <span>Previous</span>
            </button>

            {step < TOTAL_STEPS ? (
              <button
                type="button"
                onClick={() => setStep((s) => s + 1)}
                disabled={!canNext()}
                className="inline-flex items-center gap-2 rounded-full bg-[#C8FF00] px-7 py-3 text-xs sm:text-sm font-semibold text-[#080808] hover:bg-[#d8ff33] transition-all disabled:opacity-30 disabled:pointer-events-none"
              >
                <span>Continue</span>
                <ArrowRight size={14} />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!canNext() || loading}
                className="inline-flex items-center gap-2 rounded-full bg-[#C8FF00] px-7 py-3 text-xs sm:text-sm font-semibold text-[#080808] hover:bg-[#d8ff33] transition-all disabled:opacity-40 disabled:pointer-events-none"
              >
                <span>{loading ? "Sending..." : "Send Project Inquiry"}</span>
                <ArrowRight size={14} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
