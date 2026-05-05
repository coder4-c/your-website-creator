
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { experts } from "@/data/experts";

export const Experts = () => (
   <section id="experts" className="pt-20 pb-24" style={{ backgroundColor: '#f7f6f3' }}>
    <div className="container">
      <div className="max-w-2xl mb-6">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-4">Our experts</p>
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Senior practitioners.</h2>
        <p className="text-base text-muted-foreground">
          Every Meridian engagement is led by a partner with operational experience inside the industry we serve.
        </p>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experts.map((p, index) => (
            <article key={p.name} className="group bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="h-[380px] overflow-hidden rounded-xl mb-6 bg-secondary border-2 border-border group-hover:border-primary/20 transition-colors">
                 <img
                   src={p.img}
                   alt={p.name}
                   loading="lazy"
                   width={800}
                   height={1000}
                   className="w-full h-full object-cover object-top"
                   style={
                     p.name === "Maurice Evans"
                       ? { width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 20%", display: "block", transform: "none" }
                       : p.name === "Maurice V. Edmondson III"
                       ? { objectPosition: "center 20%" }
                       : p.name === "Nancy Johnson"
                       ? { objectPosition: "center 20%" }
                       : {}
                   }
                 />
              </div>
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 rounded-full bg-accent/20 border border-accent flex items-center justify-center text-accent font-bold text-lg">
                  {p.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-2xl font-bold text-primary group-hover:text-primary/80 transition-colors">{p.name}</h3>
              </div>
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mt-1 mb-3">{p.role}</p>
              <p className="text-muted-foreground leading-relaxed mb-4 min-h-[72px]">{p.bio}</p>
              {p.fullDetails && (
                <div className="border-t pt-4">
                  <Link to={`/profile/${p.slug}`} className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors">
                    View Full Profile →
                  </Link>
                </div>
              )}
            </article>
          ))}
        </div>
    </div>
  </section>
);