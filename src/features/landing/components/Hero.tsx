'use client';

import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="relative max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12 pt-10 sm:pt-14 md:pt-20 lg:pt-24 pb-20 md:pb-28 lg:pb-32 overflow-x-hidden">

      {/* Floating Ambient Background Glows */}
      <div
        className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-accent/40 blur-3xl animate-float -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-primary/10 blur-3xl animate-float-delayed -z-10"
        aria-hidden="true"
      />

      {/* Centered Hero Content */}
      <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">

        {/* Proof-based badge instead of empty "next-gen" claim */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-sans text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 animate-fade-in-up">
          <Sparkles className="w-3.5 h-3.5 text-secondary" />
          <span>Trusted by Organizations Campuswide</span>
        </div>

        {/* Headline: names the buyer + concrete modules, not a mission statement */}
        <h1 className="font-serif font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.08] tracking-tight animate-fade-in-up animation-delay-100">
          One Platform to Run Your{" "}
          <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] bg-clip-text text-transparent">
            Entire Campus
          </span>
        </h1>

        {/* Subtitle: concrete capabilities instead of abstract nouns */}
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mt-6 font-medium animate-fade-in-up animation-delay-200">
          VERIS unifies ID &amp; access control, campus-wide alerts, and student
          engagement tools into a single system — built for IT directors who are
          tired of stitching together six different vendors.
        </p>

        {/* CTA Button Group: one high-intent action, one low-commitment action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mt-10 animate-fade-in-up animation-delay-300">
          <Link
            href="/demo"
            className="group relative inline-flex items-center justify-center whitespace-nowrap gap-2 font-medium bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft hover:shadow-float rounded-full px-8 py-4 text-base transition-all duration-300 hover:-translate-y-1 active:translate-y-0 w-full sm:w-auto"
          >
            <span>Book a Demo</span>
            <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/pricing"
            className="inline-flex items-center justify-center whitespace-nowrap font-medium border-2 border-secondary/80 bg-transparent hover:bg-secondary/10 text-secondary rounded-full px-8 py-4 text-base transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto"
          >
            View Pricing
          </Link>
        </div>

        {/* Lightweight trust bar — swap labels for real institution names/logos when available */}
        <div className="w-full mt-25 pt-8 border-t border-border animate-fade-in-up animation-delay-500">
          <p className="text-xs uppercase tracking-widest text-muted-foreground/80 font-semibold mb-4">
            Powering operations at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-muted-foreground/70 font-serif text-lg sm:text-xl">
            <span>Visayas State University</span>
            <span>USSC</span>
            <span>FC-SSC</span>
            <span>CS3</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;