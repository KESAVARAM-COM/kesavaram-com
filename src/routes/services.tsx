import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { UserCheck, Home, ShieldCheck, Users, Clock, Star } from "lucide-react";
import serviceImg from "@/assets/service-massage.jpg";
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

function ServicesPage() {
  const [pick, setPick] = useState<60 | 90>(60);
  const selected = durations.find((d) => d.mins === pick)!;

  return (
    <div className="px-4 pt-6">
      <div className="mb-4 rounded-2xl bg-gradient-gold p-5 text-center shadow-gold ring-1 ring-[var(--gold)]">
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-primary/70">Lead Therapist</p>
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
            <WhatsAppButton
              message={`Hi Kesavaram, I'd like to book the Full Body Therapeutic Massage (${selected.mins} mins, ₹${selected.price}). Please share available slots.`}
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
