import type { CSSProperties } from "react";

export const reportWebVitals = ( metric: {
  id: string;
  name: string;
  label: string;
  value: number;
  rating?: string;
  delta?: number;
  entries?: PerformanceEntry[];
} ) => {
  // Log para Google Analytics u otros servicios
  console.log( "Web Vitals:", metric );

  // Aquí puedes enviar datos a Google Analytics, Vercel, etc.
  if ( typeof window !== "undefined" ) {
    // Enviar a Google Analytics (si está configurado)
    if ( window.gtag ) {
      window.gtag( "event", metric.name, {
        value: Math.round( metric.value ),
        event_category: "Web Vitals",
        event_label: metric.id,
        non_interaction: true,
      } );
    }
  }
};

// Estilos para optimizar rendimiento visual
export const optimizedStyles: Record<string, CSSProperties> = {
  container: {
    contentVisibility: "auto",
    containIntrinsicSize: "auto 500px",
  },
  image: {
    contentVisibility: "auto",
    containIntrinsicSize: "auto 300px",
  },
};
