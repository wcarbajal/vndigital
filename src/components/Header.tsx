"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
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
      className={ `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${ scrolled
        ? "bg-primary-dark shadow-lg backdrop-blur-md bg-opacity-95"
        : "bg-white border-b border-gray-100"
        }` }
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */ }
        <Link href="#inicio" className="flex items-center gap-2 group">
          <span
            className={ `text-xl font-bold tracking-tight transition-colors ${ scrolled ? "text-white group-hover:text-success" : "text-primary-dark group-hover:text-primary"
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
              className={ `text-sm font-medium transition-colors relative group ${ scrolled
                ? "text-gray-300 hover:text-white"
                : "text-gray-dark hover:text-primary"
                }` }
            >
              { link.label }
              <span className={ `absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${ scrolled ? "bg-success" : "bg-primary"
                }` } />
            </Link>
          ) ) }
          <Link
            href="#contacto"
            className={ `text-sm font-medium px-6 py-2 rounded-lg transition-all hover:shadow-lg hover:-translate-y-0.5 ${ scrolled
              ? "bg-success text-white hover:bg-green-600"
              : "bg-primary text-white hover:bg-blue-700"
              }` }
          >
            Solicitar información
          </Link>
        </nav>

        {/* Mobile hamburger */ }
        <button
          className={ `md:hidden p-2 rounded transition-colors ${ scrolled ? "text-white hover:bg-white/10" : "text-gray-dark hover:bg-gray-100"
            }` }
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
        <div className={ `md:hidden border-t ${ scrolled ? "border-white/10 bg-primary-dark" : "border-gray-100 bg-white" }` }>
          <div className="px-6 py-4 space-y-3">
            { navLinks.map( ( link ) => (
              <Link
                key={ link.href }
                href={ link.href }
                className={ `block py-2 px-4 rounded-lg transition-all ${ scrolled
                  ? "text-gray-300 hover:bg-white/10 hover:text-white"
                  : "text-gray-dark hover:bg-gray-100"
                  }` }
                onClick={ () => setMenuOpen( false ) }
              >
                { link.label }
              </Link>
            ) ) }
            <Link
              href="#contacto"
              className="block py-2 px-4 rounded-lg bg-primary text-white font-medium hover:bg-blue-700 transition-colors text-center mt-2"
              onClick={ () => setMenuOpen( false ) }
            >
              Solicitar información
            </Link>
          </div>
        </div>
      ) }
    </header>
  );
}
