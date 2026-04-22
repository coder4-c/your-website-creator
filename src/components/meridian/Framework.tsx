const nodes = [
  { label: "Strategy", desc: "Defines direction" },
  { label: "Structure", desc: "Builds the framework" },
  { label: "Systems", desc: "Drives consistency" },
  { label: "Execution", desc: "Produces results" },
  { label: "Outcomes", desc: "Proves the value" },
];

export const Framework = () => (
  <section id="framework" className="py-24 bg-surface-gradient">
    <div className="container">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-4">Core framework</p>
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          The path to measurable outcomes.
        </h2>
        <p className="text-lg text-muted-foreground">
          Five disciplines, sequenced. When one is broken, performance breaks with it.
        </p>
      </div>

      <div className="relative">
        {/* connector line */}
        <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 relative">
          {nodes.map((n, i) => (
            <div key={n.label} className="text-center">
              <div className="relative mx-auto mb-5">
                <div className="h-24 w-24 mx-auto rounded-full bg-card shadow-elegant border-2 border-accent flex items-center justify-center font-serif text-2xl font-bold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-1">{n.label}</h3>
              <p className="text-sm text-muted-foreground">{n.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 max-w-3xl mx-auto text-center p-8 rounded-xl bg-primary text-primary-foreground shadow-elegant">
        <p className="text-sm uppercase tracking-widest text-accent mb-2">The Meridian Outcome</p>
        <p className="text-2xl font-serif italic">
          "Strategy without structure stalls. Structure without systems strains. Systems without execution stagnate."
        </p>
      </div>
    </div>
  </section>
);