import { Send, Instagram } from "lucide-react";
import logo from "@/assets/imuu-logo.jpg";
import { TELEGRAM_URL, INSTAGRAM_URL, PHONE_DISPLAY, PHONE_HREF, ADDRESS } from "./contact-info";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container-editorial py-16">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="IMUU Mebel" width={36} height={36} className="h-9 w-9 object-contain" />
              <span className="font-display text-xl tracking-wide">IMUU<span className="text-accent">.</span>mebel</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Sizning uyingiz uchun mukammal mebel — individual loyiha,
              sifat va aniq 10 kun.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Aloqa</div>
            <div className="space-y-2 text-sm">
              <div className="text-foreground/85">{ADDRESS}</div>
              <a href={PHONE_HREF} className="block text-foreground/85 hover:text-accent transition-colors">
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Ijtimoiy tarmoqlar</div>
            <div className="flex gap-3">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="inline-flex h-11 w-11 items-center justify-center border border-border hover:border-accent hover:text-accent transition-colors"
              >
                <Send className="h-4 w-4" strokeWidth={1.4} />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-11 w-11 items-center justify-center border border-border hover:border-accent hover:text-accent transition-colors"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.4} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground tracking-wide">
          <div>© {new Date().getFullYear()} IMUU Mebel. Barcha huquqlar himoyalangan.</div>
          <div>Toshkent · O'zbekiston</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
