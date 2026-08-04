import { FAQAccordion } from "@/features/faq/components/FAQAccordion";

const faqs = [
  {
    q: "What is VERIS?",
    a: "VERIS is a campus tech platform hosting digital services including CORAL systems, USSC Connect, and the mobile E-Passport tour.",
  },
  {
    q: "How do I report bugs as a guest?",
    a: "Navigate to the Report Bug page. You can file reports using your email without creating an account.",
  },
  {
    q: "What are the subscription tiers?",
    a: "We offer Basic, Plus, and Premium tiers tailored for different campus organizations and administrative scales.",
  },
  {
    q: "Is E-Passport mobile friendly?",
    a: "Yes! E-Passport is optimized specifically for phones and tablets during campus tours.",
  },
];

export default function FAQPage() {
  return (
    <div className="py-8">
      <FAQAccordion faqs={faqs} />
    </div>
  );
}
