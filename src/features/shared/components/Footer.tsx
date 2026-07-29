import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400 text-sm border-t border-zinc-800 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-3">VERIS</h3>
          <p className="text-xs leading-relaxed text-zinc-400">
            Empowering campus tech ecosystems, digital campus tours, and student connectivity.
          </p>
        </div>

        <div>
          <h4 className="text-zinc-200 font-semibold mb-3">Ecosystem</h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/services" className="hover:text-white">CORAL System</Link></li>
            <li><Link href="/services" className="hover:text-white">USSC Connect</Link></li>
            <li><Link href="/services" className="hover:text-white">E-Passport</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-zinc-200 font-semibold mb-3">Organization</h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/pricing" className="hover:text-white">Pricing & Tiers</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact Support</Link></li>
            <li><Link href="/bug-report" className="hover:text-white text-amber-400">Report a Bug</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-zinc-200 font-semibold mb-3">Legal</h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
            <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-zinc-800 text-xs text-center text-zinc-500">
        © {new Date().getFullYear()} VERIS Systems. All rights reserved.
      </div>
    </footer>
  );
}
