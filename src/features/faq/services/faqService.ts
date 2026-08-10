export type FAQItem = {
  question: string;
  answer: string;
  category: string;
};

export async function getFaqItems(): Promise<FAQItem[] | null> {
  // TODO (Backend): Implement fetching from the dedicated 'faqs' table.
  // For now, returning null to force the UI to use the fallback mock data.

  return null;
}
