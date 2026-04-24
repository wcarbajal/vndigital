import Link from "next/link";

const razones = [
  {
    titulo: "Enfoque en necesidades reales",
    descripcion: "No ofrecemos soluciones genéricas. Analizamos tu contexto antes de proponer cualquier desarrollo.",
  },
  {
    titulo: "Comunicación clara y directa",
    descripcion: "Sin tecnicismos innecesarios. Hablamos tu idioma y mantenemos informado a tu equipo en todo momento.",
  },
  {
    titulo: "Soluciones escalables y mantenibles",
    descripcion: "Construimos pensando en el crecimiento futuro de tu organización, no solo en el presente.",
  },
  {
    titulo: "Acompañamiento continuo",
    descripcion: "Desde la idea hasta la implementación y más allá. No desaparecemos al entregar el proyecto.",
  },
  {
    titulo: "Visión técnica y de negocio",
    descripcion: "Entendemos tanto el código como los procesos de tu organización para entregar valor real.",
  },
];

export default function PorQueElegirnos() {
  return (
    <>
      {/* Por qué elegirnos */ }
      <section className="bg-gray-light py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block bg-white text-primary text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border border-blue-100 mb-4">
              Por qué elegirnos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Lo que nos diferencia
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            { razones.map( ( r, i ) => (
              <div key={ i } className="bg-white rounded-xl p-6 border border-transparent hover:border-primary/15 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-6 h-6 rounded-full bg-success flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 3 } d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <h3 className="text-base font-semibold text-primary-dark">{ r.titulo }</h3>
                </div>
                <p className="text-sm text-gray-dark leading-relaxed">{ r.descripcion }</p>
              </div>
            ) ) }
          </div>
        </div>
      </section>

      {/* CTA Final */ }
      <section className="relative overflow-hidden bg-linear-to-br from-primary-dark via-[#162e5f] to-primary py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary opacity-40 blur-[80px]" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-success opacity-20 blur-[80px]" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Hablemos sobre{ " " }
            <span className="bg-linear-to-r from-success to-[#5eead4] bg-clip-text text-transparent">tu proyecto</span>
          </h2>
          <p className="text-white/65 text-lg mb-10">
            Cuéntanos qué necesitas y encontramos juntos la solución más adecuada para tu organización.
          </p>
          <Link
            href="#contacto"
            className="inline-block bg-success text-white font-semibold px-10 py-4 rounded-xl hover:brightness-110 transition-all shadow-lg"
          >
            Contactar ahora →
          </Link>
        </div>
      </section>
    </>
  );
}
