import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { UserCheck, Home, ShieldCheck, Users, Clock, Star, Phone, Flame, Sparkles } from "lucide-react";
import serviceImg from "@/assets/service-massage.jpg";
import poojasImg from "@/assets/poojas-homams.jpg";
import therapistImg from "@/assets/therapist.png";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Massage Services — Kesavaram" },
      { name: "description", content: "Book an expert Siddha therapeutic massage at your doorstep in Dindigul. 60 or 90 minute sessions." },
      { property: "og:title", content: "Massage Services — Kesavaram" },
      { property: "og:description", content: "Full body therapeutic massage at your doorstep. Available for men & women." },
    ],
  }),
  component: ServicesPage,
});

const durations = [
  { mins: 60, price: 999 },
  { mins: 90, price: 1499 },
] as const;

const oilAddons = [
  { id: "siddha-blend", name: "Siddha Herbal Blend Oil (multiple Siddha ingredients)", price: 250 },
  { id: "santhanathi", name: "Santhanathi Thailam", price: 300 },
] as const;

type OilId = (typeof oilAddons)[number]["id"];

function ServicesPage() {
  const [pick, setPick] = useState<60 | 90>(60);
  const [oils, setOils] = useState<OilId[]>([]);
  const selected = durations.find((d) => d.mins === pick)!;
  const oilsTotal = oilAddons.filter((o) => oils.includes(o.id)).reduce((s, o) => s + o.price, 0);
  const grandTotal = selected.price + oilsTotal;
  const selectedOilNames = oilAddons.filter((o) => oils.includes(o.id)).map((o) => o.name);


  return (
    <div className="px-4 pt-6">
      {/* Poojas & Homams Featured Service */}
      <div className="mb-5 overflow-hidden rounded-2xl bg-gradient-cream shadow-soft ring-1 ring-[var(--gold)]">
        <div className="relative">
          <img src={poojasImg} alt="Poojas and Homams by C. Saravanaperumal Gurukal" loading="lazy" className="h-56 w-full object-cover" />
          <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-gradient-gold px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-primary shadow-gold">
            <Sparkles className="h-3 w-3" /> Featured
          </div>
        </div>
        <div className="p-5">
          <div className="flex items-center gap-2 text-[var(--gold)]">
            <Flame className="h-5 w-5" />
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em]">Sacred Rituals</span>
          </div>
          <h1 className="mt-2 font-heading text-2xl leading-tight text-primary">Poojas & Homams</h1>
          <p className="mt-1 text-sm font-semibold text-primary/80">By C. Saravanaperumal Gurukal</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Invoke divine blessings with authentic Vedic poojas and powerful homams performed with sacred fire, traditional mantras, and pure devotion. Bring prosperity, health, and harmony into your home — guided by the wisdom of the Siddhars.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-[var(--gold)]/15 px-3 py-1 text-[0.65rem] font-bold text-primary ring-1 ring-[var(--gold)]/40">✦ Vedic Tradition</span>
            <span className="rounded-full bg-[var(--gold)]/15 px-3 py-1 text-[0.65rem] font-bold text-primary ring-1 ring-[var(--gold)]/40">✦ Home & Temple</span>
            <span className="rounded-full bg-[var(--gold)]/15 px-3 py-1 text-[0.65rem] font-bold text-primary ring-1 ring-[var(--gold)]/40">✦ All Occasions</span>
          </div>
          <div className="mt-5 space-y-3">
            <a
              href="tel:+918124356824"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--accent)] px-5 py-3.5 text-sm font-bold tracking-wide text-white shadow-soft transition active:scale-[0.98] hover:brightness-110"
            >
              <Phone className="h-5 w-5" />
              Call Now: 8124356824
            </a>
            <WhatsAppButton
              message="Hi Kesavaram, I'd like to enquire about Poojas & Homams by C. Saravanaperumal Gurukal."
              label="Chat on WhatsApp"
              variant="gold"
            />
          </div>
        </div>
      </div>

      <div className="mb-4 rounded-2xl bg-gradient-gold p-5 text-center shadow-gold ring-1 ring-[var(--gold)]">
        <img
          src={therapistImg}
          alt="C. Saravanaperumal Varma Asan"
          loading="lazy"
          className="mx-auto h-28 w-28 rounded-full object-cover ring-4 ring-[var(--cream)] shadow-soft"
        />
        <p className="mt-3 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-primary/70">Lead Therapist</p>
        <h2 className="mt-2 font-heading text-xl leading-tight text-primary sm:text-2xl">
          C. SARAVANAPERUMAL VARMA ASAN
        </h2>
      </div>
      <div className="overflow-hidden rounded-2xl bg-gradient-cream shadow-soft ring-1 ring-[var(--gold-soft)]">
        <img src={serviceImg} alt="Therapeutic massage" loading="lazy" width={1600} height={1024} className="h-56 w-full object-contain" />
        <div className="p-5">
          <h1 className="font-heading text-2xl text-primary">Full Body Therapeutic Massage</h1>
          <div className="mt-2 flex items-center gap-3">
            <span className="text-xl font-extrabold text-primary">₹{selected.price}</span>
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <Star className="h-3.5 w-3.5 fill-[var(--gold)] text-[var(--gold)]" />
              4.9 (76) · In Stock
            </span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Relax your body and mind with our expert therapeutic massage at your doorstep. Authentic Siddha techniques, premium herbal oils. Available for men & women.
          </p>

          <div className="mt-5 grid grid-cols-4 gap-2">
            <Feature icon={UserCheck} label="Expert Therapists" />
            <Feature icon={Home} label="Home Service" />
            <Feature icon={ShieldCheck} label="Hygienic & Safe" />
            <Feature icon={Users} label="Men & Women" />
          </div>

          <div className="mt-5">
            <p className="text-xs font-bold tracking-wide text-primary/80">Duration</p>
            <div className="mt-2 flex gap-2">
              {durations.map((d) => {
                const isActive = d.mins === pick;
                return (
                  <button
                    key={d.mins}
                    onClick={() => setPick(d.mins)}
                    className={`flex-1 rounded-xl border px-3 py-3 text-sm font-bold transition ${
                      isActive
                        ? "border-[var(--gold)] bg-gradient-gold text-primary shadow-gold"
                        : "border-[var(--gold-soft)] bg-[var(--cream)] text-primary hover:border-[var(--gold)]"
                    }`}
                  >
                    <Clock className="mx-auto mb-1 h-4 w-4" />
                    {d.mins} mins · ₹{d.price}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-5">
            <p className="text-xs font-bold tracking-wide text-primary/80">Add-on Oils (optional)</p>
            <div className="mt-2 space-y-2">
              {oilAddons.map((o) => {
                const isOn = oils.includes(o.id);
                return (
                  <button
                    key={o.id}
                    onClick={() =>
                      setOils((prev) => (isOn ? prev.filter((x) => x !== o.id) : [...prev, o.id]))
                    }
                    className={`flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left transition ${
                      isOn
                        ? "border-[var(--gold)] bg-gradient-gold text-primary shadow-gold"
                        : "border-[var(--gold-soft)] bg-[var(--cream)] text-primary hover:border-[var(--gold)]"
                    }`}
                  >
                    <span className="flex items-center gap-2 text-sm font-bold">
                      <span
                        className={`flex h-5 w-5 items-center justify-center rounded-md border ${
                          isOn ? "border-primary bg-primary text-white" : "border-[var(--gold)] bg-white"
                        }`}
                      >
                        {isOn ? "✓" : ""}
                      </span>
                      {o.name}
                    </span>
                    <span className="text-sm font-extrabold">₹{o.price}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between rounded-xl bg-[var(--cream)] px-4 py-3 ring-1 ring-[var(--gold-soft)]">
            <span className="text-xs font-bold uppercase tracking-wider text-primary/70">Total</span>
            <span className="text-xl font-extrabold text-primary">₹{grandTotal}</span>
          </div>

          <div className="mt-4">
            <WhatsAppButton
              message={`Hi Kesavaram, I'd like to book the Full Body Therapeutic Massage (${selected.mins} mins, ₹${selected.price})${selectedOilNames.length ? ` with add-on oils: ${selectedOilNames.join(", ")} (+₹${oilsTotal})` : ""}. Total: ₹${grandTotal}. Please share available slots.`}
              label="Chat on WhatsApp to Book"
            />
          </div>

        </div>
      </div>

      <div className="mt-5 grid grid-cols-4 gap-2 rounded-2xl bg-gradient-cream p-4 text-center text-[0.65rem] font-semibold text-primary shadow-soft ring-1 ring-[var(--gold-soft)]">
        <TrustItem label="100% Secure Payments" />
        <TrustItem label="Fast Service" />
        <TrustItem label="Genuine Therapists" />
        <TrustItem label="Easy Reschedule" />
      </div>
    </div>
  );
}

function Feature({ icon: Icon, label }: { icon: React.ComponentType<{ className?: string }>; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5 rounded-xl border border-[var(--gold-soft)] bg-[var(--cream)] px-1 py-3 text-center">
      <Icon className="h-5 w-5 text-[var(--gold)]" />
      <span className="text-[0.65rem] font-bold leading-tight text-primary">{label}</span>
    </div>
  );
}

function TrustItem({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="h-7 w-7 rounded-full border border-[var(--gold)]/40 bg-[var(--gold)]/15" />
      {label}
    </div>
  );
}
