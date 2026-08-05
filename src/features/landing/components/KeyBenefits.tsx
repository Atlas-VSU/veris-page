import React from 'react';
import { 
  UserCheck, 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  Code2, 
  RefreshCw, 
  Headphones, 
  Building2,
  LucideIcon
} from 'lucide-react';

import type { DevServiceFeatureItem, KeyBenefitItem, KeyBenefitsProps } from '../types';


const DEFAULT_BENEFITS: KeyBenefitItem[] = [
  {
    id: 'benefit-1',
    title: 'Friction-Free Onboarding',
    description: 'Self-registration eliminates long queues and manual encoding bottlenecks during peak enrollment.',
    badge: 'For Students',
    highlight: 'Zero manual encoding queues',
    iconName: 'user-check',
  },
  {
    id: 'benefit-2',
    title: 'Real-Time Clearance Status',
    description: 'Complete dashboard visibility into unpaid fees, fines, and requirements with zero guesswork.',
    badge: 'Students & Officers',
    highlight: 'Instant status transparency',
    iconName: 'shield-check',
  },
  {
    id: 'benefit-3',
    title: 'Automated Admin Workflows',
    description: 'Automated fee calculation and payment checks free officers to focus on actual programs and events.',
    badge: 'For Officers',
    highlight: 'Saves 10+ hours weekly',
    iconName: 'zap',
  },
  {
    id: 'benefit-4',
    title: 'One Unified Campus Experience',
    description: 'A single, trusted platform students interact with across every campus organization from year 1 to graduation.',
    badge: 'University-Wide',
    highlight: '4-year process continuity',
    iconName: 'sparkles',
  },
];

const DEFAULT_TRUST_FEATURES: DevServiceFeatureItem[] = [
  {
    id: 'trust-1',
    title: 'Dedicated In-House Team',
    description: 'Built by engineers who understand actual student workflows.',
    iconName: 'code',
  },
  {
    id: 'trust-2',
    title: 'Continuous Upgrades',
    description: 'Includes annual fixes, updates, and backend scaling.',
    iconName: 'refresh',
  },
  {
    id: 'trust-3',
    title: 'Responsive Context Support',
    description: 'Quick issue resolution directly from the core developers.',
    iconName: 'headphones',
  },
  {
    id: 'trust-4',
    title: 'Institutional Continuity',
    description: 'Maintained under Project Atlas to persist beyond single semesters.',
    iconName: 'building',
  },
];

// Helper to map icon string identifiers to Lucide components
const getBenefitIcon = (name?: string): LucideIcon => {
  switch (name) {
    case 'user-check': return UserCheck;
    case 'shield-check': return ShieldCheck;
    case 'zap': return Zap;
    case 'sparkles': return Sparkles;
    default: return Sparkles;
  }
};

const getTrustIcon = (name?: string): LucideIcon => {
  switch (name) {
    case 'code': return Code2;
    case 'refresh': return RefreshCw;
    case 'headphones': return Headphones;
    case 'building': return Building2;
    default: return Building2;
  }
};

// Asymmetric card shapes mapped from design tokens
const organicShapes = [
  'organic-card-1',
  'organic-card-2',
  'organic-card-3',
  'organic-card-4',
];

export const KeyBenefits: React.FC<KeyBenefitsProps> = ({
  sectionTitle = "Designed for Seamless Organizational Operations",
  sectionSubtitle = "Real outcomes that eliminate administrative chaos, speed up enrollment, and build long-term trust.",
  benefits = DEFAULT_BENEFITS,
  trustTitle = "Built to Last: The Dev Service Behind VERIS",
  trustSubtitle = "Backing your campus with institutional continuity and dedicated in-house engineering.",
  trustFeatures = DEFAULT_TRUST_FEATURES,
  className = "",
}) => {
  return (
    <section className={`w-full bg-background text-foreground py-16 px-4 md:px-8 lg:px-12 ${className}`}>
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
              const shapeClass = organicShapes[index % organicShapes.length];
              const delayClass = `animation-delay-${(index + 1) * 200}`;

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