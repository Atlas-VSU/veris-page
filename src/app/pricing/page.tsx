import { PricingTable } from "@/features/pricing";

export const metadata = {
  title: "Pricing Tiers | VERIS Platform",
  description: "Explore subscription plans for VERIS campus organization management ecosystem.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground animate-page-enter">
      <PricingTable />
    </div>
  );
}
