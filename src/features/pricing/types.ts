export interface SubscriptionTier {
    id: "basic" | "plus" | "premium" | string;
    name: string;
    tagline: string;
    rate: string;
    rateUnit: string;
    minimumNote: string;
    minStudents: number;
    floorPrice: number;
    perStudentRate: number;
    subtitle?: string;
    features: string[];
    orgLimit: string;
    organicClass: string;
}

export interface SubscriptionTierCardProps {
    tier: SubscriptionTier;
}

export interface PricingTableProps {
  tiers: SubscriptionTier[];
}