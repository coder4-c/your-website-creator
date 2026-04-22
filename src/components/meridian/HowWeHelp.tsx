import { Search, Scale, Target, ArrowRight } from "lucide-react";

const steps = [
  { icon: Search, title: "Diagnose", desc: "Identify the root problems hidden inside leadership, structure, and process." },
  { icon: Scale, title: "Align", desc: "Fix leadership and systems so people, decisions, and execution move in one direction." },
  { icon: Target, title: "Execute", desc: "Drive measurable results through accountable rhythm and clear ownership." },
];

export const HowWeHelp = () => (
  <section className="py-24 bg-background">
    <div className="container">
      <div className="max-w-2xl mb-16">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-4">How we help</p>
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">A proven path from problem to performance.</h2>
        <p className="text-lg text-muted-foreground">Three deliberate moves. No theatre, no jargon — just measurable progress.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 relative">
        {steps.map(({ icon: Icon, title, desc }, i) => (
          <div key={title} className="relative group">
            <div className="bg-card border border-border rounded-xl p-8 shadow-card hover:shadow-elegant transition-smooth h-full">
              <div className="flex items-center justify-between mb-6">
                <div className="h-14 w-14 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-5xl font-bold font-serif text-accent/30">0{i + 1}</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{desc}</p>
            </div>
            {i < steps.length - 1 && (
              <ArrowRight className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 z-10 h-7 w-7 text-accent bg-background rounded-full p-1" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);