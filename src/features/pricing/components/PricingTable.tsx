import { SubscriptionTierCard } from "./SubscriptionTierCard";
import { SubscriptionTier } from "../types";

export function PricingTable() {
  const tiers: SubscriptionTier[] = [
    {
      id: "basic",
      name: "Basic",
      tagline: "Attendance Management",
      rate: "₱2",
      rateUnit: "/ student / year",
      minimumNote: "Minimum 100 students · ₱200/yr floor",
      minStudents: 100,
      floorPrice: 200,
      perStudentRate: 2,
      orgLimit: "1 Org Account",
      organicClass: "organic-card-1",
      features: [
        "Secure login",
        "Dashboard with real-time attendance trends",
        "Create & manage unlimited events",
        "Real-time attendee tracking & timestamps",
        "Quick check-in via student ID or name",
        "Member directory with bulk import",
        "Unlimited members and events",
        "Limited to 1 Org Account",
      ],
    },
    {
      id: "plus",
      name: "Plus",
      tagline: "Basic + Financial Management",
      rate: "₱3",
      rateUnit: "/ student / year",
      minimumNote: "Minimum 75 students · ₱225/yr floor",
      minStudents: 75,
      floorPrice: 225,
      perStudentRate: 3,
      subtitle: "Everything from BASIC plan plus:",
      orgLimit: "Max 3 Org Accounts",
      organicClass: "organic-card-2",
      features: [
        "Membership fees (semester, event, custom)",
        "Define fine types & standard amounts",
        "Automated fees for registered members",
        "Automated fines from attendance records",
        "Officer-side clearance management",
        "Student-Facing Modules: Payment verification workflow, Self-Registration, and Update Information",
        "Max 3 Org Accounts",
      ],
    },
    {
      id: "premium",
      name: "Premium",
      tagline: "Full Suite + Student Portal",
      rate: "₱4",
      rateUnit: "/ student / year",
      minimumNote: "Minimum 60 students · ₱240/yr floor",
      minStudents: 60,
      floorPrice: 240,
      perStudentRate: 4,
      subtitle: "Everything from PLUS plan plus:",
      orgLimit: "Max 5 Org Accounts",
      organicClass: "organic-card-3",
      features: [
        "Dedicated Student Portal Interface",
        "Student account via Google Sign-In",
        "Student dashboard: balances & history",
        "Waive Appeal for fees and fines",
        "Financial Reports and Analytics",
        "Max 5 Org Accounts",
      ],
    },
  ];

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
          Student-scaled pricing for student organizations and student councils .
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
