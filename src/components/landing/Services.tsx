import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import kitchen from "@/assets/service-kitchen.jpg";
import bedroom from "@/assets/service-bedroom.jpg";
import wardrobe from "@/assets/service-wardrobe.jpg";
import office from "@/assets/service-office.jpg";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    img: kitchen,
    title: "Oshxona mebellari",
    text: "Xonangiz o'lchamiga moslab tayyorlanadigan zamonaviy va ergonomik oshxona garniturlari.",
    num: "01",
  },
  {
    img: bedroom,
    title: "Yotoqxona",
    text: "Tinch va shinam dam olish uchun yotoq, tumba va trumolarning to'liq komplekti.",
    num: "02",
  },
  {
    img: wardrobe,
    title: "Shkaflar",
    text: "Joyni tejaydigan kupe va ichki shkaflar — har bir santimetri o'ylab loyihalangan.",
    num: "03",
  },
  {
    img: office,
    title: "Ofis mebellari",
    text: "Ish samaradorligini oshiradigan stol, javon va konferens-zal mebellari.",
    num: "04",
  },
];

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(titleRef.current, { y: 40, opacity: 0 });
      gsap.set(cardsRef.current?.children ? Array.from(cardsRef.current.children) : [], { y: 60, opacity: 0 });

      // Animate title
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

      // Animate cards
      if (cardsRef.current?.children) {
        gsap.to(Array.from(cardsRef.current.children), {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" className="relative py-24 md:py-32 bg-secondary" ref={containerRef}>
      <div className="container-editorial">
        <div className="max-w-2xl mb-16 md:mb-20" ref={titleRef}>
          <div className="flex items-center gap-4 mb-6">
            <span className="hairline" />
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Xizmatlarimiz
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground">
            Har bir xona uchun <em className="text-accent not-italic">mukammal</em> yechim.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12" ref={cardsRef}>
          {SERVICES.map(({ img, title, text, num }) => (
            <article
              key={title}
              className="group bg-background overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <span className="absolute top-5 left-5 font-display text-ivory text-sm tracking-widest">
                  {num}
                </span>
              </div>
              <div className="p-8 md:p-10">
                <h3 className="font-display text-3xl mb-3 text-foreground">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
