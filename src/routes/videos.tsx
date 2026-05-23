import { createFileRoute } from "@tanstack/react-router";
import { Youtube, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: "Videos — Kesavaram.co" },
      { name: "description", content: "Watch Kesavaram.co videos: Siddha product reviews, massage techniques, and wellness tips." },
      { property: "og:title", content: "Videos — Kesavaram.co" },
      { property: "og:description", content: "Our YouTube channel: product showcases and massage tutorials." },
    ],
  }),
  component: VideosPage,
});

const CHANNEL_URL = "https://www.youtube.com/@kesavaram252";

function VideosPage() {
  return (
    <div className="px-4 pt-6">
      <h1 className="font-heading text-2xl tracking-wide text-primary">Watch &amp; Learn</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Product showcases, massage demos and wellness tips from our YouTube channel.
      </p>

      <a
        href={CHANNEL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 flex items-center justify-between rounded-2xl bg-gradient-green p-4 text-[var(--cream)] shadow-soft"
      >
        <span className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--gold)] text-primary">
            <Youtube className="h-5 w-5" />
          </span>
          <span>
            <span className="block font-heading text-sm tracking-widest text-[var(--gold)]">KESAVARAM TV</span>
            <span className="block text-xs text-[var(--cream)]/70">Visit our YouTube channel</span>
          </span>
        </span>
        <ExternalLink className="h-4 w-4 text-[var(--gold-soft)]" />
      </a>

      <div className="mt-6">
        <h2 className="font-heading text-lg text-primary">Channel Preview</h2>
        <div className="mt-3 space-y-4">
          {[
            { id: "XRDQpZQYHMw", title: "Kesavaram.co — Featured" },
            { id: "b2FBKtj_BZg", title: "Kesavaram.co — Video 2" },
            { id: "iZmPspC5zWU", title: "Kesavaram.co — Video 3" },
            { id: "bNKL3w_ivIA", title: "Kesavaram.co — Video 4" },
          ].map((v) => (
            <div
              key={v.id}
              className="overflow-hidden rounded-2xl shadow-soft ring-1 ring-[var(--gold-soft)]"
            >
              <div className="relative aspect-video w-full bg-[var(--cream)]">
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          If a player doesn't load, tap the channel card above to open YouTube directly.
        </p>
      </div>
    </div>
  );
}
