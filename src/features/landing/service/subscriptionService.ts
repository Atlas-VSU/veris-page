import { supabase } from "@/lib/supabase/config";
import type { SubscriptionFormValues } from "../types/subscription-form.types";

export class SubscriptionServiceError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "SubscriptionServiceError";
  }
}

export async function submitSubscriptionRequest(
  input: SubscriptionFormValues,
): Promise<void> {
  const { error } = await supabase.from("subscriptions").insert({
    org_name: input.orgName,
    org_email: input.orgEmail,
    requester_name: input.requesterName,
    student_id: input.studentId,
    tier: input.tier,
  });

  if (error) {
    throw new SubscriptionServiceError(
      `Failed to submit request: ${error.message}`,
    );
  }
}
