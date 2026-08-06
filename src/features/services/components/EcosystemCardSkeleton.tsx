"use client";

export function EcosystemCardSkeleton() {
  return (
    <div className="bg-card organic-card-4 border border-border p-8 min-h-[200px] flex flex-col gap-4 animate-pulse">
      <div className="h-6 bg-muted rounded w-3/4"></div>
      <div className="h-4 bg-muted rounded w-full"></div>
      <div className="h-4 bg-muted rounded w-5/6"></div>
    </div>
  );
}
