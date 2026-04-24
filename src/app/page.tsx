import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuienesSomos from "@/components/QuienesSomos";
import Problemas from "@/components/Problemas";
import Servicios from "@/components/Servicios";
import PorQueElegirnos from "@/components/PorQueElegirnos";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuienesSomos />
        <Problemas />
        <Servicios />
        {/* <Soluciones /> */}
        <PorQueElegirnos />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
