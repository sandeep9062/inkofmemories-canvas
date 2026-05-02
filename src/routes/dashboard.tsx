import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Repeat, Check, Clock, Truck, Package, Search } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import heroInvitation from "@/assets/hero-invitation.jpg";
import serviceWeddings from "@/assets/service-weddings.jpg";
import serviceCorporate from "@/assets/service-corporate.jpg";
import serviceStickers from "@/assets/service-stickers.jpg";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "The Vault — InkOfMemories" },
      { name: "description", content: "Your private archive: re-order saved designs and track every commission in real-time." },
      { property: "og:title", content: "The Vault — InkOfMemories" },
      { property: "og:description", content: "Saved designs, one-click re-orders, live order tracking." },
    ],
  }),
  component: DashboardPage,
});

const memories = [
  { name: "St. Regis Wedding Suite", date: "Jun 2025", img: heroInvitation, qty: "150 invitations" },
  { name: "Acme Corp Visiting Cards", date: "May 2025", img: serviceCorporate, qty: "500 cards" },
  { name: "Heirloom Photobook — Italy", date: "Apr 2025", img: serviceWeddings, qty: "1 book" },
  { name: "Maison Bordeaux Labels", date: "Mar 2025", img: serviceStickers, qty: "1,200 labels" },
];

const stages = [
  { key: "processing", label: "Processing", icon: Clock },
  { key: "printing", label: "Printing", icon: Package },
  { key: "qc", label: "Quality Check", icon: Check },
  { key: "dispatched", label: "Dispatched", icon: Truck },
];

function DashboardPage() {
  const currentStage = 2; // QC
  return (
    <SiteLayout>
      <section className="pt-32 pb-12 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-gold-muted mb-4">Welcome back, Olivia</div>
            <h1 className="font-serif text-5xl lg:text-6xl">The <span className="italic">Vault</span></h1>
          </div>
          <div className="flex items-center gap-3 border border-border px-4 py-3 w-full md:w-80">
            <Search className="size-4 text-muted-foreground" />
            <input placeholder="Search your memories" className="bg-transparent flex-1 outline-none text-sm font-light" />
          </div>
        </div>
      </section>

      {/* Active order */}
      <section className="px-6 lg:px-10 mb-16">
        <div className="max-w-7xl mx-auto bg-charcoal text-white p-8 lg:p-12">
          <div className="flex flex-wrap justify-between items-baseline gap-4 mb-10">
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-2">Active Commission</div>
              <h2 className="font-serif text-3xl">Order #IOM-2847 &middot; <span className="italic text-white/70">St. Regis Suite</span></h2>
            </div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-white/40">Est. delivery &middot; Jun 12</div>
          </div>

          <div className="relative">
            <div className="absolute top-5 left-5 right-5 h-px bg-white/10" />
            <div className="absolute top-5 left-5 h-px bg-gold transition-all" style={{ width: `calc(${(currentStage / (stages.length - 1)) * 100}% - 2.5rem * ${currentStage / (stages.length - 1)})` }} />
            <div className="relative grid grid-cols-4 gap-4">
              {stages.map((s, i) => {
                const done = i <= currentStage;
                return (
                  <div key={s.key} className="flex flex-col items-center text-center">
                    <div className={`size-10 rounded-full border flex items-center justify-center transition-colors ${done ? "bg-gold border-gold text-charcoal" : "bg-charcoal border-white/20 text-white/40"}`}>
                      <s.icon className="size-4" />
                    </div>
                    <div className={`mt-3 text-[10px] tracking-[0.25em] uppercase ${done ? "text-gold" : "text-white/40"}`}>{s.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* My Memories */}
      <section className="px-6 lg:px-10 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-gold-muted mb-2">Saved Designs</div>
              <h2 className="font-serif text-3xl">My Memories</h2>
            </div>
            <Button asChild variant="ghostLuxe" size="sm"><Link to="/canvas">New Commission</Link></Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {memories.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group"
              >
                <div className="aspect-square overflow-hidden bg-charcoal mb-3 relative">
                  <img src={m.img} alt={m.name} loading="lazy" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                  <button className="absolute inset-x-3 bottom-3 glass-dark text-white py-2.5 text-[10px] tracking-[0.25em] uppercase opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center gap-2">
                    <Repeat className="size-3" /> Re-order
                  </button>
                </div>
                <div className="font-serif text-lg leading-tight">{m.name}</div>
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>{m.qty}</span>
                  <span>{m.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}