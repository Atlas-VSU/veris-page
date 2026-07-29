export function PrivacyContent() {
  return (
    <article className="py-12 max-w-4xl mx-auto px-4 space-y-6 text-sm text-zinc-700 dark:text-zinc-300">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Privacy Policy</h1>
      <p className="text-xs text-zinc-500">Last updated: July 2026</p>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">1. Information Collection & Usage</h2>
        <p className="text-xs leading-relaxed">
          VERIS collects minimal necessary data for guest bug reports (email, description) and student services. We do not sell or share personal data with third parties.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">2. Data Protection & User Rights</h2>
        <p className="text-xs leading-relaxed">
          We maintain strict security measures to protect submitted guest reports and system telemetry. Users have the right to request deletion of their submitted data.
        </p>
      </section>
    </article>
  );
}
