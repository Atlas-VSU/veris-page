export type TeamMemberRole = "lead" | "developer";

export type TeamMemberIcon = "code" | "terminal" | "database";

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
