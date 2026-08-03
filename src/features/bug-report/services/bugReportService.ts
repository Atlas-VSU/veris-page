import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { BugReportInput, BugReportResult } from "../types";

export async function submitGuestBugReport(input: BugReportInput): Promise<BugReportResult> {
  try {
    if (db) {
      const docRef = await addDoc(collection(db, "bug_reports"), {
        ...input,
        status: "pending",
        created_at: serverTimestamp(),
      });
      return {
        success: true,
        message: "Bug report submitted successfully! Our team will follow up via email.",
        reportId: docRef.id,
      };
    }

    // Fallback simulation mode if Firestore is offline / unconfigured
    console.log("[Fallback Mode] Guest Bug Report Received:", input);
    return {
      success: true,
      message: "Bug report received in guest mode. (Firebase configuration pending)",
      reportId: `mock-${Date.now()}`,
    };
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : "Unknown error occurred";
    console.error("Bug report submission error:", error);
    return {
      success: false,
      message: `Failed to submit report: ${errMessage}`,
    };
  }
}
