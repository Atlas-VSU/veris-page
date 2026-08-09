import { BlobCardProps } from "../types/team.types";

export function BlobCard({
  title,
  description,
  bgClassName = "bg-primary",
  textColorClassName = "text-primary",
  path,
  viewBox,
  className = "",
}: BlobCardProps) {
  return (
    <div className={`relative w-full ${className}`}>
      {/* Mobile / tablet / narrow desktop fallback: plain rounded card up to 1155px */}
      <div
        className={`min-[1156px]:hidden rounded-2xl px-7 py-8 text-primary-foreground ${bgClassName}`}
      >
        <h3 className="font-serif text-2xl font-semibold tracking-tight text-primary-foreground mb-3">
          {title}
        </h3>
        <p className="font-sans text-base leading-relaxed text-primary-foreground/90">
          {description}
        </p>
      </div>

      {/* Desktop: organic blob shape drawn as SVG behind the text, from 1156px up */}
      <div className="hidden min-[1156px]:block relative min-h-[280px]">
        <svg
          viewBox={viewBox}
          preserveAspectRatio="none"
          className={`absolute inset-0 w-full h-full ${textColorClassName}`}
        >
          <path d={path} fill="currentColor" />
        </svg>
        <div className="relative z-10 h-full flex flex-col justify-center px-19 py-12 text-primary-foreground">
          <h3 className="font-serif text-3xl font-semibold tracking-tight text-primary-foreground mb-3">
            {title}
          </h3>
          <p className="font-sans text-base leading-relaxed text-primary-foreground/90">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
