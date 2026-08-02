"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Shield, GraduationCap, Pen, CreditCard, ChevronRight, FileText, Settings, Users, Database, Lock, X } from "lucide-react";
import { Fraunces } from 'next/font/google';
import { ServicesHeader } from "./ServicesHeader";
import { EcosystemCard } from "./EcosystemCard";
import { FeaturedPlatform } from "./FeaturedPlatform";
import { createClient } from '@supabase/supabase-js';

const fraunces = Fraunces({ subsets: ['latin'], weight: ['400', '500', '600'] });

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

export function ServicesOverview() {
  const [ecosystemData, setEcosystemData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(ecosystemData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = ecosystemData.slice(startIndex, startIndex + itemsPerPage);

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
            icon: <IconComponent className="w-5 h-5" />,
            organicShapeClass: template.organicShapeClass,
            iconBgClass: template.iconBgClass,
            iconColorClass: template.iconColorClass,
            hoverColorClass: template.hoverColorClass,
            modalDetails: {
              fullDescription: item.description || "No description provided.",
              link: item.link || "#",
              imageNode: item.photo ? (
                <img src={item.photo} alt={item.title || "Graphic"} className="w-full h-full object-cover rounded-3xl shadow-inner max-h-[400px]" />
              ) : (
                <div className="w-full bg-gradient-to-br from-muted to-background rounded-3xl p-8 min-h-[300px] flex items-center justify-center shadow-inner">
                  <span className="text-muted-foreground font-medium">No Image Available</span>
                </div>
              )
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

  return (
    <div className="services-theme min-h-screen bg-background py-16 px-4 md:px-8 text-foreground">

      <div className="max-w-6xl mx-auto space-y-24">
        
        <ServicesHeader />

        <FeaturedPlatform />

        {/* Ecosystem Section */}
        <section className="space-y-10 animate-fade-in-up animation-delay-400">
          <h2 className={`${fraunces.className} text-center text-3xl font-medium text-foreground`}>
            Ecosystem
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {isLoading ? (
              // Loading Skeletons
              Array.from({ length: 3 }).map((_, idx) => (
                <div key={idx} className="bg-card organic-card-4 border border-border p-8 min-h-[200px] flex flex-col gap-4 animate-pulse">
                  <div className="w-12 h-12 rounded-full bg-muted"></div>
                  <div className="h-6 bg-muted rounded w-3/4"></div>
                  <div className="h-4 bg-muted rounded w-full"></div>
                  <div className="h-4 bg-muted rounded w-5/6"></div>
                </div>
              ))
            ) : currentItems.length > 0 ? (
              currentItems.map((item, index) => (
                <EcosystemCard 
                  key={index}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  organicShapeClass={item.organicShapeClass}
                  iconBgClass={item.iconBgClass}
                  iconColorClass={item.iconColorClass}
                  hoverColorClass={item.hoverColorClass}
                  modalDetails={item.modalDetails}
                />
              ))
            ) : (
              <div className="col-span-3 py-12 text-center text-muted-foreground">
                No ecosystem cards found.
              </div>
            )}
          </div>
        </section>

        {/* Pagination Section */}
        {totalPages > 1 && (
          <section className="flex justify-center items-center gap-3 pt-4 animate-fade-in animation-delay-600">
            {Array.from({ length: totalPages }).map((_, index) => {
              const pageNum = index + 1;
              const isActive = currentPage === pageNum;
              return (
                <button 
                  key={pageNum}
                  onClick={() => handlePageClick(pageNum)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                    isActive 
                      ? 'bg-primary text-primary-foreground shadow-soft' 
                      : 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
            
            <button 
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                currentPage === totalPages 
                  ? 'opacity-50 cursor-not-allowed text-muted-foreground bg-muted/50' 
                  : 'hover:bg-accent text-muted-foreground hover:text-accent-foreground bg-muted'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </section>
        )}

      </div>
    </div>
  );
}
