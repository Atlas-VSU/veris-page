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

      <style jsx global>{`
        /* -------------------------------------------------------------
         * Featured Platform Styles
         * ------------------------------------------------------------- */
        .featured-section {
          padding: 2rem 1rem;
          max-width: 1200px;
          margin: 0 auto;
          font-family: var(--font-sans);
        }

        .featured-card {
          background-color: #ffffff;
          border-radius: 2.5rem;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.04);
          border: 1px solid #f4f4f5;
          display: flex;
          flex-direction: column;
          padding: 2.5rem;
          gap: 3rem;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .featured-card {
            flex-direction: row;
            padding: 3rem;
          }
        }

        /* Left Column Content */
        .featured-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .featured-icon-container {
          width: 3rem;
          height: 3rem;
          background-color: #f1f5f9;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .featured-icon {
          font-size: 1.25rem;
        }

        .featured-title {
          font-family: var(--font-serif);
          font-size: 2.5rem;
          font-weight: 500;
          color: #18181b;
          line-height: 1.2;
          margin: 0;
        }

        @media (min-width: 768px) {
          .featured-title {
            font-size: 3rem;
          }
        }

        .featured-description {
          color: #71717a;
          line-height: 1.6;
          font-size: 1rem;
          margin: 0;
        }

        .featured-explore-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border-radius: 9999px;
          border: 1px solid #e4e4e7;
          background-color: transparent;
          color: #3f3f46;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s, color 0.2s;
          align-self: flex-start;
          margin-top: 0.5rem;
          text-decoration: none;
        }

        .featured-explore-btn:hover {
          background-color: #f4f4f5;
        }

        /* Right Column Graphic Container */
        .featured-graphic-container {
          flex: 1;
          width: 100%;
          background: linear-gradient(135deg, #f8fafc, #e2e8f0);
          border-radius: 1.5rem;
          padding: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 350px;
          box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.02);
          position: relative;
          overflow: hidden;
        }

        .featured-graphic-placeholder {
          color: #64748b;
          font-weight: 600;
          font-size: 1.125rem;
        }

        /* Slideshow Styles */
        .featured-slideshow {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 300px;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          background-color: #e2e8f0;
        }

        .featured-slide-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 1s ease-in-out, transform 5s linear;
          transform: scale(1.05);
        }

        .featured-slide-img.active {
          opacity: 1;
          transform: scale(1);
        }

        .featured-slideshow-indicators {
          position: absolute;
          bottom: 1rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.5rem;
          z-index: 10;
        }

        .featured-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.5);
          transition: background-color 0.3s;
        }

        .featured-indicator.active {
          background-color: #ffffff;
          box-shadow: 0 0 4px rgba(0,0,0,0.3);
        }

        /* State Management: Skeleton Loading */
        .featured-skeleton-container {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .skeleton-title {
          height: 3rem;
          width: 80%;
          background: linear-gradient(90deg, #f4f4f5 25%, #e4e4e7 50%, #f4f4f5 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite linear;
          border-radius: 0.5rem;
        }

        .skeleton-text {
          height: 1rem;
          width: 100%;
          background: linear-gradient(90deg, #f4f4f5 25%, #e4e4e7 50%, #f4f4f5 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite linear;
          border-radius: 0.25rem;
        }

        .skeleton-text.short {
          width: 60%;
        }

        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        /* State Management: Error */
        .featured-error {
          color: #ef4444;
          font-size: 0.875rem;
          padding: 1rem;
          border-radius: 0.5rem;
          background-color: #fef2f2;
          border: 1px solid #fecaca;
        }
      `}</style>
    </>
  );
}
