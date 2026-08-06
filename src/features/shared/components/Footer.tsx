import Link from "next/link";

export function Footer() {
  return (
    <footer
      className="relative isolate overflow-hidden border-t pt-16 pb-10 mt-auto"
      style={{
        backgroundColor: "#FDFCF8",
        color: "#2C2C24",
        borderColor: "#DED8CF",
      }}
    >
      {/* solid backing layer — guarantees text contrast even if blobs render above expected z-index */}
      <div
        className="absolute inset-0 -z-10"
        style={{ backgroundColor: "#FDFCF8" }}
      />

      {/* ambient decorative shapes — clipped tightly so they can't bleed across the whole viewport on narrow screens */}
      <div className="pointer-events-none absolute -top-10 -left-16 w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-accent opacity-25 blur-2xl animate-float -z-10" />
      <div className="pointer-events-none absolute -bottom-16 right-0 w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-primary opacity-[0.06] blur-3xl animate-float-delayed -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="animate-fade-in-up">
            <h3 className="font-serif text-2xl text-[#2C2C24] mb-3 tracking-tight">
              VERIS
            </h3>
            <p className="font-sans text-sm leading-relaxed text-[#78786C] max-w-xs">
              Empowering campus tech ecosystems, digital campus tours, and
              student connectivity.
            </p>
          </div>

          <div className="animate-fade-in-up animation-delay-100">
            <h4 className="font-sans font-semibold text-sm uppercase tracking-wide text-[#2C2C24] mb-4">
              Ecosystem
            </h4>
            <ul className="space-y-2.5 font-sans text-sm">
              <li>
                <Link
                  href="/services"
                  className="text-[#78786C] hover:text-secondary transition-colors"
                >
                  CORAL System
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-[#78786C] hover:text-secondary transition-colors"
                >
                  USSC Connect
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-[#78786C] hover:text-secondary transition-colors"
                >
                  E-Passport
                </Link>
              </li>
            </ul>
          </div>

          <div className="animate-fade-in-up animation-delay-200">
            <h4 className="font-sans font-semibold text-sm uppercase tracking-wide text-[#2C2C24] mb-4">
              Organization
            </h4>
            <ul className="space-y-2.5 font-sans text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-[#78786C] hover:text-secondary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-[#78786C] hover:text-secondary transition-colors"
                >
                  Pricing & Tiers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#78786C] hover:text-secondary transition-colors"
                >
                  Contact Support
                </Link>
              </li>
              <li>
                <Link
                  href="/bug-report"
                  className="inline-flex items-center gap-1.5 text-secondary hover:text-primary transition-colors font-medium"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  Report a Problem
                </Link>
              </li>
            </ul>
          </div>

          <div className="animate-fade-in-up animation-delay-300">
            <h4 className="font-sans font-semibold text-sm uppercase tracking-wide text-[#2C2C24] mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5 font-sans text-sm">
              <li>
                <Link
                  href="/terms"
                  className="text-[#78786C] hover:text-secondary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-[#78786C] hover:text-secondary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="animate-fade-in-up animation-delay-300">
            <h4 className="font-sans font-semibold text-sm uppercase tracking-wide text-[#2C2C24] mb-3">
              Socials
            </h4>
            <ul className="space-y-2 font-sans text-sm">
              <li>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#78786C] hover:text-secondary transition-colors"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#78786C] hover:text-secondary transition-colors"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#78786C] hover:text-secondary transition-colors"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#DED8CF] flex flex-col sm:flex-row items-center justify-between gap-3 animate-fade-in-slow">
          <p className="font-sans text-xs text-[#78786C]">
            © {new Date().getFullYear()} VERIS Systems. All rights reserved.
          </p>
          <div className="flex items-center gap-2 font-sans text-xs text-[#78786C]">
            <span className="w-2 h-2 rounded-full bg-primary animate-gentle-rotate" />
            Crafted for campus communities
          </div>
        </div>
      </div>
    </footer>
  );
}
