import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Leaf, MessageCircle, Sparkles, ShoppingBag, Youtube, ExternalLink, Phone } from "lucide-react";
import logo from "@/assets/kesavaram-logo.png";
import hero from "@/assets/hero-herbs.jpg";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kesavaram — Healing. Naturally. Delivered to You." },
      { name: "description", content: "Authentic Siddha products and expert massage services in Dindigul. Order on WhatsApp." },
      { property: "og:title", content: "Kesavaram — Healing. Naturally. Delivered to You." },
      { property: "og:description", content: "Authentic Siddha products and expert massage services. Just a WhatsApp away." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="bg-gradient-green text-[var(--cream)]">
      <section className="relative overflow-hidden px-6 pb-12 pt-10 text-center">
        <div className="pointer-events-none absolute inset-0 opacity-20" style={{ backgroundImage: `url(${hero})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="relative">
          <img src={logo} alt="Kesavaram lotus logo" className="relative object-cover text-center shadow-none" width={112} height={112} />
          <h1 className="mt-3 font-heading text-2xl tracking-[0.22em] text-[var(--gold)]">
            KESAVARAM
          </h1>

          <h2 className="mt-10 font-heading text-3xl leading-snug text-[var(--cream)]">
            Healing. Naturally.<br />Delivered to You.
          </h2>
          <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-[var(--cream)]/80">
            Authentic Siddha products and expert massage services. Just a WhatsApp away.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-3">
            <Badge icon={MessageCircle} label="Chat to Order" />
            <Badge icon={ShieldCheck} label="Secure & Safe" />
            <Badge icon={Leaf} label="Natural & Trusted" />
          </div>

          <div className="mt-10 space-y-4">
            <p className="rounded-2xl border border-[var(--gold)]/30 bg-[var(--gold)]/10 px-4 py-3 text-xs leading-relaxed text-[var(--cream)]/90">
              Call for Poojas and Homams. Free consultation for health, how to live our life properly by Siddhars' words, and all health-related information.
            </p>
            <a
              href="tel:+918124356824"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--accent)] px-5 py-4 text-base font-bold tracking-wide text-white shadow-soft transition active:scale-[0.98] hover:brightness-110"
            >
              <Phone className="h-5 w-5" />
              Call Now: 8124356824
            </a>
            <WhatsAppButton message="Hi Kesavaram, I'd like to continue on WhatsApp." label="Continue with WhatsApp" variant="gold" />
            <p className="mt-3 text-[0.7rem] tracking-wide text-[var(--gold-soft)]">
              <span className="text-[var(--gold)]">✦</span> 100% Secure · Fast · Reliable
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-t-[2rem] bg-background px-5 pb-10 pt-8 text-foreground">
        <h3 className="font-heading text-xl tracking-wide text-primary">Explore Kesavaram</h3>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <ShortcutCard to="/products" icon={ShoppingBag} title="Shop Products" subtitle="Oils · Drugs · Pooja" />
          <ShortcutCard to="/services" icon={Sparkles} title="Book Massage" subtitle="At your doorstep" />
          <a
            href="http://www.youtube.com/@kesavaram252"
            target="_blank"
            rel="noopener noreferrer"
            className="group col-span-2 rounded-2xl bg-gradient-cream p-4 shadow-soft ring-1 ring-[var(--gold-soft)] transition active:scale-[0.98]"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-gold text-primary shadow-gold">
                  <Youtube className="h-5 w-5" />
                </div>
                <p className="mt-3 font-heading text-base text-primary">Kesavaram TV</p>
                <p className="text-xs text-muted-foreground">Watch on YouTube</p>
              </div>
              <ExternalLink className="h-4 w-4 text-primary/60" />
            </div>
          </a>
        </div>

        <div className="mt-8">
          <h3 className="font-heading text-xl tracking-wide text-primary">Featured Video</h3>
          <div className="mt-3 overflow-hidden rounded-2xl shadow-soft ring-1 ring-[var(--gold-soft)]">
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src="https://www.youtube.com/embed/b2FBKtj_BZg"
                title="Kesavaram TV — Featured Video"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Badge({ icon: Icon, label }: { icon: React.ComponentType<{ className?: string }>; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--gold)]/40 bg-[var(--gold)]/10">
        <Icon className="h-5 w-5 text-[var(--gold)]" />
      </div>
      <span className="text-[0.7rem] font-semibold leading-tight text-[var(--cream)]/85">{label}</span>
    </div>
  );
}

function ShortcutCard({ to, icon: Icon, title, subtitle }: { to: string; icon: React.ComponentType<{ className?: string }>; title: string; subtitle: string }) {
  return (
    <Link to={to} className="group rounded-2xl bg-gradient-cream p-4 shadow-soft ring-1 ring-[var(--gold-soft)] transition active:scale-[0.98]">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-gold text-primary shadow-gold">
        <Icon className="h-5 w-5" />
      </div>
      <p className="mt-3 font-heading text-base text-primary">{title}</p>
      <p className="text-xs text-muted-foreground">{subtitle}</p>
    </Link>
  );
}
