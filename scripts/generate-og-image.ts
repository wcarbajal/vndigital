/**
 * Script para generar og-image.jpg
 * Ejecutar con: npm run generate:og-image
 * 
 * Requisitos: npm install -S sharp
 */

import sharp from 'sharp';
import path from 'path';

const width = 1200;
const height = 630;

// Crear imagen OG con gradiente y texto
async function generateOGImage() {
  try {
    // Crear SVG con diseño
    const svg = `
      <svg width="${ width }" height="${ height }" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#0066cc;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#003d99;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="${ width }" height="${ height }" fill="url(#grad)"/>
        
        <!-- Decorative circles -->
        <circle cx="1000" cy="100" r="150" fill="rgba(94, 234, 212, 0.1)"/>
        <circle cx="200" cy="500" r="120" fill="rgba(34, 197, 94, 0.1)"/>
        
        <!-- Main text -->
        <text x="${ width / 2 }" y="250" font-size="80" font-weight="bold" text-anchor="middle" fill="white" font-family="Arial, sans-serif">
          VN Digital
        </text>
        
        <!-- Subtitle -->
        <text x="${ width / 2 }" y="350" font-size="42" text-anchor="middle" fill="rgba(255,255,255,0.9)" font-family="Arial, sans-serif">
          Soluciones Web Digitales
        </text>
        
        <!-- Bottom text -->
        <text x="${ width / 2 }" y="580" font-size="28" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-family="Arial, sans-serif">
          Comunicación • Gestión • Transformación
        </text>
      </svg>
    `;

    // Convertir SVG a PNG/JPG
    await sharp( Buffer.from( svg ) )
      .jpeg( { quality: 90, progressive: true } )
      .toFile( path.join( process.cwd(), 'public', 'og-image.jpg' ) );

    console.log( '✅ og-image.jpg generada correctamente en /public/' );
  } catch ( error ) {
    console.error( '❌ Error al generar og-image.jpg:', error );
    process.exit( 1 );
  }
}

generateOGImage();
