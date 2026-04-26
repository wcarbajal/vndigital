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
      <section className="bg-gray-light py-20 relative overflow-hidden">
        <style>{ `
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .card-animate { animation: fadeInUp 0.6s ease-out forwards; }
        `}</style>

        {/* Decoraciones */ }
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-success/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block bg-white text-primary text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border border-blue-100 mb-4 hover:shadow-md transition-all">
              Por qué elegirnos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Lo que nos diferencia
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            { razones.map( ( r, i ) => (
              <div
                key={ i }
                className="card-animate relative bg-white rounded-2xl p-6 border border-transparent hover:border-primary/15 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group overflow-hidden"
                style={ { animationDelay: `${ i * 0.1 }s` } }
              >
                {/* Fondo gradiente en hover */ }
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-success/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative flex items-start gap-3 mb-3">
                  <span className="w-7 h-7 rounded-full bg-success flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 3 } d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <h3 className="text-base font-semibold text-primary-dark group-hover:text-primary transition-colors duration-300">
                    { r.titulo }
                  </h3>
                </div>
                <p className="text-sm text-gray-dark leading-relaxed">
                  { r.descripcion }
                </p>

                {/* Indicator line */ }
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-success w-0 group-hover:w-full transition-all duration-500 rounded-full" />
              </div>
            ) ) }
          </div>
        </div>
      </section>

      {/* CTA Final */ }
      <section className="relative overflow-hidden bg-linear-to-br from-primary-dark via-[#162e5f] to-primary py-24">
        <style>{ `
          @keyframes slideInUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-slide-in-up { animation: slideInUp 0.8s ease-out forwards; }
        `}</style>

        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary opacity-40 blur-[80px] animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-success opacity-20 blur-[80px] animate-pulse" style={ { animationDelay: '1s' } } />
        </div>

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight animate-slide-in-up">
            Hablemos sobre{ " " }
            <span className="bg-linear-to-r from-success to-[#5eead4] bg-clip-text text-transparent">
              tu proyecto
            </span>
          </h2>
          <p className="text-white/65 text-lg mb-10 animate-slide-in-up" style={ { animationDelay: '0.1s' } }>
            Cuéntanos qué necesitas y encontramos juntos la solución más adecuada para tu organización.
          </p>
          <Link
            href="#contacto"
            className="inline-block bg-success text-white font-semibold px-10 py-4 rounded-xl hover:brightness-110 hover:shadow-xl hover:-translate-y-1 transition-all shadow-lg animate-slide-in-up"
            style={ { animationDelay: '0.2s' } }
          >
            Contactar ahora →
          </Link>
        </div>
      </section>
    </>
  );
}
