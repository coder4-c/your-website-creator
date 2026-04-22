import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    tag: "Leadership",
    title: "The hidden cost of misaligned leadership teams",
    excerpt: "When the top of the house disagrees quietly, the rest of the organization pays loudly.",
    date: "Mar 2026",
  },
  {
    tag: "AI Strategy",
    title: "Why most AI pilots stall before they scale",
    excerpt: "The technology was never the problem. The operating model was.",
    date: "Feb 2026",
  },
  {
    tag: "Healthcare",
    title: "Redesigning care delivery without breaking the team",
    excerpt: "A practical sequence for systems change inside fragile clinical environments.",
    date: "Jan 2026",
  },
];

export const Insights = () => (
  <section id="insights" className="py-24 bg-secondary/40">
    <div className="container">
      <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-4">Insights</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary">Field notes from the work.</h2>
        </div>
        <a href="#contact" className="text-sm font-semibold text-primary hover:text-accent transition-smooth inline-flex items-center gap-2">
          All articles <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((p) => (
          <article key={p.title} className="bg-card border border-border rounded-xl p-8 hover:shadow-elegant hover:-translate-y-1 transition-smooth cursor-pointer group">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">{p.tag}</span>
              <span className="text-xs text-muted-foreground">{p.date}</span>
            </div>
            <h3 className="text-xl font-bold text-primary mb-3 leading-snug group-hover:text-accent transition-smooth">{p.title}</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">{p.excerpt}</p>
            <span className="text-sm font-semibold text-primary inline-flex items-center gap-2">
              Read article <ArrowUpRight className="h-4 w-4" />
            </span>
          </article>
        ))}
      </div>
    </div>
  </section>
);