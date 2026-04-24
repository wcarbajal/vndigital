const problemas = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.8 } d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    titulo: "Procesos manuales e ineficientes",
    descripcion: "Tareas que consumen tiempo y generan errores por falta de automatización digital.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.8 } d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    titulo: "Falta de herramientas digitales",
    descripcion: "Sin plataformas claras para gestionar clientes, registros o comunicaciones.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.8 } d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7M4 7c0-2 1-3 3-3h10c2 0 3 1 3 3M4 7h16M10 11h4" />
      </svg>
    ),
    titulo: "Información dispersa o desactualizada",
    descripcion: "Datos en múltiples lugares sin centralización ni visibilidad para el equipo.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.8 } d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    titulo: "Comunicación poco efectiva",
    descripcion: "Dificultad para llegar a clientes, usuarios o padres de familia de forma oportuna.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.8 } d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.8 } d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    titulo: "Sistemas sin mantenimiento ni escalabilidad",
    descripcion: "Plataformas desactualizadas que frenan el crecimiento y generan riesgos técnicos.",
  },
];

export default function Problemas() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-50 text-primary text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Problemas que abordamos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            ¿Tu organización enfrenta estos desafíos?
          </h2>
          <p className="text-gray-dark text-lg max-w-2xl mx-auto">
            Transformamos estos problemas en soluciones digitales simples, útiles y sostenibles.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          { problemas.map( ( item, i ) => (
            <div
              key={ i }
              className="bg-white rounded-xl p-6 border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="bg-blue-50 text-primary w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300 [&>svg]:transition-colors [&>svg]:duration-300">
                { item.icon }
              </div>
              <h3 className="text-base font-semibold text-primary-dark mb-2">{ item.titulo }</h3>
              <p className="text-sm text-gray-dark leading-relaxed">{ item.descripcion }</p>
            </div>
          ) ) }
        </div>
      </div>
    </section>
  );
}
