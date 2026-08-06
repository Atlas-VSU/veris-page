"use client";

import { YearSelect } from "@/features/shared/components/YearSelect";
import { TeamMemberCard } from "./TeamMemberCard";
import { useTeamSection } from "../hooks/useTeamSection";

export function TeamSection() {
  const { year, setYear, years, leads, developers, qaMembers } =
    useTeamSection();

  return (
    <section className="py-16 px-4 md:px-20 bg-background" id="team">
      <div className="text-center mb-16 relative">
        <h2 className="font-serif text-3xl text-foreground mb-3">
          The Minds Behind VERIS
        </h2>
        <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        <div className="mt-6 md:absolute md:top-0 md:right-0">
          <YearSelect value={year} years={years} onChange={setYear} />
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

        {/* QA */}
        <div>
          <h3 className="font-serif text-xl text-accent mb-6 text-center">
            QA
          </h3>
          {qaMembers.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {qaMembers.map((member) => (
                <TeamMemberCard key={member.id} member={member} size="md" />
              ))}
            </div>
          ) : (
            <p className="text-center font-sans text-muted-foreground">
              No QA members on record for {year}.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
