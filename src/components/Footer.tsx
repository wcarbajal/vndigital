import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Logo y descripción */ }
          <div>
            <span className="text-xl font-bold text-white">
              VN<span className="text-primary">Digital</span>
            </span>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Soluciones web para comunicación y gestión digital, adaptadas a
              las necesidades reales de instituciones y negocios.
            </p>
          </div>

          {/* Navegación */ }
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm">
              { [
                { label: "Inicio", href: "#inicio" },
                { label: "Servicios", href: "#servicios" },
                { label: "Soluciones", href: "#soluciones" },
                { label: "Nosotros", href: "#nosotros" },
                { label: "Contacto", href: "#contacto" },
              ].map( ( link ) => (
                <li key={ link.href }>
                  <Link
                    href={ link.href }
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    { link.label }
                  </Link>
                </li>
              ) ) }
            </ul>
          </div>

          {/* Contacto */ }
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Contacto</h4>
            <a
              href="mailto:contacto@vndigital.pe"
              className="text-sm text-gray-400 hover:text-white transition-colors block mb-2"
            >
              contacto@vndigital.pe
            </a>
            <a
              href="https://wa.me/51999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-success hover:text-green-400 transition-colors"
            >
              WhatsApp →
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <p>© { new Date().getFullYear() } VN Digital. Todos los derechos reservados.</p>
          <p>VN Digital es una marca comercial de Visual Networks S.A.C.</p>
        </div>
      </div>
    </footer>
  );
}
