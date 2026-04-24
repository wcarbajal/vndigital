import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Optimización de imágenes */
  images: {
    formats: [ "image/avif", "image/webp" ],
    deviceSizes: [ 640, 750, 828, 1080, 1200, 1920, 2048, 3840 ],
    imageSizes: [ 16, 32, 48, 64, 96, 128, 256, 384 ],
  },
  /* Compresión de headers */
  compress: true,
  /* Optimización de producción */
  productionBrowserSourceMaps: false,

  /* Revalidación incremental */
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },
  /* Headers HTTP */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        source: "/api/schema",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/sitemap.xml",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, stale-while-revalidate=86400",
          },
          {
            key: "Content-Type",
            value: "application/xml",
          },
        ],
      },
    ];
  },
  /* Redirecciones */
  async redirects() {
    return [
      {
        source: "/contacto",
        destination: "/#contacto",
        permanent: true,
      },
      {
        source: "/servicios",
        destination: "/#servicios",
        permanent: true,
      },
    ];
  },
  /* Reescrituras */
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/sitemap.xml",
          destination: "/api/sitemap",
        },
        {
          source: "/robots.txt",
          destination: "/api/robots",
        },
      ],
    };
  },
};

export default nextConfig;

