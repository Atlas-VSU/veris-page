import { useState, useEffect } from "react";
import { ArrowRight, Shield, X } from "lucide-react";
import { Fraunces } from 'next/font/google';
import { createClient } from '@supabase/supabase-js';

const fraunces = Fraunces({ subsets: ['latin'], weight: ['400', '500', '600'] });

export function FeaturedPlatform() {
  const [isFeaturedModalOpen, setIsFeaturedModalOpen] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  
  const [featuredData, setFeaturedData] = useState({
    title: "Administrative Portal",
    description: "Comprehensive dashboard for administrators to monitor student eligibility, track organizational fees and fines, and verify payment settlements in real-time. Total control over the clearance ecosystem.",
    link: "https://admin.veris.example.com",
    photos: [
      '/screenshots/platform_mock_1.png',
      '/screenshots/platform_mock_2.png',
      '/screenshots/platform_mock_3.png'
    ]
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
        const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';
        const supabase = createClient(supabaseUrl, supabaseKey);
        
        const { data: featureData, error: featureError } = await supabase
          .from('DataContent')
          .select('title, link, photo, description')
          .limit(1);

        if (featureError) {
          console.warn("Could not fetch Featured Platform data from Supabase:", featureError);
        } else if (featureData && featureData.length > 0) {
          const item = featureData[0];
          let photos = [
            '/screenshots/platform_mock_1.png',
            '/screenshots/platform_mock_2.png',
            '/screenshots/platform_mock_3.png'
          ];
          if (item.photo) {
            photos = item.photo.split(',').map((p: string) => p.trim()).filter(Boolean);
          }
          if (photos.length === 0) {
            photos = [
              '/screenshots/platform_mock_1.png',
              '/screenshots/platform_mock_2.png',
              '/screenshots/platform_mock_3.png'
            ];
          }
          setFeaturedData({
            title: item.title || "Administrative Portal",
            description: item.description || "Comprehensive dashboard for administrators to monitor student eligibility, track organizational fees and fines, and verify payment settlements in real-time. Total control over the clearance ecosystem.",
            link: item.link || "https://admin.veris.example.com",
            photos: photos
          });
        }
      } catch (err) {
        console.error("Unexpected error fetching Featured Platform data:", err);
      }
    }
    
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % featuredData.photos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [featuredData.photos.length]);

  return (
    <>
      <section className="space-y-10 animate-fade-in-up animation-delay-200">
        <h2 className={`${fraunces.className} text-center text-3xl font-medium text-foreground`}>
          Featured Platform
        </h2>
        
        <div className="bg-card organic-card-1 p-8 md:p-12 shadow-soft flex flex-col lg:flex-row gap-12 items-center border border-border">
          
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <div className="w-12 h-12 bg-success-muted rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            
            <h3 className={`${fraunces.className} text-4xl md:text-5xl font-medium text-foreground leading-tight`}>
              {featuredData.title}
            </h3>
            
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              {featuredData.description}
            </p>
            
            <a href={featuredData.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-border text-foreground hover:bg-accent hover:text-accent-foreground transition-colors font-medium text-sm">
              Explore <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          
          {/* Right Mockup (Slideshow covering the whole shape) */}
          <div 
            className="flex-1 w-full relative overflow-hidden shadow-inner organic-card-2 bg-gradient-to-br from-muted to-accent min-h-[350px] md:min-h-[450px] cursor-pointer group"
            onClick={() => setIsFeaturedModalOpen(true)}
          >
            {featuredData.photos.map((imgUrl, index) => (
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
              {featuredData.photos.map((_, index) => (
                <span 
                  key={index} 
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentSlideIndex ? 'bg-white shadow-[0_0_8px_rgba(0,0,0,0.5)] scale-110' : 'bg-white/40 hover:bg-white/60'}`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Platform Modal */}
      {isFeaturedModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fade-in" 
          onClick={() => setIsFeaturedModalOpen(false)}
        >
          <div 
            className="relative max-w-5xl w-full mx-auto animate-zoom-in" 
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsFeaturedModalOpen(false)}
              className="absolute -top-12 right-0 md:-right-12 md:top-0 w-10 h-10 rounded-full bg-muted/50 hover:bg-muted flex items-center justify-center text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <img 
              src={featuredData.photos[currentSlideIndex]} 
              alt="Platform Mockup Full" 
              className="w-full h-auto max-h-[85vh] object-contain rounded-3xl shadow-2xl bg-muted/20"
            />
          </div>
        </div>
      )}
    </>
  );
}
