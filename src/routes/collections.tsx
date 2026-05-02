import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteLayout } from "@/components/site/SiteLayout";
import serviceWeddings from "@/assets/service-weddings.jpg";
import serviceCorporate from "@/assets/service-corporate.jpg";
import serviceStickers from "@/assets/service-stickers.jpg";
import heroInvitation from "@/assets/hero-invitation.jpg";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections — InkOfMemories" },
      { name: "description", content: "Explore our curated collections of luxury invitations, photobooks, and stationery." },
      { property: "og:title", content: "Collections — InkOfMemories" },
      { property: "og:description", content: "Curated luxury print collections, hand-pressed in our atelier." },
    ],
  }),
  component: CollectionsPage,
});

const collections = [
  { name: "St. Regis Suite", category: "Wedding Invitations", price: "From $24/unit", img: heroInvitation },
  { name: "Heirloom Photobook", category: "Photobooks", price: "From $285", img: serviceWeddings },
  { name: "Onyx Visiting Card", category: "Corporate", price: "From $1.20/unit", img: serviceCorporate },
  { name: "Maison Labels", category: "Custom Labels", price: "From $0.45/unit", img: serviceStickers },
  { name: "Vow Folio", category: "Wedding Stationery", price: "From $145", img: heroInvitation },
  { name: "Atelier Brochure", category: "Corporate", price: "From $4.80/unit", img: serviceCorporate },
];

function CollectionsPage() {
  return (
    <SiteLayout>
      <section className="pt-32 pb-12 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-[10px] tracking-[0.3em] uppercase text-gold-muted mb-4">The Archive</div>
          <h1 className="font-serif text-5xl lg:text-7xl">Collections</h1>
        </div>
      </section>
      <section className="px-6 lg:px-10 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Link to="/canvas" className="group block">
                <div className="aspect-[3/4] overflow-hidden bg-charcoal mb-4">
                  <img src={c.img} alt={c.name} loading="lazy" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                </div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-gold-muted mb-1">{c.category}</div>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-serif text-2xl group-hover:italic transition-all">{c.name}</h3>
                  <span className="text-sm text-muted-foreground">{c.price}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}