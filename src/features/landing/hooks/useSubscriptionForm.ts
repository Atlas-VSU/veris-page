"use client";
import { useState, type FormEvent } from "react";
import { EMPTY_SUBSCRIPTION_FORM } from "../data/tiers";
import { validateSubscriptionForm } from "../utils/subscriptionUtils";
import {
  submitSubscriptionRequest,
  SubscriptionServiceError,
} from "../service/subscriptionService";
import type {
  SubscriptionFormErrors,
  SubscriptionFormValues,
  SubscriptionSubmitStatus,
} from "../types/subscription-form.types";

const RESET_DELAY_MS = 200;

interface UseSubscriptionFormOptions {
  onSuccess?: (values: SubscriptionFormValues) => void;
}

export function useSubscriptionForm(options: UseSubscriptionFormOptions = {}) {
  const [form, setForm] = useState<SubscriptionFormValues>(
    EMPTY_SUBSCRIPTION_FORM,
  );
  const [errors, setErrors] = useState<SubscriptionFormErrors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [status, setStatus] = useState<SubscriptionSubmitStatus>("idle");

  function update<K extends keyof SubscriptionFormValues>(
    field: K,
    value: SubscriptionFormValues[K],
  ) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    if (submitError) setSubmitError(null);
  }

  function reset() {
    setForm(EMPTY_SUBSCRIPTION_FORM);
    setErrors({});
    setSubmitError(null);
    setStatus("idle");
  }

  /** Resets after a short delay, so the form doesn't visibly clear mid-close-animation. */
  function resetAfterClose(delay: number = RESET_DELAY_MS) {
    setTimeout(reset, delay);
  }

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const validation = validateSubscriptionForm(form);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setSubmitError(null);
    setStatus("submitting");

    try {
      await submitSubscriptionRequest(form);
      setStatus("submitted");
      options.onSuccess?.(form);
    } catch (err) {
      const message =
        err instanceof SubscriptionServiceError
          ? err.message
          : "Something went wrong. Please try again.";
      setSubmitError(message);
      setStatus("idle");
    }
  }

  return {
    form,
    errors,
    submitError,
    status,
    update,
    submit,
    reset,
    resetAfterClose,
  };
}
