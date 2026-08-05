"use client";

import { useState, useEffect } from "react";
import { createClient } from '@supabase/supabase-js';
import { mockFeaturedPlatformData } from "../constants/mockData";

export function useFeaturedPlatform() {
  const [isFeaturedModalOpen, setIsFeaturedModalOpen] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  
  const [featuredData, setFeaturedData] = useState(mockFeaturedPlatformData);

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
            title: item.title || mockFeaturedPlatformData.title,
            description: item.description || mockFeaturedPlatformData.description,
            link: item.link || mockFeaturedPlatformData.link,
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

  return {
    isFeaturedModalOpen,
    setIsFeaturedModalOpen,
    currentSlideIndex,
    setCurrentSlideIndex,
    featuredData
  };
}
