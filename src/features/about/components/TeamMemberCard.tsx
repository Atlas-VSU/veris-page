import { Code2, Database, Terminal } from "lucide-react";
import type { TeamMember, TeamMemberIcon } from "../types/team.types";

const ICONS: Record<TeamMemberIcon, React.ComponentType<{ className?: string }>> = {
  code: Code2,
  terminal: Terminal,
  database: Database,
};

interface TeamMemberCardProps {
  member: TeamMember;
  size?: "lg" | "md";
}

export function TeamMemberCard({ member, size = "md" }: TeamMemberCardProps) {
  const isLarge = size === "lg";
  const Icon = member.icon ? ICONS[member.icon] : null;

  return (
    <div
      className={`bg-surface organic-profile shadow-soft hover:shadow-float transition-all duration-500 ease-out group ${
        isLarge ? "p-md" : "p-sm"
      }`}
    >
      <div
        className={`aspect-square overflow-hidden organic-profile bg-sand flex items-center justify-center ${
          isLarge ? "mb-md" : "mb-sm"
        }`}
      >
        {member.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={member.imageUrl}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          Icon && <Icon className={isLarge ? "h-10 w-10 text-coral-red" : "h-8 w-8 text-coral-red"} />
        )}
      </div>
      <div className={isLarge ? "px-sm text-center" : "px-xs text-center"}>
        <h4
          className={
            isLarge
              ? "font-headline-md text-headline-md text-charcoal-olive"
              : "font-headline-sm text-headline-sm text-charcoal-olive"
          }
        >
          {member.name}
        </h4>
        <p className={`font-label-sm text-label-sm ${isLarge ? "text-primary mb-sm" : "text-coral-red"}`}>
          {member.title}
        </p>
      </div>
    </div>
  );
}
