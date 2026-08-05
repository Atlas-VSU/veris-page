// KEY BENEFIT SECTION TYPES

export interface KeyBenefitItem {
  id: string;
  title: string;
  description: string;
  badge?: string;
  highlight?: string;
  iconName?: 'user-check' | 'shield-check' | 'zap' | 'sparkles';
}

export interface DevServiceFeatureItem {
  id: string;
  title: string;
  description: string;
  iconName?: 'code' | 'refresh' | 'headphones' | 'building';
}

export interface KeyBenefitsProps {
  sectionTitle?: string;
  sectionSubtitle?: string;
  benefits?: KeyBenefitItem[];
  trustTitle?: string;
  trustSubtitle?: string;
  trustFeatures?: DevServiceFeatureItem[];
  className?: string;
}

// TESTIMONIAL SECTION TYPES

export type Testimonial = {
  id?: string;
  firstName: string;
  lastName: string;
  role: string;
  service: string;
  message: string;
  avatarPicture?: string;
  blobShape: "blob-shape-1" | "blob-shape-2" | "blob-shape-3";
  accent: "primary" | "secondary";
  featured?: boolean;
};

export interface TestimonialsProps {
  pillText?: string;
  title?: string;
  subtitle?: string;
  items?: Testimonial[];
  ctaTitle?: string;
  ctaSubtitle?: string;
  ctaButtonText?: string;
  ctaHref?: string;
  showCta?: boolean;
  className?: string;
}

// CTA SECTION TYPES

interface CtaSectionProps {
  showCta?: boolean;
  ctaTitle?: string;
  ctaSubtitle?: string;
  ctaButtonText?: string;
  ctaHref?: string;
  ctaMicrocopy?: string;
}
