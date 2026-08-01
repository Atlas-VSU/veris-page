import { supabase } from "@/lib/supabase/config";

export async function submitGuestBugReport({
  email,
  title,
  description,
}: {
  email: string;
  title: string;
  description: string;
}) {
  const { data, error } = await supabase.from("bug_reports").insert({
    reporter_email: email,
    title,
    description,
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
