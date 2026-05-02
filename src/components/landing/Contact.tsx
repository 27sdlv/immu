import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { MapPin, Phone, Send, Instagram, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ADDRESS, PHONE_DISPLAY, PHONE_HREF, TELEGRAM_URL, INSTAGRAM_URL } from "./contact-info";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([leftRef.current, rightRef.current], { y: 50, opacity: 0 });

      gsap.to(leftRef.current, {
        y: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: leftRef.current, start: "top 85%" },
      });
      gsap.to(rightRef.current, {
        y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.15,
        scrollTrigger: { trigger: rightRef.current, start: "top 85%" },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-charcoal text-ivory" ref={containerRef}>
      <div className="container-editorial">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-6" ref={leftRef}>
            <div className="flex items-center gap-4 mb-6">
              <span className="hairline" />
              <span className="text-xs uppercase tracking-[0.3em] text-ivory/60">Aloqa</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
              Mebelingizni <em className="text-accent not-italic">bugun</em> buyurtma qiling.
            </h2>
            <p className="mt-6 text-ivory/70 text-lg font-light max-w-md leading-relaxed">
              Bepul maslahat va loyiha uchun biz bilan qulay usulda bog'laning.
              Javobni tezda olasiz.
            </p>

            <div className="mt-12 space-y-8">
              <div className="flex items-start gap-5">
                <MapPin className="h-5 w-5 text-accent mt-1 shrink-0" strokeWidth={1.4} />
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-ivory/50 mb-1">Manzil</div>
                  <div className="text-ivory/95">{ADDRESS}</div>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <Phone className="h-5 w-5 text-accent mt-1 shrink-0" strokeWidth={1.4} />
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-ivory/50 mb-1">Telefon</div>
                  <a href={PHONE_HREF} className="text-ivory/95 hover:text-accent transition-colors">
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <Clock className="h-5 w-5 text-accent mt-1 shrink-0" strokeWidth={1.4} />
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-ivory/50 mb-1">Ish vaqti</div>
                  <div className="text-ivory/95">Dush — Yak · 09:00 — 19:00</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:pl-12 lg:border-l lg:border-ivory/10" ref={rightRef}>
            <div className="space-y-4">
              <Button asChild size="lg" className="w-full justify-between rounded-none h-16 bg-ivory text-charcoal hover:bg-beige px-6 text-base group">
                <a href={PHONE_HREF}>
                  <span className="flex items-center gap-3">
                    <Phone className="h-5 w-5" strokeWidth={1.6} />
                    Qo'ng'iroq qilish
                  </span>
                  <span className="font-display text-lg tracking-wide">{PHONE_DISPLAY}</span>
                </a>
              </Button>

              <Button asChild size="lg" variant="outline" className="w-full justify-between rounded-none h-16 bg-transparent border-ivory/30 text-ivory hover:bg-ivory hover:text-charcoal px-6 text-base">
                <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
                  <span className="flex items-center gap-3">
                    <Send className="h-5 w-5" strokeWidth={1.6} />
                    Telegram orqali yozish
                  </span>
                  <span className="text-sm tracking-wide opacity-80">@imuu_mebel</span>
                </a>
              </Button>

              <Button asChild size="lg" variant="outline" className="w-full justify-between rounded-none h-16 bg-transparent border-ivory/30 text-ivory hover:bg-ivory hover:text-charcoal px-6 text-base">
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                  <span className="flex items-center gap-3">
                    <Instagram className="h-5 w-5" strokeWidth={1.6} />
                    Instagram'da ko'rish
                  </span>
                  <span className="text-sm tracking-wide opacity-80">@imuu_mebel</span>
                </a>
              </Button>
            </div>

            <div className="mt-12 p-8 border border-ivory/10">
              <div className="font-display text-3xl mb-2 text-ivory">10 kun.</div>
              <p className="text-ivory/70 text-sm leading-relaxed">
                Bog'lanishingiz bilan loyihani tasdiqlaganingizdan so'ng,
                mebel aniq 10 kun ichida sizning uyingizda bo'ladi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

