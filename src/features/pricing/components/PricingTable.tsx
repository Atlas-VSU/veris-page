import { SubscriptionTierCard } from "./SubscriptionTierCard";
import { SubscriptionTier } from "../types";
import { PricingTableProps } from "../types";


export function PricingTable({ tiers }: PricingTableProps) {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Decorative Organic Ambient Background Shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#5D7052]/10 blob-shape-1 animate-float blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#C18C5D]/10 blob-shape-2 animate-float-delayed blur-3xl pointer-events-none" />

      {/* Header Section */}
      <div className="relative text-center max-w-3xl mx-auto mb-12 animate-fade-in-up">

        <h1 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.08]  text-primary tracking-tight">
          Pricing
        </h1>

        <p className="mt-4 text-base sm:text-lg text-[#78786C] font-medium leading-relaxed">
          Student-scaled pricing for student organizations and student councils.
        </p>
      </div>

      {/* Subscription Cards Grid */}
      <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-stretch animate-fade-in-up animation-delay-200">
        {tiers.map((tier) => (
          <SubscriptionTierCard key={tier.id} tier={tier} />
        ))}
      </div>
    </section>
  );
}