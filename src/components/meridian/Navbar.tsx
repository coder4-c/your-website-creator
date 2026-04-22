import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/meridian-logo.jpeg";

const links = [
  { href: "#services", label: "Services" },
  { href: "#framework", label: "Framework" },
  { href: "#experts", label: "Our Experts" },
  { href: "#insights", label: "Insights" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth bg-primary/95 backdrop-blur-md border-b border-accent/20 ${
        scrolled ? "shadow-card" : ""
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Meridian Consulting Group" className="h-12 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-8 ml-auto mr-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium tracking-normal normal-case text-primary-foreground/80 hover:text-accent transition-smooth"
            >
              {l.label}
            </a>
          ))}
          <Button
            asChild
            size="sm"
            className="bg-gold-gradient text-primary border-0 shadow-gold hover:opacity-95 font-bold"
          >
            <a href="#contact">Get in touch</a>
          </Button>
        </nav>
        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 text-primary-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-primary border-t border-accent/20">
          <div className="container py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium py-2 text-primary-foreground/85 hover:text-accent"
              >
                {l.label}
              </a>
            ))}
            <Button asChild className="bg-gold-gradient text-primary border-0" onClick={() => setOpen(false)}>
              <a href="#contact">Get in touch</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};