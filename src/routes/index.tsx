import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Shield, Truck, Star, Truck as TruckIcon, Palette, FileCheck, RotateCcw } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
      <HeroFAQ />
      <TrustBar />
      <ServicePillars />
      <Atelier />
      <CTA />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative pt-28 pb-28 lg:pt-36 lg:pb-40 px-6 lg:px-10 overflow-hidden">
      {/* Ambient luxe atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 size-[600px] bg-gold/10 blur-[140px] rounded-full" />
        <div className="absolute -bottom-60 -left-40 size-[500px] bg-gold/5 blur-[120px] rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Vertical hairline ornaments */}
      <div className="hidden lg:block absolute top-32 left-10 bottom-32 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent pointer-events-none" />
      <div className="hidden lg:block absolute top-32 right-10 bottom-32 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 lg:gap-16 items-center relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-12 lg:col-span-5 z-10"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 mb-10"
          >
            <span className="block h-px w-10 bg-gold/60" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold-muted font-medium">
              Atelier &middot; Est. MMXXIV
            </span>
          </motion.div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-[5.75rem] leading-[0.92] mb-10 text-balance tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              Where memory
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              becomes <span className="italic gold-foil font-light">artifact.</span>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="text-lg text-muted-foreground max-w-[44ch] leading-[1.7] mb-12 font-light"
          >
            Hand-pressed 24k gold foil on 600gsm Italian cotton. Bound, debossed,
            and delivered for those who recognize the difference between a print
            and a <em className="italic text-foreground/80">keepsake</em>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-8"
          >
            <Button asChild variant="charcoal" size="luxeLg" className="group relative overflow-hidden">
              <Link to="/canvas">
                <span className="relative z-10">Begin Your Commission</span>
                <ArrowRight className="ml-1 size-3.5 relative z-10 group-hover:translate-x-1 transition-transform duration-500" />
              </Link>
            </Button>
            <Link
              to="/collections"
              className="group flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-foreground/70 hover:text-gold-muted transition-colors"
            >
              View Atelier
              <span className="block h-px w-8 bg-foreground/30 group-hover:w-14 group-hover:bg-gold transition-all duration-500" />
            </Link>
          </motion.div>

          {/* Trust signal — connoisseurship */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-16 pt-8 border-t border-border/60 flex items-center gap-6"
          >
            <div className="flex -space-x-2">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="size-8 rounded-full border-2 border-background bg-gradient-to-br from-gold-light to-gold-muted"
                  style={{ zIndex: 4 - i }}
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-3 fill-gold text-gold" />
                ))}
              </div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-foreground/50 font-light">
                Trusted by 2,400+ connoisseurs
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="col-span-12 lg:col-span-7 relative"
        >
          {/* Corner ornaments */}
          <div className="absolute -top-4 -left-4 size-8 border-l border-t border-gold/40 z-20" />
          <div className="absolute -bottom-4 -right-4 size-8 border-r border-b border-gold/40 z-20" />

          <div className="relative aspect-[4/5] lg:aspect-[5/6] overflow-hidden shadow-luxe group">
            {/* Gold gradient frame on hover */}
            <div className="absolute inset-0 z-10 pointer-events-none ring-1 ring-inset ring-gold/0 group-hover:ring-gold/20 transition-all duration-700" />

            <motion.img
              src={heroInvitation}
              alt="Gold foiled wedding invitation, hand-pressed at the InkOfMemories atelier"
              width={1024}
              height={1280}
              className="w-full h-full object-cover"
              initial={{ scale: 1.08 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Subtle vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent pointer-events-none" />

            {/* Top-left number plate */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute top-6 left-6 lg:top-10 lg:left-10 flex items-center gap-3"
            >
              <div className="size-10 rounded-full glass-dark flex items-center justify-center">
                <span className="font-serif text-gold text-sm italic">N°</span>
              </div>
              <div className="text-white/70 text-[10px] tracking-[0.3em] uppercase">
                047 / 100
              </div>
            </motion.div>

            {/* Bottom card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.9 }}
              className="absolute bottom-6 right-6 lg:bottom-10 lg:right-10 glass-dark p-7 max-w-[280px] rounded-sm"
            >
              <div className="text-gold text-[10px] tracking-[0.3em] uppercase mb-3">
                Featured Commission
              </div>
              <div className="font-serif text-2xl text-white italic leading-tight">
                The St. Regis Suite
              </div>
              <div className="hairline-gold w-12 mt-4 mb-4" />
              <p className="text-[11px] tracking-wide text-white/60 font-light leading-relaxed">
                24k micron-pressed foil on hand-milled Amalfi cotton.
              </p>
              <div className="mt-5 flex items-center justify-between text-[10px] tracking-[0.2em] uppercase text-white/40">
                <span>From £480</span>
                <span className="text-gold/80">Bespoke</span>
              </div>
            </motion.div>

            {/* Floating spec chip */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="hidden md:flex absolute top-1/2 -left-6 -translate-y-1/2 glass px-4 py-3 rounded-sm flex-col items-center shadow-luxe"
            >
              <span className="font-serif text-2xl gold-foil leading-none">600</span>
              <span className="text-[8px] tracking-[0.25em] uppercase text-foreground/50 mt-1">gsm cotton</span>
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

const heroFaq = [
  {
    icon: TruckIcon,
    q: "Shipping & lead times",
    a: "Standard commissions dispatch in 7–10 days, expedited in 3–5. Velvet-lined archival delivery worldwide, fully insured and tracked.",
  },
  {
    icon: Palette,
    q: "Finishes & materials",
    a: "Choose from matte, satin gloss, debossed, letterpress, and 24k gold or rose-foil — all on 350–600gsm Italian cotton or hot-pressed cardstock.",
  },
  {
    icon: FileCheck,
    q: "Digital & physical proofs",
    a: "Free digital proof within 24 hours. Hand-pressed physical proofs available for £25, fully credited toward your final order.",
  },
  {
    icon: RotateCcw,
    q: "Returns & remakes",
    a: "If a piece doesn't meet our atelier standard, we remake it — at no cost. Bespoke commissions are non-refundable once pressed.",
  },
] as const;

function HeroFAQ() {
  return (
    <section className="px-6 lg:px-10 -mt-8 lg:-mt-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-sm shadow-luxe overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border/60">
            {heroFaq.map((item, i) => (
              <Accordion
                key={item.q}
                type="single"
                collapsible
                className="group/faq"
              >
                <AccordionItem value={`item-${i}`} className="border-b-0">
                  <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-secondary/40 transition-colors [&[data-state=open]]:bg-secondary/40">
                    <div className="flex items-center gap-3 text-left">
                      <item.icon className="size-4 text-gold-muted shrink-0" strokeWidth={1.5} />
                      <span className="text-[11px] tracking-[0.2em] uppercase text-foreground/80 font-medium">
                        {item.q}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 pt-0">
                    <p className="text-[13px] leading-relaxed text-muted-foreground font-light pl-7">
                      {item.a}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
