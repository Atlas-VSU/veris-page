import type { ReactNode } from "react";

export type Tier = "basic" | "plus" | "premium";

export interface TierOption {
  value: Tier;
  label: string;
}

export interface SubscriptionFormValues {
  orgName: string;
  orgEmail: string;
  requesterName: string;
  studentId: string;
  tier: Tier;
}

export type SubscriptionFormErrors = Partial<
  Record<keyof SubscriptionFormValues, string>
>;

export type SubscriptionSubmitStatus = "idle" | "submitting" | "submitted";

export interface BookDemoModalProps {
  /** Element that opens the modal, e.g. the CTA button. Rendered via DialogTrigger asChild. */
  trigger: ReactNode;
  /** Called with the form values on successful submit, before the success state is shown. */
  onSubmit?: (values: SubscriptionFormValues) => void | Promise<void>;
}
