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
    <div>
      <div
        className={`aspect-square overflow-hidden blob-shape-1 bg-muted flex items-center justify-center ${isLarge ? "mb-4" : "mb-3"
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
          Icon && <Icon className={isLarge ? "h-10 w-10 text-destructive" : "h-8 w-8 text-destructive"} />
        )}
      </div>
      <div className={isLarge ? "px-2 text-center" : "px-1 text-center"}>
        <h4 className={isLarge ? "font-serif text-xl text-foreground" : "font-serif text-base text-foreground"}>
          {member.name}
        </h4>
        <p className={`font-sans text-xs uppercase tracking-wide ${isLarge ? "text-primary mb-2" : "text-destructive"}`}>
          {member.title}
        </p>
      </div>
    </div>
  );
}
