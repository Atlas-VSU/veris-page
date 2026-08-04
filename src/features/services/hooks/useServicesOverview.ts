"use client";

import { useState, useEffect } from "react";
import { GraduationCap, Pen, CreditCard, FileText, Users, Database } from "lucide-react";
import { createClient } from '@supabase/supabase-js';

// Fallback styling configurations for dynamic cards (store component references, not JSX instances)
const styleTemplates = [
  {
    Icon: GraduationCap,
    organicShapeClass: "organic-card-4",
    iconBgClass: "bg-success-muted",
    iconColorClass: "text-primary",
    hoverColorClass: "group-hover:text-primary",
  },
  {
    Icon: Pen,
    organicShapeClass: "organic-card-5",
    iconBgClass: "bg-warning-muted",
    iconColorClass: "text-secondary",
    hoverColorClass: "group-hover:text-secondary",
  },
  {
    Icon: CreditCard,
    organicShapeClass: "organic-card-6",
    iconBgClass: "bg-success-muted",
    iconColorClass: "text-primary",
    hoverColorClass: "group-hover:text-primary",
  },
  {
    Icon: FileText,
    organicShapeClass: "organic-card-4",
    iconBgClass: "bg-success-muted",
    iconColorClass: "text-primary",
    hoverColorClass: "group-hover:text-primary",
  },
  {
    Icon: Users,
    organicShapeClass: "organic-card-5",
    iconBgClass: "bg-warning-muted",
    iconColorClass: "text-secondary",
    hoverColorClass: "group-hover:text-secondary",
  },
  {
    Icon: Database,
    organicShapeClass: "organic-card-6",
    iconBgClass: "bg-success-muted",
    iconColorClass: "text-primary",
    hoverColorClass: "group-hover:text-primary",
  }
];

const mockEcosystemData = [
  {
    title: "Student Self-Registration",
    description: "New students can easily register for organization membership online by verifying their email address.",
    link: "https://example.com/register",
    photo: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Update Student Record",
    description: "Ensure your student information is accurate and up-to-date in order to receive correct clearance status.",
    link: "https://example.com/update",
    photo: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Pay Dues & Fines",
    description: "Verify your enrollment, review academic term dues or attendance fines, and securely submit GCash receipts.",
    link: "https://example.com/payment",
    photo: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Clearance Tracking",
    description: "View your real-time clearance status across all departments and organizations in a single dashboard.",
    link: "https://example.com/clearance",
    photo: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Organization Management",
    description: "Tools for student leaders to manage members, post announcements, and track overall organization health.",
    link: "https://example.com/orgs",
    photo: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "System Settings",
    description: "Configure notification preferences, connect external accounts, and manage your account security.",
    link: "https://example.com/settings",
    photo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
  }
];

export function useServicesOverview() {
  const [ecosystemData, setEcosystemData] = useState<any[]>([]);
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
