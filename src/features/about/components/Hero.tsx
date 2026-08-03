export function Hero() {
  return (
    <section className="lg:grid lg:grid-cols-[1.2fr_1fr] lg:min-h-screen bg-surface-container-low border-b border-warm-border overflow-hidden">
      {/* Left: intro copy */}
      <div className="flex items-center px-margin-mobile md:px-margin-desktop py-2xl lg:py-0 border-b lg:border-b-0 lg:border-r border-warm-border">
        <div className="max-w-xl">
          <span className="font-label-md text-label-md text-primary tracking-widest uppercase mb-md block">
            Welcome to VERIS
          </span>
          <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-charcoal-olive mb-lg leading-tight">
            Empowering University Ecosystems Through{" "}
            <span className="text-primary italic">Digital Transformation</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            We provide student organizations with the infrastructure to eliminate friction and deliver
            student-centered services.
          </p>
        </div>
      </div>

      {/* Right: Mission / Vision panels */}
      <div className="flex flex-col gap-0">
        <div className="flex-1 p-xl md:p-2xl text-off-white bg-moss-green flex flex-col justify-center">
          <h2 className="font-headline-lg text-headline-lg mb-md">Our Mission</h2>
          <p className="font-body-lg text-body-lg opacity-90 max-w-lg">
            To provide student organizations with intuitive digital infrastructure that eliminates
            bureaucratic friction, transforming workflows into fast, transparent, and accessible
            services for every student.
          </p>
        </div>
        <div className="flex-1 p-xl md:p-2xl text-off-white bg-terracotta flex flex-col justify-center">
          <h2 className="font-headline-lg text-headline-lg mb-md">Our Vision</h2>
          <p className="font-body-lg text-body-lg opacity-90 max-w-lg">
            To pioneer the digital transformation of university ecosystems by transforming student
            organization operations into student-centered campus services through innovative digital
            solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
