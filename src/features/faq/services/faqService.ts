import { supabase } from "@/lib/supabase/config";

export type FAQItem = { q: string; a: string };

function isValidFaqArray(value: unknown): value is FAQItem[] {
  return (
    Array.isArray(value) &&
    value.every(
      (item) =>
        typeof item === "object" &&
        item !== null &&
        typeof (item as FAQItem).q === "string" &&
        typeof (item as FAQItem).a === "string",
    )
  );
}

export async function getFaqItems(): Promise<FAQItem[] | null> {
  const { data, error } = await supabase
    .from("site_content")
    .select("value")
    .eq("key", "faq_items")
    .single();

  if (error || !data) {
    console.error("Failed to fetch FAQ content:", error);
    return null;
  }

  let parsed: unknown;

  try {
    parsed = JSON.parse(data.value);
  } catch {
    console.error("Malformed JSON for site_content key: faq_items");
    return null;
  }

  if (!isValidFaqArray(parsed)) {
    console.error("faq_items JSON is valid but has the wrong shape:", parsed);
    return null;
  }

  return parsed;
}