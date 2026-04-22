import e1 from "@/assets/expert-1.jpg";
import e2 from "@/assets/expert-2.jpg";
import e3 from "@/assets/expert-3.jpg";

const experts = [
  {
    img: e1,
    name: "Maurice Edmondson III",
    role: "Founder & Managing Principal",
    bio: "Three decades aligning leadership, systems, and execution across military, federal, and enterprise environments.",
  },
  {
    img: e2,
    name: "Dr. Elena Marchetti",
    role: "Healthcare Systems Lead",
    bio: "Former hospital COO. Specializes in operational redesign and clinical workflow optimization at scale.",
  },
  {
    img: e3,
    name: "James Whitfield",
    role: "Enterprise Technology Advisor",
    bio: "20+ years driving AI adoption and digital transformation across Fortune 500 organizations.",
  },
];

export const Experts = () => (
  <section id="experts" className="py-24 bg-background">
    <div className="container">
      <div className="max-w-2xl mb-16">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-4">Our experts</p>
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Senior practitioners. Not slide decks.</h2>
        <p className="text-base text-muted-foreground">
          Every Meridian engagement is led by a partner with operational experience inside the industry we serve.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {experts.map((p) => (
          <article key={p.name} className="group">
            <div className="aspect-[4/5] overflow-hidden rounded-xl mb-6 bg-secondary">
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                width={800}
                height={1000}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-smooth"
              />
            </div>
            <h3 className="text-2xl font-bold text-primary">{p.name}</h3>
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mt-1 mb-3">{p.role}</p>
            <p className="text-muted-foreground leading-relaxed">{p.bio}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);