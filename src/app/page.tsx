import { Hero, KeyBenefits, Testimonials } from "@/features/landing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page | VERIS",
};
export default function Home() {
  return (
    <div className="space-y-16">
      <Hero />
      <KeyBenefits />
      <Testimonials />
    </div>
  );
}
