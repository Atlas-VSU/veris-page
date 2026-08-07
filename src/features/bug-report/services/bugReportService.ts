import { BugReportInput, BugReportResult } from "../types";
import { supabase } from "@/lib/supabase/config";

export async function submitGuestBugReport(
  input: BugReportInput
): Promise<BugReportResult> {
  const reportId = crypto.randomUUID();

  const { error } = await supabase
    .from("bug_reports")
    .insert({
      id: reportId,
      reporter_email: input.email,
      title: input.title,
      description: input.description,
      category: input.category,
    });

  if (error) {
    return {
      success: false,
      message: `Failed to submit report: ${error.message}`,
    };
  }

  return {
    success: true,
    message: "Bug report received.",
    reportId,
  };
}