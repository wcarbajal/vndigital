"use client";

import { useState, useEffect } from "react";
import { testimonios } from "@/data";

export default function Testimonios() {
  const [ currentIndex, setCurrentIndex ] = useState( 0 );
  const [ autoplay, setAutoplay ] = useState( true );

  useEffect( () => {
    if ( !autoplay ) return;
    const timer = setInterval( () => {
      setCurrentIndex( ( prev ) => ( prev + 1 ) % testimonios.length );
    }, 5000 );
    return () => clearInterval( timer );
  }, [ autoplay ] );

  const goToSlide = ( index: number ) => {
    setCurrentIndex( index );
    setAutoplay( false );
  };

  const nextSlide = () => {
    setCurrentIndex( ( prev ) => ( prev + 1 ) % testimonios.length );
    setAutoplay( false );
  };

  const prevSlide = () => {
    setCurrentIndex( ( prev ) => ( prev - 1 + testimonios.length ) % testimonios.length );
    setAutoplay( false );
  };

  return (
    <section className="bg-white py-20 relative overflow-hidden">
      <style>{ `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-slide-in { animation: slideIn 0.8s ease-out forwards; }
        .star { color: #fbbf24; }
      `}</style>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */ }
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block bg-blue-50 text-primary text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border border-blue-100 mb-4">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            Lo que nuestros clientes dicen
          </h2>
          <p className="text-gray-dark text-lg max-w-2xl mx-auto">
            Historias reales de cómo transformamos la comunicación y gestión digital en organizaciones.
          </p>
        </div>

        {/* Carousel */ }
        <div className="relative">
          {/* Slider Container */ }
          <div className="bg-linear-to-br from-primary/5 to-success/5 rounded-3xl p-8 md:p-12 min-h-96 flex items-center justify-center relative overflow-hidden">
            {/* Testimonios */ }
            { testimonios.map( ( testimonio, idx ) => (
              <div
                key={ testimonio.id }
                className={ `absolute w-full transition-all duration-500 transform ${ idx === currentIndex
                  ? "opacity-100 translate-x-0 scale-100"
                  : idx < currentIndex
                    ? "opacity-0 -translate-x-full scale-95"
                    : "opacity-0 translate-x-full scale-95"
                  }` }
              >
                <div className="text-center max-w-2xl mx-auto">
                  {/* Avatar */ }
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-6">
                    { testimonio.avatar }
                  </div>

                  {/* Rating */ }
                  <div className="flex justify-center gap-1 mb-6">
                    { [ ...Array( testimonio.calificacion ) ].map( ( _, i ) => (
                      <span key={ i } className="star text-2xl">
                        ★
                      </span>
                    ) ) }
                  </div>

                  {/* Testimonio */ }
                  <p className="text-lg text-gray-dark leading-relaxed mb-8 italic">
                    `{ testimonio.testimonio }`
                  </p>

                  {/* Autor */ }
                  <div>
                    <p className="font-semibold text-primary-dark text-base">{ testimonio.nombre }</p>
                    <p className="text-sm text-gray-400">{ testimonio.cargo }</p>
                    <p className="text-xs text-primary font-medium">{ testimonio.empresa }</p>
                  </div>
                </div>
              </div>
            ) ) }
          </div>

          {/* Controles */ }
          <div className="flex items-center justify-between mt-8">
            {/* Botones de navegación */ }
            <div className="flex gap-3">
              <button
                onClick={ prevSlide }
                onMouseEnter={ () => setAutoplay( false ) }
                className="w-12 h-12 rounded-full bg-primary text-white hover:bg-primary-dark transition-all hover:shadow-lg active:scale-95"
                aria-label="Anterior testimonio"
              >
                ←
              </button>
              <button
                onClick={ nextSlide }
                onMouseEnter={ () => setAutoplay( false ) }
                className="w-12 h-12 rounded-full bg-success text-white hover:bg-green-600 transition-all hover:shadow-lg active:scale-95"
                aria-label="Siguiente testimonio"
              >
                →
              </button>
            </div>

            {/* Indicadores */ }
            <div className="flex gap-2">
              { testimonios.map( ( _, idx ) => (
                <button
                  key={ idx }
                  onClick={ () => goToSlide( idx ) }
                  className={ `h-2 rounded-full transition-all ${ idx === currentIndex
                    ? "bg-primary w-8"
                    : "bg-gray-300 w-2 hover:bg-gray-400"
                    }` }
                  aria-label={ `Ir al testimonio ${ idx + 1 }` }
                />
              ) ) }
            </div>

            {/* Autoplay toggle */ }
            <button
              onClick={ () => setAutoplay( !autoplay ) }
              className={ `px-4 py-2 rounded-lg text-sm font-medium transition-all ${ autoplay
                ? "bg-primary text-white hover:bg-primary-dark"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }` }
            >
              { autoplay ? "▶ Autoplay" : "⏸ Pausa" }
            </button>
          </div>
        </div>

        {/* Stats */ }
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          { [
            { numero: "50+", etiqueta: "Proyectos entregados" },
            { numero: "95%", etiqueta: "Clientes satisfechos" },
            { numero: "5★", etiqueta: "Calificación promedio" },
          ].map( ( stat ) => (
            <div
              key={ stat.etiqueta }
              className="text-center p-6 rounded-xl bg-linear-to-br from-primary/10 to-success/10 hover:shadow-lg transition-all animate-fade-in-up"
            >
              <p className="text-4xl font-bold text-primary mb-2">{ stat.numero }</p>
              <p className="text-gray-dark font-medium">{ stat.etiqueta }</p>
            </div>
          ) ) }
        </div>
      </div>
    </section>
  );
}
