import { Server, Compass, Network, Smartphone } from "lucide-react";

export function ServicesOverview() {
  const services = [
    {
      title: "CORAL System",
      description: "Core Operational Resource & Administration Logic for campus-wide data handling.",
      icon: Server,
    },
    {
      title: "USSC Connect",
      description: "Unified student council communication portal and digital event registration.",
      icon: Network,
    },
    {
      title: "VERIS Systems",
      description: "Modular deployment instance powering student government infrastructure.",
      icon: Compass,
    },
    {
      title: "E-Passport",
      description: "Mobile-and-tablet interactive campus landmark passport and tour platform.",
      icon: Smartphone,
    },
  ];

  return (
    <section className="py-12 max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Services & Ecosystem</h2>
        <p className="text-sm text-zinc-500 mt-2">Explore the digital platforms powering VERIS</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl space-y-3">
              <Icon className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
              <h3 className="font-semibold text-lg text-zinc-900 dark:text-white">{item.title}</h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
