import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import logo from "@/assets/imuu-logo.jpg";

const NAV = [
  { href: "#about", label: "Biz haqimizda" },
  { href: "#services", label: "Xizmatlar" },
  { href: "#process", label: "Jarayon" },
  { href: "#gallery", label: "Galereya" },
  { href: "#contact", label: "Aloqa" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container-editorial flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-3" aria-label="IMUU Mebel">
          <img src={logo} alt="IMUU Mebel logo" className="h-10 w-10 object-contain" width={40} height={40} />
          <span className="font-display text-xl tracking-wide text-foreground">IMUU<span className="text-accent">.</span>mebel</span>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm tracking-wide text-foreground/80 hover:text-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild variant="default" className="rounded-none bg-charcoal hover:bg-wood-dark text-ivory px-6">
            <a href="#contact">Buyurtma berish</a>
          </Button>
        </div>

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Menyuni ochish">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <div className="mt-12 flex flex-col gap-6">
                {NAV.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="font-display text-2xl text-foreground hover:text-accent transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <Button asChild className="mt-6 rounded-none bg-charcoal hover:bg-wood-dark text-ivory">
                  <a href="#contact">Buyurtma berish</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
