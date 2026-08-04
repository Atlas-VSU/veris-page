
import { Fraunces } from 'next/font/google';

const fraunces = Fraunces({ subsets: ['latin'], weight: ['400', '500', '600'] });

export function ServicesHeader() {
  return (
    <section className="flex flex-col items-center text-center space-y-6 animate-fade-in-up">
      <h1 className={`${fraunces.className} text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary font-medium tracking-tight`}>
        What Veris Does?
      </h1>
      
      <p className="max-w-3xl text-muted-foreground leading-relaxed text-lg md:text-xl lg:text-2xl">
        Built by VSU Computer Science students, VERIS connects the campus through seamless tech solutions. Track your organizational dues, settle payments effortlessly, and monitor your semestral clearance status in real-time.
      </p>
    </section>
  );
}
