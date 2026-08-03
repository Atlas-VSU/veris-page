import React from 'react';

export interface EcosystemModalDetails {
  fullDescription: string;
  link?: string;
  imageNode: React.ReactNode;
}

export interface EcosystemCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  organicShapeClass: string;
  iconBgClass: string;
  iconColorClass: string;
  hoverColorClass: string;
  modalDetails: EcosystemModalDetails;
}

export interface EcosystemModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  modalDetails: EcosystemModalDetails;
}
