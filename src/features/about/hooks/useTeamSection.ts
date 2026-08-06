import { useMemo, useState } from "react";
import { getTeamMembersByYear } from "../data/teamGroups";
import { TEAM_MEMBERS, TEAM_YEARS } from "../data/teamMembers";

export function useTeamSection() {
  const [year, setYear] = useState(TEAM_YEARS[0] ?? "2025");

  const groupedMembers = useMemo(() => getTeamMembersByYear(TEAM_MEMBERS, year), [year]);

  return {
    year,
    setYear,
    years: TEAM_YEARS,
    ...groupedMembers,
  };
}
