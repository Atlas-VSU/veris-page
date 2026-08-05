import React from "react";
import { CheckCircle2, Quote } from "lucide-react";
import type { Testimonial, TestimonialsProps } from "../types";
import { CtaSection } from "./CtaSection";

const defaultTestimonials: Testimonial[] = [
  {
    firstName: "USSC",
    lastName: "Officer",
    role: "Finance Committee",
    service: "USSC Connect",
    message:
      "Before USSC Connect, clearance season meant hours of manually checking payment proofs and cross-referencing spreadsheets. Now it's just a dashboard away.",
    avatarPicture:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    blobShape: "blob-shape-1",
    accent: "primary",
    featured: true,
  },
  {
    firstName: "USSC",
    lastName: "Officer",
    role: "Membership Committee",
    service: "VERIS Attendance",
    message:
      "Attendance tracking used to be pen and paper at every event. With VERIS, we know instantly who's cleared and who still owes fines.",
    avatarPicture:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    blobShape: "blob-shape-2",
    accent: "secondary",
  },
  {
    firstName: "USSC",
    lastName: "Officer",
    role: "Enrollment Support Team",
    service: "OSSE Self-Registration",
    message:
      "Onboarding freshmen at OSSE was so much smoother with self-registration — officers just verified instead of encoding everything by hand.",
    avatarPicture:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    blobShape: "blob-shape-3",
    accent: "primary",
  },
  {
    firstName: "Student",
    lastName: "Name",
    role: "ABELS",
    service: "Clearance Settlement",
    message:
      "What I appreciate most is the elimination of long queues for hours during the settling of clearance status.",
    avatarPicture:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    blobShape: "blob-shape-1",
    accent: "secondary",
  },
  {
    firstName: "Freshman",
    lastName: "Name",
    role: "BSCS",
    service: "E-Passport",
    message: "The E-Passport made the campus tour much more enjoyable!",
    avatarPicture:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    blobShape: "blob-shape-2",
    accent: "primary",
  },
];

const blobRadius: Record<Testimonial["blobShape"], string> = {
  "blob-shape-1": "60% 40% 30% 70% / 60% 30% 70% 40%",
  "blob-shape-2": "50% 50% 30% 70% / 50% 60% 40% 50%",
  "blob-shape-3": "40% 60% 70% 30% / 40% 50% 50% 60%",
};

function Avatar({ t }: { t: Testimonial }) {
  const bg =
    t.accent === "primary"
      ? "bg-[var(--primary)]/15"
      : "bg-[var(--secondary)]/15";
  const fg =
    t.accent === "primary"
      ? "text-[var(--primary)]"
      : "text-[var(--secondary)]";
  const initials = `${t.firstName[0] || ""}${t.lastName[0] || ""}`;

  return (
    <div
      className={`w-12 h-12 shrink-0 flex items-center justify-center font-bold font-sans overflow-hidden ${bg} ${fg}`}
      style={{ borderRadius: blobRadius[t.blobShape] }}
    >
      {t.avatarPicture ? (
        <img
          src={t.avatarPicture}
          alt={`${t.firstName} ${t.lastName}`}
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
  const cls =
    accent === "primary"
      ? "bg-primary/10 text-primary border-primary/20"
      : "bg-secondary/10 text-secondary border-secondary/20";
  return (
    <span
      className={`font-sans text-[11px] font-semibold px-2.5 py-1 rounded-full border ${cls}`}
    >
      {service}
    </span>
  );
}

function NameRow({ t }: { t: Testimonial }) {
  const fullName = `${t.firstName} ${t.lastName}`;

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

export function Testimonials({
  pillText = "Voices Across Campus",
  title = "Trusted across the entire campus ecosystem",
  subtitle = "Discover how organization officers and students are eliminating administrative chaos, cutting long queues, and modernizing campus life with VERIS.",
  items = defaultTestimonials,
  ctaTitle,
  ctaSubtitle,
  ctaButtonText,
  ctaHref,
  showCta = true,
  className = "",
}: TestimonialsProps) {
  const featured = items.find((t) => t.featured) || items[0];
  const rest = items.filter((t) => t !== featured);

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

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 animate-fade-in-up">
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured testimonial */}
          {featured && (
            <div
              className="lg:col-span-2 bg-card p-8 md:p-10 flex flex-col justify-between animate-fade-in-up relative overflow-hidden shadow-soft group hover:shadow-float transition-all duration-300"
              style={{ borderRadius: "2rem 4rem 2rem 3rem" }}
            >
              <Quote
                className="absolute top-6 right-8 w-20 h-20 text-primary/10 pointer-events-none"
                fill="currentColor"
                strokeWidth={0}
              />

              <div className="relative">
                <ServiceTag service={featured.service} accent={featured.accent} />
                <p className="mt-5 font-serif text-xl md:text-[1.35rem] italic text-foreground leading-relaxed">
                  "{featured.message}"
                </p>
              </div>

              <div className="relative flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mt-8 pt-6 border-t border-border">
                <NameRow t={featured} />
              </div>
            </div>
          )}

          {/* Second testimonial (Top right column) */}
          {rest[0] && (
            <div
              className="bg-card p-6 flex flex-col justify-between animate-fade-in-up animation-delay-200 relative shadow-soft hover:shadow-float transition-all duration-300"
              style={{ borderRadius: "3rem 2rem 4rem 2rem" }}
            >
              <div>
                <ServiceTag service={rest[0].service} accent={rest[0].accent} />
                <p className="mt-4 font-sans text-sm text-foreground leading-relaxed">
                  "{rest[0].message}"
                </p>
              </div>

              <div className="mt-5 pt-5 border-t border-border">
                <NameRow t={rest[0]} />
              </div>
            </div>
          )}

          {/* Bottom row testimonials (3 columns) */}
          {rest.slice(1).map((t, i) => (
            <div
              key={t.id || `${t.firstName}-${t.lastName}-${i}`}
              className={`bg-card/80 border border-border/60 p-6 flex flex-col justify-between animate-fade-in-up shadow-soft hover:shadow-float transition-all duration-300 ${
                i === 0
                  ? "animation-delay-300"
                  : i === 1
                  ? "animation-delay-400"
                  : "animation-delay-500"
              }`}
              style={{ borderRadius: "2rem 3rem 2rem 4rem" }}
            >
              <div>
                <ServiceTag service={t.service} accent={t.accent} />
                <p className="mt-4 font-sans text-sm text-muted-foreground leading-relaxed">
                  "{t.message}"
                </p>
              </div>
              <div className="mt-5 pt-5 border-t border-border/60">
                <NameRow t={t} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA now lives in its own component — pass through only the props that were provided */}
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