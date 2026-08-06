"use client";

import { ArrowRight } from "lucide-react";
import { FeaturedPlatformInfoProps } from "../types";

export function FeaturedPlatformInfo({ title, description, link }: FeaturedPlatformInfoProps) {
  return (
    <div className="w-full lg:w-[40%] xl:w-[35%] shrink-0 space-y-6">

      
      <h3 className="font-serif text-4xl md:text-5xl font-medium text-neutral-900 leading-tight">
        {title}
      </h3>
      
      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
        {description}
      </p>
      
      <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-border text-foreground hover:bg-accent hover:text-accent-foreground transition-colors font-medium text-sm">
        Explore <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
}
