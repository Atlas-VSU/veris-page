import type { BugReportCategoryOption } from "../types";

export const BUG_REPORT_CATEGORIES: BugReportCategoryOption[] = [
  { value: "general", label: "General" },
  { value: "ui-visual", label: "UI / visual" },
  { value: "performance", label: "Performance" },
  { value: "account", label: "Account / login" },
  { value: "billing", label: "Billing" },
  { value: "other", label: "Other" },
];
