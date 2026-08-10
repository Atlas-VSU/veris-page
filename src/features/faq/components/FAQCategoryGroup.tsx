import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import type { FAQItem } from "../services/faqService";

export function FAQCategoryGroup({
  category,
  faqs,
  groupIndex,
}: {
  category: string;
  faqs: FAQItem[];
  groupIndex: number;
}) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-foreground px-2 tracking-tight">
        {category}
      </h3>
      <div className="bg-background/60 border border-border/80 rounded-[1.5rem] p-3 sm:p-5">
        <Accordion multiple className="w-full space-y-1">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`${category}-item-${i}`}
              className="border-b border-border/60 last:border-b-0 px-2 sm:px-3 rounded-xl transition-colors hover:bg-muted/40"
              style={{
                animation: "fade-in-up 0.6s ease-out forwards",
                animationDelay: `${groupIndex * 100 + (i + 1) * 50}ms`,
              }}
            >
              <AccordionTrigger className="py-4 hover:no-underline group">
                <span className="flex items-center gap-3 text-left text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  <span className="p-1.5 rounded-lg bg-primary/10 text-primary shrink-0 transition-transform group-hover:scale-110">
                    <HelpCircle className="w-4 h-4" />
                  </span>
                  <span>{faq.question}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-4 pt-1">
                <p className="pl-11 pr-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
