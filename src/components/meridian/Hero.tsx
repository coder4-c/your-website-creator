import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero-meridian.jpg";

export const Hero = () => (
  <section id="top" className="relative min-h-screen flex items-center overflow-hidden bg-primary">
    <div className="absolute inset-0">
      <img
        src={hero}
        alt="Aerial view of a modern skyscraper at dusk representing strategic vision"
        className="w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      {/* Strong layered overlays for guaranteed text legibility */}
      <div className="absolute inset-0 bg-primary/80" />
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-radial-spot" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />
    </div>

    <div className="container relative z-10 pt-32 pb-20">
      <div className="max-w-3xl mx-auto text-center animate-fade-up">
        <span className="inline-flex items-center justify-center gap-3 text-[11px] font-semibold tracking-[0.3em] uppercase text-accent mb-8">
          <span className="h-px w-12 bg-accent" /> Meridian Consulting Group <span className="h-px w-12 bg-accent" />
        </span>
        <h1 className="text-4xl md:text-6xl font-semibold text-primary-foreground leading-[1.1] mb-6 text-shadow-hero">
          Strengthening Leadership.
          <span className="block text-gold italic font-serif">Aligning Systems.</span>
          Driving Performance.
        </h1>
        <p className="text-base md:text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8 leading-relaxed text-shadow-hero">
          We help organizations diagnose root problems, align leadership and systems,
          and execute with measurable outcomes across military, healthcare, and enterprise technology.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg" className="bg-gold-gradient text-primary hover:opacity-95 shadow-gold border-0 font-semibold">
            <a href="#contact">
              Schedule a consultation <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground bg-primary-foreground/5 backdrop-blur hover:bg-primary-foreground/15 hover:text-primary-foreground hover:border-accent">
            <a href="#framework">Explore our framework</a>
          </Button>
        </div>

        {/* Trust strip for added professionalism */}
        <div className="mt-14 pt-8 border-t border-primary-foreground/15 grid grid-cols-3 gap-6 max-w-xl mx-auto">
          <div>
            <p className="font-serif text-3xl font-bold text-accent">30+</p>
            <p className="text-xs uppercase tracking-widest text-primary-foreground/70 mt-1">Years experience</p>
          </div>
          <div>
            <p className="font-serif text-3xl font-bold text-accent">94%</p>
            <p className="text-xs uppercase tracking-widest text-primary-foreground/70 mt-1">Renewal rate</p>
          </div>
          <div>
            <p className="font-serif text-3xl font-bold text-accent">3</p>
            <p className="text-xs uppercase tracking-widest text-primary-foreground/70 mt-1">Sectors served</p>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);