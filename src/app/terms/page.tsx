import { TermsContent } from "@/features/legal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | VERIS",
};

export default function TermsPage() {
  return (
    <div className="py-8 bg-[#FDFCF8]">
      <TermsContent />
    </div>
  );
}
