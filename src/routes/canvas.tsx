import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Upload, Image as ImageIcon, Minus, Plus, Check } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/canvas")({
  head: () => ({
    meta: [
      { title: "Creation Canvas — InkOfMemories" },
      { name: "description", content: "Upload your design, choose a finish, see live pricing for premium prints." },
      { property: "og:title", content: "Creation Canvas — InkOfMemories" },
      { property: "og:description", content: "Design your luxury print with real-time previews and pricing." },
    ],
  }),
  component: CanvasPage,
});

type Finish = "matte" | "gloss" | "textured";
type Product = "card" | "invitation" | "photobook";

const PRODUCTS: Record<Product, { name: string; base: number; aspect: string; min: number; tiers: { qty: number; mult: number }[] }> = {
  card: { name: "Visiting Card", base: 1.2, aspect: "aspect-[1.75/1]", min: 50, tiers: [{ qty: 100, mult: 1 }, { qty: 250, mult: 0.85 }, { qty: 500, mult: 0.7 }, { qty: 1000, mult: 0.55 }] },
  invitation: { name: "Wedding Invitation", base: 8.5, aspect: "aspect-[5/7]", min: 25, tiers: [{ qty: 50, mult: 1 }, { qty: 100, mult: 0.9 }, { qty: 200, mult: 0.8 }] },
  photobook: { name: "Heirloom Photobook", base: 285, aspect: "aspect-[4/5]", min: 1, tiers: [{ qty: 1, mult: 1 }, { qty: 3, mult: 0.92 }, { qty: 5, mult: 0.85 }] },
};

const FINISH_MULT: Record<Finish, number> = { matte: 1, gloss: 1.15, textured: 1.35 };

function CanvasPage() {
  const [product, setProduct] = useState<Product>("invitation");
  const [finish, setFinish] = useState<Finish>("matte");
  const [qty, setQty] = useState(50);
  const [image, setImage] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const p = PRODUCTS[product];

  const unit = useMemo(() => {
    const tier = [...p.tiers].reverse().find((t) => qty >= t.qty) ?? p.tiers[0];
    return p.base * tier.mult * FINISH_MULT[finish];
  }, [p, qty, finish]);
  const total = unit * qty;

  const onFile = (f: File | undefined) => {
    if (!f) return;
    const url = URL.createObjectURL(f);
    setImage(url);
  };

  return (
    <SiteLayout>
      <section className="pt-32 pb-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-[10px] tracking-[0.3em] uppercase text-gold-muted mb-4">
            The Creation Canvas
          </div>
          <h1 className="font-serif text-5xl lg:text-6xl mb-3">
            Design <span className="italic">in real-time.</span>
          </h1>
          <p className="text-muted-foreground max-w-xl font-light">
            Upload a high-resolution file, choose your finish, and watch pricing update instantly.
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-10 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Preview */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="bg-charcoal aspect-[4/3] flex items-center justify-center p-8 lg:p-16 relative overflow-hidden shadow-luxe">
              <div className="absolute top-6 left-6 text-[10px] tracking-[0.3em] uppercase text-gold/70">
                Preview &middot; {finish}
              </div>
              <div className={`relative ${p.aspect} ${product === 'photobook' ? 'h-full max-h-full w-auto' : 'w-full max-w-md'} bg-white shadow-2xl overflow-hidden ${
                finish === "gloss" ? "ring-1 ring-white/20" : ""
              } ${finish === "textured" ? "ring-1 ring-gold/30" : ""}`}
              style={finish === "gloss" ? { boxShadow: "0 30px 80px rgba(0,0,0,0.5), inset 0 0 60px rgba(255,255,255,0.3)" } : finish === "textured" ? { backgroundImage: "repeating-linear-gradient(45deg, rgba(0,0,0,0.02) 0px, rgba(0,0,0,0.02) 1px, transparent 1px, transparent 3px)" } : undefined}
              >
                {image ? (
                  <img src={image} alt="Your upload" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-charcoal/40 p-6 text-center">
                    <ImageIcon className="size-8 mb-3" />
                    <div className="font-serif italic text-lg">Awaiting your artwork</div>
                  </div>
                )}
              </div>
            </div>

            {/* Finish toggles */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {(["matte", "gloss", "textured"] as Finish[]).map((f) => (
                <button
                  key={f}
                  onClick={() => setFinish(f)}
                  className={`p-5 border text-left transition-all ${
                    finish === f
                      ? "border-charcoal bg-charcoal text-white"
                      : "border-border hover:border-gold"
                  }`}
                >
                  <div className="text-[10px] tracking-[0.3em] uppercase mb-1 opacity-60">Finish</div>
                  <div className="font-serif text-xl capitalize">{f}</div>
                  <div className="text-[10px] mt-2 opacity-60">
                    {f === "matte" ? "Soft &amp; understated" : f === "gloss" ? "Crisp reflective" : "Hand-pressed grain"}
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Configurator */}
          <div className="lg:col-span-5 space-y-6">
            {/* Product type */}
            <div className="border border-border p-6">
              <div className="text-[10px] tracking-[0.3em] uppercase text-gold-muted mb-4">Product</div>
              <div className="grid grid-cols-3 gap-2">
                {(Object.keys(PRODUCTS) as Product[]).map((k) => (
                  <button
                    key={k}
                    onClick={() => { setProduct(k); setQty(PRODUCTS[k].min * 2); }}
                    className={`px-3 py-3 text-[11px] tracking-wider uppercase border transition-all ${
                      product === k ? "border-charcoal bg-charcoal text-white" : "border-border hover:border-gold"
                    }`}
                  >
                    {PRODUCTS[k].name.split(" ")[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Upload */}
            <div
              className="border border-dashed border-border p-6 hover:border-gold transition-colors cursor-pointer"
              onClick={() => fileRef.current?.click()}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => { e.preventDefault(); onFile(e.dataTransfer.files?.[0]); }}
            >
              <input ref={fileRef} type="file" accept="image/*,application/pdf" className="hidden" onChange={(e) => onFile(e.target.files?.[0] ?? undefined)} />
              <div className="flex items-center gap-4">
                <div className="size-12 border border-border flex items-center justify-center">
                  <Upload className="size-4" />
                </div>
                <div>
                  <div className="font-serif text-lg">{image ? "Replace artwork" : "Upload artwork"}</div>
                  <div className="text-xs text-muted-foreground">PNG, JPG, PDF &middot; up to 50MB</div>
                </div>
              </div>
            </div>

            {/* Quantity */}
            <div className="border border-border p-6">
              <div className="text-[10px] tracking-[0.3em] uppercase text-gold-muted mb-4">
                Quantity {qty < p.min && <span className="text-destructive normal-case tracking-normal">&middot; min {p.min}</span>}
              </div>
              <div className="flex items-center gap-4">
                <button onClick={() => setQty(Math.max(p.min, qty - (qty > 100 ? 25 : 5)))} className="size-10 border border-border hover:border-gold flex items-center justify-center"><Minus className="size-3" /></button>
                <input
                  type="number"
                  value={qty}
                  min={p.min}
                  onChange={(e) => setQty(Math.max(p.min, parseInt(e.target.value) || p.min))}
                  className="font-serif text-3xl text-center w-full bg-transparent focus:outline-none"
                />
                <button onClick={() => setQty(qty + (qty >= 100 ? 25 : 5))} className="size-10 border border-border hover:border-gold flex items-center justify-center"><Plus className="size-3" /></button>
              </div>
              <div className="mt-4 grid grid-cols-4 gap-2">
                {p.tiers.map((t) => (
                  <button key={t.qty} onClick={() => setQty(t.qty)} className={`py-2 text-[10px] tracking-[0.2em] uppercase border ${qty >= t.qty ? "border-gold text-gold-muted" : "border-border text-muted-foreground"}`}>
                    {t.qty}{t.mult < 1 && <span className="ml-1">−{Math.round((1 - t.mult) * 100)}%</span>}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <motion.div
              key={total}
              initial={{ opacity: 0.5, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-charcoal text-white p-8"
            >
              <div className="flex justify-between items-baseline mb-2 text-white/60">
                <span className="text-[11px] tracking-[0.25em] uppercase">Per unit</span>
                <span className="font-serif text-xl">${unit.toFixed(2)}</span>
              </div>
              <div className="hairline-gold w-full opacity-30 my-4" />
              <div className="flex justify-between items-baseline">
                <span className="text-[11px] tracking-[0.25em] uppercase text-gold">Total</span>
                <span className="font-serif text-5xl gold-foil">${total.toFixed(2)}</span>
              </div>
              <Button asChild variant="gold" size="luxe" className="w-full mt-8">
                <a href="/checkout">
                  Proceed to Checkout <Check className="ml-1 size-3.5" />
                </a>
              </Button>
              <div className="mt-4 text-[10px] tracking-[0.2em] uppercase text-white/40 text-center">
                Ships within 7 days &middot; Velvet box included
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}