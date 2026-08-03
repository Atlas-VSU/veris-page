import { Globe } from "lucide-react";
import { Fraunces } from 'next/font/google';

const fraunces = Fraunces({ subsets: ['latin'], weight: ['400', '500', '600'] });

export function ServicesHeader() {
  return (
    <section className="flex flex-col items-center text-center space-y-6 animate-fade-in-up">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-xs font-semibold tracking-widest uppercase">
        <Globe className="w-3.5 h-3.5" />
        <span>Services</span>
      </div>
      
      <h1 className={`${fraunces.className} text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary font-medium tracking-tight`}>
        What Veris Does?
      </h1>
      
      <p className="max-w-3xl text-muted-foreground leading-relaxed text-lg md:text-xl lg:text-2xl">
        Built by VSU Computer Science students, VERIS connects the campus through seamless tech solutions. Track your organizational dues, settle payments effortlessly, and monitor your semestral clearance status in real-time.
      </p>
    </section>
  );
}
