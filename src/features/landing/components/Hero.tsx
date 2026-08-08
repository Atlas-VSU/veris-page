'use client';

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const partners = [
  { name: "USSC", src: "/USSC-LOGO.png" },
  { name: "FC-SSC", src: "/FC-SSC-Logo.png" },
  { name: "CS3", src: "/CS3_LOGO.png" },
];

export function Hero() {
  return (
    <section className="relative max-w-360 mx-auto px-6 sm:px-8 lg:px-12 pt-10 sm:pt-14 md:pt-20 lg:pt-24 overflow-visible">

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

        {/* Headline: names the buyer + concrete modules, not a mission statement */}
        <h1 className="font-serif font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.08] tracking-tight animate-fade-in-up animation-delay-100">
          Run Your Student Org{" "}
          <span className="bg-linear-to-r from-primary via-secondary to-primary bg-size-[200%_auto] bg-clip-text text-transparent">
            Without Bureaucracy
          </span>
        </h1>

        {/* Subtitle: concrete capabilities instead of abstract nouns */}
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mt-6 font-medium animate-fade-in-up animation-delay-200">
          VERIS unifies membership tracking, event clearance, and student
          engagement tools into a single system — built for student
          organizations tired of running everything through spreadsheets and
          group chats.
        </p>

        {/* CTA Button Group: one high-intent action, one low-commitment action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mt-10 animate-fade-in-up animation-delay-300">
          <Link
            href="/contact"
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

        {/* Partner logos */}
        <div className="w-full mt-[150px] pt-8 border-t border-border animate-fade-in-up animation-delay-500">
          <p className="text-xs uppercase tracking-widest text-muted-foreground/80 font-semibold mb-6 text-center">
            Powering operations at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="group relative h-12 sm:h-14 w-32 sm:w-36 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={partner.src}
                  alt={partner.name}
                  fill
                  className="object-contain"
                  sizes="144px"
                />
                <span className="pointer-events-none absolute left-1/2 top-full mt-2 w-max -translate-x-1/2 rounded-full bg-muted px-2 py-1 text-[11px] sm:text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground opacity-0 transition-all duration-300 group-hover:opacity-100">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;