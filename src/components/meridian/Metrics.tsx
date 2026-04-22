const metrics = [
  { value: "37%", label: "Average gain in execution consistency" },
  { value: "2.4×", label: "Faster leadership decision cycles" },
  { value: "48%", label: "Reduction in operational friction" },
  { value: "94%", label: "Client engagement renewal rate" },
];

export const Metrics = () => (
  <section className="py-24 bg-surface-gradient">
    <div className="container">
      <div className="max-w-2xl mb-16">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-4">Impact</p>
        <h2 className="text-4xl md:text-5xl font-bold text-primary">Outcomes you can measure.</h2>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((m) => (
          <div key={m.label} className="bg-card rounded-xl p-8 shadow-card border border-border hover:border-accent transition-smooth">
            <div className="font-serif text-5xl md:text-6xl font-bold text-primary mb-3">{m.value}</div>
            <div className="h-px w-12 bg-accent mb-4" />
            <p className="text-sm text-muted-foreground leading-relaxed">{m.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);