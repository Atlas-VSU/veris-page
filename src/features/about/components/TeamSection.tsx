"use client";

import { useMemo, useState } from "react";
import { YearSelect } from "@/features/shared/components/YearSelect";
import { TeamMemberCard } from "./TeamMemberCard";
import type { TeamMember } from "../types/team.types";

const YEARS = ["2025", "2026"];

const TEAM: TeamMember[] = [
  {
    id: "pauline-dejos-2026",
    name: "Pauline Dejos",
    title: "Project Manager",
    role: "lead",
    year: "2026",
    icon: "briefcase",
  },
  {
    id: "pauline-dejos-2025",
    name: "Pauline Dejos",
    title: "Lead Frontend Dev",
    role: "lead",
    year: "2025",
    icon: "code",
  },
  {
    id: "john-rhuel-laurente-2025",
    name: "John Rhuel Laurente",
    title: "Project Manager",
    role: "lead",
    year: "2025",
    icon: "briefcase",
  },
  {
    id: "jade-jaballa-2025",
    name: "Jade Jaballa",
    title: "Lead Backend Developer",
    role: "developer",
    year: "2025",
    icon: "terminal",
  },
  {
    id: "joshua-sosmena-2025",
    name: "Joshua Sosmeña",
    title: "Technical Lead",
    role: "lead",
    year: "2025",
    icon: "briefcase",
  },
  {
    id: "xyryll-jay-taneo-2026",
    name: "Xyryll Jay Taneo",
    title: "Lead Backend Developer",
    role: "developer",
    year: "2026",
    icon: "terminal",
  },
  {
    id: "xyryll-jay-taneo-2025",
    name: "Xyryll Jay Taneo",
    title: "Backend Developer",
    role: "developer",
    year: "2025",
    icon: "terminal",
  },
  {
    id: "kerby-dolamos-2025",
    name: "Kerby Dolamos",
    title: "Lead Frontend Developer",
    role: "developer",
    year: "2025",
    icon: "code",
  },
  {
    id: "kerby-dolamos-dev",
    name: "Kerby Dolamos",
    title: "Frontend Developer",
    role: "developer",
    year: "2025",
    icon: "code",
  },
  {
    id: "jamir-andrade-2026",
    name: "Jamir Andrade",
    title: "Backend Developer",
    role: "developer",
    year: "2026",
    icon: "terminal",
  },
  {
    id: "jamir-andrade-2025",
    name: "Jamir Andrade",
    title: "Backend Developer",
    role: "developer",
    year: "2025",
    icon: "terminal",
  },
  {
    id: "ynigo-nino-ramas-2026",
    name: "Yñigo Niño Ramas",
    title: "Frontend Developer",
    role: "developer",
    year: "2026",
    icon: "code",
  },
  {
    id: "ynigo-nino-ramas-2025",
    name: "Yñigo Niño Ramas",
    title: "Frontend Developer",
    role: "developer",
    year: "2025",
    icon: "code",
  },
  {
    id: "clarissa-dolor-2026",
    name: "Clarissa Dolor",
    title: "Frontend Developer",
    role: "developer",
    year: "2026",
    icon: "code",
  },
  {
    id: "clarissa-dolor-2025",
    name: "Clarissa Dolor",
    title: "Frontend Developer",
    role: "developer",
    year: "2025",
    icon: "code",
  },
  {
    id: "pete-piangco-2026",
    name: "Pete Piangco",
    title: "Frontend Developer",
    role: "developer",
    year: "2026",
    icon: "code",
  },
  {
    id: "pete-piangco-2025",
    name: "Pete Piangco",
    title: "QA",
    role: "qa",
    year: "2025",
    icon: "check-circle",
  },
  {
    id: "jerome-daniel-sta-agata-2026",
    name: "Jerome Daniel Sta. Agata",
    title: "Backend Developer",
    role: "developer",
    year: "2026",
    icon: "terminal",
  },
  {
    id: "jebron-ortula-2026",
    name: "Jebron Ortula",
    title: "Frontend Developer",
    role: "developer",
    year: "2026",
    icon: "code",
  },
  {
    id: "gian-suico-2026",
    name: "Gian Suico",
    title: "Backend Developer",
    role: "developer",
    year: "2026",
    icon: "terminal",
  },
  {
    id: "norman-john-bandibas-2026",
    name: "Norman John Bandibas",
    title: "Backend Developer",
    role: "developer",
    year: "2026",
    icon: "terminal",
  },
  {
    id: "martin-ybas-2026",
    name: "Martin Ybas",
    title: "Backend Developer",
    role: "developer",
    year: "2026",
    icon: "terminal",
  },
  {
    id: "raniel-john-flores-2026",
    name: "Raniel John Flores",
    title: "Lead QA",
    role: "qa",
    year: "2026",
    icon: "check-circle",
  },
  {
    id: "gabriel-angco-2026",
    name: "Gabriel Angco",
    title: "QA",
    role: "qa",
    year: "2026",
    icon: "check-circle",
  },
  {
    id: "francois-beltran-2026",
    name: "Francois Beltran",
    title: "QA",
    role: "qa",
    year: "2026",
    icon: "check-circle",
  },
  {
    id: "jumaico-correa-2026",
    name: "Jumaico Correa",
    title: "QA",
    role: "qa",
    year: "2026",
    icon: "check-circle",
  },
  {
    id: "frans-andrew-vermeir-2026",
    name: "Frans Andrew Vermeir",
    title: "QA",
    role: "qa",
    year: "2026",
    icon: "check-circle",
  },
];

export function TeamSection() {
  const [year, setYear] = useState(YEARS[0]);

  const leads = useMemo(
    () => TEAM.filter((m) => m.role === "lead" && m.year === year),
    [year],
  );
  const developers = useMemo(
    () => TEAM.filter((m) => m.role === "developer" && m.year === year),
    [year],
  );

  return (
    <section className="py-16 px-4 md:px-20 bg-background" id="team">
      <div className="text-center mb-16 relative">
        <h2 className="font-serif text-3xl text-foreground mb-3">
          The Minds Behind VERIS
        </h2>
        <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        <div className="mt-6 md:absolute md:top-0 md:right-0">
          <YearSelect value={year} years={YEARS} onChange={setYear} />
        </div>
      </div>

      <div className="space-y-16">
        {/* Leads */}
        <div>
          <h3 className="font-serif text-xl text-primary mb-6 text-center">
            Leads
          </h3>
          {leads.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-6">
              {" "}
              {leads.map((member) => (
                <TeamMemberCard key={member.id} member={member} size="lg" />
              ))}
            </div>
          ) : (
            <p className="text-center font-sans text-muted-foreground">
              No leadership on record for {year}.
            </p>
          )}
        </div>

        {/* Developers */}
        <div>
          <h3 className="font-serif text-xl text-destructive mb-6 text-center">
            Developers
          </h3>
          {developers.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {developers.map((member) => (
                <TeamMemberCard key={member.id} member={member} size="md" />
              ))}
            </div>
          ) : (
            <p className="text-center font-sans text-muted-foreground">
              No builders on record for {year}.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
