"use client";

import { ArrowRight, Shield } from "lucide-react";
import { Fraunces } from 'next/font/google';

const fraunces = Fraunces({ subsets: ['latin'], weight: ['400', '500', '600'] });

interface FeaturedPlatformInfoProps {
  title: string;
  description: string;
  link: string;
}

export function FeaturedPlatformInfo({ title, description, link }: FeaturedPlatformInfoProps) {
  return (
    <div className="flex-1 space-y-6">
      <div className="w-12 h-12 bg-success-muted rounded-full flex items-center justify-center">
        <Shield className="w-6 h-6 text-primary" />
      </div>
      
      <h3 className={`${fraunces.className} text-4xl md:text-5xl font-medium text-heading leading-tight`}>
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
