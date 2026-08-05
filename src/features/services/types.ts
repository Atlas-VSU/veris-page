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

export interface EcosystemItem {
  title: string;
  description: string;
  IconComponent: React.ElementType;
  organicShapeClass: string;
  iconBgClass: string;
  iconColorClass: string;
  hoverColorClass: string;
  modalDetails: {
    fullDescription: string;
    link: string;
    photo: string | null;
  };
}

export interface FeaturedPlatformSlideshowProps {
  photos: string[];
  currentSlideIndex: number;
  onOpenModal: () => void;
}

export interface FeaturedPlatformModalProps {
  isOpen: boolean;
  onClose: () => void;
  photoUrl: string;
}

export interface FeaturedPlatformInfoProps {
  title: string;
  description: string;
  link: string;
}
