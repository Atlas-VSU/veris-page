"use client";

import { useFeaturedPlatform } from "../hooks/useFeaturedPlatform";
import { FeaturedPlatformInfo } from "./FeaturedPlatformInfo";
import { FeaturedPlatformSlideshow } from "./FeaturedPlatformSlideshow";
import { FeaturedPlatformModal } from "./FeaturedPlatformModal";

export function FeaturedPlatform() {
  const {
    isFeaturedModalOpen,
    setIsFeaturedModalOpen,
    currentSlideIndex,
    featuredData
  } = useFeaturedPlatform();

  return (
    <>
      <section className="px-4 py-8 max-w-[1200px] mx-auto font-sans space-y-10 animate-fade-in-up animation-delay-200">
        <h2 className="font-serif text-center text-3xl font-medium text-neutral-900">
          Featured Platform
        </h2>
        
        <div className="bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-zinc-100 flex flex-col lg:flex-row p-10 lg:p-12 gap-12 items-center">
          
          {/* Left Content */}
          <FeaturedPlatformInfo 
            title={featuredData.title}
            description={featuredData.description}
            link={featuredData.link}
          />
          
          {/* Right Mockup (Slideshow covering the whole shape) */}
          <FeaturedPlatformSlideshow 
            photos={featuredData.photos}
            currentSlideIndex={currentSlideIndex}
            onOpenModal={() => setIsFeaturedModalOpen(true)}
          />
        </div>
      </section>

      {/* Featured Platform Modal */}
      <FeaturedPlatformModal 
        isOpen={isFeaturedModalOpen}
        onClose={() => setIsFeaturedModalOpen(false)}
        photoUrl={featuredData.photos[currentSlideIndex]}
      />
    </>
  );
}
