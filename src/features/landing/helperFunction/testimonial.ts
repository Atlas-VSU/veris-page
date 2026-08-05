import type { Testimonial } from "../types";
import { BlobRadius } from "../data";

/**
 * Returns user initials from first and last name.
 */
export function getInitials(firstName?: string, lastName?: string): string {
  const first = firstName?.[0] || "";
  const last = lastName?.[0] || "";
  return `${first}${last}`.toUpperCase();
}

/**
 * Combines first and last name into a single string.
 */
export function getFullName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`.trim();
}

/**
 * Generates dynamic Tailwind class names for the Avatar component based on accent type.
 */
export function getAvatarColorClasses(accent: Testimonial["accent"]): {
  bg: string;
  fg: string;
} {
  return accent === "primary"
    ? { bg: "bg-[var(--primary)]/15", fg: "text-[var(--primary)]" }
    : { bg: "bg-[var(--secondary)]/15", fg: "text-[var(--secondary)]" };
}

/**
 * Generates dynamic Tailwind class names for the ServiceTag component based on accent type.
 */
export function getServiceTagClasses(accent: Testimonial["accent"]): string {
  return accent === "primary"
    ? "bg-primary/10 text-primary border-primary/20"
    : "bg-secondary/10 text-secondary border-secondary/20";
}

/**
 * Gets border radius value for a given blob shape from data mapping.
 */
export function getBlobRadius(blobShape: Testimonial["blobShape"]): string {
  const map: Record<Testimonial["blobShape"], string> = BlobRadius;
  return map[blobShape] || "50%";
}

/**
 * Maps grid item index to animation delay classes for staggered transitions.
 */
export function getAnimationDelayClass(index: number): string {
  const delays = [
    "animation-delay-300",
    "animation-delay-400",
    "animation-delay-500",
  ];
  return delays[index] ?? "animation-delay-500";
}

/**
 * Extracts and partitions testimonials into featured, top-right, and list items.
 */
export function partitionTestimonials(items: Testimonial[] = []) {
  if (!items.length) {
    return { featured: undefined, firstRest: undefined, remainingRest: [] };
  }

  const featured = items.find((t) => t.featured) || items[0];
  const rest = items.filter((t) => t !== featured);
  const firstRest = rest[0];
  const remainingRest = rest.slice(1);

  return { featured, firstRest, remainingRest };
}