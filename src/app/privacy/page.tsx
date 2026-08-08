import { PrivacyContent } from "@/features/legal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | VERIS",
};

export default function PrivacyPage() {
  return (
    <div className="py-8 bg-[#FDFCF8]">
      <PrivacyContent />
    </div>
  );
}
