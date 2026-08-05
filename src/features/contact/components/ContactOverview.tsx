import { Mail, Globe, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.87h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}

interface ContactLink {
  label: string;
  href: string;
}

interface ContactEntry {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  links: ContactLink[];
  blobClassName: string;
}

const CONTACTS: ContactEntry[] = [
  {
    icon: Mail,
    title: "Email",
    blobClassName: "blob-shape-1 bg-primary",
    links: [
      { label: "veris-dev@vsu.edu.ph", href: "mailto:veris-dev@vsu.edu.ph" },
    ],
  },
  {
    icon: FacebookIcon,
    title: "Facebook",
    blobClassName: "blob-shape-2 bg-secondary",
    links: [
      {
        label: "FC-SSC Page",
        href: "https://www.facebook.com/profile.php?id=61580632527281",
      },
      { label: "CS3 Page", href: "https://www.facebook.com/VSUCSCube" },
    ],
  },
  {
    icon: Globe,
    title: "Website",
    blobClassName: "blob-shape-3 bg-primary",
    links: [
      {
        label: "veris-dev.fc-ssc.online",
        href: "https://veris-dev.fc-ssc.online/",
      },
    ],
  },
  {
    icon: Phone,
    title: "Phone",
    blobClassName: "blob-shape-1 bg-secondary",
    links: [
      // TODO: replace with the actual PM and President contact numbers
      { label: "PM — +63 9XX XXX XXXX", href: "tel:+639XXXXXXXX" },
      { label: "President — +63 9XX XXX XXXX", href: "tel:+639XXXXXXXX" },
    ],
  },
];

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
        {CONTACTS.map((contact) => {
          const Icon = contact.icon;
          return (
            <Card
              key={contact.title}
              className="border-border shadow-soft hover:shadow-float transition-shadow duration-300"
            >
              <CardContent className="p-6 flex gap-4">
                <div
                  className={`w-14 h-14 shrink-0 flex items-center justify-center ${contact.blobClassName}`}
                >
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="flex flex-col gap-1 min-w-0">
                  <h3 className="font-serif text-lg text-foreground mb-1">
                    {contact.title}
                  </h3>
                  {contact.links.map((link) => (
                    <a
                      key={link.href + link.label}
                      href={link.href}
                      target={
                        link.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="truncate font-sans text-sm text-muted-foreground hover:text-primary hover:underline underline-offset-2 transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
