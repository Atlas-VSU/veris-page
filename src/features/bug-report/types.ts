export type BugReportCategory =
  | "general"
  | "ui-visual"
  | "performance"
  | "account"
  | "billing"
  | "other";

export interface BugReportFormValues {
  email: string;
  category: BugReportCategory;
  subject: string;
  description: string;
}

export type BugReportFormState = BugReportFormValues;

export const EMPTY_BUG_REPORT_FORM: BugReportFormState = {
  email: "",
  category: "general",
  subject: "",
  description: "",
};

export type BugReportFormErrors = Partial<
  Record<keyof BugReportFormValues, string>
>;

export type BugReportSubmitStatus =
  | "idle"
  | "submitting"
  | "submitted"
  | "error";

export interface BugReportInput {
  email: string;
  title: string;
  description: string;
  category: BugReportCategory;
}

export interface BugReportResult {
  success: boolean;
  message: string;
  reportId?: string;
}

export interface BugReportCategoryOption {
  value: BugReportCategory;
  label: string;
}
