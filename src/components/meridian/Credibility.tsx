import { Shield, HeartPulse, Cpu, Building2 } from "lucide-react";

const items = [
  { icon: Shield, label: "Military Leadership" },
  { icon: HeartPulse, label: "Healthcare Systems" },
  { icon: Cpu, label: "Enterprise Technology" },
  { icon: Building2, label: "Public & Private Sector" },
];

export const Credibility = () => (
  <section className="py-16 border-y border-border bg-secondary/40">
    <div className="container">
      <p className="text-center text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-10">
        Experienced leaders across
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center justify-center gap-3 text-primary">
            <Icon className="h-6 w-6 text-accent" />
            <span className="text-sm md:text-base font-medium">{label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);