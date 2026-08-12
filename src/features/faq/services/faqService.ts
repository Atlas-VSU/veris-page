import { supabase } from "@/lib/supabase/config";

export type FAQItem = {
  question: string;
  answer: string;
  category: string;
};

export async function getFaqItems(): Promise<FAQItem[] | null> {
  const { data, error } = await supabase
    .from('faq')
    .select('question, answer, category');

  if (error) {
    console.error("Error fetching FAQs from Supabase:", error);
    return null;
  }

  return data as FAQItem[];
}
