import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import hero from "@/assets/hero-interior.jpg";
import { PHONE_HREF } from "./contact-info";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Setup initial states
      gsap.set([titleRef.current, textRef.current, buttonsRef.current, tagsRef.current?.children], {
        y: 50,
        opacity: 0,
      });

      // Animate them in sequentially
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });
      
      tl.to(titleRef.current, { y: 0, opacity: 1, delay: 0.2 })
        .to(textRef.current, { y: 0, opacity: 1 }, "-=0.6")
        .to(buttonsRef.current, { y: 0, opacity: 1 }, "-=0.6")
        .to(
          tagsRef.current?.children ? Array.from(tagsRef.current.children) : [], 
          { y: 0, opacity: 1, stagger: 0.1 }, 
          "-=0.6"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden" ref={containerRef}>
      <img
        src={hero}
        alt="IMUU Mebel — premium individual mebel interyer"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-overlay" />
      <div className="absolute inset-0 bg-charcoal/20" />

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container-editorial pt-32 pb-20">
          <div className="max-w-3xl">
            <div className="mb-8 flex items-center gap-4">
              <span className="hairline" />
              <span className="text-xs uppercase tracking-[0.3em] text-ivory/80">
                Toshkent · 2017 yildan beri
              </span>
            </div>

            <h1 ref={titleRef} className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-ivory">
              10 kunda tayyor —
              <br />
              <em className="not-italic text-ivory/95">sizga atalgan</em> mebel.
            </h1>

            <p ref={textRef} className="mt-8 max-w-xl text-lg md:text-xl text-ivory/85 leading-relaxed font-light">
              Individual loyiha, sifatli materiallar va aniq muddat.
              Har bir mebel sizning uyingiz va didingiz uchun maxsus tayyorlanadi.
            </p>

            <div ref={buttonsRef} className="mt-12 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-none bg-ivory text-charcoal hover:bg-beige px-8 h-14 text-base group"
              >
                <a href="#contact">
                  Buyurtma berish
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-none bg-transparent border-ivory/60 text-ivory hover:bg-ivory hover:text-charcoal px-8 h-14 text-base"
              >
                <a href={PHONE_HREF}>
                  <Phone className="mr-2 h-4 w-4" />
                  Bog'lanish
                </a>
              </Button>
            </div>

            <div ref={tagsRef} className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 text-ivory/70 text-sm tracking-wide">
              <span>10 kun ichida tayyor</span>
              <span className="h-1 w-1 rounded-full bg-ivory/40" />
              <span>Individual dizayn</span>
              <span className="h-1 w-1 rounded-full bg-ivory/40" />
              <span>Kafolat bilan</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-ivory/60">
        <span className="text-[10px] uppercase tracking-[0.4em]">Pastga</span>
        <div className="h-12 w-px bg-ivory/40" />
      </div>
    </section>
  );
};

export default Hero;
