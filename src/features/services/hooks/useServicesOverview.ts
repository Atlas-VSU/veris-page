"use client";

import { useState, useEffect } from "react";
import { styleTemplates, mockEcosystemData } from "../constants/mockData";
import { createClient } from '@supabase/supabase-js';
import { EcosystemItem } from "../types";

export function useServicesOverview() {
  const [ecosystemData, setEcosystemData] = useState<EcosystemItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(ecosystemData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = ecosystemData.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    async function fetchCards() {
      try {
        setIsLoading(true);
        
        // Initialize Supabase client inside useEffect to avoid SSR/Turbopack "Illegal constructor" issues
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
        const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';
        const supabase = createClient(supabaseUrl, supabaseKey);
        
        // Fetch Ecosystem Cards
        const { data, error } = await supabase
          .from('CardContent')
          .select('title, link, photo, description');

        if (error) {
          console.warn("Could not fetch from Supabase (table might not exist yet). Falling back to mock data.", error);
        }

        // If data is missing or empty, use the mock data
        const contentToMap = (!error && data && data.length > 0) ? data : mockEcosystemData;

        // Map database rows to our EcosystemCard format
        const formattedData = contentToMap.map((item, index) => {
          const template = styleTemplates[index % styleTemplates.length];
          const IconComponent = template.Icon;
          
          return {
            title: item.title || "Untitled",
            description: item.description || "No description provided.",
            IconComponent, // We return the component reference to be rendered in the main file
            organicShapeClass: template.organicShapeClass,
            iconBgClass: template.iconBgClass,
            iconColorClass: template.iconColorClass,
            hoverColorClass: template.hoverColorClass,
            modalDetails: {
              fullDescription: item.description || "No description provided.",
              link: item.link || "#",
              photo: item.photo || null
            }
          };
        });
        setEcosystemData(formattedData);
      } catch (err) {
        console.error("Unexpected error in fetchCards:", err);
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchCards();
  }, []);

  return {
    ecosystemData,
    isLoading,
    currentPage,
    totalPages,
    currentItems,
    handlePrevPage,
    handleNextPage,
    handlePageClick
  };
}
