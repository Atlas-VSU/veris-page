"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  MessageSquareWarning,
  Menu,
  Home,
  Layers,
  CreditCard,
  Info,
  HelpCircle,
  Mail,
} from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Layer } from "@hugeicons/core-free-icons";
import { NavLink } from "../types";

function IconRenderer({ icon, className }: { icon: any; className?: string }) {
  if (!icon) return null;

  if (Array.isArray(icon)) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        {icon.map(([elementTag, attributes], idx) => {
          const Tag = elementTag as any;
          const { key: nodeKey, ...restAttributes } = attributes;
          return <Tag key={nodeKey || idx} {...restAttributes} />;
        })}
      </svg>
    );
  }

  const Component = icon;
  return <Component className={className} />;
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks: NavLink[] = [
    { name: "Home", href: "/", icon: Home },
    { name: "Services", href: "/services", icon: Layer },
    { name: "Pricing", href: "/pricing", icon: CreditCard },
    { name: "About", href: "/about", icon: Info },
    { name: "FAQ", href: "/faq", icon: HelpCircle },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  return (
    <header className="sticky top-0 z-50 w-full px-6 sm:px-8 lg:px-12 pt-5 md:pt-8 flex flex-col items-center animate-fade-in-up">
      <div className="w-full max-w-[80rem] h-16 md:h-[4.5rem] px-5 md:px-7 bg-card/90 backdrop-blur-md border border-border rounded-full shadow-soft flex items-center justify-between transition-all duration-300">
        <Link
          href="/"
          className="flex items-center gap-3.5 group active:scale-98 transition-transform"
        >
          <Avatar size="lg">
            <AvatarImage src="/veris-icon.png" alt="VERIS logo" />
            <AvatarFallback className="bg-primary text-primary-foreground font-serif font-extrabold text-base">
              V
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col ">
            <span className="font-bold text-foreground tracking-tight text-lg font-serif leading-none">
              VERIS
            </span>
            <span className="mt-1 inline-flex w-fit items-center rounded-full bg-primary/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-primary">
              Official Site
            </span>
          </div>
        </Link>

       {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-base font-semibold text-primary">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 rounded-full font-sans text-sm transition-all duration-200",
                  isActive
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-muted-foreground hover:text-primary hover:bg-muted"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Button: Guest Bug Report */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/bug-report"
            className="group flex items-center gap-2 px-6 py-3 text-xs font-semibold rounded-full bg-secondary text-secondary-foreground shadow-soft hover:shadow-float hover:bg-secondary/90 hover:scale-[1.06] active:scale-95 transition-all duration-300"
          >
            <MessageSquareWarning className="w-5 h-5" />
            Report a Problem
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="lg:hidden flex items-center">
          <Drawer open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger
              className="p-2.5 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center cursor-pointer"
              aria-label="Toggle menu"
            >
              <Menu className="w-5 h-5" />
            </DrawerTrigger>
            <DrawerContent className="bg-card border-t border-border px-6 pb-8 pt-2 rounded-t-[2.5rem] shadow-float max-h-[85vh]">
              <div className="mx-auto w-12 h-1.5 rounded-full bg-muted-foreground/20 mb-5" />
              <div className="space-y-6">
                <DrawerHeader className="text-left border-b border-border pb-5 p-0">
                  <DrawerTitle className="flex items-center gap-3.5">
                    <Avatar className="w-10 h-10 shrink-0">
                      <AvatarImage src="/veris-icon.png" alt="VERIS logo" />
                      <AvatarFallback className="bg-primary text-primary-foreground font-serif font-bold text-sm">
                        V
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-1.5">
                      <span className="font-bold text-foreground text-base font-serif leading-none">
                        VERIS
                      </span>
                      <span className="text-[10px] font-bold text-muted-foreground tracking-wider uppercase bg-muted px-2 py-0.5 rounded-full w-fit leading-none">
                        Official Site
                      </span>
                    </div>
                  </DrawerTitle>
                </DrawerHeader>

                {/* Vertical menu layout track with Icons + Active state tags */}
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-medium transition-all relative overflow-hidden group active:scale-98",
                          isActive
                            ? "text-primary bg-primary/5 font-semibold"
                            : "text-foreground hover:bg-muted",
                        )}
                      >
                        {isActive && (
                          <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-primary rounded-r-full" />
                        )}

                        <IconRenderer
                          icon={link.icon}
                          className={cn(
                            "w-4 h-4 transition-colors",
                            isActive
                              ? "text-primary"
                              : "text-muted-foreground group-hover:text-foreground",
                          )}
                        />
                        {link.name}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Secure full-width CTA placed directly at baseline drawer foot */}
              <div className="pt-4 border-t border-border mt-6">
                <Link
                  href="/bug-report"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 text-xs font-semibold rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-soft transition-all active:scale-95"
                >
                  <MessageSquareWarning className="w-4 h-4" />
                  Report a Problem
                </Link>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
}
