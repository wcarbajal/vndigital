const items = [
  "Sistema de presentación institucional",
  "Información clara y accesible para usuarios",
  "Formulario de pre-matrícula o captación de interesados",
  "Registro organizado de consultas y solicitudes",
];

export default function Soluciones() {
  return (
    <section id="soluciones" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Texto */ }
        <div>
          <span className="inline-block bg-blue-50 text-primary text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
            Ejemplo práctico
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
            Soluciones reales para necesidades concretas
          </h2>
          <p className="text-gray-dark text-lg leading-relaxed mb-6">
            Como parte de nuestro enfoque práctico, desarrollamos un prototipo funcional
            de una plataforma web orientada a instituciones educativas, diseñada para
            mejorar la comunicación con padres de familia y facilitar el proceso de
            reservas de matrícula.
          </p>
          <ul className="space-y-3">
            { items.map( ( item, i ) => (
              <li key={ i } className="flex items-start gap-3">
                <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-success flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 3 } d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-dark text-base">{ item }</span>
              </li>
            ) ) }
          </ul>
        </div>

        {/* Mockup visual */ }
        <div className="bg-gray-light rounded-2xl p-6 shadow-inner">
          <div className="bg-white rounded-xl shadow overflow-hidden">
            {/* Barra del navegador simulada */ }
            <div className="bg-gray-light px-4 py-3 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
              <span className="flex-1 bg-white rounded ml-4 px-3 py-1 text-xs text-gray-400">
                vndigital.pe/plataforma
              </span>
            </div>
            {/* Contenido simulado */ }
            <div className="p-6">
              <div className="h-4 bg-primary-dark rounded w-1/2 mb-3" />
              <div className="h-3 bg-gray-200 rounded w-3/4 mb-2" />
              <div className="h-3 bg-gray-200 rounded w-2/3 mb-6" />
              <div className="grid grid-cols-2 gap-3 mb-6">
                { [ 1, 2, 3, 4 ].map( ( n ) => (
                  <div key={ n } className="bg-gray-light rounded-lg p-3">
                    <div className="w-6 h-6 bg-primary rounded mb-2 opacity-60" />
                    <div className="h-2 bg-gray-300 rounded w-3/4 mb-1" />
                    <div className="h-2 bg-gray-200 rounded w-1/2" />
                  </div>
                ) ) }
              </div>
              <div className="bg-primary rounded-lg px-4 py-2 w-32 text-center">
                <div className="h-2 bg-white rounded opacity-80 w-20 mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
