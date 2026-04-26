"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [ email, setEmail ] = useState( "" );
  const [ subscribed, setSubscribed ] = useState( false );
  const [ isLoading, setIsLoading ] = useState( false );
  const [ error, setError ] = useState( "" );

  const handleSubscribe = async ( e: React.FormEvent ) => {
    e.preventDefault();
    if ( !email ) return;

    setIsLoading( true );
    setError( "" );

    try {
      const res = await fetch( "/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify( { email } ),
      } );

      const data = await res.json();

      if ( !res.ok ) {
        throw new Error( data.error || "Error al suscribirse" );
      }

      setSubscribed( true );
      setEmail( "" );
      setTimeout( () => setSubscribed( false ), 3000 );
    } catch ( err: unknown ) {
      setError( err instanceof Error ? err.message : "Error inesperado" );
      setTimeout( () => setError( "" ), 3000 );
    } finally {
      setIsLoading( false );
    }
  };

  return (
    <footer className="bg-primary-dark text-gray-300 relative overflow-hidden">
      <style>{ `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fadeInUp 0.6s ease-out forwards; }
      `}</style>

      {/* Decoraciones de fondo */ }
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-success/5 rounded-full blur-3xl pointer-events-none" />

      {/* Newsletter Section */ }
      <div className="relative border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in-up">
              <h3 className="text-2xl font-bold text-white mb-2">Mantente actualizado</h3>
              <p className="text-gray-400">
                Recibe noticias sobre nuevas soluciones y tendencias tecnológicas.
              </p>
            </div>
            <form onSubmit={ handleSubscribe } className="flex gap-2 animate-fade-in-up" style={ { animationDelay: '0.1s' } }>
              <input
                type="email"
                placeholder="tu@correo.com"
                value={ email }
                onChange={ ( e ) => setEmail( e.target.value ) }
                disabled={ isLoading }
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-success focus:ring-1 focus:ring-success transition-all disabled:opacity-50"
                required
              />
              <button
                type="submit"
                disabled={ isLoading }
                className="bg-success text-white font-semibold px-6 py-3 rounded-lg hover:brightness-110 transition-all active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                { isLoading ? "Enviando..." : "Suscribirse" }
              </button>
            </form>
            { subscribed && (
              <div className="text-success text-sm mt-2 col-span-full">
                ✓ ¡Suscripción confirmada! Revisa tu correo.
              </div>
            ) }
            { error && (
              <div className="text-red-400 text-sm mt-2 col-span-full">
                ✕ { error }
              </div>
            ) }
          </div>
        </div>
      </div>

      {/* Main Footer */ }
      <div className="relative py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-10 mb-12">
            {/* Brand */ }
            <div className="md:col-span-2 animate-fade-in-up">
              <span className="text-2xl font-bold text-white">
                VN<span className="text-success">Digital</span>
              </span>
              <p className="mt-4 text-sm leading-relaxed text-gray-400">
                Soluciones web profesionales para comunicación y gestión digital, adaptadas a
                las necesidades reales de instituciones y negocios.
              </p>
              {/* Redes sociales */ }
              <div className="flex gap-3 mt-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-success transition-all group">
                  <svg className="w-5 h-5 text-white group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5c-.563-.096-1.546-.14-2.765-.14-2.837 0-4.835 1.734-4.835 4.888v2.252z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-success transition-all group">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-success transition-all group">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" /><path d="M9 8.5c0 .828-.672 1.5-1.5 1.5S6 9.328 6 8.5 6.672 7 7.5 7 9 7.672 9 8.5zm4.5 1.5c.828 0 1.5-.672 1.5-1.5S14.328 7 13.5 7 12 7.672 12 8.5s.672 1.5 1.5 1.5zM12 18s3-4 3-7-1.343-4-3-4-3 1.343-3 4 3 7 3 7z" fill="white" /></svg>
                </a>
              </div>
            </div>

            {/* Navegación */ }
            <div className="animate-fade-in-up" style={ { animationDelay: '0.1s' } }>
              <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-widest">Navegación</h4>
              <ul className="space-y-2 text-sm">
                { [
                  { label: "Inicio", href: "#inicio" },
                  { label: "Servicios", href: "#servicios" },
                  { label: "Nosotros", href: "#nosotros" },
                  { label: "Contacto", href: "#contacto" },
                ].map( ( link ) => (
                  <li key={ link.href }>
                    <Link
                      href={ link.href }
                      className="text-gray-400 hover:text-success transition-colors inline-flex items-center gap-1"
                    >
                      → { link.label }
                    </Link>
                  </li>
                ) ) }
              </ul>
            </div>

            {/* Servicios */ }
            <div className="animate-fade-in-up" style={ { animationDelay: '0.2s' } }>
              <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-widest">Servicios</h4>
              <ul className="space-y-2 text-sm">
                { [
                  { label: "Desarrollo Web", href: "#" },
                  { label: "Sistemas a medida", href: "#" },
                  { label: "Automatización", href: "#" },
                  { label: "Consultoría", href: "#" },
                ].map( ( link ) => (
                  <li key={ link.label }>
                    <Link
                      href={ link.href }
                      className="text-gray-400 hover:text-success transition-colors"
                    >
                      { link.label }
                    </Link>
                  </li>
                ) ) }
              </ul>
            </div>

            {/* Contacto */ }
            <div className="animate-fade-in-up" style={ { animationDelay: '0.3s' } }>
              <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-widest">Contacto</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href={ `mailto:${ process.env.NEXT_PUBLIC_SMTP_TO }` }
                    className="text-gray-400 hover:text-success transition-colors flex items-center gap-2"
                  >
                    <span>✉</span> { process.env.NEXT_PUBLIC_SMTP_TO }
                  </a>
                </li>
                <li>
                  <a
                    href={ `https://wa.me/${ process.env.NEXT_PUBLIC_WHATSAPP_NUMBER }` }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-success transition-colors flex items-center gap-2"
                  >
                    <span>💬</span> WhatsApp
                  </a>
                </li>
                <li className="text-gray-400">
                  <span>📍</span> Lima, Perú
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */ }
          <div className="border-t border-white/10" />

          {/* Bottom */ }
          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>© { new Date().getFullYear() } VN Digital. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-gray-300 transition-colors">
                Privacidad
              </Link>
              <Link href="#" className="hover:text-gray-300 transition-colors">
                Términos
              </Link>
              <Link href="#" className="hover:text-gray-300 transition-colors">
                Cookies
              </Link>
            </div>
            <p>VN Digital es una marca comercial de Visual Networks S.A.C.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
