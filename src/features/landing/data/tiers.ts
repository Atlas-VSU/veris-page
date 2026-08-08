import type {
  SubscriptionFormValues,
  TierOption,
} from "../types/subscription-form.types";

export const TIERS: TierOption[] = [
  { value: "basic", label: "Basic" },
  { value: "plus", label: "Plus" },
  { value: "premium", label: "Premium" },
];

export const EMPTY_SUBSCRIPTION_FORM: SubscriptionFormValues = {
  orgName: "",
  orgEmail: "",
  requesterName: "",
  studentId: "",
  tier: "basic",
};
