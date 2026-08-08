"use client";

import { ChevronRight, ChevronLeft } from "lucide-react";
import { ServicesHeader } from "./ServicesHeader";
import { EcosystemCard } from "./EcosystemCard";
import { EcosystemCardSkeleton } from "./EcosystemCardSkeleton";
import { FeaturedPlatform } from "./FeaturedPlatform";
import { useServicesOverview } from "../hooks/useServicesOverview";

export function ServicesOverview() {
  const {
    isLoading,
    currentPage,
    totalPages,
    currentItems,
    handlePrevPage,
    handleNextPage,
    handlePageClick,
  } = useServicesOverview();

  return (
    <div className="w-full max-w-[80rem] mx-auto space-y-8 py-6 px-4 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto space-y-24">
        <ServicesHeader />

        <FeaturedPlatform />

        {/* Ecosystem Section */}
        <section className="space-y-10 animate-fade-in-up animation-delay-400">
          <h2 className="font-serif text-center text-3xl font-medium text-neutral-900">
            Ecosystem
          </h2>

          <div
            key={currentPage}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in"
          >
            {isLoading ? (
              // Loading Skeletons
              Array.from({ length: 3 }).map((_, idx) => (
                <EcosystemCardSkeleton key={idx} />
              ))
            ) : currentItems.length > 0 ? (
              currentItems.map((item, index) => (
                <EcosystemCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  organicShapeClass={item.organicShapeClass}
                  hoverColorClass={item.hoverColorClass}
                  modalDetails={{
                    fullDescription: item.modalDetails.fullDescription,
                    link: item.modalDetails.link,
                    imageNode: item.modalDetails.photo ? (
                      <img
                        src={item.modalDetails.photo}
                        alt={item.title || "Graphic"}
                        className="w-full h-full object-cover rounded-3xl shadow-inner max-h-[400px]"
                      />
                    ) : (
                      <div className="w-full bg-gradient-to-br from-muted to-background rounded-3xl p-8 min-h-[300px] flex items-center justify-center shadow-inner">
                        <span className="text-muted-foreground font-medium">
                          No Image Available
                        </span>
                      </div>
                    ),
                  }}
                />
              ))
            ) : (
              <div className="col-span-3 py-12 text-center text-muted-foreground">
                No ecosystem cards found.
              </div>
            )}
          </div>
        </section>

        {/* Pagination Section */}
        {!isLoading && totalPages > 1 && (
          <section className="flex justify-center items-center gap-3 pt-4 animate-fade-in animation-delay-600">
            <button
              onClick={handlePrevPage}
              disabled={isLoading || currentPage <= 1}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                isLoading || currentPage <= 1
                  ? "opacity-50 cursor-not-allowed text-muted-foreground bg-muted/50"
                  : "hover:bg-accent text-muted-foreground hover:text-accent-foreground bg-muted"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {Array.from({ length: Math.max(1, totalPages) }).map((_, index) => {
              const pageNum = index + 1;
              const isActive = currentPage === pageNum;
              return (
                <button
                  key={pageNum}
                  onClick={() => handlePageClick(pageNum)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-soft"
                      : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            <button
              onClick={handleNextPage}
              disabled={
                isLoading || totalPages <= 1 || currentPage >= totalPages
              }
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                isLoading || totalPages <= 1 || currentPage >= totalPages
                  ? "opacity-50 cursor-not-allowed text-muted-foreground bg-muted/50"
                  : "hover:bg-accent text-muted-foreground hover:text-accent-foreground bg-muted"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </section>
        )}
      </div>
    </div>
  );
}
