import { useEffect, useRef } from "react";
import { Clock, Sparkles, Hammer } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VALUES = [
  {
    icon: Clock,
    title: "Tez tayyorlash",
    text: "Buyurtmangiz aniq 10 kun ichida tayyor bo'ladi — vaqtingizni qadrlaymiz.",
  },
  {
    icon: Hammer,
    title: "Sifatli materiallar",
    text: "Faqat sinovdan o'tgan, mustahkam va ekologik toza materiallar bilan ishlaymiz.",
  },
  {
    icon: Sparkles,
    title: "Individual dizayn",
    text: "Har bir mebel sizning xonangiz o'lchami va didingizga moslab loyihalanadi.",
  },
];

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([headerRef.current, contentRef.current, cardsRef.current?.children], {
        y: 40,
        opacity: 0,
      });

      // Header animation
      gsap.to(headerRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
        },
      });

      // Content text animation
      gsap.to(contentRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 85%",
        },
      });

      // Cards stagger animation
      if (cardsRef.current?.children) {
        gsap.to(Array.from(cardsRef.current.children), {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="relative py-24 md:py-32 bg-background" ref={containerRef}>
      <div className="container-editorial">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5" ref={headerRef}>
            <div className="flex items-center gap-4 mb-6">
              <span className="hairline" />
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Biz haqimizda
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground">
              Mebel — bu uyingizning <em className="text-accent not-italic">qiyofasi</em>.
            </h2>
          </div>

          <div className="lg:col-span-7 lg:pt-6">
            <div ref={contentRef}>
              <p className="text-lg md:text-xl text-foreground/75 leading-relaxed font-light">
                IMUU Mebel — Toshkentdagi individual loyiha asosida ishlovchi
                mebel ustaxonasi. Biz har bir mijozimiz uchun noyob, sifatli va
                uzoq xizmat qiladigan mebellarni qisqa muddatda tayyorlaymiz.
                Maqsadimiz — sizning uyingizga qulaylik va nafosat olib kirish.
              </p>
            </div>

            <div className="mt-16 grid sm:grid-cols-3 gap-8" ref={cardsRef}>
              {VALUES.map(({ icon: Icon, title, text }) => (
                <div key={title} className="group">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center border border-border group-hover:border-accent group-hover:bg-accent/5 transition-colors">
                    <Icon className="h-6 w-6 text-accent" strokeWidth={1.4} />
                  </div>
                  <h3 className="font-display text-2xl mb-2 text-foreground">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
