import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

gsap.registerPlugin(ScrollTrigger);

const ITEMS = [
  { src: g1, alt: "Individual mehmonxona mebeli", className: "md:col-span-2 md:row-span-2 aspect-[4/5]" },
  { src: g2, alt: "Yog'och shkaf detali", className: "aspect-[4/3]" },
  { src: g3, alt: "Mehmonxona TV qismi", className: "aspect-[4/3]" },
  { src: g4, alt: "Garderob xonasi", className: "md:col-span-2 aspect-[16/9]" },
  { src: g5, alt: "Kitob javoni", className: "aspect-square" },
  { src: g6, alt: "Oshxona oroli", className: "aspect-square" },
];

const Gallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(titleRef.current, { y: 40, opacity: 0 });
      gsap.set(gridRef.current?.children ? Array.from(gridRef.current.children) : [], { scale: 0.95, opacity: 0 });

      gsap.to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: titleRef.current, start: "top 85%" },
      });

      if (gridRef.current?.children) {
        gsap.to(Array.from(gridRef.current.children), {
          scale: 1,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 80%" },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-gradient-warm" ref={containerRef}>
      <div className="container-editorial">
        <div className="max-w-2xl mb-16 md:mb-20" ref={titleRef}>
          <div className="flex items-center gap-4 mb-6">
            <span className="hairline" />
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Galereya
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground">
            Bizning <em className="text-accent not-italic">ishlarimiz</em>.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4" ref={gridRef}>
          {ITEMS.map((item, i) => (
            <figure
              key={i}
              className={`relative overflow-hidden bg-muted ${item.className}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

