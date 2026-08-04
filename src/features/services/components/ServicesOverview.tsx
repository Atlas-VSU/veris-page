"use client";

import { ChevronRight, ChevronLeft } from "lucide-react";
import { Fraunces } from 'next/font/google';
import { ServicesHeader } from "./ServicesHeader";
import { EcosystemCard } from "./EcosystemCard";
import { FeaturedPlatform } from "./FeaturedPlatform";
import { useServicesOverview } from "../hooks/useServicesOverview";

const fraunces = Fraunces({ subsets: ['latin'], weight: ['400', '500', '600'] });

export function ServicesOverview() {
  const {
    isLoading,
    currentPage,
    totalPages,
    currentItems,
    handlePrevPage,
    handleNextPage,
    handlePageClick
  } = useServicesOverview();

  return (
    <div className="services-theme min-h-screen bg-background py-16 px-4 md:px-8 text-foreground">

      <div className="max-w-6xl mx-auto space-y-24">
        
        <ServicesHeader />

        <FeaturedPlatform />

        {/* Ecosystem Section */}
        <section className="space-y-10 animate-fade-in-up animation-delay-400">
          <h2 className={`${fraunces.className} text-center text-3xl font-medium text-neutral-900`}>
            Ecosystem
          </h2>
          
          <div key={currentPage} className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
            {isLoading ? (
              // Loading Skeletons
              Array.from({ length: 3 }).map((_, idx) => (
                <div key={idx} className="bg-card organic-card-4 border border-border p-8 min-h-[200px] flex flex-col gap-4 animate-pulse">
                  <div className="w-12 h-12 rounded-full bg-muted"></div>
                  <div className="h-6 bg-muted rounded w-3/4"></div>
                  <div className="h-4 bg-muted rounded w-full"></div>
                  <div className="h-4 bg-muted rounded w-5/6"></div>
                </div>
              ))
            ) : currentItems.length > 0 ? (
              currentItems.map((item, index) => (
                <EcosystemCard 
                  key={index}
                  title={item.title}
                  description={item.description}
                  icon={<item.IconComponent className="w-5 h-5" />}
                  organicShapeClass={item.organicShapeClass}
                  iconBgClass={item.iconBgClass}
                  iconColorClass={item.iconColorClass}
                  hoverColorClass={item.hoverColorClass}
                  modalDetails={{
                    fullDescription: item.modalDetails.fullDescription,
                    link: item.modalDetails.link,
                    imageNode: item.modalDetails.photo ? (
                      <img src={item.modalDetails.photo} alt={item.title || "Graphic"} className="w-full h-full object-cover rounded-3xl shadow-inner max-h-[400px]" />
                    ) : (
                      <div className="w-full bg-gradient-to-br from-muted to-background rounded-3xl p-8 min-h-[300px] flex items-center justify-center shadow-inner">
                        <span className="text-muted-foreground font-medium">No Image Available</span>
                      </div>
                    )
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
        {totalPages > 1 && (
          <section className="flex justify-center items-center gap-3 pt-4 animate-fade-in animation-delay-600">
            {currentPage > 1 && (
              <button 
                onClick={handlePrevPage}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-accent text-muted-foreground hover:text-accent-foreground bg-muted"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            
            {Array.from({ length: totalPages }).map((_, index) => {
              const pageNum = index + 1;
              const isActive = currentPage === pageNum;
              return (
                <button 
                  key={pageNum}
                  onClick={() => handlePageClick(pageNum)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                    isActive 
                      ? 'bg-primary text-primary-foreground shadow-soft' 
                      : 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
            
            <button 
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                currentPage === totalPages 
                  ? 'opacity-50 cursor-not-allowed text-muted-foreground bg-muted/50' 
                  : 'hover:bg-accent text-muted-foreground hover:text-accent-foreground bg-muted'
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
