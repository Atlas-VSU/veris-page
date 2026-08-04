"use client";

import { useMemo, useState } from "react";
import { YearSelect } from "../../shared/components/YearSelect";
import { TeamMemberCard } from "./TeamMemberCard";
import type { TeamMember } from "../types/team.types";

const YEARS = ["2024", "2023", "2022", "2021"];

const TEAM: TeamMember[] = [
  {
    id: "elena-thorne",
    name: "Elena Thorne",
    title: "Creative Director",
    role: "lead",
    year: "2024",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBaHN2837IIVLzQUesf2ud2eDnaeQjoIwmN_Xh0Yz4utFGJTbQyECXHDSDvmV1liHjBllu_9_6CbSx7HUYebjXLEGX2ltUIBxfMVIYCgmeroMymrXPJr3WaFdIBYh0INC2Ln1hfBt1eY0eHWlPiDyUymLociYq0HG5kfJIKOFbIHxyGWqcK1-JkoBYIJoLa0dOlQxx1KwSho--KHZjoJ9f3_1vGh_Q7tO07AY-6mhmwkRZbPtMsCU_q",
  },
  {
    id: "marcus-vane",
    name: "Marcus Vane",
    title: "Lead Craftsman",
    role: "lead",
    year: "2024",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB0rAtfXC_1XL7WOKwDx9tpRJ6XtsJxDsFHDAjG3SxcoaNbzIdtWm963Syyq5QlvUuq5BpU7l68ALBe19zeyX_CmuJ4nXrHCPKU-wdQQHAGHXBF9PeJRRrAG4pkb2k8ewijgwYlgL8cD0gH30P6l5sGIBiesY7_1Tfdp9clL_8BDX_WiRqaYc5Byr7uoYj-RAzpcxKPN5XI53n3WR_fcvU1VDEj1CjMgqdaLgphEBWxIkLaoFiAnEWt",
  },
  {
    id: "sia-rivera",
    name: "Sia Rivera",
    title: "Sustainability Head",
    role: "lead",
    year: "2024",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCH2aPXedQOKW5_e1kFu--ohNHkgNVymqPYwKUG_2_LK2HGm5ufiKBc2uatPivjuUySf6aGpXvyaWhZ_Jupwwj9dz-Rd8wKuB0EMdedaG5X6_0bmZP16I9vAKIdcbO2s1frfy5Kf0WGuxEUD8NjxF6mc67GWgeW2fYW5iVRfSIywNHED4dwqXnt0ZqSf1zw-Scfnu3i_XfgtHQP4rQqfhngvpnKZH4oEHjriBMCM1jvMlFyH67GVSA0",
  },
  {
    id: "julian-fox",
    name: "Julian Fox",
    title: "Innovation Lead",
    role: "developer",
    year: "2024",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC5lcuwYq3YYN5nwevfKMPvLBzHXhMl87TjylXfxxCCGP9p1qzzChnFQGqXNEU-cbs4fwAtD4p8GINOZlgUBigh3I9kI-Z08EkVoCxL_m3xlAd9fv0yFJVfc7_hG08E15XQIyrit9vF-eLWAXOGQKrUuwXdp10x3-KwNVprg5nVpkn2Oj8BKwSvi-M5OM3InN_w_96P2nivYbXtlHqE_HnCJ1IeORqS8ZnOmZN58QJYxhy_ReUJs4p4",
  },
  { id: "leo-chen", name: "Leo Chen", title: "Frontend Dev", role: "developer", year: "2024", icon: "code" },
  { id: "maya-patel", name: "Maya Patel", title: "Backend Dev", role: "developer", year: "2024", icon: "terminal" },
  { id: "sam-rivera", name: "Sam Rivera", title: "Systems Architect", role: "developer", year: "2024", icon: "database" },
];

export function TeamSection() {
  const [year, setYear] = useState(YEARS[0]);

  const leads = useMemo(() => TEAM.filter((m) => m.role === "lead" && m.year === year), [year]);
  const developers = useMemo(() => TEAM.filter((m) => m.role === "developer" && m.year === year), [year]);

  return (
    <section className="py-2xl px-margin-mobile md:px-margin-desktop bg-surface-container-lowest" id="team">
      <div className="text-center mb-2xl relative">
        <h2 className="font-headline-lg text-headline-lg text-charcoal-olive mb-sm">The Minds Behind VERIS</h2>
        <div className="w-20 h-1 bg-primary-fixed-dim mx-auto rounded-full" />
        <div className="mt-lg md:absolute md:top-0 md:right-0">
          <YearSelect value={year} years={YEARS} onChange={setYear} />
        </div>
      </div>

      <div className="space-y-2xl">
        {/* Leads */}
        <div>
          <h3 className="font-headline-md text-headline-md text-primary mb-lg text-center">Leads</h3>
          {leads.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-lg">
              {leads.map((member) => (
                <TeamMemberCard key={member.id} member={member} size="lg" />
              ))}
            </div>
          ) : (
            <p className="text-center font-body-md text-on-surface-variant">
              No leadership on record for {year}.
            </p>
          )}
        </div>

        {/* Developers */}
        <div>
          <h3 className="font-headline-md text-headline-md text-coral-red mb-lg text-center">Developers</h3>
          {developers.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-lg">
              {developers.map((member) => (
                <TeamMemberCard key={member.id} member={member} size="md" />
              ))}
            </div>
          ) : (
            <p className="text-center font-body-md text-on-surface-variant">
              No builders on record for {year}.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
