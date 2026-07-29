export function AboutOverview() {
  return (
    <section className="py-12 max-w-4xl mx-auto px-4 space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">About VERIS</h2>
        <p className="text-sm text-zinc-500">Driving Innovation in Higher Education Technology</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl space-y-2">
          <h3 className="font-semibold text-lg text-emerald-600 dark:text-emerald-400">Mission Statement</h3>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
            To provide seamless, modern software infrastructure empowering student leadership, campus operations, and digital engagement.
          </p>
        </div>

        <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl space-y-2">
          <h3 className="font-semibold text-lg text-emerald-600 dark:text-emerald-400">Vision Statement</h3>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
            A fully connected university ecosystem where every student interaction, campus tour, and council service is accessible at your fingertips.
          </p>
        </div>
      </div>
    </section>
  );
}
