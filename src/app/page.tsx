import { Hero } from "@/features/landing";
import { ServicesOverview } from "@/features/services";

export default function Home() {
  return (
    <div className="space-y-16 pb-16">
      <Hero />
      <ServicesOverview />
    </div>
  );
}
