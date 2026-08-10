import Link from "next/link";

export function FAQFooter() {
  return (
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
  );
}
