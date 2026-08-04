"use client";

import { ChevronDown } from "lucide-react";

interface YearSelectProps {
  value: string;
  years: string[];
  onChange: (year: string) => void;
  className?: string;
}

/**
 * Generic, domain-agnostic year filter control.
 * Lives in `shared` since it has no knowledge of the feature that uses it.
 */
export function YearSelect({
  value,
  years,
  onChange,
  className = "",
}: YearSelectProps) {
  return (
    <div className="relative inline-block">
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-label="Filter by year"
        className={`appearance-none rounded-full border border-warm-border bg-surface-container-low
          text-primary font-body-md text-sm px-xl py-sm pr-2xl cursor-pointer
          focus:outline-none focus:border-primary ${className}`}
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      <ChevronDown
        aria-hidden="true"
        className="pointer-events-none absolute right-lg top-1/2 -translate-y-1/2 h-4 w-4 text-primary"
      />
    </div>
  );
}
