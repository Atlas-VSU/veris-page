import { Check } from "lucide-react";

export function PricingTable() {
  const tiers = [
    {
      name: "Basic",
      price: "Free / Starter",
      description: "Essential access for basic student organization features.",
      features: ["Standard CORAL Access", "Basic USSC Connect", "Standard Support"],
    },
    {
      name: "Plus",
      price: "Campus Tier",
      description: "Enhanced features for active campus organizations.",
      features: ["Full CORAL Integration", "USSC Connect Pro", "E-Passport Module", "Priority Bug Support"],
      highlighted: true,
    },
    {
      name: "Premium",
      price: "Enterprise",
      description: "Complete VERIS ecosystem with custom integration support.",
      features: ["Dedicated CORAL Instance", "Unlimited E-Passport Tours", "Custom Analytics", "24/7 Dedicated SLA"],
    },
  ];

  return (
    <section className="py-12 max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Subscription Tiers</h2>
        <p className="text-sm text-zinc-500 mt-2">Flexible plans tailored for student organizations & university administration</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((tier, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-xl border space-y-4 ${
              tier.highlighted
                ? "bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-500 ring-2 ring-emerald-500/20"
                : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800"
            }`}
          >
            <h3 className="font-bold text-xl text-zinc-900 dark:text-white">{tier.name}</h3>
            <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">{tier.price}</p>
            <p className="text-xs text-zinc-500">{tier.description}</p>
            <ul className="space-y-2 pt-2 border-t border-zinc-200 dark:border-zinc-800 text-xs">
              {tier.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
