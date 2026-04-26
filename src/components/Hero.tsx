"use client";

import Image from 'next/image';
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-b from-primary-dark via-[#1a3a6b] to-primary"
    >
      <style>{ `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(2deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.3); }
          50% { box-shadow: 0 0 40px rgba(34, 197, 94, 0.5); }
        }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-slide-in-left { animation: slideInLeft 0.8s ease-out forwards; }
        .animate-slide-in-right { animation: slideInRight 0.8s ease-out 0.2s forwards; opacity: 0; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
      `}</style>

      {/* Fondo con degradado y elementos decorativos */ }
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Elemento decorativo principal */ }
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-10 left-10 w-96 h-96 bg-primary/40 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-success/20 rounded-full blur-3xl animate-float" style={ { animationDelay: '2s' } } />
        </div>

        {/* Patrón de líneas sutiles */ }
        <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Contenido principal */ }
      <div className="relative w-full max-w-7xl mx-auto px-6 py-32">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Columna Izquierda */ }
          <div className="animate-slide-in-left">
            {/* Badge */ }
            <div className="inline-flex items-center gap-2 bg-linear-to-r from-success/20 to-transparent border border-success/40 rounded-full px-4 py-2 mb-8 animate-fade-in-up" style={ { animationDelay: '0.1s' } }>
              <span className="w-2 h-2 rounded-full bg-success pulse-glow" />
              <span className="text-sm font-semibold text-success uppercase tracking-wide">Soluciones de Software</span>
            </div>

            {/* Título */ }
            <h1 className="text-5xl md:text-6xl font-black leading-[1.1] mb-6 animate-fade-in-up text-white" style={ { animationDelay: '0.2s' } }>
              Impulsa tu organización con{ " " }
              <span className="relative inline-block">
                <span className="relative z-10 bg-linear-to-r from-success via-[#5eead4] to-success bg-clip-text text-transparent">
                  soluciones de software a medida
                </span>
                <span className="absolute inset-x-0 bottom-1 h-3 bg-success/10 -z-10 blur-sm" />
              </span>
            </h1>

            {/* Descripción */ }
            <p className="text-lg text-white/70 leading-relaxed mb-12 max-w-2xl animate-fade-in-up" style={ { animationDelay: '0.3s' } }>
              Desarrollamos soluciones de software funcionales y adaptadas a las necesidades reales de tu organización. Sin soluciones genéricas, sin complejidad innecesaria.
            </p>

            {/* Botones */ }
            <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up" style={ { animationDelay: '0.4s' } }>
              <Link
                href="#contacto"
                className="group relative px-8 py-4 bg-linear-to-r from-success to-[#22c55e] text-white font-bold rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all text-center overflow-hidden"
              >
                <span className="relative z-10">Habla con nosotros</span>
                <span className="absolute inset-0 bg-linear-to-r from-[#16a34a] to-success opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link
                href="#servicios"
                className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-lg hover:border-success hover:bg-white/5 transition-all text-center flex items-center justify-center gap-2 group"
              >
                Ver servicios
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* Stats */ }
            <div className="grid grid-cols-3 gap-6 animate-fade-in-up" style={ { animationDelay: '0.5s' } }>
              <div className="text-center md:text-left">
                <p className="text-3xl md:text-4xl font-black text-success">100%</p>
                <p className="text-sm text-white/60 font-medium mt-2">A medida</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-3xl md:text-4xl font-black text-success">24/7</p>
                <p className="text-sm text-white/60 font-medium mt-2">Soporte</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-3xl md:text-4xl font-black text-success">2+</p>
                <p className="text-sm text-white/60 font-medium mt-2">Años exp</p>
              </div>
            </div>
          </div>

          {/* Columna Derecha — Imagen */ }
          <div className="relative animate-slide-in-right">
            <div className="relative group">
              {/* Glow effect */ }
              <div className="absolute -inset-1 bg-linear-to-r from-success/20 to-primary/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all opacity-75 group-hover:opacity-100" />

              {/* Imagen */ }
              <Image
                src="/hero1.jpg"
                alt="VN Digital - Soluciones de software profesionales"
                width={ 600 }
                height={ 600 }
                priority
                className="relative w-full rounded-3xl shadow-2xl group-hover:shadow-3xl transition-shadow object-cover"
              />

              {/* Overlay gradient */ }
              <div className="absolute inset-0 rounded-3xl bg-linear-to-t from-primary-dark/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Decorative frame */ }
              <div className="absolute -inset-6 border-2 border-success/20 rounded-3xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Línea divisora sutil */ }
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
