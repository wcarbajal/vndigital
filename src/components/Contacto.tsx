"use client";

import { useState, useRef } from "react";

type FormState = "idle" | "loading" | "success" | "error";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola VN Digital, me interesa conocer más sobre sus servicios web."
);

export default function Contacto() {
  const [ formState, setFormState ] = useState<FormState>( "idle" );
  const [ errorMsg, setErrorMsg ] = useState( "" );
  const [ focusedField, setFocusedField ] = useState<string | null>( null );
  const formRef = useRef<HTMLFormElement>( null );

  async function handleSubmit( e: React.FormEvent<HTMLFormElement> ) {
    e.preventDefault();
    setFormState( "loading" );
    setErrorMsg( "" );

    const form = e.currentTarget;
    const data = {
      nombre: ( form.elements.namedItem( "nombre" ) as HTMLInputElement ).value.trim(),
      email: ( form.elements.namedItem( "email" ) as HTMLInputElement ).value.trim(),
      asunto: ( form.elements.namedItem( "asunto" ) as HTMLInputElement ).value.trim(),
      mensaje: ( form.elements.namedItem( "mensaje" ) as HTMLTextAreaElement ).value.trim(),
    };

    try {
      const res = await fetch( "/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify( data ),
      } );

      if ( !res.ok ) {
        const body = await res.json();
        throw new Error( body.error || "Error al enviar el mensaje." );
      }

      setFormState( "success" );
      form.reset();
    } catch ( err: unknown ) {
      setFormState( "error" );
      setErrorMsg( err instanceof Error ? err.message : "Error inesperado. Intenta de nuevo." );
    }
  }

  return (
    <section id="contacto" className="bg-linear-to-br from-white via-gray-light to-white py-20 relative overflow-hidden">
      <style>{ `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
      `}</style>

      {/* Decoraciones */ }
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-success/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block bg-blue-50 text-primary text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4 hover:shadow-md transition-all">
            Contacto
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            ¿Listo para transformar tu organización?
          </h2>
          <p className="text-gray-dark text-lg max-w-2xl mx-auto">
            Cuéntanos sobre tu proyecto y encontraremos juntos la solución más adecuada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Información de contacto */ }
          <div className="animate-fade-in-up" style={ { animationDelay: '0.1s' } }>
            {/* Métodos de contacto */ }
            <div className="space-y-6 mb-12">
              {/* Email */ }
              <a
                href="mailto:contacto@vndigital.pe"
                className="group p-6 rounded-2xl bg-white border border-gray-200 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 text-primary w-14 h-14 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.8 } d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-widest mb-1">Correo electrónico</p>
                    <p className="text-primary-dark font-semibold group-hover:text-primary transition-colors">contacto@vndigital.pe</p>
                    <p className="text-xs text-gray-500 mt-1">Respuesta en menos de 24 horas</p>
                  </div>
                </div>
              </a>

              {/* WhatsApp */ }
              <a
                href={ `https://wa.me/${ WHATSAPP_NUMBER }?text=${ WHATSAPP_MESSAGE }` }
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl bg-white border border-gray-200 hover:border-success/30 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-green-50 text-success w-14 h-14 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-success group-hover:text-white transition-all">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-widest mb-1">WhatsApp</p>
                    <p className="text-primary-dark font-semibold group-hover:text-success transition-colors">Enviar mensaje directo</p>
                    <p className="text-xs text-gray-500 mt-1">Disponible para consultas rápidas</p>
                  </div>
                </div>
              </a>
            </div>

            {/* Información adicional */ }
            <div className="p-6 rounded-2xl bg-linear-to-br from-primary/10 to-success/5 border border-primary/10">
              <h3 className="font-semibold text-primary-dark mb-3">¿Por qué contactarnos?</h3>
              <ul className="space-y-2 text-sm text-gray-dark">
                <li className="flex items-center gap-2">
                  <span className="text-success">✓</span> Consulta sin compromiso
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-success">✓</span> Análisis personalizado
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-success">✓</span> Propuesta a medida
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-success">✓</span> Acompañamiento total
                </li>
              </ul>
            </div>
          </div>

          {/* Formulario */ }
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 animate-fade-in-up" style={ { animationDelay: '0.2s' } }>
            { formState === "success" ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-linear-to-br from-success to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2.5 } d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary-dark mb-2">¡Mensaje enviado!</h3>
                <p className="text-gray-dark mb-6">Nos pondremos en contacto a la brevedad posible.</p>
                <button
                  onClick={ () => {
                    setFormState( "idle" );
                    formRef.current?.reset();
                  } }
                  className="text-primary font-medium hover:text-primary-dark underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form ref={ formRef } onSubmit={ handleSubmit } noValidate className="space-y-5">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-semibold text-gray-dark mb-2">
                    Nombre completo <span className="text-error">*</span>
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    maxLength={ 100 }
                    onFocus={ () => setFocusedField( "nombre" ) }
                    onBlur={ () => setFocusedField( null ) }
                    className={ `w-full bg-white border-2 rounded-xl px-4 py-3 text-sm text-gray-dark transition-all focus:outline-none ${ focusedField === "nombre"
                      ? "border-primary shadow-lg shadow-primary/20"
                      : "border-gray-200 hover:border-gray-300"
                      }` }
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-dark mb-2">
                    Correo electrónico <span className="text-error">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={ 150 }
                    onFocus={ () => setFocusedField( "email" ) }
                    onBlur={ () => setFocusedField( null ) }
                    className={ `w-full bg-white border-2 rounded-xl px-4 py-3 text-sm text-gray-dark transition-all focus:outline-none ${ focusedField === "email"
                      ? "border-primary shadow-lg shadow-primary/20"
                      : "border-gray-200 hover:border-gray-300"
                      }` }
                    placeholder="tu@correo.com"
                  />
                </div>

                <div>
                  <label htmlFor="asunto" className="block text-sm font-semibold text-gray-dark mb-2">
                    Asunto <span className="text-error">*</span>
                  </label>
                  <input
                    id="asunto"
                    name="asunto"
                    type="text"
                    required
                    maxLength={ 150 }
                    onFocus={ () => setFocusedField( "asunto" ) }
                    onBlur={ () => setFocusedField( null ) }
                    className={ `w-full bg-white border-2 rounded-xl px-4 py-3 text-sm text-gray-dark transition-all focus:outline-none ${ focusedField === "asunto"
                      ? "border-primary shadow-lg shadow-primary/20"
                      : "border-gray-200 hover:border-gray-300"
                      }` }
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-semibold text-gray-dark mb-2">
                    Mensaje <span className="text-error">*</span>
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    maxLength={ 1000 }
                    rows={ 4 }
                    onFocus={ () => setFocusedField( "mensaje" ) }
                    onBlur={ () => setFocusedField( null ) }
                    className={ `w-full bg-white border-2 rounded-xl px-4 py-3 text-sm text-gray-dark transition-all focus:outline-none resize-none ${ focusedField === "mensaje"
                      ? "border-primary shadow-lg shadow-primary/20"
                      : "border-gray-200 hover:border-gray-300"
                      }` }
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>

                { formState === "error" && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                    <p className="text-sm text-red-700 font-medium">⚠ { errorMsg }</p>
                  </div>
                ) }

                <button
                  type="submit"
                  disabled={ formState === "loading" }
                  className="w-full bg-linear-to-r from-primary to-blue-700 text-white font-semibold py-3 rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  { formState === "loading" ? "Enviando..." : "Enviar mensaje" }
                </button>
              </form>
            ) }
          </div>
        </div>
      </div>
    </section>
  );
}
