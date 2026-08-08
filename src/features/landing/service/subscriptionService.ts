import type { SubscriptionFormValues } from "../types/subscription-form.types";

const SUBSCRIPTIONS_ENDPOINT = "/api/subscriptions";

export class SubscriptionServiceError extends Error {
  status?: number;

  constructor(message: string, status?: number) {
    super(message);
    this.name = "SubscriptionServiceError";
    this.status = status;
  }
}

interface SubscriptionRequestBody {
  orgName: string;
  orgEmail: string;
  requesterName: string;
  studentId: string;
  tier: SubscriptionFormValues["tier"];
}

/**
 * Sends a demo/subscription request to the backend.
 * Throws SubscriptionServiceError on any non-2xx response or network failure.
 */
export async function submitSubscriptionRequest(
  values: SubscriptionFormValues,
): Promise<void> {
  const body: SubscriptionRequestBody = { ...values };

  let response: Response;
  try {
    response = await fetch(SUBSCRIPTIONS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch {
    throw new SubscriptionServiceError(
      "Could not reach the server. Check your connection and try again.",
    );
  }

  if (!response.ok) {
    const payload = await response.json().catch(() => null);
    const message =
      (payload && typeof payload.message === "string" && payload.message) ||
      `Request failed with status ${response.status}.`;
    throw new SubscriptionServiceError(message, response.status);
  }
}
