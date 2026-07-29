import Link from "next/link";
import { HelpCircle } from "lucide-react";

export function FAQAccordion() {
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

  return (
    <section className="py-12 max-w-3xl mx-auto px-4 space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Frequently Asked Questions</h2>
        <p className="text-sm text-zinc-500 mt-1">General, Billing, Technical, and Security inquiries</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg space-y-1">
            <h3 className="font-semibold text-sm text-zinc-900 dark:text-white flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-emerald-500 shrink-0" />
              {faq.q}
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 pl-6 leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>

      <div className="text-center pt-4">
        <p className="text-xs text-zinc-500">
          Have more questions?{" "}
          <Link href="/contact" className="text-emerald-600 dark:text-emerald-400 font-medium underline">
            Contact Support
          </Link>
        </p>
      </div>
    </section>
  );
}
