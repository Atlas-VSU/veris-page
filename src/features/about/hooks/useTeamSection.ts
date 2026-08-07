import { useEffect, useMemo, useState } from "react";
import { getTeamMembersByYear } from "../data/teamGroups";
import { fetchTeamMembers } from "../services/teamMemberService";

export function useTeamSection() {
  const [members, setMembers] = useState([] as Awaited<ReturnType<typeof fetchTeamMembers>>);
  const [year, setYear] = useState("2025");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadMembers() {
      setLoading(true);
      const nextMembers = await fetchTeamMembers();

      if (isMounted) {
        setMembers(nextMembers);
        setYear((currentYear) => {
          const availableYears = Array.from(new Set(nextMembers.map((member) => member.year))).sort(
            (left, right) => Number(right) - Number(left),
          );

          if (availableYears.includes(currentYear)) {
            return currentYear;
          }

          return availableYears[0] ?? "2025";
        });
        setLoading(false);
      }
    }

    void loadMembers();

    return () => {
      isMounted = false;
    };
  }, []);

  const years = useMemo(
    () => Array.from(new Set(members.map((member) => member.year))).sort((left, right) => Number(right) - Number(left)),
    [members],
  );

  const groupedMembers = useMemo(() => getTeamMembersByYear(members, year), [members, year]);

  return {
    year,
    setYear,
    years,
    loading,
    ...groupedMembers,
  };
}
