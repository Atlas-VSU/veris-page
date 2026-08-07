"use client";

import React, { useState } from 'react';
import { ArrowRight } from "lucide-react";
import { EcosystemModal } from './EcosystemModal';
import { EcosystemModalDetails, EcosystemCardProps } from '../types';

export function EcosystemCard({
  title,
  description,
  organicShapeClass,
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

        <h3 className="font-serif text-2xl text-neutral-900 font-medium">{title}</h3>
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
