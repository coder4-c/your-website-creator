import { Users, BrainCircuit, Stethoscope } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Leadership Development",
    desc: "Build leaders who align teams, drive accountability, and execute with discipline at every level of the organization.",
    items: ["Executive coaching", "Leadership alignment workshops", "Succession planning"],
  },
  {
    icon: BrainCircuit,
    title: "AI & Digital Strategy",
    desc: "Translate emerging technology into operating leverage — from AI adoption strategy to enterprise integration.",
    items: ["AI readiness assessment", "Digital transformation roadmap", "Process automation"],
  },
  {
    icon: Stethoscope,
    title: "Healthcare Systems",
    desc: "Streamline clinical and operational systems to improve patient outcomes, throughput, and staff effectiveness.",
    items: ["Operational redesign", "Care delivery optimization", "Compliance alignment"],
  },
];

export const Services = () => (
  <section id="services" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
    <div className="absolute inset-0 opacity-10" style={{
      backgroundImage: 'radial-gradient(hsl(var(--accent)) 1px, transparent 1px)',
      backgroundSize: '32px 32px'
    }} />
    <div className="container relative">
      <div className="max-w-2xl mb-16">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-4">Services</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Three practices. One philosophy.</h2>
        <p className="text-lg text-primary-foreground/70">
          Wherever performance breaks down, we bring structured thinking and operational discipline.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map(({ icon: Icon, title, desc, items }) => (
          <div key={title} className="bg-primary-foreground/5 backdrop-blur border border-primary-foreground/10 rounded-xl p-8 hover:border-accent/60 transition-smooth group">
            <div className="h-14 w-14 rounded-lg bg-gold-gradient flex items-center justify-center mb-6 shadow-gold">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3">{title}</h3>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">{desc}</p>
            <ul className="space-y-2 border-t border-primary-foreground/10 pt-5">
              {items.map((it) => (
                <li key={it} className="text-sm text-primary-foreground/80 flex items-center gap-2">
                  <span className="h-1 w-4 bg-accent" /> {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);