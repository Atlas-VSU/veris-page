import type { Metadata } from "next";
import { Nunito, Fraunces } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/features/shared";

// Brand Sans-Serif Font
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

// Brand Serif Font (for editorial/special headings)
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VERIS - Campus Ecosystem & Platform",
  description: "Official marketing and informational site for VERIS campus platforms, CORAL, USSC Connect, and E-Passport.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
