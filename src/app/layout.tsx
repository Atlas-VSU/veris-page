import type { Metadata } from "next";
import { Nunito, Fraunces, Figtree } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/features/shared";
import { cn } from "@/lib/utils";

const figtree = Figtree({subsets:['latin'],variable:'--font-sans'});


// Brand Sans-Serif Font
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

// Brand Serif Font (for editorial/special headings)
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VERIS - Subscription Tiers & Pricing",
  description: "Official marketing and informational site for VERIS campus platforms, CORAL, USSC Connect, and E-Passport.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", nunito.variable, fraunces.variable, "font-sans", figtree.variable)}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
