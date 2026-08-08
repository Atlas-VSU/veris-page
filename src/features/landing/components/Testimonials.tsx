"use client";

import React, { useState } from "react";
import { CheckCircle2, Quote, ChevronDown } from "lucide-react";
import type { Testimonial, TestimonialsProps } from "../types";
import { CtaSection } from "./CtaSection";
import { defaultTestimonials } from "../data";
import {
  getInitials,
  getFullName,
  getAvatarColorClasses,
  getServiceTagClasses,
  getBlobRadius,
  getAnimationDelayClass,
  partitionTestimonials,
} from "../helperFunction/testimonial";

const DefaultTestimonials: Testimonial[] = defaultTestimonials;

function Avatar({ t }: { t: Testimonial }) {
  const { bg, fg } = getAvatarColorClasses(t.accent);
  const initials = getInitials(t.firstName, t.lastName);

  return (
    <div
      className={`w-12 h-12 shrink-0 flex items-center justify-center font-bold font-sans overflow-hidden ${bg} ${fg}`}
      style={{ borderRadius: getBlobRadius(t.blobShape) }}
    >
      {t.avatarPicture ? (
        <img
          src={t.avatarPicture}
          alt={getFullName(t.firstName, t.lastName)}
          className="w-full h-full object-cover"
        />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
}

function ServiceTag({
  service,
  accent,
}: {
  service: string;
  accent: "primary" | "secondary";
}) {
  return (
    <span
      className={`font-sans text-[11px] font-semibold px-2.5 py-1 rounded-full border ${getServiceTagClasses(
        accent
      )}`}
    >
      {service}
    </span>
  );
}

function NameRow({ t }: { t: Testimonial }) {
  const fullName = getFullName(t.firstName, t.lastName);

  return (
    <div className="flex items-center gap-3">
      <Avatar t={t} />
      <div className="min-w-0">
        <div className="flex items-center gap-1.5">
          <h4 className="font-bold font-sans text-foreground truncate">
            {fullName}
          </h4>
          <CheckCircle2
            className="w-3.5 h-3.5 text-success shrink-0"
            strokeWidth={2.5}
          />
        </div>
        <p className="font-sans text-xs text-muted-foreground truncate">
          {t.role}
        </p>
      </div>
    </div>
  );
}

// Shared message block: clamps text, shows a toggle only when the message
// actually overflows the clamp so short quotes don't get a pointless button.
function TestimonialMessage({
  message,
  clampClass,
  textClass,
  toggleClass,
}: {
  message: string;
  clampClass: string;
  textClass: string;
  toggleClass: string;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <p className={`${textClass} whitespace-pre-line ${expanded ? "" : clampClass}`}>
        "{message}"
      </p>
      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        className={`mt-2 inline-flex items-center gap-1 font-sans text-xs font-semibold transition-colors ${toggleClass}`}
      >
        {expanded ? "Show less" : "Read more"}
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${
            expanded ? "rotate-180" : ""
          }`}
        />
      </button>
    </div>
  );
}

export function Testimonials({
  pillText = "Voices Across Campus",
  title = "Trusted across the entire campus ecosystem",
  subtitle = "Discover how organization officers and students are eliminating administrative chaos, cutting long queues, and modernizing campus life with VERIS.",
  items = DefaultTestimonials,
  ctaTitle,
  ctaSubtitle,
  ctaButtonText,
  ctaHref,
  showCta = true,
  className = "",
}: TestimonialsProps) {
  const { featured, firstRest, remainingRest } = partitionTestimonials(items);

  return (
    <section className={`relative py-16 md:py-24 ${className}`}>
      <div className="absolute inset-0 bg-muted/40" />
      <div className="pointer-events-none absolute -top-16 right-10 w-72 h-72 rounded-full bg-accent opacity-40 blur-3xl animate-float" />
      <div className="pointer-events-none absolute bottom-0 -left-20 w-64 h-64 rounded-full bg-primary opacity-[0.06] blur-3xl animate-float-delayed" />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex justify-center mb-6 animate-fade-in-up">
          <span className="inline-flex items-center justify-center text-center text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
            {pillText}
          </span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6 animate-fade-in-up">
          <div className="space-y-3 max-w-2xl">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              {title}
            </h2>
          </div>
          <p className="font-sans text-muted-foreground max-w-md text-sm md:text-base leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Featured testimonial */}
          {featured && (
            <div
              className="lg:col-span-2 bg-card p-8 md:p-10 flex flex-col justify-between animate-fade-in-up relative overflow-hidden shadow-soft group hover:shadow-2xl transition-all duration-300"
              style={{ borderRadius: "2rem 4rem 2rem 3rem" }}
            >
              <Quote
                className="absolute top-6 right-8 w-20 h-20 text-primary/10 pointer-events-none"
                fill="currentColor"
                strokeWidth={0}
              />

              <div className="relative">
                <ServiceTag service={featured.service} accent={featured.accent} />
                <div className="mt-5">
                  <TestimonialMessage
                    message={featured.message}
                    clampClass="line-clamp-6"
                    textClass="font-serif text-xl md:text-[1.35rem] italic text-foreground leading-relaxed"
                    toggleClass="text-primary hover:text-primary/70"
                  />
                </div>
              </div>

              <div className="relative flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mt-8 pt-6 border-t border-border">
                <NameRow t={featured} />
              </div>
            </div>
          )}

          {/* Second testimonial (Top right column) */}
          {firstRest && (
            <div
              className="bg-card p-6 flex flex-col justify-between animate-fade-in-up animation-delay-200 relative shadow-soft hover:shadow-2xl transition-all duration-300"
              style={{ borderRadius: "3rem 2rem 4rem 2rem" }}
            >
              <div>
                <ServiceTag service={firstRest.service} accent={firstRest.accent} />
                <div className="mt-4">
                  <TestimonialMessage
                    message={firstRest.message}
                    clampClass="line-clamp-6" 
                    textClass="font-sans text-base md:text-lg text-foreground leading-relaxed"
                    toggleClass="text-secondary hover:text-secondary/70"
                  />
                </div>
              </div>

              <div className="mt-5 pt-5 border-t border-border">
                <NameRow t={firstRest} />
              </div>
            </div>
          )}

          {/* Bottom row testimonials */}
          {remainingRest.map((t, i) => (
            <div
              key={t.id || `${t.firstName}-${t.lastName}-${i}`}
              className={`bg-card/80 border border-border/60 p-6 flex flex-col justify-between animate-fade-in-up shadow-soft hover:shadow-2xl transition-all duration-300 ${getAnimationDelayClass(
                i
              )}`}
              style={{ borderRadius: "2rem 3rem 2rem 4rem" }}
            >
              <div>
                <ServiceTag service={t.service} accent={t.accent} />
                <div className="mt-4">
                  <TestimonialMessage
                    message={t.message}
                    clampClass="line-clamp-5"
                    textClass="font-sans text-base md:text-lg text-muted-foreground leading-relaxed"
                    toggleClass="text-secondary hover:text-secondary/70"
                  />
                </div>
              </div>
              <div className="mt-5 pt-5 border-t border-border/60">
                <NameRow t={t} />
              </div>
            </div>
          ))}
        </div>

        <CtaSection
          showCta={showCta}
          {...(ctaTitle !== undefined && { ctaTitle })}
          {...(ctaSubtitle !== undefined && { ctaSubtitle })}
          {...(ctaButtonText !== undefined && { ctaButtonText })}
          {...(ctaHref !== undefined && { ctaHref })}
        />
      </div>
    </section>
  );
}

export default Testimonials;