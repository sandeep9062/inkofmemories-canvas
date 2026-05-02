import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Shield, Truck } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import heroInvitation from "@/assets/hero-invitation.jpg";
import serviceWeddings from "@/assets/service-weddings.jpg";
import serviceCorporate from "@/assets/service-corporate.jpg";
import serviceStickers from "@/assets/service-stickers.jpg";
import facility from "@/assets/facility.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "InkOfMemories — Bespoke Luxury Print Atelier" },
      {
        name: "description",
        content:
          "Hand-pressed wedding invitations, premium photobooks, and corporate stationery. Printed in-house at our atelier.",
      },
      { property: "og:title", content: "InkOfMemories — Bespoke Luxury Print Atelier" },
      { property: "og:description", content: "Where memory becomes artifact. Hand-pressed luxury print." },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    title: "Social & Weddings",
    tag: "01",
    image: serviceWeddings,
    desc: "Foiled invitations, vow books, and photo albums for once-in-a-lifetime moments.",
    href: "/collections",
  },
  {
    title: "Corporate & Business",
    tag: "02",
    image: serviceCorporate,
    desc: "Visiting cards, brochures, and brand collateral for institutions that lead.",
    href: "/corporate",
  },
  {
    title: "Custom Stickers & Labels",
    tag: "03",
    image: serviceStickers,
    desc: "Die-cut, foiled, and finished labels for product makers with vision.",
    href: "/canvas",
  },
] as const;

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <TrustBar />
      <ServicePillars />
      <Atelier />
      <CTA />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 px-6 lg:px-10 overflow-hidden">
      <div className="absolute -top-40 -right-40 size-[500px] bg-gold/8 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 lg:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-12 lg:col-span-5 z-10"
        >
          <div className="inline-block px-4 py-1.5 border border-gold/30 rounded-full mb-8 glass-gold">
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold-muted">
              Atelier &middot; Established MMXXIV
            </span>
          </div>
          <h1 className="font-serif text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] mb-8 text-balance">
            Where memory<br />
            becomes <span className="italic gold-foil">artifact.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-[42ch] leading-relaxed mb-12 font-light">
            Hand-pressed gold foil on 600gsm cotton. Bound, debossed, and delivered for those
            who recognize the difference between a print and a keepsake.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Button asChild variant="charcoal" size="luxeLg">
              <Link to="/canvas">
                Create Your Memory <ArrowRight className="ml-1 size-3.5" />
              </Link>
            </Button>
            <Link
              to="/collections"
              className="group flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-foreground/70 hover:text-gold-muted transition-colors"
            >
              View Collections
              <span className="block h-px w-8 bg-foreground/30 group-hover:w-12 group-hover:bg-gold transition-all" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="col-span-12 lg:col-span-7 relative"
        >
          <div className="relative aspect-[4/5] lg:aspect-[5/6] overflow-hidden shadow-luxe">
            <img
              src={heroInvitation}
              alt="Gold foiled wedding invitation"
              width={1024}
              height={1280}
              className="w-full h-full object-cover"
            />
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute bottom-6 right-6 lg:bottom-10 lg:right-10 glass-dark p-6 max-w-[260px] rounded-sm"
            >
              <div className="text-gold text-[10px] tracking-[0.3em] uppercase mb-2">
                Featured &middot; No. 047
              </div>
              <div className="font-serif text-xl text-white italic">
                The St. Regis Suite
              </div>
              <div className="hairline-gold w-12 mt-4" />
              <p className="mt-3 text-[11px] tracking-wide text-white/60 font-light leading-relaxed">
                24k micron-pressed foil on hand-milled cotton.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: Sparkles, text: "Printed in-house at our state-of-the-art atelier" },
    { icon: Shield, text: "FSC-certified 600gsm cotton, archival quality" },
    { icon: Truck, text: "Velvet-lined archival delivery, worldwide" },
  ];
  return (
    <section className="border-y border-border bg-secondary/40 py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
        {items.map((it) => (
          <div key={it.text} className="flex items-center gap-4">
            <it.icon className="size-4 text-gold-muted shrink-0" />
            <span className="text-[11px] tracking-[0.2em] uppercase text-foreground/60 font-light">
              {it.text}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServicePillars() {
  return (
    <section className="py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-20">
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-gold-muted mb-4">
              The Atelier
            </div>
            <h2 className="font-serif text-5xl lg:text-6xl max-w-2xl">
              Three disciplines.<br />
              <span className="italic">One obsession.</span>
            </h2>
          </div>
          <Link
            to="/collections"
            className="group flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-foreground/60 hover:text-gold-muted transition-colors"
          >
            All Collections
            <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                to={s.href}
                className="group block relative overflow-hidden bg-charcoal aspect-[3/4]"
              >
                <img
                  src={s.image}
                  alt={s.title}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                  <div className="text-gold/70 font-serif text-3xl">{s.tag}</div>
                  <div>
                    <h3 className="font-serif text-3xl mb-3 italic">{s.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed font-light max-w-[32ch]">
                      {s.desc}
                    </p>
                    <div className="mt-6 flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-gold">
                      Explore
                      <span className="block h-px w-8 bg-gold/40 group-hover:w-12 transition-all" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Atelier() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative aspect-square lg:aspect-auto lg:min-h-[600px]">
          <img
            src={facility}
            alt="Our atelier"
            width={1536}
            height={1024}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="bg-charcoal text-white p-12 lg:p-20 flex flex-col justify-center">
          <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-6">
            Owned. Operated. Pressed.
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl mb-8 text-white">
            We own the machines.<br />
            <span className="italic gold-foil">No middlemen. No compromise.</span>
          </h2>
          <p className="text-white/60 leading-relaxed font-light mb-10 max-w-prose">
            Our atelier houses heritage Heidelberg presses alongside modern foil-stamping
            equipment — all under one roof. Every order is touched only by our printers,
            ensuring uncompromised quality from quote to dispatch.
          </p>
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
            {[
              { n: "12,000", l: "Sq. ft. atelier" },
              { n: "47", l: "Master craftsmen" },
              { n: "100%", l: "In-house production" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-serif text-3xl text-gold mb-1">{s.n}</div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-white/40">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-32 px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="text-[10px] tracking-[0.3em] uppercase text-gold-muted mb-6">
          Begin Your Commission
        </div>
        <h2 className="font-serif text-5xl lg:text-7xl mb-8">
          Your story, <span className="italic">pressed into permanence.</span>
        </h2>
        <p className="text-lg text-muted-foreground font-light mb-12 max-w-2xl mx-auto leading-relaxed">
          Upload, customize, and preview your design with real-time pricing. Or speak with
          our concierge for fully bespoke commissions.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Button asChild variant="charcoal" size="luxeLg">
            <Link to="/canvas">Open Creation Canvas</Link>
          </Button>
          <Button asChild variant="goldOutline" size="luxeLg" className="text-charcoal border-charcoal/30 hover:bg-charcoal hover:text-white">
            <Link to="/corporate">Request a Quote</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
