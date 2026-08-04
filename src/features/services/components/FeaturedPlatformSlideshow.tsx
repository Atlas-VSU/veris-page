"use client";

interface FeaturedPlatformSlideshowProps {
  photos: string[];
  currentSlideIndex: number;
  onOpenModal: () => void;
}

export function FeaturedPlatformSlideshow({ photos, currentSlideIndex, onOpenModal }: FeaturedPlatformSlideshowProps) {
  return (
    <div 
      className="flex-1 w-full relative overflow-hidden shadow-inner organic-card-2 bg-gradient-to-br from-muted to-accent min-h-[350px] md:min-h-[450px] cursor-pointer group"
      onClick={onOpenModal}
    >
      {photos.map((imgUrl, index) => (
        <img 
          key={index}
          src={imgUrl} 
          alt={`Platform Mockup ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-1000 ${index === currentSlideIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'} group-hover:scale-105 group-hover:opacity-90`}
        />
      ))}
      
      {/* Overlay Gradient for indicators */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/50 to-transparent pointer-events-none z-10"></div>
      
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5 z-20">
        {photos.map((_, index) => (
          <span 
            key={index} 
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentSlideIndex ? 'bg-white shadow-[0_0_8px_rgba(0,0,0,0.5)] scale-110' : 'bg-white/40 hover:bg-white/60'}`}
          ></span>
        ))}
      </div>
    </div>
  );
}
