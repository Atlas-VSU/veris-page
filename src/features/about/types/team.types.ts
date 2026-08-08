export type TeamMemberRole = "lead" | "developer" | "qa" | "pm";

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  role: TeamMemberRole;
  /** Archive year this member is shown under. */
  year: string;
  /** Present for members rendered with a photo. */
  imageUrl?: string;
  /** Present for members rendered with a placeholder icon instead of a photo. */
  icon?: TeamMemberIcon;
}

export interface BlobCardProps {
  title: string;
  description: string;
  bgClassName?: string;
  textColorClassName?: string;
  path: string;
  viewBox: string;
  className?: string;
}

export interface TeamMemberCardProps {
  member: TeamMember;
  size?: "lg" | "md";
}

export type TeamMemberIcon =
  | "code"
  | "terminal"
  | "database"
  | "briefcase"
  | "user-check"
  | "check-circle";
