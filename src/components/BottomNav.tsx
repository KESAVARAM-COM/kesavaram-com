import { Link, useRouterState } from "@tanstack/react-router";
import { Home, ShoppingBag, Sparkles, Youtube, Phone } from "lucide-react";

const items = [
  { to: "/", label: "Home", icon: Home },
  { to: "/products", label: "Shop", icon: ShoppingBag },
  { to: "/services", label: "Services", icon: Sparkles },
  { to: "/videos", label: "Videos", icon: Youtube },
  { to: "/contact", label: "Contact", icon: Phone },
] as const;

export function BottomNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-[var(--gold-soft)] bg-[var(--cream)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--cream)]/80">
      <ul className="mx-auto flex max-w-xl items-stretch justify-between px-2 py-1.5">
        {items.map(({ to, label, icon: Icon }) => {
          const active = to === "/" ? pathname === "/" : pathname.startsWith(to);
          return (
            <li key={to} className="flex-1">
              <Link
                to={to}
                className={`flex flex-col items-center gap-0.5 rounded-lg px-2 py-1.5 text-[0.65rem] font-semibold tracking-wide transition ${
                  active
                    ? "text-[var(--gold)]"
                    : "text-primary/70 hover:text-primary"
                }`}
              >
                <Icon className={`h-5 w-5 ${active ? "stroke-[2.4]" : ""}`} />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
