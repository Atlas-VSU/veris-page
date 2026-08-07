import { BlobCard } from "./BlobCard";

export function Hero() {
  return (
    <section className="min-h-[70vh] lg:min-h-[78vh] border-b border-border flex items-center px-6 md:px-20 pt-2 pb-6 md:pt-4 md:pb-8 overflow-hidden animate-fade-in-up">
      <div className="w-full flex flex-col lg:flex-row items-center gap-8 md:gap-10 lg:gap-10 xl:gap-16">
        <div className="max-w-3xl">
          <span className="font-sans text-sm font-bold text-primary tracking-[0.25em] uppercase mb-4 md:mb-5 block animate-fade-in-up animation-delay-100">
            Welcome to VERIS
          </span>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-[72px] leading-[0.95] text-foreground mb-4 md:mb-5">
            <div className="block animate-fade-in-up animation-delay-200">
              Empowering
            </div>
            <div className="block animate-fade-in-up animation-delay-300">
              University
            </div>
            <div className="block animate-fade-in-up animation-delay-400">
              Ecosystems
            </div>
            <div className="block animate-fade-in-up animation-delay-500">
              Through <span className="text-primary italic">Digital</span>
            </div>
            <div className="block animate-fade-in-up animation-delay-600">
              <span className="text-primary italic">Transformation</span>
            </div>
          </h1>

          <p className="font-sans text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed animate-fade-in-up animation-delay-700">
            We provide student organizations with the infrastructure to
            eliminate friction and deliver student-centered services.
          </p>
        </div>

        <div className="w-full lg:flex-1 lg:h-full flex flex-col items-center justify-center gap-4 md:gap-5 lg:max-w-md lg:ml-8 xl:ml-12">
          <BlobCard
            title="Our Mission"
            description="To provide student organizations with intuitive digital infrastructure that eliminates bureaucratic friction, transforming workflows into fast, transparent, and accessible services for every student."
            bgClassName="bg-primary"
            textColorClassName="text-primary"
            viewBox="0 0 500 320"
            path="M40,130 C45,55 150,15 270,20 C390,25 475,60 470,145 C465,225 390,295 265,305 C145,315 45,270 32,190 C28,165 36,150 40,130 Z"
            className="animate-fade-in-up animation-delay-500"
          />
          <BlobCard
            title="Our Vision"
            description="To pioneer the digital transformation of university ecosystems by transforming student organization operations into student-centered campus services through innovative digital solutions."
            bgClassName="bg-[#7a5230]"
            textColorClassName="text-[#7a5230]"
            viewBox="0 0 500 320"
            path="M95,45 C210,-5 355,10 420,65 C480,120 485,205 425,260 C365,315 240,320 150,295 C60,270 20,210 20,150 C20,105 45,75 95,45 Z"
            className="lg:ml-14 xl:ml-20 animate-fade-in-up animation-delay-600"
          />
        </div>
      </div>
    </section>
  );
}
