import type { TeamMember, TeamMemberRole } from "../types/team.types";

export function getMembersByRoleAndYear(
  members: TeamMember[],
  year: string,
  role: TeamMemberRole,
) {
  return members.filter((member) => member.role === role && member.year === year);
}

export function getTeamMembersByYear(members: TeamMember[], year: string) {
  return {
    leads: getMembersByRoleAndYear(members, year, "lead"),
    developers: getMembersByRoleAndYear(members, year, "developer"),
    qaMembers: getMembersByRoleAndYear(members, year, "qa"),
  };
}
