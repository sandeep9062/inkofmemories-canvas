import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Check, ArrowRight, ArrowLeft, FileCheck2, ZoomIn, Download } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import heroInvitation from "@/assets/hero-invitation.jpg";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — InkOfMemories" },
      { name: "description", content: "Secure 3-step checkout for your luxury print commission." },
      { property: "og:title", content: "Checkout — InkOfMemories" },
      { property: "og:description", content: "Secure, sophisticated checkout. Three steps. No clutter." },
    ],
  }),
  component: CheckoutPage,
});

const STEPS = ["Design", "Proof", "Shipping", "Payment"] as const;

function CheckoutPage() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [proofApproved, setProofApproved] = useState(false);

  return (
    <SiteLayout>
      <section className="pt-32 pb-12 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-8">
            <Lock className="size-3 text-gold" /> Secure checkout
          </div>

          {/* Stepper */}
          <div className="grid grid-cols-4 gap-2 lg:gap-8 mb-12">
            {STEPS.map((s, i) => (
              <div key={s} className="flex items-center gap-3">
                <div className={`size-8 rounded-full flex items-center justify-center text-xs font-serif transition-colors ${i <= step ? "bg-charcoal text-white" : "bg-secondary text-muted-foreground"}`}>
                  {i < step ? <Check className="size-3.5" /> : i + 1}
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Step {i + 1}</div>
                  <div className={`font-serif text-lg ${i === step ? "italic" : ""}`}>{s}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-10 pb-32">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {done ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="border border-gold/40 bg-gold/5 p-12 text-center">
                <div className="size-14 rounded-full bg-gold flex items-center justify-center mx-auto mb-6">
                  <Check className="size-6 text-charcoal" />
                </div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-gold-muted mb-3">Confirmed</div>
                <h2 className="font-serif text-4xl mb-3 italic">Your commission begins.</h2>
                <p className="text-muted-foreground font-light max-w-md mx-auto mb-8">
                  Order #IOM-2848 &middot; A confirmation has been sent. Track progress anytime in The Vault.
                </p>
                <Button asChild variant="charcoal" size="luxe"><Link to="/dashboard">Open The Vault</Link></Button>
              </motion.div>
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.3 }}
                  className="border border-border p-8 lg:p-12"
                >
                  {step === 0 && <DesignStep />}
                  {step === 1 && <ProofStep approved={proofApproved} setApproved={setProofApproved} />}
                  {step === 2 && <ShippingStep />}
                  {step === 3 && <PaymentStep />}

                  <div className="mt-12 flex justify-between items-center">
                    <button
                      onClick={() => setStep(Math.max(0, step - 1))}
                      disabled={step === 0}
                      className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground hover:text-foreground disabled:opacity-30 flex items-center gap-2"
                    >
                      <ArrowLeft className="size-3.5" /> Back
                    </button>
                    <Button
                      onClick={() => step === 3 ? setDone(true) : setStep(step + 1)}
                      disabled={step === 1 && !proofApproved}
                      variant="charcoal"
                      size="luxe"
                    >
                      {step === 3 ? "Place Order" : step === 1 ? "Approve & Continue" : "Continue"} <ArrowRight className="ml-1 size-3.5" />
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            )}
          </div>

          {/* Order summary */}
          <aside className="lg:col-span-1">
            <div className="border border-border p-6 sticky top-28">
              <div className="text-[10px] tracking-[0.3em] uppercase text-gold-muted mb-6">Order Summary</div>
              <div className="flex gap-4 pb-6 border-b border-border">
                <img src={heroInvitation} alt="" className="size-20 object-cover" />
                <div className="flex-1">
                  <div className="font-serif text-lg leading-tight">St. Regis Suite</div>
                  <div className="text-xs text-muted-foreground mt-1">Matte &middot; 150 units</div>
                  <div className="text-sm mt-2">$1,275.00</div>
                </div>
              </div>
              <dl className="space-y-3 py-6 text-sm font-light">
                <Row label="Subtotal" value="$1,275.00" />
                <Row label="Velvet box" value="Included" />
                <Row label="Shipping" value="$24.00" />
              </dl>
              <div className="border-t border-border pt-4 flex justify-between items-baseline">
                <span className="text-[11px] tracking-[0.25em] uppercase">Total</span>
                <span className="font-serif text-3xl">$1,299.00</span>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between"><dt className="text-muted-foreground">{label}</dt><dd>{value}</dd></div>
  );
}

function CheckoutField({ label, type = "text", full }: { label: string; type?: string; full?: boolean }) {
  return (
    <label className={`block ${full ? "md:col-span-2" : ""}`}>
      <span className="text-[10px] tracking-[0.25em] uppercase text-foreground/60">{label}</span>
      <input type={type} className="mt-2 w-full bg-transparent border-b border-border focus:border-gold py-3 outline-none transition-colors font-light" />
    </label>
  );
}

function DesignStep() {
  return (
    <div>
      <h3 className="font-serif text-2xl mb-2">Confirm your <span className="italic">design.</span></h3>
      <p className="text-sm text-muted-foreground font-light mb-8">Review specifications before we route to press.</p>
      <div className="grid md:grid-cols-2 gap-6">
        <SpecRow label="Product" value="Wedding Invitation" />
        <SpecRow label="Quantity" value="150 units" />
        <SpecRow label="Finish" value="Matte" />
        <SpecRow label="Stock" value="600gsm cotton" />
        <SpecRow label="Foil" value="24k gold" />
        <SpecRow label="Lead time" value="7 business days" />
      </div>
    </div>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-border pb-3">
      <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">{label}</div>
      <div className="font-serif text-lg mt-1">{value}</div>
    </div>
  );
}

function ShippingStep() {
  return (
    <div>
      <h3 className="font-serif text-2xl mb-2">Where shall we <span className="italic">deliver?</span></h3>
      <p className="text-sm text-muted-foreground font-light mb-8">Velvet-lined archival packaging, signature required.</p>
      <div className="grid md:grid-cols-2 gap-6">
        <CheckoutField label="First name" />
        <CheckoutField label="Last name" />
        <CheckoutField label="Email" type="email" full />
        <CheckoutField label="Address" full />
        <CheckoutField label="City" />
        <CheckoutField label="Postal code" />
      </div>
    </div>
  );
}

function PaymentStep() {
  return (
    <div>
      <h3 className="font-serif text-2xl mb-2">Secure <span className="italic">payment.</span></h3>
      <p className="text-sm text-muted-foreground font-light mb-8 flex items-center gap-2">
        <Lock className="size-3.5 text-gold" /> Encrypted end-to-end. We never store your card.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <CheckoutField label="Cardholder name" full />
        <CheckoutField label="Card number" full />
        <CheckoutField label="Expiry" />
        <CheckoutField label="CVC" />
      </div>
    </div>
  );
}