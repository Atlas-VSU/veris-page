import BugReportForm from "@/features/bug-report";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bug Report | VERIS",
};

export default function BugReportPage() {
  return (
    <div className="py-12 px-4">
      <BugReportForm />
    </div>
  );
}
