"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  // { label: "Soluciones", href: "#soluciones" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [ scrolled, setScrolled ] = useState( false );
  const [ menuOpen, setMenuOpen ] = useState( false );

  useEffect( () => {
    const onScroll = () => setScrolled( window.scrollY > 20 );
    window.addEventListener( "scroll", onScroll );
    return () => window.removeEventListener( "scroll", onScroll );
  }, [] );

  return (
    <header
      className={ `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${ scrolled ? "bg-primary-dark shadow-lg" : "bg-white border-b border-gray-100"
        }` }
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */ }
        <Link href="#inicio" className="flex items-center gap-2">
          <span
            className={ `text-xl font-bold tracking-tight ${ scrolled ? "text-white" : "text-primary-dark"
              }` }
          >
            VN<span className="text-primary">Digital</span>
          </span>
        </Link>

        {/* Desktop nav */ }
        <nav className="hidden md:flex items-center gap-8">
          { navLinks.map( ( link ) => (
            <Link
              key={ link.href }
              href={ link.href }
              className={ `text-sm font-medium transition-colors ${ scrolled
                ? "text-gray-300 hover:text-white"
                : "text-gray-dark hover:text-primary"
                }` }
            >
              { link.label }
            </Link>
          ) ) }
          <Link
            href="#contacto"
            className="bg-primary text-white text-sm font-medium px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Solicitar información
          </Link>
        </nav>

        {/* Mobile hamburger */ }
        <button
          className={ `md:hidden p-2 rounded ${ scrolled ? "text-white" : "text-gray-dark" }` }
          onClick={ () => setMenuOpen( !menuOpen ) }
          aria-label="Abrir menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            { menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M4 6h16M4 12h16M4 18h16" />
            ) }
          </svg>
        </button>
      </div>

      {/* Mobile menu */ }
      { menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 pb-4">
          { navLinks.map( ( link ) => (
            <Link
              key={ link.href }
              href={ link.href }
              className="block py-3 text-sm font-medium text-gray-dark hover:text-primary border-b border-gray-50"
              onClick={ () => setMenuOpen( false ) }
            >
              { link.label }
            </Link>
          ) ) }
          <Link
            href="#contacto"
            className="block mt-4 text-center bg-primary text-white text-sm font-medium px-5 py-2 rounded-lg"
            onClick={ () => setMenuOpen( false ) }
          >
            Solicitar información
          </Link>
        </div>
      ) }
    </header>
  );
}
