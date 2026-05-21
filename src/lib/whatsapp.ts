export const WHATSAPP_NUMBER = "918124356824";
export const PHONE_DISPLAY = "+91 81243 56824";

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
