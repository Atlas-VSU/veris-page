export function Hero() {
  return (
    <section className="min-h-[80vh] lg:min-h-screen bg-muted border-b border-border flex items-center px-6 md:px-20 py-20 overflow-hidden">
      <div className="max-w-3xl">
        <span className="font-sans text-sm font-bold text-primary tracking-widest uppercase mb-6 block">
          Welcome to VERIS
        </span>

        <h1 className="font-serif text-4xl md:text-6xl lg:text-[72px] leading-[0.95] text-foreground mb-6">
          <div className="block">Empowering</div>
          <div className="block">University</div>
          <div className="block">Ecosystems</div>
          <div className="block">Through <span className="text-primary italic">Digital</span></div>
          <div className="block"><span className="text-primary italic">Transformation</span></div>
        </h1>

        <p className="font-sans text-lg text-muted-foreground max-w-xl">
          We provide student organizations with the infrastructure to eliminate friction and deliver
          student-centered services.
        </p>
      </div>
    </section>
  );
}
