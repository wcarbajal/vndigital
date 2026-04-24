const servicios = [
  {
    numero: "01",
    titulo: "Desarrollo web institucional",
    descripcion:
      "Diseño y desarrollo de sitios web profesionales orientados a brindar información clara, mejorar la imagen institucional y facilitar el contacto con clientes o usuarios.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.8 } d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    numero: "02",
    titulo: "Sistemas web a medida",
    descripcion:
      "Desarrollo de sistemas web para la gestión de procesos como registros, formularios, reservas, consultas y administración básica, adaptados a cada organización.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.8 } d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    numero: "03",
    titulo: "Consultoría tecnológica",
    descripcion:
      "Asesoramiento estratégico en soluciones digitales, transformación tecnológica y optimización de procesos para maximizar el valor de tu inversión en TI.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.8 } d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5h.01" />
      </svg>
    ),
  },
  {
    numero: "04",
    titulo: "Automatización de procesos",
    descripcion:
      "Implementación de soluciones para automatizar tareas repetitivas, mejorar eficiencia operativa y reducir errores en tus procesos empresariales.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.8 } d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    numero: "05",
    titulo: "Mantenimiento y mejoras",
    descripcion:
      "Soporte, corrección de errores y mejoras continuas en sistemas web existentes para mantenerlos seguros, actualizados y funcionando correctamente.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.8 } d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    numero: "06",
    titulo: "Base de datos y almacenamiento",
    descripcion:
      "Diseño e implementación de bases de datos robustas, seguras y escalables para garantizar la integridad y disponibilidad de tus datos empresariales.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.8 } d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4m16 0c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="bg-gray-light py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-white text-primary text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border border-blue-100 mb-4">
            Servicios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            ¿En qué podemos ayudarte?
          </h2>
          <p className="text-gray-dark text-lg max-w-2xl mx-auto">
            Soluciones web adaptadas al tamaño y necesidades reales de tu organización.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6">
          { servicios.map( ( s ) => (
            <div
              key={ s.numero }
              className="relative bg-white rounded-xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group border border-transparent hover:border-primary/10"
            >
              {/* Número grande decorativo */ }
              <span className="absolute -top-2 right-4 text-9xl font-black text-gray-100 select-none pointer-events-none leading-none">
                { s.numero }
              </span>
              <div className="relative flex items-start gap-5">
                <div className="bg-blue-50 text-primary w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  { s.icon }
                </div>
                <div>
                  <span className="text-xs font-bold text-primary tracking-widest">{ s.numero }</span>
                  <h3 className="text-lg font-semibold text-primary-dark mt-1 mb-2">{ s.titulo }</h3>
                  <p className="text-sm text-gray-dark leading-relaxed">{ s.descripcion }</p>
                </div>
              </div>
            </div>
          ) ) }
        </div>
      </div>
    </section>
  );
}
