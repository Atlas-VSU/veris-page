import { ContactOverview } from "@/features/contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | VERIS",
};

export default function ContactPage() {
  return (
    <div className="py-8">
      <ContactOverview />
    </div>
  );
}
