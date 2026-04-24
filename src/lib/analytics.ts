//import type { Metadata } from "next";

/**
 * Configuración de Google Analytics para Next.js
 * 
 * Pasos para implementar:
 * 1. npm install @vercel/analytics next-gtag
 * 2. Obtener ID de Google Analytics (formato: G-XXXXXXXXXX)
 * 3. Reemplazar YOUR_GA_ID con tu ID real
 * 4. Descomentar e implementar
 */

// Importar en layout.tsx:
// import { GoogleAnalytics } from '@next/third-parties/google'

// Usar en componente root:
// <GoogleAnalytics gaId="G-XXXXXXXXXX" />

// O usar Analytics de Vercel (más simple):
// import { Analytics } from '@vercel/analytics/react';
// <Analytics />

export const analyticsConfig = {
  // Google Analytics ID
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || "",

  // Eventos personalizados
  events: {
    PAGE_VIEW: "page_view",
    CONTACT_FORM: "contact_form_submit",
    SERVICE_CLICK: "service_click",
    SOLUTION_VIEW: "solution_view",
    DOWNLOAD: "download",
  },

  // Configuración de conversiones
  conversions: {
    contactFormSubmit: {
      value: 50,
      currency: "USD",
      label: "contact_form_submit",
    },
    serviceInquiry: {
      value: 30,
      currency: "USD",
      label: "service_inquiry",
    },
  },
};

/**
 * Hook para trackear eventos
 * Uso: useAnalytics().trackEvent('EVENT_NAME', {...data})
 */
export const useAnalytics = () => {
  const trackEvent = (
    eventName: string,
    eventData?: Record<string, unknown>
  ) => {
    if ( typeof window !== "undefined" && window.gtag ) {
      window.gtag( "event", eventName, eventData );
    }
  };

  return { trackEvent };
};

/**
 * Tipos para Google Analytics
 */
declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      eventData?: Record<string, unknown>
    ) => void;
  }
}

export default analyticsConfig;
