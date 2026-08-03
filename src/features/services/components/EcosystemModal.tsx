import React from 'react';
import { X, ExternalLink } from "lucide-react";
import { Fraunces } from 'next/font/google';

const fraunces = Fraunces({ subsets: ['latin'], weight: ['400', '500', '600'] });

import { EcosystemModalDetails } from '../types';

interface EcosystemModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  modalDetails: EcosystemModalDetails;
}

export function EcosystemModal({ isOpen, onClose, title, modalDetails }: EcosystemModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm animate-fade-in">
      <div 
        className="absolute inset-0" 
        onClick={onClose}
      ></div>
      <div className="bg-card organic-card-1 p-8 md:p-12 shadow-3xl max-w-5xl w-full flex flex-col lg:flex-row gap-12 items-center border border-border relative z-10 animate-fade-in-up">
        
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-muted text-muted-foreground transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <h3 className={`${fraunces.className} text-4xl md:text-5xl font-medium text-foreground leading-tight`}>
            {title}
          </h3>
          
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            {modalDetails.fullDescription}
          </p>

          <div className="pt-2">
            <a 
              href={modalDetails.link || "#"} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
            >
              Visit Website <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 w-full flex items-center justify-center">
          {modalDetails.imageNode}
        </div>

      </div>
    </div>
  );
}
