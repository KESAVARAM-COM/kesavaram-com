import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { TopBar } from "@/components/TopBar";
import { BottomNav } from "@/components/BottomNav";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-heading text-7xl text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">This page does not exist.</p>
        <Link to="/" className="mt-6 inline-flex rounded-2xl bg-gradient-gold px-5 py-3 font-bold text-primary shadow-gold">
          Go home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">Please try again.</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 rounded-2xl bg-gradient-gold px-5 py-3 font-bold text-primary shadow-gold"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#1d3a2a" },
      { title: "Kesavaram — Siddha Wellness & Massage" },
      { name: "description", content: "Healing. Naturally. Delivered to You. Order authentic Siddha products and book poojas and homams book expert massage services in Dindigul via WhatsApp." },
      { property: "og:site_name", content: "Kesavaram" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Kesavaram — Siddha Wellness & Massage" },
      { property: "og:description", content: "Healing. Naturally. Delivered to You. Order authentic Siddha products and book poojas and homams book expert massage services in Dindigul via WhatsApp." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Kesavaram — Siddha Wellness & Massage" },
      { name: "twitter:description", content: "Healing. Naturally. Delivered to You. Order authentic Siddha products and book poojas and homams book expert massage services in Dindigul via WhatsApp." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/80ea6e53-2b89-4ad6-9d77-bb96c5eab0cc/id-preview-19b76128--01658c2d-969e-47f2-8792-42dbfc8fb28e.lovable.app-1779435714312.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/80ea6e53-2b89-4ad6-9d77-bb96c5eab0cc/id-preview-19b76128--01658c2d-969e-47f2-8792-42dbfc8fb28e.lovable.app-1779435714312.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Nunito:wght@400;500;600;700;800&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative min-h-screen pb-20">
        <TopBar />
        <main className="mx-auto max-w-xl">
          <Outlet />
        </main>
        <WhatsAppFloat />
        <BottomNav />
      </div>
    </QueryClientProvider>
  );
}
