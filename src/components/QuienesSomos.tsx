"use client";

import { useEffect, useState, useRef } from "react";

export default function QuienesSomos() {
  const [ isVisible, setIsVisible ] = useState( false );
  const [ counts, setCounts ] = useState( { disponibilidad: 0, medida: 0, atencion: 0, experiencia: 0 } );
  const sectionRef = useRef<HTMLDivElement>( null );

  useEffect( () => {
    const observer = new IntersectionObserver( ( entries ) => {
      if ( entries[ 0 ].isIntersecting && !isVisible ) {
        setIsVisible( true );
      }
    }, { threshold: 0.3 } );

    if ( sectionRef.current ) {
      observer.observe( sectionRef.current );
    }
    return () => observer.disconnect();
  }, [ isVisible ] );

  useEffect( () => {
    if ( !isVisible ) return;

    const targets = { disponibilidad: 99.9, medida: 100, atencion: 24, experiencia: 2 };
    let current = { disponibilidad: 0, medida: 0, atencion: 0, experiencia: 0 };
    const duration = 2000;
    const fps = 60;
    const stepTime = 1000 / fps;
    const steps = duration / stepTime;

    const interval = setInterval( () => {
      current.disponibilidad += targets.disponibilidad / steps;
      current.medida += targets.medida / steps;
      current.atencion += targets.atencion / steps;
      current.experiencia += targets.experiencia / steps;

      setCounts( {
        disponibilidad: Math.min( current.disponibilidad, targets.disponibilidad ),
        medida: Math.min( current.medida, targets.medida ),
        atencion: Math.min( current.atencion, targets.atencion ),
        experiencia: Math.min( current.experiencia, targets.experiencia ),
      } );
    }, stepTime );

    return () => clearInterval( interval );
  }, [ isVisible ] );

  return (
    <section id="nosotros" className="bg-gray-light py-20 relative overflow-hidden" ref={ sectionRef }>
      <style>{ `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
      `}</style>

      {/* Decoraciones de fondo */ }
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-success/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in-up">
          <span className="inline-block bg-white text-primary text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border border-blue-100 mb-6 hover:shadow-md transition-all">
            Quiénes somos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
            Soluciones tecnológicas al servicio de tu organización
          </h2>
          <p className="text-gray-dark text-lg leading-relaxed mb-4 max-w-3xl mx-auto animate-fade-in-up" style={ { animationDelay: '0.1s' } }>
            VN Digital es una marca especializada en el desarrollo de soluciones tecnológicas
            orientadas a mejorar la comunicación, gestión y organización de procesos
            en organizaciones de cualquier sector.
          </p>
          <p className="text-gray-dark text-lg leading-relaxed max-w-3xl mx-auto animate-fade-in-up" style={ { animationDelay: '0.2s' } }>
            Nuestro enfoque está en crear sistemas claros, funcionales y adaptados a
            las necesidades reales de cada organización, evitando soluciones genéricas
            o innecesariamente complejas.
          </p>
        </div>

        {/* Stats con contadores animados */ }
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          <div className="bg-white rounded-2xl p-6 text-center border border-blue-50 hover:border-primary/20 hover:shadow-lg hover:-translate-y-1 transition-all group animate-fade-in-up" style={ { animationDelay: '0.3s' } }>
            <p className="text-4xl font-extrabold text-primary mb-2 group-hover:text-success transition-colors">
              { counts.disponibilidad.toFixed( 1 ) }%
            </p>
            <p className="text-sm text-gray-dark leading-tight font-medium">Disponibilidad</p>
            <div className="mt-3 h-1 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-success w-3/4 rounded-full"></div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center border border-blue-50 hover:border-primary/20 hover:shadow-lg hover:-translate-y-1 transition-all group animate-fade-in-up" style={ { animationDelay: '0.4s' } }>
            <p className="text-4xl font-extrabold text-primary mb-2 group-hover:text-success transition-colors">
              { Math.round( counts.medida ) }%
            </p>
            <p className="text-sm text-gray-dark leading-tight font-medium">Soluciones a medida</p>
            <div className="mt-3 h-1 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-success w-full rounded-full"></div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center border border-blue-50 hover:border-primary/20 hover:shadow-lg hover:-translate-y-1 transition-all group animate-fade-in-up" style={ { animationDelay: '0.5s' } }>
            <p className="text-4xl font-extrabold text-primary mb-2 group-hover:text-success transition-colors">
              { '<' }{ Math.round( counts.atencion ) }h
            </p>
            <p className="text-sm text-gray-dark leading-tight font-medium">Atención cliente</p>
            <div className="mt-3 h-1 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-success w-1/2 rounded-full"></div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center border border-blue-50 hover:border-primary/20 hover:shadow-lg hover:-translate-y-1 transition-all group animate-fade-in-up" style={ { animationDelay: '0.6s' } }>
            <p className="text-4xl font-extrabold text-primary mb-2 group-hover:text-success transition-colors">
              { Math.round( counts.experiencia ) }+
            </p>
            <p className="text-sm text-gray-dark leading-tight font-medium">Años experiencia</p>
            <div className="mt-3 h-1 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-success w-1/4 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
