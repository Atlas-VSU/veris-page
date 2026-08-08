import Link from "next/link";
import { Sparkles, Clock, MapPin } from "lucide-react";
import { CONTACTS } from "../data";
import { ContactCard } from "./ContactCard";

export function ContactOverview() {
  return (
    <section className="w-full max-w-[80rem] mx-auto space-y-8 py-6 px-4 sm:px-8 lg:px-12" id="contact">
      {/* Header with Fade-in Animation */}
      <div className="text-center space-y-3 animate-fade-in-up">
        <h1
          className="font-serif font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.08]  text-primary tracking-tight"
          style={{ fontFamily: "var(--font-fraunces, serif)" }}
        >
          Contact VERIS
        </h1>

        <p className="font-sans text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Have a question, a partnership idea, or feedback for the team? Reach
          us through any of the official channels below.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in-up animation-delay-200">
        {CONTACTS.map((contact) => (
          <ContactCard key={contact.title} contact={contact} />
        ))}
      </div>

      {/* On-Campus Office Footer Banner */}
      <div className="p-5 sm:p-6 bg-card border border-border rounded-[1.5rem] shadow-soft flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left animate-fade-in-up animation-delay-400">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider text-primary">
              On-Campus Headquarters
            </h4>
            <div className="space-y-0.5 text-[0.72rem] sm:text-xs md:text-sm text-foreground font-medium mt-0.5">
              <p>Department of Computer Science and Technology</p>
              <p>Visayas State University, Baybay City, Leyte</p>
            </div>
          </div>
        </div>

        <Link
          href="/faq"
          className="shrink-0 px-4 py-2 rounded-xl bg-muted hover:bg-accent text-foreground text-xs font-semibold transition-colors"
        >
          View FAQs
        </Link>
      </div>
    </section>
  );
}