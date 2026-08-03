"use client";

import Link from "next/link";
import { Bug, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-emerald-600 dark:text-emerald-400">
          <span>VERIS</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-300">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Button: Guest Bug Report */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/bug-report"
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 dark:bg-amber-950/50 dark:text-amber-300 dark:border-amber-800 rounded-full hover:bg-amber-100 transition-colors"
          >
            <Bug className="w-3.5 h-3.5" />
            Report Bug
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-zinc-600 dark:text-zinc-300"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-base font-medium text-zinc-700 dark:text-zinc-200 hover:text-emerald-600"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/bug-report"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 py-2 text-base font-semibold text-amber-600 dark:text-amber-400"
          >
            <Bug className="w-4 h-4" />
            Report Bug
          </Link>
        </div>
      )}
    </header>
  );
}
