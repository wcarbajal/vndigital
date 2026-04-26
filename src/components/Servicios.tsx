"use client";

import { useState } from "react";
import { servicios } from "@/data";



export default function Servicios() {
  const [ , setHoveredId ] = useState<string | null>( null );

  return (
    <section id="servicios" className="bg-gray-light py-20 relative overflow-hidden">
      <style>{ `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .card-animate { animation: fadeInUp 0.6s ease-out forwards; }
        .icon-rotate:hover { transform: rotateZ(360deg); }
      `}</style>

      {/* Decoraciones de fondo */ }
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-success/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-white text-primary text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border border-blue-100 mb-4 hover:shadow-md transition-all">
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
          { servicios.map( ( s, idx ) => (
            <div
              key={ s.numero }
              className="card-animate relative bg-white rounded-2xl p-8 border border-transparent transition-all duration-300 overflow-hidden group cursor-pointer hover:shadow-2xl hover:border-primary/30 hover:-translate-y-2"
              style={ { animationDelay: `${ idx * 0.1 }s` } }
              onMouseEnter={ () => setHoveredId( s.numero ) }
              onMouseLeave={ () => setHoveredId( null ) }
            >
              {/* Fondo gradiente en hover */ }
              <div className={ `absolute inset-0 bg-linear-to-br from-primary/5 to-success/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none` } />

              {/* Número grande decorativo */ }
              <span className="absolute -top-2 right-4 text-9xl font-black text-gray-100 select-none pointer-events-none leading-none group-hover:text-primary/10 transition-colors duration-300">
                { s.numero }
              </span>

              <div className="relative flex items-start gap-5">
                <div className="bg-blue-50 text-primary w-14 h-14 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white group-hover:[&>svg]:rotate-180 transition-all duration-500 [&>svg]:transition-transform [&>svg]:duration-500">
                  { s.icon }
                </div>

                <div className="flex-1">
                  <span className="text-xs font-bold text-primary tracking-widest uppercase">{ s.numero }</span>
                  <h3 className="text-lg font-semibold text-primary-dark mt-2 mb-2 group-hover:text-primary transition-colors duration-300">{ s.titulo }</h3>
                  <p className="text-sm text-gray-dark leading-relaxed mb-4">{ s.descripcion }</p>

                  {/* Características */ }
                  { s.caracteristicas && (
                    <div className="flex flex-wrap gap-2 max-h-0 group-hover:max-h-20 overflow-hidden transition-all duration-300">
                      { s.caracteristicas.map( ( char ) => (
                        <span key={ char } className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                          { char }
                        </span>
                      ) ) }
                    </div>
                  ) }
                </div>
              </div>

              {/* Indicador de link */ }
              <div className="absolute bottom-4 right-4 w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:translate-x-0 translate-x-2">
                →
              </div>
            </div>
          ) ) }
        </div>
      </div>
    </section>
  );
}
