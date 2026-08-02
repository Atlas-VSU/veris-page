"use client";

import React, { useState } from "react";
import { SubmitSubscriptionInput } from "../types";
import { submitSubscription } from "../services/subscriptionService";

const initialFormData: SubmitSubscriptionInput = {
  org_name: "",
  org_email: "",
  requester_name: "",
  student_id: "",
  tier: "basic",
};

export function SubmitSubscriptionForm() {
  const [formData, setFormData] = useState<SubmitSubscriptionInput>(initialFormData);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);

    const res = await submitSubscription(formData);
    setLoading(false);

    if (res.success) {
      setFeedback({ type: "success", text: res.message });
      setFormData(initialFormData);
    } else {
      setFeedback({ type: "error", text: res.message });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl">
      <div>
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Request a Subscription</h2>
        <p className="text-xs text-zinc-500 mt-1">Submit your organization details and chosen tier for review.</p>
      </div>

      {feedback && (
        <div className={`p-3 text-xs rounded-md ${feedback.type === "success" ? "bg-emerald-50 text-emerald-800 border border-emerald-200" : "bg-rose-50 text-rose-800 border border-rose-200"}`}>
          {feedback.text}
        </div>
      )}

      <div>
        <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">Organization Name</label>
        <input
          type="text"
          required
          placeholder="VERIS Campus Org"
          value={formData.org_name}
          onChange={(e) => setFormData({ ...formData, org_name: e.target.value })}
          className="w-full px-3 py-2 text-sm border rounded-lg bg-zinc-50 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">Organization Email</label>
        <input
          type="email"
          required
          placeholder="org@example.com"
          value={formData.org_email}
          onChange={(e) => setFormData({ ...formData, org_email: e.target.value })}
          className="w-full px-3 py-2 text-sm border rounded-lg bg-zinc-50 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">Requester Name</label>
        <input
          type="text"
          required
          placeholder="Jane Doe"
          value={formData.requester_name}
          onChange={(e) => setFormData({ ...formData, requester_name: e.target.value })}
          className="w-full px-3 py-2 text-sm border rounded-lg bg-zinc-50 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">Student ID</label>
        <input
          type="text"
          required
          placeholder="2026-000123"
          value={formData.student_id}
          onChange={(e) => setFormData({ ...formData, student_id: e.target.value })}
          className="w-full px-3 py-2 text-sm border rounded-lg bg-zinc-50 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">Tier</label>
        <select
          value={formData.tier}
          onChange={(e) => setFormData({ ...formData, tier: e.target.value as SubmitSubscriptionInput["tier"] })}
          className="w-full px-3 py-2 text-sm border rounded-lg bg-zinc-50 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          <option value="basic">basic</option>
          <option value="plus">plus</option>
          <option value="premium">premium</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm rounded-lg transition-colors disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Submit Subscription Request"}
      </button>
    </form>
  );
}
