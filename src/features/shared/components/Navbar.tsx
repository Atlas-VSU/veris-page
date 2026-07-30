"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { 
  Bug, 
  Menu, 
  Home, 
  Layers, 
  CreditCard, 
  Info, 
  HelpCircle, 
  Mail 
} from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { Layer } from "@hugeicons/core-free-icons";

interface NavLink {
  name: string;
  href: string;
  icon: any;
}

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
    { name: "FAQ", href: "/faq" , icon: HelpCircle},
    { name: "Contact", href: "/contact", icon: Mail},
  ];

  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-4 md:pt-6 flex flex-col items-center">
      <div className="w-full max-w-7xl h-16 px-6 bg-card/90 backdrop-blur-md border border-border rounded-full shadow-soft flex items-center justify-between transition-all duration-300">
        <Link href="/" className="flex items-center gap-3 group active:scale-98 transition-transform">
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-serif font-extrabold text-sm shadow-soft">
            V
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-extrabold text-foreground tracking-tight text-base font-sans">
              VERIS
            </span>
            <span className="text-[9px] font-bold text-muted-foreground tracking-wider uppercase mt-0.5 bg-muted px-1.5 py-0.5 rounded-md">
              Official Site
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="relative py-1 text-muted-foreground hover:text-foreground transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Button: Guest Bug Report */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/bug-report"
            className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-full bg-secondary text-secondary-foreground shadow-soft hover:bg-secondary/90 transition-all duration-200 active:scale-95"
          >
            <Bug className="w-3.5 h-3.5" />
            Report Bug
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center">
          <Drawer open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger 
              className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center cursor-pointer"
              aria-label="Toggle menu"
            >
              <Menu className="w-5 h-5" />
            </DrawerTrigger>
            <DrawerContent className="bg-card border-t border-border px-6 pb-8 pt-2 rounded-t-[2.5rem] shadow-float max-h-[85vh]">
              <div className="mx-auto w-12 h-1.5 rounded-full bg-muted-foreground/20 mb-5" />
              <div className="space-y-6">
                <DrawerHeader className="text-left border-b border-border pb-4 p-0">
                  <DrawerTitle className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-serif font-bold text-xs">
                      V
                    </div>
                    <div className="flex flex-col leading-none">
                      <span className="font-bold text-foreground text-sm font-sans">VERIS</span>
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
                            : "text-foreground hover:bg-muted"
                        )}
                      >
                        {isActive && (
                          <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-primary rounded-r-full" />
                        )}
                        
                        <IconRenderer 
                          icon={link.icon} 
                          className={cn(
                            "w-4 h-4 transition-colors", 
                            isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
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
                  <Bug className="w-4 h-4" />
                  Report Bug
                </Link>
              </div>
            </DrawerContent>

          </Drawer>
        </div>
      </div>
    </header>
  );
}
