import Link from "next/link";
import { HelpCircle, MessageCircleQuestion } from "lucide-react";
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
    <div className="max-w-3xl mx-auto space-y-8 py-6 px-4">
      {/* Header with Fade-in Animation */}
      <div className="text-center space-y-2.5 animate-fade-in-up">
        <h2
          className="font-serif font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.08]  text-primary tracking-tight"
          style={{ fontFamily: "var(--font-fraunces, serif)" }}
        >
          Frequently Asked Questions
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto">
          General, Billing, Technical, and Security inquiries
        </p>
      </div>

      {/* Accordion List */}
      {/* Accordion Card Container (Constrained Width + Shadow + Animation) */}
      <div className="bg-card border border-border rounded-[1.5rem] p-3 sm:p-5 shadow-soft animate-fade-in-up animation-delay-200">
        <Accordion multiple className="w-full space-y-1">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-b border-border/60 last:border-b-0 px-2 sm:px-3 rounded-xl transition-colors hover:bg-muted/40"
              style={{
                animation: "fade-in-up 0.6s ease-out forwards",
                animationDelay: `${(i + 1) * 100}ms`,
              }}
            >
              <AccordionTrigger className="py-4 hover:no-underline group">
                <span className="flex items-center gap-3 text-left text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  <span className="p-1.5 rounded-lg bg-primary/10 text-primary shrink-0 transition-transform group-hover:scale-110">
                    <HelpCircle className="w-4 h-4" />
                  </span>
                  <span>{faq.q}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-4 pt-1">
                <p className="pl-11 pr-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Footer / Contact Link */}
      <div className="text-center pt-2 animate-fade-in-up animation-delay-400">
        <p className="text-xs sm:text-sm text-muted-foreground">
          Have more questions?{" "}
          <Link
            href="/contact"
            className="text-primary font-semibold underline underline-offset-4 hover:text-secondary transition-colors"
          >
            Contact Support
          </Link>
        </p>
      </div>
    </div>
  );
}
