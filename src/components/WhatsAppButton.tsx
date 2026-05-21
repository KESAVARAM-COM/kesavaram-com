import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

interface Props {
  message: string;
  label?: string;
  variant?: "primary" | "gold";
  className?: string;
}

export function WhatsAppButton({ message, label = "Chat on WhatsApp", variant = "primary", className = "" }: Props) {
  const styles =
    variant === "gold"
      ? "bg-gradient-gold text-[var(--primary)] shadow-gold"
      : "bg-[var(--whatsapp)] text-white shadow-soft hover:brightness-110";
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-bold tracking-wide transition active:scale-[0.98] ${styles} ${className}`}
    >
      <MessageCircle className="h-5 w-5" />
      {label}
    </a>
  );
}
