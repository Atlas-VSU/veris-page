export interface SubmitSubscriptionInput {
	org_name: string;
	org_email: string;
	requester_name: string;
	student_id: string;
	tier: "basic" | "plus" | "premium";
}

export interface SubscriptionRow extends SubmitSubscriptionInput {
	id: string;
	created_at?: string;
}

export interface SubmitSubscriptionResult {
	success: boolean;
	message: string;
	subscription?: SubscriptionRow;
}
