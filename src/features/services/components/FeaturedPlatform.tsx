"use client";

import { Fraunces } from 'next/font/google';
import { useFeaturedPlatform } from "../hooks/useFeaturedPlatform";
import { FeaturedPlatformInfo } from "./FeaturedPlatformInfo";
import { FeaturedPlatformSlideshow } from "./FeaturedPlatformSlideshow";
import { FeaturedPlatformModal } from "./FeaturedPlatformModal";

const fraunces = Fraunces({ subsets: ['latin'], weight: ['400', '500', '600'] });

export function FeaturedPlatform() {
  const {
    isFeaturedModalOpen,
    setIsFeaturedModalOpen,
    currentSlideIndex,
    featuredData
  } = useFeaturedPlatform();

  return (
    <>
      <section className="space-y-10 animate-fade-in-up animation-delay-200">
        <h2 className={`${fraunces.className} text-center text-3xl font-medium text-neutral-900`}>
          Featured Platform
        </h2>
        
        <div className="bg-card organic-card-1 p-8 md:p-12 shadow-soft flex flex-col lg:flex-row gap-12 items-center border border-border">
          
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
