import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import type { ContactEntry } from "../types";

export function ContactCard({ contact }: { contact: ContactEntry }) {
  const Icon = contact.icon;

  return (
    <Card className="bg-card border-border shadow-soft hover:shadow-float hover:border-secondary/40 transition-all duration-300 rounded-[1.5rem] overflow-hidden group">
      <CardContent className="p-6 flex items-start gap-4">
        {/* Organic Custom Shape Icon Container */}
        <div
          className={`w-12 h-12 shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${contact.blobClassName}`}
        >
          <Icon className="h-5 w-5 text-primary-foreground" />
        </div>

        {/* Content & Links */}
        <div className="flex flex-col gap-2 min-w-0 flex-1">
          <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {contact.title}
          </h3>

          <div className="space-y-1.5 divide-y divide-border/50">
            {contact.links.map((link) => {
              const isExternal = link.href.startsWith("http");
              return (
                <a
                  key={link.href + link.label}
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="pt-1.5 first:pt-0 flex items-center justify-between group/link text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="truncate font-sans font-medium">
                    {link.label}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 shrink-0 opacity-0 -translate-x-1 translate-y-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 group-hover/link:translate-y-0 transition-all duration-200 text-primary" />
                </a>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}