"use client";

import React, { useState } from 'react';
import { ArrowRight } from "lucide-react";
import { Fraunces } from 'next/font/google';
import { EcosystemModal } from './EcosystemModal';

const fraunces = Fraunces({ subsets: ['latin'], weight: ['400', '500', '600'] });

import { EcosystemModalDetails } from '../types';

interface EcosystemCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  organicShapeClass: string;
  iconBgClass: string;
  iconColorClass: string;
  hoverColorClass: string;
  modalDetails: EcosystemModalDetails;
}

export function EcosystemCard({
  title,
  description,
  icon,
  organicShapeClass,
  iconBgClass,
  iconColorClass,
  hoverColorClass,
  modalDetails
}: EcosystemCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        onClick={() => setIsModalOpen(true)}
        className={`bg-card ${organicShapeClass} p-8 shadow-soft border border-border flex flex-col space-y-6 group hover:shadow-float transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
      >
        <div className={`w-12 h-12 ${iconBgClass} rounded-full flex items-center justify-center`}>
          <div className={iconColorClass}>{icon}</div>
        </div>
        <h3 className={`${fraunces.className} text-2xl text-foreground font-medium`}>{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed flex-1">
          {description}
        </p>
        <button className={`inline-flex items-center gap-2 text-foreground text-sm font-medium ${hoverColorClass} transition-colors`}>
          View <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <EcosystemModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={title}
        modalDetails={modalDetails}
      />
    </>
  );
}
