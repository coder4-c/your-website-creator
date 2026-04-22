import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

export const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Thanks. We'll be in touch within one business day.");
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-4">Contact</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Let's talk about what's<span className="text-gold italic"> not aligned.</span>
            </h2>
            <p className="text-base text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Tell us about the problem you're trying to solve. We'll respond personally with a clear next step. No sales sequence.
            </p>

            <div className="space-y-6">
              <a href="tel:+12543065406" className="flex items-start gap-4 group">
                <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-semibold text-primary">+1 (254) 306-5406</p>
                </div>
              </a>
              <a href="mailto:maurice.edmondson@gmail.com" className="flex items-start gap-4 group">
                <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold text-primary">maurice.edmondson@gmail.com</p>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Office</p>
                  <p className="font-semibold text-primary">500 Navarro St #2024</p>
                  <p className="text-muted-foreground">San Antonio, TX 78205</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="bg-card border border-border rounded-xl p-8 md:p-10 shadow-elegant space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" required placeholder="Jane Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Acme Health" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required placeholder="jane@company.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">What can we help align?</Label>
              <Textarea id="message" required rows={5} placeholder="Tell us briefly about the situation..." />
            </div>
            <Button type="submit" size="lg" className="w-full bg-gold-gradient text-primary border-0 hover:opacity-90 shadow-gold">
              {loading ? "Sending…" : "Request a consultation"}
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              We respond within one business day.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};