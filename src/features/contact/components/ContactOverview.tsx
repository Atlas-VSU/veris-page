import { CONTACTS } from "../data";
import { ContactCard } from "./ContactCard";

export function ContactOverview() {
  return (
    <section className="py-10 px-4 md:px-20 bg-background" id="contact">
      <div className="text-center mb-16">
        <span className="font-sans text-sm font-bold text-primary tracking-widest uppercase mb-3 block">
          Get In Touch
        </span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#2C2C24] tracking-tight leading-tight">
          Contact VERIS
        </h2>
        <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        <p className="font-sans text-muted-foreground max-w-xl mx-auto mt-6">
          Have a question, a partnership idea, or feedback for the team? Reach
          us through any of the channels below.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {CONTACTS.map((contact) => (
          <ContactCard key={contact.title} contact={contact} />
        ))}
      </div>
    </section>
  );
}
