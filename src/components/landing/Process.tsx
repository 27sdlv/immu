import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  { num: "01", title: "Bog'lanish", text: "Telegram, telefon yoki Instagram orqali bizga murojaat qiling." },
  { num: "02", title: "Dizayn tanlash", text: "O'lchov olamiz, loyiha va 3D vizualizatsiyani taqdim etamiz." },
  { num: "03", title: "Ishlab chiqarish", text: "Tasdiqdan so'ng aniq 10 kun ichida mebel tayyorlanadi." },
  { num: "04", title: "Yetkazib berish", text: "Mebelni yetkazamiz va o'rnatib, tozalab topshiramiz." },
];

const Process = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(titleRef.current, { y: 40, opacity: 0 });
      gsap.set(stepsRef.current?.children ? Array.from(stepsRef.current.children) : [], { y: 40, opacity: 0 });

      gsap.to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
        },
      });

      if (stepsRef.current?.children) {
        gsap.to(Array.from(stepsRef.current.children), {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: stepsRef.current,
            start: "top 80%",
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" className="relative py-24 md:py-32 bg-background" ref={containerRef}>
      <div className="container-editorial">
        <div className="max-w-2xl mb-16 md:mb-20" ref={titleRef}>
          <div className="flex items-center gap-4 mb-6">
            <span className="hairline" />
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Qanday ishlaymiz
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground">
            Buyurtmadan o'rnatishgacha — <em className="text-accent not-italic">4 oddiy qadam</em>.
          </h2>
        </div>

        <div className="relative grid md:grid-cols-4 gap-10 md:gap-6" ref={stepsRef}>
          <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-border" />
          {STEPS.map(({ num, title, text }) => (
            <div key={num} className="relative">
              <div className="relative z-10 mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-background border border-accent text-accent font-display text-lg">
                {num}
              </div>
              <h3 className="font-display text-2xl md:text-3xl mb-3 text-foreground">{title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
