import { Hero, KeyBenefits, Testimonials } from "@/features/landing";
import { ServicesOverview } from "@/features/services";

export default function Home() {
  return (
    <div className="space-y-16">
      <Hero />
      <KeyBenefits />
      <Testimonials />
    </div>
  );
}
