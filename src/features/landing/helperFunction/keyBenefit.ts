import {
  UserCheck,
  ShieldCheck,
  Zap,
  Sparkles,
  Code2,
  RefreshCw,
  Headphones,
  Building2,
  type LucideIcon,
} from "lucide-react";

/**
 * Organic card shape tokens mapped for staggered UI designs.
 */
export const ORGANIC_SHAPES = [
  "organic-card-1",
  "organic-card-2",
  "organic-card-3",
  "organic-card-4",
] as const;

/**
 * Maps benefit string identifiers to Lucide icon components.
 */
export function getBenefitIcon(name?: string): LucideIcon {
  switch (name) {
    case "user-check":
      return UserCheck;
    case "shield-check":
      return ShieldCheck;
    case "zap":
      return Zap;
    case "sparkles":
      return Sparkles;
    default:
      return Sparkles;
  }
}

/**
 * Maps trust feature string identifiers to Lucide icon components.
 */
export function getTrustIcon(name?: string): LucideIcon {
  switch (name) {
    case "code":
      return Code2;
    case "refresh":
      return RefreshCw;
    case "headphones":
      return Headphones;
    case "building":
      return Building2;
    default:
      return Building2;
  }
}

/**
 * Returns an organic shape CSS class name based on the item index.
 */
export function getOrganicShapeClass(index: number): string {
  return ORGANIC_SHAPES[index % ORGANIC_SHAPES.length];
}

/**
 * Generates animation delay utility class for staggered list transitions.
 * @param index Zero-based item index
 * @param step Delay multiplier in milliseconds (default: 200)
 */
export function getAnimationDelayClass(index: number, step: number = 200): string {
  return `animation-delay-${(index + 1) * step}`;
}