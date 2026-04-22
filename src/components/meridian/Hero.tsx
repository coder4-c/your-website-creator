import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero-meridian.jpg";

export const Hero = () => (
  <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={hero}
        alt="Aerial view of a modern skyscraper at dusk representing strategic vision"
        className="w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-hero-gradient opacity-90" />
    </div>
    <div className="container relative z-10 pt-32 pb-20">
      <div className="max-w-3xl animate-fade-up">
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-6">
          <span className="h-px w-10 bg-accent" /> Meridian Consulting Group
        </span>
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-[1.05] mb-6">
          Strengthening Leadership.
          <span className="block text-gold italic">Aligning Systems.</span>
          Driving Performance.
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-10 leading-relaxed">
          We help organizations diagnose root problems, align leadership and systems,
          and execute with measurable outcomes — across military, healthcare, and enterprise tech.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg" className="bg-gold-gradient text-primary hover:opacity-90 shadow-gold border-0">
            <a href="#contact">
              Schedule a consultation <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 hover:text-primary-foreground">
            <a href="#framework">Explore our framework</a>
          </Button>
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-background to-transparent" />
  </section>
);