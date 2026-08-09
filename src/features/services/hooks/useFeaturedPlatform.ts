"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase/config";

// Default fallback data for initial render or if db is empty
const defaultFeaturedData = {
  title: "Loading...",
  description: "",
  link: "#",
  photos: [
    '/screenshots/platform_mock_1.png',
    '/screenshots/platform_mock_2.png',
    '/screenshots/platform_mock_3.png'
  ]
};

export function useFeaturedPlatform() {
  const [isFeaturedModalOpen, setIsFeaturedModalOpen] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  
  const [featuredData, setFeaturedData] = useState(defaultFeaturedData);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data: featureData, error: featureError } = await supabase
          .from('veris_systems')
          .select('title, link, pictures, description')
          .eq('is_feature', true)
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
          
          if (item.pictures && Array.isArray(item.pictures) && item.pictures.length > 0) {
            photos = item.pictures.filter(Boolean);
          }
          
          setFeaturedData({
            title: item.title || "Untitled Platform",
            description: item.description || "No description provided.",
            link: item.link || "#",
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
    if (isFeaturedModalOpen) return;

    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % featuredData.photos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [featuredData.photos.length, isFeaturedModalOpen]);

  return {
    isFeaturedModalOpen,
    setIsFeaturedModalOpen,
    currentSlideIndex,
    setCurrentSlideIndex,
    featuredData
  };
}
