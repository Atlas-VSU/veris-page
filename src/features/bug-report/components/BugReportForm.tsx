"use client";

import React, { useState } from "react";
import { BugReportInput } from "../types";
import { submitGuestBugReport } from "../services/bugReportService";

export function BugReportForm() {
  const [formData, setFormData] = useState<BugReportInput>({
    email: "",
    title: "",
    description: "",
    category: "general",
  });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [honeypot, setHoneypot] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (honeypot) {
      setFeedback({ type: "success", text: "Bug report submitted successfully! Our team will follow up via email." });
      setFormData({ email: "", subject: "", description: "", category: "general" });
      setHoneypot("");
      return;
    }

    const lastSubmitTime = localStorage.getItem("lastBugReportTime");
    if (lastSubmitTime) {
      const timeSinceLastSubmit = Date.now() - parseInt(lastSubmitTime, 10);
      const COOLDOWN_MS = 5 * 60 * 1000;
      if (timeSinceLastSubmit < COOLDOWN_MS) {
        const minutesLeft = Math.ceil((COOLDOWN_MS - timeSinceLastSubmit) / 60000);
        setFeedback({ type: "error", text: `Please wait ${minutesLeft} minute(s) before submitting another report.` });
        return;
      }
    }

    setLoading(true);
    setFeedback(null);

    const res = await submitGuestBugReport(formData);
    setLoading(false);

    if (res.success) {
      localStorage.setItem("lastBugReportTime", Date.now().toString());
      setFeedback({ type: "success", text: res.message });
      setFormData({ email: "", title: "", description: "", category: "general" });
    } else {
      setFeedback({ type: "error", text: res.message });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl">
      <div>
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">File a Guest Bug Report</h2>
        <p className="text-xs text-zinc-500 mt-1">No account required. Enter your email so our team can follow up.</p>
      </div>

      <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
        <label htmlFor="website-url">Website</label>
        <input
          type="text"
          id="website-url"
          name="website-url"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      {feedback && (
        <div className={`p-3 text-xs rounded-md ${feedback.type === "success" ? "bg-emerald-50 text-emerald-800 border border-emerald-200" : "bg-rose-50 text-rose-800 border border-rose-200"}`}>
          {feedback.text}
        </div>
      )}

      <div>
        <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">Your Email</label>
        <input
          type="email"
          required
          placeholder="guest@example.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-3 py-2 text-sm border rounded-lg bg-zinc-50 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">Category</label>
        <select
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value as BugReportInput["category"] })}
          className="w-full px-3 py-2 text-sm border rounded-lg bg-zinc-50 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          <option value="general">General</option>
          <option value="technical">Technical Issue</option>
          <option value="ui_ux">UI / Layout Bug</option>
          <option value="billing">Billing Inquiry</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">Subject</label>
        <input
          type="text"
          required
          placeholder="Brief summary of the issue..."
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full px-3 py-2 text-sm border rounded-lg bg-zinc-50 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">Description</label>
        <textarea
          required
          rows={4}
          placeholder="Describe what happened and how to reproduce it..."
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full px-3 py-2 text-sm border rounded-lg bg-zinc-50 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm rounded-lg transition-colors disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Submit Bug Report"}
      </button>
    </form>
  );
}
