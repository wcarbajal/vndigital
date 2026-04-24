import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://vndigital.pe";

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${ baseUrl }/#organization`,
        name: "VN Digital",
        url: baseUrl,
        logo: {
          "@type": "ImageObject",
          url: `${ baseUrl }/og-image.jpg`,
          width: 1200,
          height: 630,
        },
        description:
          "Soluciones web para comunicación y gestión digital, adaptadas a las necesidades reales de instituciones y negocios.",
        email: "contacto@vndigital.pe",
        sameAs: [
          "https://www.facebook.com/vndigital",
          "https://www.linkedin.com/company/vndigital",
          "https://www.instagram.com/vndigital",
        ],
        foundingDate: "2022",
        areaServed: [ "PE", "LA" ],
        knowsAbout: [
          "Web Development",
          "Digital Transformation",
          "Educational Technology",
          "Business Process Automation",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": `${ baseUrl }/#localbusiness`,
        name: "VN Digital",
        url: baseUrl,
        image: `${ baseUrl }/og-image.jpg`,
        description:
          "Desarrollamos soluciones web claras, funcionales y adaptadas para instituciones educativas y negocios.",
        priceRange: "$$$",
        areaServed: {
          "@type": "Country",
          name: "PE",
        },
        telephone: "+51 XXX XXX XXX",
        email: "contacto@vndigital.pe",
        address: {
          "@type": "PostalAddress",
          addressCountry: "PE",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${ baseUrl }/#website`,
        url: baseUrl,
        name: "VN Digital",
        publisher: {
          "@id": `${ baseUrl }/#organization`,
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${ baseUrl }?s={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Service",
        "@id": `${ baseUrl }/#service-desarrollo-web`,
        name: "Desarrollo Web",
        description: "Soluciones web personalizadas para instituciones y negocios",
        provider: {
          "@id": `${ baseUrl }/#organization`,
        },
        areaServed: {
          "@type": "Country",
          name: "PE",
        },
      },
      {
        "@type": "Service",
        "@id": `${ baseUrl }/#service-sistemas-gestion`,
        name: "Sistemas de Gestión",
        description: "Plataformas web para gestión y organización de procesos",
        provider: {
          "@id": `${ baseUrl }/#organization`,
        },
        areaServed: {
          "@type": "Country",
          name: "PE",
        },
      },
    ],
  };

  return NextResponse.json( schema, {
    headers: {
      "Content-Type": "application/ld+json",
    },
  } );
}
