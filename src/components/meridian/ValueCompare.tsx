import { X, Check } from "lucide-react";

const without = [
  "Siloed teams",
  "Inconsistent execution",
  "Reactive decisions",
  "Operational inefficiencies",
  "Unclear accountability",
];
const withMeridian = [
  "Aligned leadership",
  "Standardized systems",
  "Structured decisions",
  "Measurable outcomes",
  "Clear ownership",
];

export const ValueCompare = () => (
  <section className="py-24 bg-background">
    <div className="container">
      <div className="max-w-2xl mb-16">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-4">The value of consulting</p>
        <h2 className="text-4xl md:text-5xl font-bold text-primary">Before & after Meridian.</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-border bg-secondary/40 p-8">
          <div className="flex items-center gap-3 mb-6 pb-6 border-b border-border">
            <div className="h-10 w-10 rounded-full bg-destructive/10 flex items-center justify-center">
              <X className="h-5 w-5 text-destructive" />
            </div>
            <h3 className="text-xl font-bold text-muted-foreground">Without alignment</h3>
          </div>
          <ul className="space-y-4">
            {without.map((t) => (
              <li key={t} className="flex items-start gap-3 text-muted-foreground">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-muted-foreground" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border-2 border-accent bg-card p-8 shadow-elegant relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-gold-gradient text-primary text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-bl-xl">
            With Meridian
          </div>
          <div className="flex items-center gap-3 mb-6 pb-6 border-b border-border">
            <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
              <Check className="h-5 w-5 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-primary">Aligned organization</h3>
          </div>
          <ul className="space-y-4">
            {withMeridian.map((t) => (
              <li key={t} className="flex items-start gap-3 text-foreground">
                <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="font-medium">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);