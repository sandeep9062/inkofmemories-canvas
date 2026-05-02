import { Link } from "@tanstack/react-router";
import { Menu, ShoppingBag, User, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/collections", label: "Collections" },
  { to: "/canvas", label: "Creation Canvas" },
  { to: "/corporate", label: "Corporate" },
  { to: "/process", label: "Our Process" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-serif text-xl tracking-[0.2em] uppercase text-charcoal">
            Ink<span className="text-gold-muted italic">of</span>Memories
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[11px] tracking-[0.25em] uppercase text-foreground/60 hover:text-gold-muted transition-colors"
              activeProps={{ className: "text-gold-muted" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/dashboard"
            className="hidden sm:flex size-10 items-center justify-center text-foreground/60 hover:text-gold-muted transition-colors"
            aria-label="Dashboard"
          >
            <User className="size-4" />
          </Link>
          <Link
            to="/checkout"
            className="hidden sm:flex size-10 items-center justify-center text-foreground/60 hover:text-gold-muted transition-colors"
            aria-label="Cart"
          >
            <ShoppingBag className="size-4" />
          </Link>
          <button
            className="lg:hidden size-10 flex items-center justify-center text-foreground"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal text-white lg:hidden"
          >
            <div className="flex items-center justify-between p-6">
              <span className="font-serif text-lg tracking-[0.2em] uppercase text-gold">
                Menu
              </span>
              <button onClick={() => setOpen(false)} aria-label="Close menu">
                <X className="size-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-2 p-8">
              {navLinks.concat([{ to: "/dashboard", label: "The Vault" }]).map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block py-4 font-serif text-3xl border-b border-white/5 hover:text-gold transition-colors"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}