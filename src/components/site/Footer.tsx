import { Link } from "@tanstack/react-router";
import { Instagram, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white/70 mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] uppercase text-gold">
              Ink<span className="italic">of</span>Memories
            </Link>
            <p className="mt-6 text-sm text-white/50 max-w-sm leading-relaxed font-light">
              Crafted in-house. Pressed by hand. Delivered to those who recognize the
              difference between printing and preservation.
            </p>
            <div className="flex gap-4 mt-8">
              {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="size-10 border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                  aria-label="Social"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-gold mb-6 font-sans">
              Atelier
            </h4>
            <ul className="space-y-3 text-sm font-light">
              <li><Link to="/collections" className="hover:text-gold transition-colors">Collections</Link></li>
              <li><Link to="/canvas" className="hover:text-gold transition-colors">Creation Canvas</Link></li>
              <li><Link to="/corporate" className="hover:text-gold transition-colors">Corporate</Link></li>
              <li><Link to="/process" className="hover:text-gold transition-colors">Our Process</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-gold mb-6 font-sans">
              Account
            </h4>
            <ul className="space-y-3 text-sm font-light">
              <li><Link to="/dashboard" className="hover:text-gold transition-colors">The Vault</Link></li>
              <li><a href="#" className="hover:text-gold transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Concierge</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Sample Kit</a></li>
            </ul>
          </div>
        </div>

        <div className="hairline opacity-30" />
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] tracking-[0.25em] uppercase text-white/30">
          <span>&copy; MMXXIV InkOfMemories &mdash; Printed in-house</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gold">Privacy</a>
            <a href="#" className="hover:text-gold">Terms</a>
            <a href="#" className="hover:text-gold">Provenance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}