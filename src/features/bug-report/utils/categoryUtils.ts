import { BUG_REPORT_CATEGORIES } from "../data/categories";
import type { BugReportCategory } from "../types";

export function getCategoryLabel(category: BugReportCategory) {
  return (
    BUG_REPORT_CATEGORIES.find((option) => option.value === category)?.label ??
    "General"
  );
}
