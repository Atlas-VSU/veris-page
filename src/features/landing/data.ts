import type { DevServiceFeatureItem, KeyBenefitItem } from './types/types';
import type { Testimonial } from './types/types';


// DATA FOR KEY BENEFITS SECTION
export const DEFAULT_BENEFITS: KeyBenefitItem[] = [
  {
    id: 'benefit-1',
    title: 'Friction-Free Onboarding',
    description: 'Self-registration eliminates long queues and manual encoding bottlenecks during peak enrollment.',
    badge: 'For Students',
    highlight: 'Zero manual encoding queues',
    iconName: 'user-check',
  },
  {
    id: 'benefit-2',
    title: 'Real-Time Clearance Status',
    description: 'Complete dashboard visibility into unpaid fees, fines, and requirements with zero guesswork.',
    badge: 'Students & Officers',
    highlight: 'Instant status transparency',
    iconName: 'shield-check',
  },
  {
    id: 'benefit-3',
    title: 'Automated Admin Workflows',
    description: 'Automated fee calculation and payment checks free officers to focus on actual programs and events.',
    badge: 'For Officers',
    highlight: 'Saves 10+ hours weekly',
    iconName: 'zap',
  },
  {
    id: 'benefit-4',
    title: 'One Unified Campus Experience',
    description: 'A single, trusted platform students interact with across every campus organization from year 1 to graduation.',
    badge: 'University-Wide',
    highlight: '4-year process continuity',
    iconName: 'sparkles',
  },
];

export const DEFAULT_TRUST_FEATURES: DevServiceFeatureItem[] = [
  {
    id: 'trust-1',
    title: 'Dedicated Team',
    description: 'Built by students who understand actual student workflows.',
    iconName: 'code',
  },
  {
    id: 'trust-2',
    title: 'Continuous Upgrades',
    description: 'Includes annual fixes, updates, and backend scaling.',
    iconName: 'refresh',
  },
  {
    id: 'trust-3',
    title: 'Responsive Context Support',
    description: 'Quick issue resolution directly from the core developers.',
    iconName: 'headphones',
  },
  {
    id: 'trust-4',
    title: 'Institutional Continuity',
    description: 'Maintained under Project Atlas to persist beyond single semesters.',
    iconName: 'building',
  },
];

// DATA FOR TESTIMONIALS SECTION
export const defaultTestimonials: Testimonial[] = [
  {
    firstName: "Kleenie Elumene",
    lastName: "Yuzon",
    role: "USSC Treasurer",
    service: "USSC Connect",
    message:
      `USSC Connect has made our work as student leaders more organized and efficient. As clearance and record management has been a longstanding concern, the existence of USSC Connect felt like a weight had finally been taken off our shoulders. 

      I appreciate having a system that reduces manual work. The integration of USSC Connect with SUREPay, which make online payments available and also releases customized digital receipts, has offered greater convenience for the students we aim to serve. I also appreciate how proactive and responsive the VERIS team has been to our feedback and actual needs on the ground throughout the entire development. 

      It has been fulfilling to see the platform develop from an idea into something that can genuinely support student governance. I believe there's still so much potential for expansion of the system with the drive and passion the team has for their work. I look forward to seeing USSC Connect and the entire team behind it continue to grow and become an even more integral part of student services at VSU.`,
    avatarPicture:
      "/testimonial-img/Kleenie-Elumene-Yuzon.jpg",
    blobShape: "blob-shape-1",
    accent: "primary",
    featured: true,
  },
  {
    firstName: "Kyle",
    lastName: "Ambid",
    role: "USSC President",
    service: "USSC Connect",
    message: `Thank you for bringing to life the dreams we once had for the council. You have helped us make the system more organized and systematic—from long queues to a smoother and more efficient process.
      I am truly grateful for the God-given talent you all have and for the way you have used it in service of the Viscan community. Thank you for the time, effort, and heart you have given to the council. Your contribution has made a difference, and I hope you know how much your service is appreciated.`,
    avatarPicture:
      "/testimonial-img/Kyle-Ambid.jpeg",
    blobShape: "blob-shape-2",
    accent: "primary",
  },
  {
    firstName: "Crystel Jane",
    lastName: "Gadil",
    role: "USSC Committee Member",
    service: "USSC Connect",
    message:
      `In my experience, signing clearances and collecting payments was easy, the lines moved quickly, allowing us to assist many students daily. And accessing pending payments and clearing them in the system was seamless, as it required just a few clicks instead of manually updating multiple spreadsheet cells. 
      And because fines were also logged automatically from faculty attendance checks at events, students rarely questioned the accuracy of how their fines came to be. Overall, it made the entire process much smoother, more reliable, and hassle-free for the council and also the students.`,
    avatarPicture:
      "/testimonial-img/Crystel-Jane-Gadil.jpg",
    blobShape: "blob-shape-3",
    accent: "secondary",
  },
  {
    firstName: "Reniel",
    lastName: "Emberso",
    role: "USSC Auditor",
    service: "USSC Connect",
    message: `USSC Connect reflects VSU’s commitment to innovation by making student services more accessible, efficient, and transparent. As a student-centered initiative, it simplifies processes—from recording attendance to managing transactions—while making it easier for both students and student officers to access, manage, and deliver services. More than a digital system, it brings innovation closer to every Viscan.`,
    avatarPicture:
      "/testimonial-img/Reniel-Emberso.jpeg",
    blobShape: "blob-shape-1",
    accent: "secondary",
  }

];

export const BlobRadius: Record<Testimonial["blobShape"], string> = {
  "blob-shape-1": "60% 40% 30% 70% / 60% 30% 70% 40%",
  "blob-shape-2": "50% 50% 30% 70% / 50% 60% 40% 50%",
  "blob-shape-3": "40% 60% 70% 30% / 40% 50% 50% 60%",
};