"use client";

import { useState } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";
import { TIERS } from "../data/tiers";
import { useSubscriptionForm } from "../hooks/useSubscriptionForm";
import {
  createTierChangeHandler,
  createOpenChangeHandler,
} from "../utils/modalHandlers";
import type { BookDemoModalProps } from "../types/subscription-form.types";
import { getTierLabel } from "../utils/subscriptionUtils";

export function BookDemoModal({
  trigger,
  triggerClassName,
  onSubmit,
}: BookDemoModalProps) {
  const [open, setOpen] = useState(false);
  const { form, errors, submitError, status, update, submit, resetAfterClose } =
    useSubscriptionForm({ onSuccess: onSubmit });

  const handleOpenChange = createOpenChangeHandler(setOpen, resetAfterClose);
  const handleTierChange = createTierChangeHandler(update);

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger className={triggerClassName}>{trigger}</DialogTrigger>

      <DialogContent className="bg-card text-card-foreground border-border rounded-[1.75rem] sm:max-w-md">
        {status === "submitted" ? (
          <div className="flex flex-col items-center text-center gap-3 py-6">
            <div className="w-14 h-14 rounded-full bg-success-muted flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7 text-success" />
            </div>
            <DialogTitle className="font-serif text-xl text-foreground">
              Request received
            </DialogTitle>
            <DialogDescription className="font-sans text-muted-foreground">
              Thanks — our team will reach out to{" "}
              <span className="text-foreground font-medium">
                {form.orgEmail}
              </span>{" "}
              to schedule your demo.
            </DialogDescription>
            <Button
              variant="outline"
              className="mt-2 rounded-xl border-border"
              onClick={() => handleOpenChange(false)}
            >
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-serif text-xl text-foreground">
                Book a demo
              </DialogTitle>
              <DialogDescription className="font-sans text-muted-foreground">
                Tell us about your organization and we&apos;ll set up a time to
                walk you through VERIS.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={submit} noValidate className="mt-2">
              <FieldGroup>
                <Field data-invalid={!!errors.orgName}>
                  <FieldLabel htmlFor="orgName">Organization name</FieldLabel>
                  <Input
                    id="orgName"
                    placeholder="Enter your organization name"
                    value={form.orgName}
                    onChange={(e) => update("orgName", e.target.value)}
                    aria-invalid={!!errors.orgName}
                    className="rounded-xl bg-input border-border focus-visible:ring-ring"
                  />
                  <FieldError
                    errors={
                      errors.orgName ? [{ message: errors.orgName }] : undefined
                    }
                  />
                </Field>

                <Field data-invalid={!!errors.orgEmail}>
                  <FieldLabel htmlFor="orgEmail">Organization email</FieldLabel>
                  <Input
                    id="orgEmail"
                    type="email"
                    placeholder="org-email@vsu.edu.ph"
                    value={form.orgEmail}
                    onChange={(e) => update("orgEmail", e.target.value)}
                    aria-invalid={!!errors.orgEmail}
                    className="rounded-xl bg-input border-border focus-visible:ring-ring"
                  />
                  <FieldError
                    errors={
                      errors.orgEmail
                        ? [{ message: errors.orgEmail }]
                        : undefined
                    }
                  />
                </Field>

                <Field data-invalid={!!errors.requesterName}>
                  <FieldLabel htmlFor="requesterName">
                    Requester name
                  </FieldLabel>
                  <Input
                    id="requesterName"
                    placeholder="Your Name"
                    value={form.requesterName}
                    onChange={(e) => update("requesterName", e.target.value)}
                    aria-invalid={!!errors.requesterName}
                    className="rounded-xl bg-input border-border focus-visible:ring-ring"
                  />
                  <FieldError
                    errors={
                      errors.requesterName
                        ? [{ message: errors.requesterName }]
                        : undefined
                    }
                  />
                </Field>

                <Field data-invalid={!!errors.studentId}>
                  <FieldLabel htmlFor="studentId">Student ID</FieldLabel>
                  <Input
                    id="studentId"
                    placeholder="##-#-#####"
                    value={form.studentId}
                    onChange={(e) => update("studentId", e.target.value)}
                    aria-invalid={!!errors.studentId}
                    className="rounded-xl bg-input border-border focus-visible:ring-ring"
                  />
                  <FieldError
                    errors={
                      errors.studentId
                        ? [{ message: errors.studentId }]
                        : undefined
                    }
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="tier">Tier</FieldLabel>
                  <Select value={form.tier} onValueChange={handleTierChange}>
                    <SelectTrigger
                      id="tier"
                      className="rounded-xl w-full bg-input border-border focus-visible:ring-ring"
                    >
                      <SelectValue placeholder="Select a tier">
                        {getTierLabel(form.tier)}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent className="bg-popover text-popover-foreground border-border">
                      {TIERS.map((t) => (
                        <SelectItem key={t.value} value={t.value}>
                          {t.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
              </FieldGroup>

              {submitError && (
                <p className="mt-4 text-sm text-destructive">{submitError}</p>
              )}

              <DialogFooter className="mt-6">
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
                    "Submit request"
                  )}
                </Button>
              </DialogFooter>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default BookDemoModal;
