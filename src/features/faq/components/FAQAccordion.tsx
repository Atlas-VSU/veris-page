import type { FAQItem } from "../services/faqService";
import { FAQHeader } from "./FAQHeader";
import { FAQFooter } from "./FAQFooter";
import { FAQCategoryGroup } from "./FAQCategoryGroup";

export function FAQAccordion({ faqs = [] }: { faqs?: FAQItem[] }) {
  const CATEGORIES = [
    "General Information & About VERIS",
    "Subscriptions & Plans",
    "Security, Support & Contact",
  ];

  return (
    <div className="w-full max-w-[80rem] mx-auto space-y-8 py-6 px-4 sm:px-8 lg:px-12">
      <FAQHeader />

      <div className="bg-white border border-border rounded-[2rem] p-6 sm:p-8 lg:p-10 shadow-xl animate-fade-in-up animation-delay-200">
        <div className="space-y-10">
          {CATEGORIES.map((category, groupIndex) => {
            const categoryFaqs = faqs.filter(
              (faq) => (faq.category || "General Information & About VERIS") === category
            );

            if (categoryFaqs.length === 0) return null;

            return (
              <FAQCategoryGroup
                key={category}
                category={category}
                faqs={categoryFaqs}
                groupIndex={groupIndex}
              />
            );
          })}
        </div>
      </div>

      <FAQFooter />
    </div>
  );
}
