import { ServicesOverview } from "@/features/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services Overview | VERIS",
};

export default function ServicesPage() {
  return (
    <div className="py-8">
      <ServicesOverview />
    </div>
  );
}
