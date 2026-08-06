import { FAQAccordion } from "@/features/faq/components/FAQAccordion";
import { getFaqItems, FAQItem } from "@/features/faq/services/faqService";
const fallbackFaqs: FAQItem[] = [
  {
    q: "What is VERIS?",
    a: "VERIS is a campus tech platform hosting digital services including CORAL systems, USSC Connect, and the mobile E-Passport tour.",
  },
];

export const revalidate = 60;

export default async function FAQPage() {
  const faqs = (await getFaqItems()) ?? fallbackFaqs;

  return (
    <div className="py-8">
      <FAQAccordion faqs={faqs} />
    </div>
  );
}
