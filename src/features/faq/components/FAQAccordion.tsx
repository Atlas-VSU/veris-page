import Link from "next/link";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function FAQAccordion({
  faqs = [],
}: {
  faqs?: { q: string; a: string }[];
}) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-serif font-bold text-foreground">
          Frequently Asked Questions
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          General, Billing, Technical, and Security inquiries
        </p>
      </div>

      {/* Accordion List */}
      <div className="md:mx-8 lg:mx-10">
        <Accordion multiple className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>
                <span className="flex items-center gap-2.5">
                  <HelpCircle className="w-4 h-4 text-primary shrink-0" />
                  <span>{faq.q}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="pl-6 text-xs text-muted-foreground leading-relaxed">
                  {faq.a}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Footer / Contact Link */}
      <div className="text-center pt-2">
        <p className="text-xs text-muted-foreground">
          Have more questions?{" "}
          <Link
            href="/contact"
            className="text-primary font-medium underline underline-offset-3 hover:text-primary/80 transition-colors"
          >
            Contact Support
          </Link>
        </p>
      </div>
    </div>
  );
}
