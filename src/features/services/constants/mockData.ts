import { FileSliders, NotepadText, Map, FileText, Users, Database } from "lucide-react";

export const styleTemplates = [
  {
    Icon: FileSliders,
    organicShapeClass: "organic-card-4",
    iconBgClass: "bg-success-muted",
    iconColorClass: "text-primary",
    hoverColorClass: "group-hover:text-primary",
  },
  {
    Icon: NotepadText,
    organicShapeClass: "organic-card-5",
    iconBgClass: "bg-warning-muted",
    iconColorClass: "text-secondary",
    hoverColorClass: "group-hover:text-secondary",
  },
  {
    Icon: Map,
    organicShapeClass: "organic-card-6",
    iconBgClass: "bg-success-muted",
    iconColorClass: "text-primary",
    hoverColorClass: "group-hover:text-primary",
  },
  {
    Icon: FileText,
    organicShapeClass: "organic-card-4",
    iconBgClass: "bg-success-muted",
    iconColorClass: "text-primary",
    hoverColorClass: "group-hover:text-primary",
  },
  {
    Icon: Users,
    organicShapeClass: "organic-card-5",
    iconBgClass: "bg-warning-muted",
    iconColorClass: "text-secondary",
    hoverColorClass: "group-hover:text-secondary",
  },
  {
    Icon: Database,
    organicShapeClass: "organic-card-6",
    iconBgClass: "bg-success-muted",
    iconColorClass: "text-primary",
    hoverColorClass: "group-hover:text-primary",
  }
];

export const mockEcosystemData = [
  {
    title: "VERIS System",
    description: "A modern web app for organizations to efficiently manage event attendance, with a Plus tier for handling fees, fines, and student clearances.",
    link: "https://veris.fc-ssc.online/",
    photo: '/screenshots/system.png'
  },
  {
    title: "VERIS Student Portal",
    description: "A separate repository for the VERIS system's existing public student modules for Plan subscribers.",
    link: "https://veris-student-portal.fc-ssc.online/",
    photo: '/screenshots/studentportal.png'
  },
  {
    title: "VSU E-Passport",
    description: "A mobile and tablet web app for the Visayas State University (USSC) campus tour. Students navigate a passport-style UI and 'stamp' landmarks by uploading on-site photos.",
    link: "https://ussc-epassport.fc-ssc.online/",
    photo: '/screenshots/passport.png'
  }
];

export const mockFeaturedPlatformData = {
  title: "USSC Connect",
  description: "A custom web application developed exclusively for the USSC to automate organizational transactions. It streamlines attendance tracking, event management, fee and fine collection, and student clearance processes.",
  link: "https://coral-ussc-bay.vercel.app/",
  photos: [
    '/screenshots/ussc_1.png',
    '/screenshots/ussc_2.png',
    '/screenshots/ussc_3.png',
    '/screenshots/ussc_4.png',
    '/screenshots/ussc_5.png',
    '/screenshots/ussc_6.png',
    '/screenshots/ussc_7.png',
    '/screenshots/ussc_8.png'
  ]
};
