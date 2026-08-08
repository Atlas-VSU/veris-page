import { Mail, Globe, Phone } from "lucide-react";
import { ContactEntry } from "./types";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.87h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}

export const CONTACTS: ContactEntry[] = [
  {
    icon: Mail,
    title: "Email",
    blobClassName: "blob-shape-1 bg-primary",
    links: [
      { label: "veris-dev@vsu.edu.ph", href: "mailto:veris-dev@vsu.edu.ph" },
    ],
  },
  {
    icon: FacebookIcon,
    title: "Facebook",
    blobClassName: "blob-shape-2 bg-secondary",
    links: [
      {
        label: "FC-SSC Page",
        href: "https://www.facebook.com/profile.php?id=61580632527281",
      },
      { label: "CS3 Page", href: "https://www.facebook.com/VSUCSCube" },
    ],
  },
  {
    icon: Globe,
    title: "Website",
    blobClassName: "blob-shape-3 bg-primary",
    links: [
      {
        label: "veris-dev.fc-ssc.online",
        href: "https://veris-dev.fc-ssc.online/",
      },
    ],
  },
  {
    icon: Phone,
    title: "Phone",
    blobClassName: "blob-shape-1 bg-secondary",
    links: [
      // TODO: replace with the actual PM and President contact numbers
      { label: "PM — +63 969 223 1657", href: "tel:+639692231657" },
      { label: "President — +63 960 522 0241", href: "tel:+639605220241" },
    ],
  },
];
