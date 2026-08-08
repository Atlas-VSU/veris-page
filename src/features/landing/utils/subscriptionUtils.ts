import type {
  SubscriptionFormErrors,
  SubscriptionFormValues,
} from "../types/subscription-form.types";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface ValidationResult {
  valid: boolean;
  errors: SubscriptionFormErrors;
}

export function validateSubscriptionForm(
  values: SubscriptionFormValues,
): ValidationResult {
  const errors: SubscriptionFormErrors = {};

  if (!values.orgName.trim()) {
    errors.orgName = "Enter your organization name.";
  }

  if (!values.orgEmail.trim()) {
    errors.orgEmail = "Enter an organization email.";
  } else if (!EMAIL_REGEX.test(values.orgEmail)) {
    errors.orgEmail = "Enter a valid email address.";
  }

  if (!values.requesterName.trim()) {
    errors.requesterName = "Enter the requester's name.";
  }

  if (!values.studentId.trim()) {
    errors.studentId = "Enter a student ID.";
  }

  return { valid: Object.keys(errors).length === 0, errors };
}
