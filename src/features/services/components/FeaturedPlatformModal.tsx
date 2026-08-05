"use client";

import { X } from "lucide-react";

import { FeaturedPlatformModalProps } from "../types";

export function FeaturedPlatformModal({ isOpen, onClose, photoUrl }: FeaturedPlatformModalProps) {
  if (!isOpen) return null;
  
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fade-in" 
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl w-full mx-auto animate-zoom-in" 
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 md:-right-12 md:top-0 w-10 h-10 rounded-full bg-muted/50 hover:bg-muted flex items-center justify-center text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        <img 
          src={photoUrl} 
          alt="Platform Mockup Full" 
          className="w-full h-auto max-h-[85vh] object-contain rounded-3xl shadow-2xl bg-muted/20"
        />
      </div>
    </div>
  );
}
