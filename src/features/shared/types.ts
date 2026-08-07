export interface NavLink {
  name: string;
  href: string;
  icon: any;
}

export interface YearSelectProps {
  value: string;
  years: string[];
  onChange: (year: string) => void;
  className?: string;
}