import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, MessageCircle, Mail } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PHONE_DISPLAY, WHATSAPP_NUMBER } from "@/lib/whatsapp";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Kesavaram (Dindigul)" },
      { name: "description", content: "Reach Kesavaram in Dindigul, Tamil Nadu. WhatsApp +91 81243 56824 for orders, bookings and questions." },
      { property: "og:title", content: "Contact Kesavaram" },
      { property: "og:description", content: "Dindigul-based Siddha wellness brand. Reach us on WhatsApp." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Kesavaram",
          description: "Authentic Siddha products and expert massage services",
          telephone: "+91 81243 56824",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Dindigul",
            addressRegion: "Tamil Nadu",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="px-4 pt-6">
      <h1 className="font-heading text-2xl tracking-wide text-primary">Get in Touch</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        ​call us with mobile number or conduct us on whatsapp
      </p>

      <div className="mt-5 space-y-3">
        <ContactRow
          icon={MessageCircle}
          label="WhatsApp"
          value={PHONE_DISPLAY}
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
        />
        <ContactRow
          icon={Phone}
          label="Call us"
          value={PHONE_DISPLAY}
          href={`tel:+${WHATSAPP_NUMBER}`}
        />
        <ContactRow
          icon={MapPin}
          label="Location"
          value="Thennampatti,Dindigul, Tamil Nadu, India"
        />
        <ContactRow
          icon={Mail}
          label="Hours"
          value="Mon – Sat · 9:00 AM – 8:00 PM"
        />
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl shadow-soft ring-1 ring-[var(--gold-soft)]">
        <iframe
          title="Dindigul, Tamil Nadu"
          src="https://www.google.com/maps?q=Dindigul,Tamil+Nadu&output=embed"
          loading="lazy"
          className="h-56 w-full border-0"
        />
      </div>

      <div className="mt-6">
        <WhatsAppButton
          message="Hi Kesavaram, I'd like to get in touch."
          label="Chat on WhatsApp"
          variant="gold"
        />
      </div>
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-3 rounded-2xl bg-gradient-cream p-4 shadow-soft ring-1 ring-[var(--gold-soft)]">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-gold text-primary shadow-gold">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <p className="text-[0.7rem] font-bold uppercase tracking-widest text-muted-foreground">{label}</p>
        <p className="truncate font-heading text-base text-primary">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noopener noreferrer">{inner}</a> : inner;
}
