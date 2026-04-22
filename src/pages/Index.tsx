import { Navbar } from "@/components/meridian/Navbar";
import { Hero } from "@/components/meridian/Hero";
import { Credibility } from "@/components/meridian/Credibility";
import { HowWeHelp } from "@/components/meridian/HowWeHelp";
import { Framework } from "@/components/meridian/Framework";
import { ValueCompare } from "@/components/meridian/ValueCompare";
import { Services } from "@/components/meridian/Services";
import { Metrics } from "@/components/meridian/Metrics";
import { Experts } from "@/components/meridian/Experts";
import { Insights } from "@/components/meridian/Insights";
import { Contact } from "@/components/meridian/Contact";
import { Footer } from "@/components/meridian/Footer";
import { Reveal } from "@/components/meridian/Reveal";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <Hero />
      <Reveal><Credibility /></Reveal>
      <Reveal><HowWeHelp /></Reveal>
      <Reveal><Framework /></Reveal>
      <Reveal><ValueCompare /></Reveal>
      <Reveal><Services /></Reveal>
      <Reveal><Metrics /></Reveal>
      <Reveal><Experts /></Reveal>
      <Reveal><Insights /></Reveal>
      <Reveal><Contact /></Reveal>
    </main>
    <Footer />
  </div>
);

export default Index;
