import React from "react";
import { Check } from "lucide-react";

export interface SubscriptionTier {
  id: string;
  name: string;
  tagline: string;
  rate: string;
  rateUnit: string;
  minimumNote: string;
  minStudents: number;
  floorPrice: number;
  perStudentRate: number;
  subtitle?: string;
  features: string[];
  orgLimit: string;
  organicClass: string;
}

interface SubscriptionTierCardProps {
  tier: SubscriptionTier;
}

export function SubscriptionTierCard({ tier }: SubscriptionTierCardProps) {
  const isPlus = tier.id === "plus";
  const isPremium = tier.id === "premium";

  return (
    <div
      className={`relative flex flex-col p-8 border transition-all duration-500 group overflow-hidden ${
        tier.organicClass
      } ${
        isPremium
          ? "bg-[#2C2C24] text-[#FDFCF8] border-[#5D7052] shadow-3xl ring-2 ring-[#5D7052]/40 hover:shadow-[0_20px_50px_rgba(93,112,82,0.3)]"
          : isPlus
          ? "bg-[#FEFEFA] text-[#2C2C24] border-[#C18C5D] shadow-float ring-2 ring-[#C18C5D]/30 hover:shadow-[0_20px_40px_rgba(193,140,93,0.25)]"
          : "bg-[#FEFEFA] text-[#2C2C24] border-[#DED8CF] shadow-soft hover:shadow-float hover:border-[#5D7052]/40"
      } transform hover:-translate-y-2`}
    >
      {/* Background Accent Blob for visual depth */}
      <div
        className={`absolute -top-10 -right-10 w-36 h-36 rounded-full blur-2xl pointer-events-none opacity-20 transition-opacity group-hover:opacity-40 ${
          isPremium
            ? "bg-[#5D7052]"
            : isPlus
            ? "bg-[#C18C5D]"
            : "bg-[#E6DCCD]"
        }`}
      />

      <div className="relative z-10">
        {/* Plan Name + Org Count Row */}
        <div className="flex items-baseline justify-between gap-2 mb-1">
          <h3
            className={`text-4xl font-extrabold tracking-tight font-serif ${
              isPremium ? "text-[#FDFCF8]" : "text-[#2C2C24]"
            }`}
          >
            {tier.name}
          </h3>
          <span
            className={`text-xs font-semibold whitespace-nowrap ${
              isPremium ? "text-[#DED8CF]" : "text-[#78786C]"
            }`}
          >
            {tier.orgLimit}
          </span>
        </div>

        {/* Tagline */}
        <p
          className={`text-sm font-medium ${
            isPremium ? "text-[#DED8CF]" : "text-[#78786C]"
          }`}
        >
          {tier.tagline}
        </p>

        {/* Per-Student Rate Display */}
        <div className="mt-6 flex items-baseline gap-1">
          <span
            className={`text-5xl font-black font-serif tracking-tight ${
              isPremium ? "text-[#FDFCF8]" : isPlus ? "text-[#C18C5D]" : "text-[#5D7052]"
            }`}
          >
            {tier.rate}
          </span>
          <span
            className={`text-sm font-medium ${
              isPremium ? "text-[#DED8CF]" : "text-[#78786C]"
            }`}
          >
            {tier.rateUnit}
          </span>
        </div>

        {/* Minimum Constraint Note */}
        <div
          className={`mt-2 text-xs font-mono tracking-wide ${
            isPremium ? "text-[#DED8CF]/70" : "text-[#78786C]"
          }`}
        >
          {tier.minimumNote}
        </div>

        {/* Section Divider & Subtitle */}
        {tier.subtitle ? (
          <div
            className={`mt-6 pb-2 border-b text-xs font-bold uppercase tracking-wider ${
              isPremium
                ? "text-[#C18C5D] border-[#5D7052]/40"
                : isPlus
                ? "text-[#5D7052] border-[#C18C5D]/30"
                : "text-[#78786C] border-[#DED8CF]"
            }`}
          >
            {tier.subtitle}
          </div>
        ) : (
          <div className="mt-6 pb-2 border-b border-[#DED8CF] text-xs font-bold uppercase tracking-wider text-[#78786C]">
            Included Capabilities
          </div>
        )}

        {/* Features List */}
        <ul className="mt-4 space-y-3">
          {tier.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs leading-snug">
              <span
                className={`flex items-center justify-center w-4.5 h-4.5 rounded-full shrink-0 mt-0.5 ${
                  isPremium
                    ? "bg-[#5D7052] text-[#F3F4F1]"
                    : isPlus
                    ? "bg-[#C18C5D] text-white"
                    : "bg-[#5D7052]/15 text-[#5D7052]"
                }`}
              >
                <Check className="w-3 h-3 stroke-[3]" />
              </span>
              <span
                className={
                  isPremium ? "text-[#F3F4F1]/90" : "text-[#2C2C24]/90"
                }
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
