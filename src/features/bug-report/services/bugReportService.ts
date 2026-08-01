import { supabase } from "@/lib/supabase/config";

export async function submitGuestBugReport({
  email,
  title,
  subject,
  category,
  description,
}: {
  email: string;
  title: string;
  subject: string;
  category: string,
  description: string;
}) {
  const { data, error } = await supabase.from("bug_reports").insert({
    reporter_email: email,
    title: subject,
    description,
    category,
  });

  if (error) {
    throw new Error(error.message);
  }

  return {
    success: true,
    message: "Bug report received.",
    data,
  };
}
