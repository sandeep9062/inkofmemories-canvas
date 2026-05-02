import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Upload, Building2, FileText, ShieldCheck, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import serviceCorporate from "@/assets/service-corporate.jpg";

export const Route = createFileRoute("/corporate")({
  head: () => ({
    meta: [
      { title: "Corporate & B2B — InkOfMemories" },
      { name: "description", content: "Bulk brochures, visiting cards, and brand collateral for institutions. Request a quote or upload a PDF." },
      { property: "og:title", content: "Corporate & B2B Portal — InkOfMemories" },
      { property: "og:description", content: "Bulk premium print for institutions that lead." },
    ],
  }),
  component: CorporatePage,
});

function CorporatePage() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [filename, setFilename] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <SiteLayout>
      <section className="pt-32 pb-16 px-6 lg:px-10 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-4">Corporate Atelier</div>
            <h1 className="font-serif text-5xl lg:text-7xl mb-6">Bulk print, <span className="italic gold-foil">bespoke service.</span></h1>
            <p className="text-white/60 font-light text-lg leading-relaxed mb-10 max-w-prose">
              From 5,000-unit brochure runs to executive visiting cards — our B2B atelier handles
              institutional commissions with dedicated account management and white-glove logistics.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: Building2, text: "Dedicated account manager" },
                { icon: FileText, text: "PDF & vector workflow" },
                { icon: ShieldCheck, text: "NDA & SLA available" },
              ].map((f) => (
                <div key={f.text} className="flex flex-col gap-2">
                  <f.icon className="size-5 text-gold" />
                  <span className="text-xs text-white/60 font-light">{f.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-[4/5] overflow-hidden">
            <img src={serviceCorporate} alt="Corporate" loading="lazy" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-10 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-[10px] tracking-[0.3em] uppercase text-gold-muted mb-4">Request a Quote</div>
          <h2 className="font-serif text-4xl lg:text-5xl mb-12">Tell us about your <span className="italic">commission.</span></h2>

          {submitted ? (
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="border border-gold/40 bg-gold/5 p-12 text-center">
              <div className="text-[10px] tracking-[0.3em] uppercase text-gold-muted mb-4">Received</div>
              <h3 className="font-serif text-3xl mb-3 italic">Thank you.</h3>
              <p className="text-muted-foreground font-light">A member of our concierge team will respond within one business day.</p>
            </motion.div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="space-y-8"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <Field label="Full Name" name="name" required />
                <Field label="Company" name="company" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" />
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <SelectField label="Product" options={["Visiting cards", "Brochures", "Annual report", "Letterhead suite", "Custom"]} />
                <SelectField label="Estimated quantity" options={["100 – 500", "500 – 2,500", "2,500 – 10,000", "10,000+"]} />
              </div>
              <Field label="Project brief" name="brief" textarea required />

              {/* Upload */}
              <div
                className="border border-dashed border-border p-6 hover:border-gold transition-colors cursor-pointer"
                onClick={() => fileRef.current?.click()}
              >
                <input ref={fileRef} type="file" accept="application/pdf,image/*" className="hidden"
                  onChange={(e) => setFilename(e.target.files?.[0]?.name ?? null)} />
                <div className="flex items-center gap-4">
                  <div className="size-12 border border-border flex items-center justify-center">
                    <Upload className="size-4" />
                  </div>
                  <div>
                    <div className="font-serif text-lg">{filename ?? "Upload PDF or artwork"}</div>
                    <div className="text-xs text-muted-foreground">Optional &middot; PDF, AI, EPS, PNG up to 100MB</div>
                  </div>
                </div>
              </div>

              <Button type="submit" variant="charcoal" size="luxeLg" className="w-full md:w-auto">
                Submit Request <ArrowRight className="ml-1 size-3.5" />
              </Button>
            </form>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", textarea, required }: { label: string; name: string; type?: string; textarea?: boolean; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-[10px] tracking-[0.25em] uppercase text-foreground/60">{label}{required && <span className="text-gold">*</span>}</span>
      {textarea ? (
        <textarea name={name} required={required} rows={4} className="mt-2 w-full bg-transparent border-b border-border focus:border-gold py-3 outline-none transition-colors font-light" />
      ) : (
        <input name={name} type={type} required={required} className="mt-2 w-full bg-transparent border-b border-border focus:border-gold py-3 outline-none transition-colors font-light" />
      )}
    </label>
  );
}

function SelectField({ label, options }: { label: string; options: string[] }) {
  return (
    <label className="block">
      <span className="text-[10px] tracking-[0.25em] uppercase text-foreground/60">{label}</span>
      <select className="mt-2 w-full bg-transparent border-b border-border focus:border-gold py-3 outline-none transition-colors font-light appearance-none">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}