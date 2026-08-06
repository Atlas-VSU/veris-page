import { supabase } from "@/lib/supabase/config";
import { SubscriptionTier } from "../types";

export const fallbackTiers: SubscriptionTier[] = [
  {
    id: "basic",
    name: "Basic",
    tagline: "Attendance Management",
    rate: "₱2",
    rateUnit: "/ student / year",
    minimumNote: "Minimum 100 students · ₱200/yr floor",
    minStudents: 100,
    floorPrice: 200,
    perStudentRate: 2,
    orgLimit: "1 Org Account",
    organicClass: "organic-card-1",
    features: [
      "Secure login",
      "Dashboard with real-time attendance trends",
      "Create & manage unlimited events",
      "Real-time attendee tracking & timestamps",
      "Quick check-in via student ID or name",
      "Member directory with bulk import",
      "Unlimited members and events",
      "Limited to 1 Org Account",
    ],
  },
  {
    id: "plus",
    name: "Plus",
    tagline: "Basic + Financial Management",
    rate: "₱3",
    rateUnit: "/ student / year",
    minimumNote: "Minimum 75 students · ₱225/yr floor",
    minStudents: 75,
    floorPrice: 225,
    perStudentRate: 3,
    subtitle: "Everything from BASIC plan plus:",
    orgLimit: "Max 3 Org Accounts",
    organicClass: "organic-card-2",
    features: [
      "Membership fees (semester, event, custom)",
      "Define fine types & standard amounts",
      "Automated fees for registered members",
      "Automated fines from attendance records",
      "Officer-side clearance management",
      "Student-Facing Modules: Payment verification workflow, Self-Registration, and Update Information",
      "Max 3 Org Accounts",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "Full Suite + Student Portal",
    rate: "₱4",
    rateUnit: "/ student / year",
    minimumNote: "Minimum 60 students · ₱240/yr floor",
    minStudents: 60,
    floorPrice: 240,
    perStudentRate: 4,
    subtitle: "Everything from PLUS plan plus:",
    orgLimit: "Max 5 Org Accounts",
    organicClass: "organic-card-3",
    features: [
      "Dedicated Student Portal Interface",
      "Student account via Google Sign-In",
      "Student dashboard: balances & history",
      "Waive Appeal for fees and fines",
      "Financial Reports and Analytics",
      "Max 5 Org Accounts",
    ],
  },
];

function parseFeatures(jsonStr?: string, fallback: string[] = []): string[] {
  if (!jsonStr) return fallback;
  try {
    return JSON.parse(jsonStr) as string[];
  } catch {
    console.error("Failed to parse features JSON");
    return fallback;
  }
}

export async function getPricingTiers(): Promise<SubscriptionTier[] | null> {
  const { data, error } = await supabase
    .from("site_content")
    .select("key, value")
    .like("key", "pricing_%");

  if (error || !data || data.length === 0) {
    console.error("Failed to fetch site_content pricing keys:", error);
    return null;
  }

  // Convert array of rows into key-value dictionary
  const contentMap = data.reduce(
    (acc, row) => {
      acc[row.key] = row.value;
      return acc;
    },
    {} as Record<string, string>,
  );

  return fallbackTiers.map((tier) => {
    const prefix = `pricing_${tier.id}_`;

    const rate = contentMap[`${prefix}rate`] ?? tier.rate;
    const rateUnit = contentMap[`${prefix}rate_unit`] ?? tier.rateUnit;
    const minStudents = contentMap[`${prefix}min_students`]
      ? Number(contentMap[`${prefix}min_students`])
      : tier.minStudents;
    const floorPrice = contentMap[`${prefix}floor_price`]
      ? Number(contentMap[`${prefix}floor_price`])
      : tier.floorPrice;
    const orgLimit = contentMap[`${prefix}org_limit`] ?? tier.orgLimit;
    const features = parseFeatures(
      contentMap[`${prefix}features`],
      tier.features,
    );

    const minimumNote = `Minimum ${minStudents} students · ₱${floorPrice}/yr floor`;

    return {
      ...tier,
      rate,
      rateUnit,
      minStudents,
      floorPrice,
      minimumNote,
      orgLimit,
      features,
    };
  });
}
