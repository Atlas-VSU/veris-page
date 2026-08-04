export interface BugReportInput {
  email: string;
  title: string;
  description: string;
  category: "general" | "technical" | "ui_ux" | "billing";
}

export interface BugReportResult {
  success: boolean;
  message: string;
  reportId?: string;
}
