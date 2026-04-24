export default function QuienesSomos() {
  return (
    <section id="nosotros" className="bg-gray-light py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-white text-primary text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border border-blue-100 mb-6">
            Quiénes somos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
            Soluciones tecnológicas al servicio de tu organización
          </h2>
          <p className="text-gray-dark text-lg leading-relaxed mb-4 max-w-3xl mx-auto">
            VN Digital es una marca especializada en el desarrollo de soluciones tecnológicas
            orientadas a mejorar la comunicación, gestión y organización de procesos
            en organizaciones de cualquier sector.
          </p>
          <p className="text-gray-dark text-lg leading-relaxed max-w-3xl mx-auto">
            Nuestro enfoque está en crear sistemas claros, funcionales y adaptados a
            las necesidades reales de cada organización, evitando soluciones genéricas
            o innecesariamente complejas.
          </p>
        </div>

        {/* Stats */ }
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          { [
            { valor: "99.9%", etiqueta: "Disponibilidad" },
            { valor: "100%", etiqueta: "Soluciones a medida" },
            { valor: "<24h", etiqueta: "Atención al cliente" },
            { valor: "2+", etiqueta: "Años de experiencia" },
          ].map( ( stat ) => (
            <div key={ stat.etiqueta } className="bg-white rounded-xl p-6 text-center border border-blue-50 hover:border-primary/20 hover:shadow-md hover:-translate-y-0.5 transition-all">
              <p className="text-3xl font-extrabold text-primary mb-1">{ stat.valor }</p>
              <p className="text-sm text-gray-dark leading-tight">{ stat.etiqueta }</p>
            </div>
          ) ) }
        </div>
      </div>
    </section>
  );
}
