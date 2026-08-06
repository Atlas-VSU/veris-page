import { PricingTable } from "@/features/pricing";
import { getPricingTiers, fallbackTiers } from "@/features/pricing/services/pricingService";

export const metadata = {
  title: "Pricing Tiers | VERIS Platform",
  description: "Explore subscription plans for VERIS campus organization management ecosystem.",
};

export default async function PricingPage() {
  const tiers = (await getPricingTiers()) ?? fallbackTiers;

  return (
    <div className="min-h-screen bg-background text-foreground animate-page-enter">
      <PricingTable tiers={tiers} />
    </div>
  );
}