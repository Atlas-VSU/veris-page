export function ServicesHeader() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden animate-fade-in-up">
      {/* Soft Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="relative text-center max-w-3xl mx-auto mb-12">
        {/* Main Headline */}
        <h1
          className="font-serif font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-primary tracking-tight"
          style={{ fontFamily: "var(--font-fraunces, serif)" }}
        >
          What VERIS Does
        </h1>

        {/* Subtitle / Lead Paragraph */}
        <p className="mt-4 text-base sm:text-lg text-[#78786C] font-medium leading-relaxed">
          Built by VSU Computer Science students,{" "}
          <span className="text-foreground font-semibold">VERIS</span> connects
          the campus through seamless tech solutions. Track your organizational
          dues, settle payments effortlessly, and monitor your semestral
          clearance status in real-time.
        </p>
      </div>
    </section>
  );
}
