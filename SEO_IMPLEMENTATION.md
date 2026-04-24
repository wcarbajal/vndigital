# 🚀 Guía de SEO - VN Digital

## Cambios Implementados

### 1. ✅ **Metadatos Mejorados** (`layout.tsx`)
- **Title:** Más descriptivo y con palabras clave
- **Description:** Más detallada (160 caracteres)
- **Open Graph:** Configurado para redes sociales (Facebook, LinkedIn, etc.)
- **Twitter Card:** Optimizado para Twitter/X
- **Canonical URL:** Evita contenido duplicado
- **Robots Meta:** Configurado para indexación adecuada
- **JSON-LD Schema:** Embebido en el head

### 2. ✅ **Sitemap XML** (`src/app/sitemap.ts`)
- Generado automáticamente por Next.js
- Disponible en `/sitemap.xml`
- Incluye todas las secciones principales
- Prioridades y frecuencias configuradas

### 3. ✅ **Robots.txt** (`src/app/robots.ts`)
- Generado automáticamente por Next.js
- Disponible en `/robots.txt`
- Permite acceso completo a buscadores
- Apunta al sitemap

### 4. ✅ **Schema JSON-LD** (`src/app/api/schema/route.ts`)
- **Organization:** Información de la empresa
- **LocalBusiness:** Datos locales
- **WebSite:** Búsqueda integrada
- **Services:** Servicios ofrecidos
- Disponible en `/api/schema`

### 5. ✅ **Next.js Optimizado** (`next.config.ts`)
- Compresión de imágenes automática (WebP, AVIF)
- Headers de seguridad
- Cache Control para sitemap
- Minificación SWC

---

## ⚙️ Configuración Necesaria

### Variables de Entorno
```bash
# .env.local
NEXT_PUBLIC_BASE_URL=https://vndigital.pe
```

### Verificación en Google
1. Ir a [Google Search Console](https://search.google.com/search-console)
2. Agregar propiedad: `https://vndigital.pe`
3. Descargar el token de verificación
4. Actualizar `layout.tsx` con el token en:
   ```typescript
   verification: {
     google: "tu_token_aqui",
   }
   ```

---

## 📋 Checklist de Tareas Pendientes

- [ ] **Crear og-image.jpg** (1200x630px) en `/public/`
  - Importante para compartir en redes sociales
  
- [ ] **Optimizar todas las imágenes** con componente `Image` de Next.js
  - Reemplazar `<img>` por `<Image>`
  - Agregar `alt` descriptivos
  
- [ ] **Agregar `alt` text** a todas las imágenes
  - Crítico para SEO y accesibilidad
  
- [ ] **Crear Mobile Sitemap** en JSON
  
- [ ] **Agregar Sitemap de Noticias** (si aplica)
  
- [ ] **Configurar Google Analytics**
  ```typescript
  // En layout.tsx
  import { Analytics } from '@vercel/analytics/react';
  ```
  
- [ ] **Verificar Core Web Vitals**
  - Usar [PageSpeed Insights](https://pagespeed.web.dev/)
  
- [ ] **Actualizar Email y Teléfono**
  - En `src/app/api/schema/route.ts`: "+51 XXX XXX XXX"

---

## 🔍 Monitoreo Continuo

### Herramientas Recomendadas
- **Google Search Console:** Indexación y errores
- **Google Analytics 4:** Tráfico y comportamiento
- **Lighthouse:** Performance y SEO
- **Screaming Frog:** Análisis técnico

### Acciones Mensuales
1. Revisar Google Search Console
2. Analizar Top Pages en Analytics
3. Verificar Core Web Vitals
4. Actualizar contenido de secciones

---

## 💡 Próximas Optimizaciones

1. **Blog o News Section**
   - Aumenta contenido indexable
   - Mejora fresco de contenido

2. **Structured Data Avanzado**
   - FAQs Schema
   - Review Schema

3. **Link Building Interno**
   - Más enlaces a secciones
   - Breadcrumbs Schema

4. **Local SEO**
   - Google My Business
   - Mapas locales

---

## 📞 Soporte

Para dudas sobre la implementación de SEO, revisar:
- [Next.js Metadata API](https://nextjs.org/docs/app/api-reference/functions/metadata)
- [Schema.org Documentation](https://schema.org/)
- [Google Search Central](https://developers.google.com/search)
