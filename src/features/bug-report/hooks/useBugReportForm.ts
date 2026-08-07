"use client";

import { useState, type FormEvent } from "react";
import { submitGuestBugReport } from "../services/bugReportService";
import {
  EMPTY_BUG_REPORT_FORM,
  type BugReportFormErrors,
  type BugReportFormState,
  type BugReportSubmitStatus,
} from "../types";

export function useBugReportForm() {
  const [form, setForm] = useState<BugReportFormState>(EMPTY_BUG_REPORT_FORM);
  const [errors, setErrors] = useState<BugReportFormErrors>({});
  const [status, setStatus] = useState<BugReportSubmitStatus>("idle");
  const [message, setMessage] = useState<string | null>(null);
  const [submittedEmail, setSubmittedEmail] = useState("");

  function update<K extends keyof BugReportFormState>(
    field: K,
    value: BugReportFormState[K],
  ) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  function validate(): boolean {
    const next: BugReportFormErrors = {};

    if (!form.email.trim()) {
      next.email = "Enter your email so we can follow up.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Enter a valid email address.";
    }

    if (!form.subject.trim()) {
      next.subject = "Give the issue a short subject.";
    }

    if (!form.description.trim()) {
      next.description = "Describe what happened.";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    setStatus("submitting");
    setMessage(null);

    const result = await submitGuestBugReport({
      email: form.email.trim(),
      title: form.subject.trim(),
      description: form.description.trim(),
      category: form.category,
    });

    if (result.success) {
      setSubmittedEmail(form.email.trim());
      setForm(EMPTY_BUG_REPORT_FORM);
      setErrors({});
      setStatus("submitted");
      setMessage(result.message);
      return;
    }

    setStatus("error");
    setMessage(result.message);
  }

  function reset() {
    setForm(EMPTY_BUG_REPORT_FORM);
    setErrors({});
    setStatus("idle");
    setMessage(null);
    setSubmittedEmail("");
  }

  return {
    form,
    errors,
    status,
    message,
    submittedEmail,
    update,
    submit,
    reset,
  };
}
