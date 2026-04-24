import Image from 'next/image';
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-linear-to-br from-primary-dark via-[#162e5f] to-primary"
    >
      {/* Fondos decorativos */ }
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-125 h-125 rounded-full bg-primary opacity-40 blur-[120px]" />
        <div className="absolute -bottom-32 -left-32 w-100 h-100 rounded-full bg-success opacity-20 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 rounded-full border border-white/4" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-275 h-275 rounded-full border border-white/3" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-0 items-center ">
        {/* Columna izquierda */ }
        <div>
          <span className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8 border border-white/15">
            <span className="w-2 h-2 rounded-full bg-success" />
            Soluciones de software profesionales
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
            Impulsa tu organización con{ " " }
            <span className="bg-linear-to-r from-success to-[#5eead4] bg-clip-text text-transparent">
              soluciones de software a medida
            </span>
          </h1>
          <p className="text-lg text-white/65 leading-relaxed mb-10 max-w-lg">
            Desarrollamos soluciones de software funcionales y adaptadas a las
            necesidades reales de tu organización. Sin soluciones genéricas,
            sin complejidad innecesaria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-5">
            <Link
              href="#contacto"
              className="bg-success text-white font-semibold px-8 py-3.5 rounded-xl hover:brightness-110 transition-all text-center shadow-lg"
            >
              Habla con nosotros
            </Link>
            <Link
              href="#servicios"
              className="border border-white/25 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-all text-center"
            >
              Ver servicios →
            </Link>
          </div>
          {/* Stats */ }
         
        </div>

        {/* Columna derecha — ilustración abstracta SVG */ }
        <div className="flex justify-center md:justify-end ">
          <Image
            src="/hero1.jpg"
            alt="VN Digital - Soluciones de software"
            width={ 600 }
            height={ 600 }
            priority
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
