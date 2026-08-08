import type { DevServiceFeatureItem, KeyBenefitItem } from "../types/types";
import type { Testimonial } from "../types/types";

// DATA FOR KEY BENEFITS SECTION
export const DEFAULT_BENEFITS: KeyBenefitItem[] = [
  {
    id: "benefit-1",
    title: "Friction-Free Onboarding",
    description:
      "Self-registration eliminates long queues and manual encoding bottlenecks during peak enrollment.",
    badge: "For Students",
    highlight: "Zero manual encoding queues",
    iconName: "user-check",
  },
  {
    id: "benefit-2",
    title: "Real-Time Clearance Status",
    description:
      "Complete dashboard visibility into unpaid fees, fines, and requirements with zero guesswork.",
    badge: "Students & Officers",
    highlight: "Instant status transparency",
    iconName: "shield-check",
  },
  {
    id: "benefit-3",
    title: "Automated Admin Workflows",
    description:
      "Automated fee calculation and payment checks free officers to focus on actual programs and events.",
    badge: "For Officers",
    highlight: "Saves 10+ hours weekly",
    iconName: "zap",
  },
  {
    id: "benefit-4",
    title: "One Unified Campus Experience",
    description:
      "A single, trusted platform students interact with across every campus organization from year 1 to graduation.",
    badge: "University-Wide",
    highlight: "4-year process continuity",
    iconName: "sparkles",
  },
];

export const DEFAULT_TRUST_FEATURES: DevServiceFeatureItem[] = [
  {
    id: "trust-1",
    title: "Dedicated Team",
    description: "Built by students who understand actual student workflows.",
    iconName: "code",
  },
  {
    id: "trust-2",
    title: "Continuous Upgrades",
    description: "Includes annual fixes, updates, and backend scaling.",
    iconName: "refresh",
  },
  {
    id: "trust-3",
    title: "Responsive Context Support",
    description: "Quick issue resolution directly from the core developers.",
    iconName: "headphones",
  },
  {
    id: "trust-4",
    title: "Institutional Continuity",
    description:
      "Maintained under Project Atlas to persist beyond single semesters.",
    iconName: "building",
  },
];

// DATA FOR TESTIMONIALS SECTION
export const defaultTestimonials: Testimonial[] = [
  {
    firstName: "USSC",
    lastName: "Officer",
    role: "Finance Committee",
    service: "USSC Connect",
    message:
      "Before USSC Connect, clearance season meant hours of manually checking payment proofs and cross-referencing spreadsheets. Now it's just a dashboard away.",
    avatarPicture:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    blobShape: "blob-shape-1",
    accent: "primary",
    featured: true,
  },
  {
    firstName: "USSC",
    lastName: "Officer",
    role: "Membership Committee",
    service: "VERIS Attendance",
    message:
      "Attendance tracking used to be pen and paper at every event. With VERIS, we know instantly who's cleared and who still owes fines.",
    avatarPicture:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    blobShape: "blob-shape-2",
    accent: "secondary",
  },
  {
    firstName: "USSC",
    lastName: "Officer",
    role: "Enrollment Support Team",
    service: "OSSE Self-Registration",
    message:
      "Onboarding freshmen at OSSE was so much smoother with self-registration — officers just verified instead of encoding everything by hand.",
    avatarPicture:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    blobShape: "blob-shape-3",
    accent: "primary",
  },
  {
    firstName: "Student",
    lastName: "Name",
    role: "ABELS",
    service: "Clearance Settlement",
    message:
      "What I appreciate most is the elimination of long queues for hours during the settling of clearance status.",
    avatarPicture:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    blobShape: "blob-shape-1",
    accent: "secondary",
  },
  {
    firstName: "Freshman",
    lastName: "Name",
    role: "BSCS",
    service: "E-Passport",
    message: "The E-Passport made the campus tour much more enjoyable!",
    avatarPicture:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    blobShape: "blob-shape-2",
    accent: "primary",
  },
];

export const BlobRadius: Record<Testimonial["blobShape"], string> = {
  "blob-shape-1": "60% 40% 30% 70% / 60% 30% 70% 40%",
  "blob-shape-2": "50% 50% 30% 70% / 50% 60% 40% 50%",
  "blob-shape-3": "40% 60% 70% 30% / 40% 50% 50% 60%",
};
