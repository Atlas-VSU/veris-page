export interface ContactLink {
  href: string;
  label: string;
}

export interface ContactEntry {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  links: ContactLink[];
  blobClassName: string;
}