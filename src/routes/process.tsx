import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteLayout } from "@/components/site/SiteLayout";
import facility from "@/assets/facility.jpg";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Process — InkOfMemories" },
      { name: "description", content: "From consultation to delivery — discover the four-stage atelier process behind every commission." },
      { property: "og:title", content: "Our Process — InkOfMemories" },
      { property: "og:description", content: "Old-world craft meets modern precision." },
    ],
  }),
  component: ProcessPage,
});

const stages = [
  { n: "I", title: "Consultation", desc: "We immerse ourselves in your aesthetic narrative. Stocks, foils, and finishes are curated against your vision." },
  { n: "II", title: "Design", desc: "Our in-house typographers craft proofs on archival paper for tactile review before we commit to press." },
  { n: "III", title: "Press", desc: "Each piece is debossed using restored Heidelberg presses — four tons of vertical force, 0.4mm depth." },
  { n: "IV", title: "Delivery", desc: "Hand-finished and packed in a velvet-lined archival box, with certificate of provenance." },
];

function ProcessPage() {
  return (
    <SiteLayout>
      <section className="pt-32 pb-12 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-[10px] tracking-[0.3em] uppercase text-gold-muted mb-4">The Method</div>
          <h1 className="font-serif text-5xl lg:text-7xl max-w-3xl">Old-world craft, <span className="italic">modern precision.</span></h1>
        </div>
      </section>

      <section className="px-6 lg:px-10 pb-20">
        <div className="max-w-7xl mx-auto aspect-[16/9] overflow-hidden">
          <img src={facility} alt="Atelier" loading="lazy" className="w-full h-full object-cover" />
        </div>
      </section>

      <section className="px-6 lg:px-10 pb-32">
        <div className="max-w-5xl mx-auto space-y-16">
          {stages.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="grid grid-cols-12 gap-8 pb-16 border-b border-border last:border-0"
            >
              <div className="col-span-2 font-serif text-6xl gold-foil">{s.n}</div>
              <div className="col-span-10">
                <h3 className="font-serif text-4xl mb-4 italic">{s.title}</h3>
                <p className="text-muted-foreground font-light text-lg leading-relaxed max-w-prose">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}