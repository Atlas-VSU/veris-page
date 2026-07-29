import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="py-20 px-4 text-center max-w-4xl mx-auto space-y-6">
      <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
        <Zap className="w-3.5 h-3.5" />
        <span>Powering Next-Gen Campus Ecosystems</span>
      </div>
      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
        Empowering Campus Technology & Digital Engagement
      </h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
        VERIS provides an integrated campus suite featuring CORAL systems, USSC Connect, and mobile-first E-Passport interactive experiences.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
        <Link
          href="/services"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg text-sm transition-colors"
        >
          Explore Services <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/pricing"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 font-medium rounded-lg text-sm transition-colors"
        >
          View Subscription Tiers
        </Link>
      </div>
    </section>
  );
}
