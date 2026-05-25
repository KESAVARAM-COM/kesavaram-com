import { Link } from "@tanstack/react-router";
import logo from "@/assets/kesavaram-logo-alt.png";

export function TopBar({ title }: { title?: string }) {
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--gold-soft)] bg-gradient-green text-[var(--cream)] shadow-soft">
      <div className="mx-auto flex max-w-xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Kesavaram" className="h-14 w-14 object-contain" width={56} height={56} />
          <span className="font-heading tracking-[0.18em] text-lg text-center">
            KESAVARAM
          </span>
        </Link>
        {title && (
          <span className="font-heading text-sm tracking-widest text-[var(--gold-soft)]">
            {title}
          </span>
        )}
      </div>
    </header>
  );
}
