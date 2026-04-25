import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Features", href: "#features" },
  { label: "Solutions", href: "#solutions" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/70 backdrop-blur-xl border-b border-border/60 shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex h-16 items-center justify-between md:h-20">
        <Logo />

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            size="sm"
            className="btn-shine gap-2 bg-gradient-brand font-semibold text-white shadow-button hover:opacity-95"
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-white/70 backdrop-blur"
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden bg-white/90 backdrop-blur-xl transition-[max-height,opacity] duration-500 ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container flex flex-col gap-1 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-2 flex flex-col gap-2 border-t border-border pt-3">
            <Button className="btn-shine w-full justify-center gap-2 bg-gradient-brand text-white">
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
