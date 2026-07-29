export function TermsContent() {
  return (
    <article className="py-12 max-w-4xl mx-auto px-4 space-y-6 text-sm text-zinc-700 dark:text-zinc-300">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Terms of Service</h1>
      <p className="text-xs text-zinc-500">Last updated: July 2026</p>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">1. Introduction</h2>
        <p className="text-xs leading-relaxed">
          Welcome to VERIS. By accessing our platform, services, or mobile applications (including E-Passport), you agree to be bound by these Terms of Service.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">2. User Responsibilities & Account Terms</h2>
        <p className="text-xs leading-relaxed">
          Users must provide accurate information when registering or submitting reports. Misuse of campus platform data or unauthorized access is strictly prohibited.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">3. General Conditions & Governing Law</h2>
        <p className="text-xs leading-relaxed">
          These terms are governed by university policies and applicable local laws.
        </p>
      </section>
    </article>
  );
}
