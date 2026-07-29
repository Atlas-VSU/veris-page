import { Mail, Phone, MapPin } from "lucide-react";

export function ContactOverview() {
  return (
    <section className="py-12 max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Get in Touch</h2>
          <p className="text-sm text-zinc-500 mt-1">Connect with the VERIS team and department administrators</p>
        </div>

        <div className="space-y-4 text-xs">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-zinc-900 dark:text-zinc-100">Department Address</strong>
              <span className="text-zinc-600 dark:text-zinc-400">Visayas State University, Visca, Baybay City, Leyte</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
            <div>
              <strong className="block text-zinc-900 dark:text-zinc-100">Email Address</strong>
              <span className="text-zinc-600 dark:text-zinc-400">veris@vsu.edu.ph</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
            <div>
              <strong className="block text-zinc-900 dark:text-zinc-100">Phone Number</strong>
              <span className="text-zinc-600 dark:text-zinc-400">+63 (053) 563-7000</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-zinc-100 dark:bg-zinc-900 rounded-xl p-6 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-xs text-zinc-500">
        [Google Maps Embed Placeholder]
      </div>
    </section>
  );
}
