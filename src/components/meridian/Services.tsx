import { Button } from "@/components/ui/button";
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
    desc: "Translate emerging technology into operating leverage. From AI adoption strategy to enterprise integration.",
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Three practices. One philosophy.</h2>
        <p className="text-base text-primary-foreground/70">
          Wherever performance breaks down, we bring structured thinking and operational discipline.
        </p>
        <div className="mt-4">
          <Button asChild size="sm" className="bg-accent text-primary hover:opacity-95 font-semibold">
            <a href="#contact">Organizational Performance Diagnostic (2–4 weeks)</a>
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map(({ icon: Icon, title, desc, items }) => (
          <div key={title} className="bg-primary-foreground/5 backdrop-blur border border-primary-foreground/10 rounded-xl p-6 hover:border-accent/60 transition-smooth group">
            <div className="h-12 w-12 rounded-lg bg-gold-gradient flex items-center justify-center mb-5 shadow-gold">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-primary-foreground/70 mb-5 leading-relaxed text-sm">{desc}</p>
            <ul className="space-y-2 border-t border-primary-foreground/10 pt-4">
              {items.map((it) => (
                <li key={it} className="text-sm text-primary-foreground/80">
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);