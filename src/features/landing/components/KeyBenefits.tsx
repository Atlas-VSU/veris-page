import React from "react";
import type {
  DevServiceFeatureItem,
  KeyBenefitItem,
  KeyBenefitsProps,
} from "../types/types";
import { DEFAULT_BENEFITS, DEFAULT_TRUST_FEATURES } from "../data/data";
import {
  getAnimationDelayClass,
  getBenefitIcon,
  getOrganicShapeClass,
  getTrustIcon,
} from "../helperFunction/keyBenefit";

const DefaultBenefits: KeyBenefitItem[] = DEFAULT_BENEFITS;
const DefaultTrustFeatures: DevServiceFeatureItem[] = DEFAULT_TRUST_FEATURES;

export const KeyBenefits: React.FC<KeyBenefitsProps> = ({
  sectionTitle = "Designed for Seamless Organizational Operations",
  sectionSubtitle = "Real outcomes that eliminate administrative chaos, speed up enrollment, and build long-term trust.",
  benefits = DefaultBenefits,
  trustTitle = "Built to Last: The Dev Service Behind VERIS",
  trustSubtitle = "Backing your campus with institutional continuity and dedicated in-house engineering.",
  trustFeatures = DefaultTrustFeatures,
  className = "",
}) => {
  return (
    <section
      className={`w-full bg-background text-foreground py-16 px-4 md:px-8 lg:px-12 ${className}`}
    >
      <div className="pt-12 border-t border-border max-w-7xl mx-auto space-y-20">
        {/* ========================================== */}
        {/* Primary Section: Key Benefits & Impact     */}
        {/* ========================================== */}
        <div>
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4 animate-fade-in">
            <span className="inline-block text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
              Key Benefits & Impact
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground font-bold leading-tight">
              {sectionTitle}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              {sectionSubtitle}
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((item, index) => {
              const Icon = getBenefitIcon(item.iconName);
              const shapeClass = getOrganicShapeClass(index);
              const delayClass = getAnimationDelayClass(index);

              return (
                <div
                  key={item.id}
                  className={`group relative p-8 bg-card border border-border transition-all duration-300 hover:-translate-y-1.5 shadow-soft hover:shadow-float ${shapeClass} animate-fade-in-up ${delayClass}`}
                >
                  <div className="flex flex-col h-full justify-between space-y-6">
                    <div className="space-y-4">
                      {/* Top Row: Icon & Audience Badge */}
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                          <Icon className="w-6 h-6" />
                        </div>
                        {item.badge && (
                          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-accent/40 text-accent-foreground border border-border/50">
                            {item.badge}
                          </span>
                        )}
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-xl md:text-2xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                        {item.description}
                      </p>
                    </div>

                    {/* Subtle accent bar */}
                    <div className="w-12 h-1 bg-secondary/30 rounded-full group-hover:w-full transition-all duration-500" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================== */}
        {/* Secondary Section: Dev Service & Trust     */}
        {/* ========================================== */}
        <div className="pt-12 border-t border-border">
          <div className="bg-muted/40 rounded-3xl p-8 md:p-12 border border-border/80 shadow-soft">
            {/* Header */}
            <div className="max-w-2xl mb-10 space-y-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-secondary">
                Engineering & Continuity
              </span>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                {trustTitle}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base">
                {trustSubtitle}
              </p>
            </div>

            {/* Trust Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trustFeatures.map((feature, idx) => {
                const Icon = getTrustIcon(feature.iconName);
                return (
                  <div
                    key={feature.id}
                    className="p-5 bg-card/80 rounded-2xl border border-border/60 hover:border-primary/40 transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-semibold text-foreground text-base mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
