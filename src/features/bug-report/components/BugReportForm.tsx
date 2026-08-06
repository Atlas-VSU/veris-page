"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Loader2,
  CheckCircle2,
  AlertCircle,
  MessageSquareWarning,
} from "lucide-react";
import { useBugReportForm } from "../hooks/useBugReportForm";
import { BUG_REPORT_CATEGORIES } from "../data/categories";
import type { BugReportCategory } from "../types/types";
import { getCategoryLabel } from "../utils/categoryUtils";

export default function BugReportForm() {
  const {
    form,
    errors,
    status,
    message,
    submittedEmail,
    update,
    submit,
    reset,
  } = useBugReportForm();

  if (status === "submitted") {
    return (
      <Card className="w-full max-w-md mx-auto organic-card-1 border-border shadow-[var(--shadow-soft)]">
        <CardContent className="flex flex-col items-center text-center gap-3 py-12 px-8">
          <div className="w-14 h-14 rounded-full bg-success-muted flex items-center justify-center">
            <CheckCircle2 className="w-7 h-7 text-success" />
          </div>
          <h2 className="text-lg font-semibold text-foreground font-heading">
            Report submitted
          </h2>
          <p className="text-sm text-muted-foreground">
            Thanks for flagging this. Our team will follow up at{" "}
            <span className="text-foreground font-medium">
              {submittedEmail}
            </span>
            .
          </p>
          <Button
            variant="outline"
            className="mt-2 rounded-xl border-border"
            onClick={reset}
          >
            File another report
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto organic-card-1 border-border shadow-[var(--shadow-soft)]">
      <CardHeader className="border-b border-border pb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center shrink-0">
            <MessageSquareWarning className="w-4.5 h-4.5 text-accent-foreground" />
          </div>
          <div>
            <h1 className="text-base font-semibold text-foreground font-heading leading-tight">
              Report a Problem
            </h1>
            <p className="text-sm text-muted-foreground mt-0.5">
              Enter your email so our team can follow up.
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-3">
        <form onSubmit={submit} noValidate>
          <FieldGroup>
            <Field data-invalid={!!errors.email}>
              <FieldLabel htmlFor="email">Your email</FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="guest@example.com"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                aria-invalid={!!errors.email}
                className="rounded-xl bg-input border-border focus-visible:ring-ring"
              />
              <FieldError
                errors={errors.email ? [{ message: errors.email }] : undefined}
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="category">Category</FieldLabel>
              <Select
                value={form.category}
                onValueChange={(value) => {
                  if (value) {
                    update("category", value as BugReportCategory);
                  }
                }}
              >
                <SelectTrigger
                  id="category"
                  className="rounded-xl w-full bg-input border-border focus-visible:ring-ring"
                >
                  <SelectValue placeholder="Select a category">
                    {getCategoryLabel(form.category)}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent className="bg-popover text-popover-foreground border-border">
                  {BUG_REPORT_CATEGORIES.map((c) => (
                    <SelectItem key={c.value} value={c.value}>
                      {c.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>

            <Field data-invalid={!!errors.subject}>
              <FieldLabel htmlFor="subject">Subject</FieldLabel>
              <Input
                id="subject"
                placeholder="Brief summary of the issue..."
                value={form.subject}
                onChange={(e) => update("subject", e.target.value)}
                aria-invalid={!!errors.subject}
                className="rounded-xl bg-input border-border focus-visible:ring-ring"
              />
              <FieldError
                errors={
                  errors.subject ? [{ message: errors.subject }] : undefined
                }
              />
            </Field>

            <Field data-invalid={!!errors.description}>
              <FieldLabel htmlFor="description">Description</FieldLabel>
              <FieldContent>
                <Textarea
                  id="description"
                  placeholder="Describe what happened and how to reproduce it..."
                  value={form.description}
                  onChange={(e) => update("description", e.target.value)}
                  aria-invalid={!!errors.description}
                  className="rounded-xl min-h-32 resize-none bg-input border-border focus-visible:ring-ring"
                />
                <FieldDescription>
                  Include steps to reproduce, if you can.
                </FieldDescription>
              </FieldContent>
              <FieldError
                errors={
                  errors.description
                    ? [{ message: errors.description }]
                    : undefined
                }
              />
            </Field>

            {message ? (
              <Field orientation="vertical">
                <div
                  className={`flex items-start gap-2 rounded-xl border px-3 py-2 text-sm ${status === "error" ? "border-destructive/30 bg-destructive/10 text-destructive" : "border-success/30 bg-success-muted text-foreground"}`}
                >
                  {status === "error" ? (
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  ) : (
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                  )}
                  <span>{message}</span>
                </div>
              </Field>
            ) : null}

            <Field orientation="vertical">
              <Button
                type="submit"
                disabled={status === "submitting"}
                className="w-full rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground h-11"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit bug report"
                )}
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
