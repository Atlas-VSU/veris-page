export function Hero() {
  return (
    <section className="lg:grid lg:grid-cols-[1.2fr_1fr] lg:min-h-screen bg-muted border-b border-border overflow-hidden">
      {/* Left: intro copy */}
      <div className="flex items-center px-4 md:px-20 py-16 lg:py-0 border-b lg:border-b-0 lg:border-r border-border">
        <div className="max-w-xl">
          <span className="font-sans text-sm font-bold text-primary tracking-widest uppercase mb-4 block">
            Welcome to VERIS
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
            Empowering University Ecosystems Through{" "}
            <span className="text-primary italic">Digital Transformation</span>
          </h1>
          <p className="font-sans text-lg text-muted-foreground">
            We provide student organizations with the infrastructure to eliminate friction and deliver
            student-centered services.
          </p>
        </div>
      </div>

      {/* Right: Mission / Vision panels */}
      <div className="flex flex-col gap-0">
        <div className="flex-1 p-10 md:p-16 bg-primary text-primary-foreground flex flex-col justify-center">
          <h2 className="font-serif text-2xl mb-4">Our Mission</h2>
          <p className="font-sans text-base opacity-90 max-w-lg">
            To provide student organizations with intuitive digital infrastructure that eliminates
            bureaucratic friction, transforming workflows into fast, transparent, and accessible
            services for every student.
          </p>
        </div>
        <div className="flex-1 p-10 md:p-16 bg-secondary text-secondary-foreground flex flex-col justify-center">
          <h2 className="font-serif text-2xl mb-4">Our Vision</h2>
          <p className="font-sans text-base opacity-90 max-w-lg">
            To pioneer the digital transformation of university ecosystems by transforming student
            organization operations into student-centered campus services through innovative digital
            solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
