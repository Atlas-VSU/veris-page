import { supabase } from "@/lib/supabase/config";
import type {
  TeamMember,
  TeamMemberIcon,
  TeamMemberRole,
} from "../types/team.types";

const ROLE_VALUES: TeamMemberRole[] = ["lead", "developer", "qa", "pm"];

function normalizeRole(role?: string | null): TeamMemberRole {
  if (role && ROLE_VALUES.includes(role as TeamMemberRole)) {
    return role as TeamMemberRole;
  }

  return "developer";
}

function normalizeIcon(icon?: string | null): TeamMemberIcon | undefined {
  if (!icon) {
    return undefined;
  }

  return icon as TeamMemberIcon;
}

export async function fetchTeamMembers(): Promise<TeamMember[]> {
  const { data, error } = await supabase
    .from("team_members")
    .select("id, name, title, role, year, image_url, icon")
    .order("year", { ascending: false })
    .order("name", { ascending: true });

  if (error) {
    console.error("Failed to fetch team members:", error);
    return [];
  }

  return (data ?? []).map((member) => ({
    id: String(member.id),
    name: String(member.name),
    title: String(member.title),
    role: normalizeRole(member.role as string | null | undefined),
    year: String(member.year),
    imageUrl: member.image_url ? String(member.image_url) : undefined,
    icon: normalizeIcon(member.icon as string | null | undefined),
  }));
}
