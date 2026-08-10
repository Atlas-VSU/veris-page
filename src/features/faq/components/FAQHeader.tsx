export function FAQHeader() {
  return (
    <div className="text-center space-y-2.5 animate-fade-in-up">
      <h2
        className="font-serif font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-primary tracking-tight"
        style={{ fontFamily: "var(--font-fraunces, serif)" }}
      >
        Frequently Asked Questions
      </h2>
      <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto">
        General, Billing, Technical, and Security inquiries
      </p>
    </div>
  );
}
