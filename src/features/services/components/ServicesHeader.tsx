import { Sparkles, Receipt, CreditCard, ShieldCheck } from "lucide-react";

export function ServicesHeader() {
  return (
    <section className="relative py-6 md:py-10 flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto px-4 animate-fade-in-up">
      {/* Soft Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Main Headline */}
      <h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-primary tracking-tight leading-[1.1]"
        style={{ fontFamily: "var(--font-fraunces, serif)" }}
      >
        What VERIS Does
      </h1>

      {/* Subtitle / Lead Paragraph */}
      <p className="max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
        Built by VSU Computer Science students,{" "}
        <span className="text-foreground font-semibold">VERIS</span> connects the campus through seamless tech solutions. Track your organizational dues, settle payments effortlessly, and monitor your semestral clearance status in real-time.
      </p>
    </section>
  );
}