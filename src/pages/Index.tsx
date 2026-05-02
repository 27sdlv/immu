import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import Services from "@/components/landing/Services";
import Process from "@/components/landing/Process";
import Gallery from "@/components/landing/Gallery";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import FloatingContact from "@/components/landing/FloatingContact";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "IMUU Mebel",
    description: "Toshkentda 10 kunda tayyor individual mebel — oshxona, yotoqxona, shkaf va ofis mebellari.",
    telephone: "+998900355500",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Usta Shirin 114 (Jomiy bozor)",
      addressLocality: "Toshkent",
      addressCountry: "UZ",
    },
    sameAs: [
      "https://t.me/imuu_mebel",
      "https://www.instagram.com/imuu_mebel/",
    ],
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <Hero />
      <About />
      <Services />
      <Process />
      <Gallery />
      <Contact />
      <Footer />
      <FloatingContact />
    </main>
  );
};

export default Index;
