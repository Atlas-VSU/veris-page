import { Card, CardContent } from "@/components/ui/card";
import type { ContactEntry } from "../types";

export function ContactCard({ contact }: { contact: ContactEntry }) {
  const Icon = contact.icon;

  return (
    <Card className="border-border shadow-soft hover:shadow-float transition-shadow duration-300">
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
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
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
}
