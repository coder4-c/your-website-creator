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
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-card" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Meridian Consulting Group" className="h-12 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth"
            >
              {l.label}
            </a>
          ))}
          <Button asChild variant="default" size="sm">
            <a href="#contact">Get in touch</a>
          </Button>
        </nav>
        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 text-primary"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium py-2"
              >
                {l.label}
              </a>
            ))}
            <Button asChild>
              <a href="#contact">Get in touch</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};