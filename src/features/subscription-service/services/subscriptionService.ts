import { supabase } from "@/lib/supabase";
import { SubmitSubscriptionInput, SubmitSubscriptionResult, SubscriptionRow } from "../types";

export async function submitSubscription(input: SubmitSubscriptionInput): Promise<SubmitSubscriptionResult> {
  try {
    if (supabase) {
      const { data, error } = await supabase
        .from("subscriptions")
        .insert({
          org_name: input.org_name,
          org_email: input.org_email,
          requester_name: input.requester_name,
          student_id: input.student_id,
          tier: input.tier,
        })
        .select()
        .single();

      if (error) {
        throw error;
      }

      return {
        success: true,
        message: "Subscription request submitted successfully! Our team will review it shortly.",
        subscription: data as SubscriptionRow,
      };
    }

    console.log("[Fallback Mode] Subscription Request Received:", input);
    return {
      success: true,
      message: "Subscription request received in fallback mode. (Supabase configuration pending)",
      subscription: {
        id: `mock-${Date.now()}`,
        ...input,
      },
    };
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : "Unknown error occurred";
    console.error("Subscription submission error:", error);
    return {
      success: false,
      message: `Failed to submit subscription request: ${errMessage}`,
    };
  }
}