'use client';

import { ArrowRight } from "lucide-react";

interface CtaSectionProps {
  showCta?: boolean;
  ctaTitle?: string;
  ctaSubtitle?: string;
  ctaButtonText?: string;
  ctaHref?: string;
  /** Optional risk-reversal microcopy shown under the button. Pass "" to hide it. */
  ctaMicrocopy?: string;
}

export function CtaSection({
  showCta = true,
  ctaTitle = "Ready to Unify your Organizational Operations?",
  ctaSubtitle = "Book a walkthrough and see how VERIS replaces manual registration, attendance checking, and hours of tracking with one system your team can manage.",
  ctaButtonText = "Book a Demo",
  ctaHref = "/demo",
  ctaMicrocopy = "No commitment · Takes 20 minutes",
}: CtaSectionProps) {
  if (!showCta) return null;

  return (
    <div className="mt-16 animate-fade-in-up animation-delay-600">
      <div
        className="relative bg-card border border-border p-8 md:p-12 shadow-soft hover:shadow-float transition-all duration-300 overflow-hidden text-center max-w-4xl mx-auto flex flex-col items-center gap-6"
        style={{ borderRadius: "2.5rem" }}
      >
        {/* Background ambient glow */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl pointer-events-none" />

        <div className="space-y-3 max-w-2xl relative z-10">
          <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-snug">
            {ctaTitle}
          </h3>
          <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed">
            {ctaSubtitle}
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 relative z-10">
          <a
            href={ctaHref}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-primary text-primary-foreground font-sans font-medium normal-case text-sm md:text-base shadow-soft hover:shadow-float hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
          >
            <span>{ctaButtonText}</span>
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>

          {/* Risk-reversal microcopy — last objection-handling before the visitor leaves the page */}
          {ctaMicrocopy && (
            <p className="font-sans text-xs text-muted-foreground">
              {ctaMicrocopy}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CtaSection;