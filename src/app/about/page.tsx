import type { Metadata } from "next";
import { Hero, TeamSection } from "@/features/about";

export const metadata: Metadata = {
  title: "About Us | VERIS",
  description:
    "VERIS empowers university ecosystems through digital transformation — meet our mission, vision, and team.",
};

export default function AboutPage() {
  return (
    <>
      <Hero />
      <TeamSection />
    </>
  );
}
