import { Send } from "lucide-react";
import { TELEGRAM_URL } from "./contact-info";

const FloatingContact = () => {
  return (
    <a
      href={TELEGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Telegram orqali yozing"
      className="fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-elegant hover:scale-105 transition-transform"
    >
      <Send className="h-5 w-5" strokeWidth={1.8} />
    </a>
  );
};

export default FloatingContact;
