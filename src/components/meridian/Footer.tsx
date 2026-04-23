import logo from "@/assets/meridian-logo.jpeg";

export const Footer = () => (
  <footer className="bg-primary text-primary-foreground pt-16 pb-8">
    <div className="container">
      <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-primary-foreground/10">
        <div className="md:col-span-2">
          <img src={logo} alt="Meridian Consulting Group" className="h-14 w-auto bg-primary-foreground rounded p-1 mb-5" />
          <p className="text-primary-foreground/70 max-w-md leading-relaxed text-sm">
            The Meridian Strategic Consulting Group LLC. Aligning strategy, structure, and execution for measurable performance.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">Explore</p>
          <ul className="space-y-2 text-primary-foreground/80">
            <li><a href="#services" className="hover:text-accent transition-smooth">Services</a></li>
            <li><a href="#framework" className="hover:text-accent transition-smooth">Framework</a></li>
            <li><a href="#insights" className="hover:text-accent transition-smooth">Insights</a></li>
            <li><a href="#experts" className="hover:text-accent transition-smooth">Experts</a></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">Contact</p>
          <ul className="space-y-2 text-primary-foreground/80 text-sm">
            <li>500 Navarro St #2024</li>
            <li>San Antonio, TX 78205</li>
            <li>+1 (254) 306-5406</li>
            <li>maurice.edmondson@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="pt-8 text-sm text-primary-foreground/60">
        <p>© {new Date().getFullYear()} The Meridian Strategic Consulting Group LLC. All rights reserved.</p>
      </div>
    </div>
  </footer>
);