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
  trigger: ReactNode;
  triggerClassName?: string;
  onSubmit?: (values: SubscriptionFormValues) => void | Promise<void>;
}
