import { FAQAccordion, getFaqItems, type FAQItem } from "@/features/faq";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | VERIS",
};

const fallbackFaqs: FAQItem[] = [
  {
    question: "What is VERIS?",
    answer: "VERIS is a campus tech platform hosting digital services including CORAL systems, USSC Connect, and the mobile E-Passport tour.",
    category: "General Information & About VERIS",
  },
  {
    question: "How do I reset my password?",
    answer: "You can reset your password by clicking 'Forgot Password' on the login page and following the instructions sent to your email.",
    category: "Security, Support & Contact",
  },
  {
    question: "How do I update my billing information?",
    answer: "Go to your account settings and navigate to the 'Billing' tab to update your payment method.",
    category: "Subscriptions & Plans",
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
