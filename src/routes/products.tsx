import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Star } from "lucide-react";
import { products, categories, type Category, type Product } from "@/lib/catalog";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Shop — Kesavaram.co" },
      { name: "description", content: "Browse authentic Siddha massage oils, herbal medicines, and Hindu devotional items. Order on WhatsApp." },
      { property: "og:title", content: "Shop — Kesavaram.co" },
      { property: "og:description", content: "Massage oils, Siddha drugs and devotional items — order directly on WhatsApp." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [active, setActive] = useState<Category>("oils");
  const list = products.filter((p) => p.category === active);

  return (
    <div className="px-4 pt-6">
      <h1 className="font-heading text-2xl tracking-wide text-primary">Shop by Category</h1>
      <p className="mt-1 text-sm text-muted-foreground">Tap a category, then chat on WhatsApp to order.</p>

      <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
        {categories.map((c) => {
          const isActive = c.id === active;
          return (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold transition ${
                isActive
                  ? "bg-gradient-green text-[var(--gold)] shadow-soft"
                  : "bg-[var(--gold-soft)]/40 text-primary hover:bg-[var(--gold-soft)]"
              }`}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {list.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="overflow-hidden rounded-2xl bg-gradient-cream shadow-soft ring-1 ring-[var(--gold-soft)]">
      <div className="aspect-square overflow-hidden bg-[var(--cream)]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={1024}
          height={1024}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-heading text-base leading-snug text-primary">{product.name}</h3>
        <div className="mt-1 flex items-center gap-2">
          <span className="text-lg font-extrabold text-primary">₹{product.price}</span>
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
            <Star className="h-3.5 w-3.5 fill-[var(--gold)] text-[var(--gold)]" />
            {product.rating} ({product.reviews})
          </span>
        </div>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{product.description}</p>
        <div className="mt-3">
          <WhatsAppButton
            message={`Hi Kesavaram.co, I'd like to order ${product.name} (₹${product.price}). Please share availability.`}
            label="Chat on WhatsApp to Order"
          />
        </div>
      </div>
    </article>
  );
}
