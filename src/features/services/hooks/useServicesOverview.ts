"use client";

import { useState, useEffect } from "react";
import { styleTemplates } from "../constants/mockData";
import { supabase } from "@/lib/supabase/config";
import { EcosystemItem } from "../types";

export function useServicesOverview() {
  const [ecosystemData, setEcosystemData] = useState<EcosystemItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(ecosystemData.length / itemsPerPage) || 1;

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
        
        // Fetch Ecosystem Cards (non-featured items)
        const { data, error } = await supabase
          .from('veris_systems')
          .select('title, link, pictures, description')
          .eq('is_feature', false)
          .order('created_at', { ascending: false });

        if (error) {
          console.warn("Could not fetch from Supabase:", error);
          setEcosystemData([]);
          return;
        }

        if (data) {
          // Map database rows to our EcosystemCard format
          const formattedData = data.map((item, index) => {
            const template = styleTemplates[index % styleTemplates.length];
            const firstPicture = item.pictures && Array.isArray(item.pictures) && item.pictures.length > 0 ? item.pictures[0] : null;
            
            return {
              title: item.title || "Untitled",
              description: item.description || "No description provided.",
              organicShapeClass: template.organicShapeClass,
              hoverColorClass: template.hoverColorClass,
              modalDetails: {
                fullDescription: item.description || "No description provided.",
                link: item.link || "#",
                photo: firstPicture
              }
            };
          });
          setEcosystemData(formattedData);
        }
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
