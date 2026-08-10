export type FAQItem = { 
  question: string; 
  answer: string; 
  category: string; 
};

/**
 * BACKEND DEV INSTRUCTIONS:
 * 
 * 1. A new dedicated table for FAQs has been/will be created in Supabase.
 * 2. The table should have columns matching the `FAQItem` type above:
 *    - `question` (text)
 *    - `answer` (text)
 *    - `category` (text)
 * 3. Update this function to fetch directly from the new table instead of `site_content`.
 * 
 * Example implementation:
 * const { data, error } = await supabase.from("faqs").select("*");
 * if (error) {
 *   console.error("Failed to fetch FAQs:", error);
 *   return null;
 * }
 * return data as FAQItem[];
 */
export async function getFaqItems(): Promise<FAQItem[] | null> {
  // TODO (Backend): Implement fetching from the dedicated 'faqs' table.
  // For now, returning null to force the UI to use the fallback mock data.
  
  return null;
}