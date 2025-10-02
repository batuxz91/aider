# AíDER - Sitio Web Corporativo

Sitio web corporativo para el Sistema de Gestión Financiera Agropecuaria (AíDER), desarrollado con Next.js 14, TypeScript y Tailwind CSS.

## 🚀 Características

- **Moderno y Responsive**: Diseño adaptativo que funciona en todos los dispositivos
- **SEO Optimizado**: Configurado para aparecer en los primeros resultados de Google
- **Rendimiento Excelente**: Carga rápida y experiencia de usuario optimizada
- **Fácil Mantenimiento**: Código limpio y bien estructurado

## 📁 Estructura del Proyecto

```
sitio-empresa/
├── app/
│   ├── globals.css          # Estilos globales
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Página principal
│   ├── servicios/           # Página de servicios
│   ├── sobre-nosotros/      # Página sobre nosotros
│   ├── contacto/            # Página de contacto
│   └── blog/                # Página del blog
├── components/
│   ├── Header.tsx           # Componente de navegación
│   ├── Footer.tsx           # Componente de pie de página
│   ├── Hero.tsx             # Sección principal
│   ├── Services.tsx         # Sección de servicios
│   ├── About.tsx            # Sección sobre nosotros
│   └── Contact.tsx          # Sección de contacto
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 🛠️ Tecnologías Utilizadas

- **Next.js 14**: Framework de React con App Router
- **TypeScript**: Tipado estático para mayor robustez
- **Tailwind CSS**: Framework de CSS para diseño rápido
- **React 18**: Biblioteca de interfaz de usuario

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Pasos de Instalación

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar en modo desarrollo:**
   ```bash
   npm run dev
   ```

3. **Abrir en el navegador:**
   ```
   http://localhost:3000
   ```

### Scripts Disponibles

- `npm run dev` - Ejecuta el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Ejecuta la aplicación en modo producción
- `npm run lint` - Ejecuta el linter de código

## 📱 Páginas Incluidas

### Página Principal (`/`)
- Hero section con call-to-action
- Sección de servicios destacados
- Información sobre la empresa
- Formulario de contacto

### Servicios (`/servicios`)
- Catálogo completo de servicios AíDER
- Gestión financiera integral, servicios agropecuarios, facturación
- Gestión de terceros, reportes y análisis, soporte especializado

### Sobre Nosotros (`/sobre-nosotros`)
- Historia y misión de la empresa
- Estadísticas y logros
- Valores corporativos

### Contacto (`/contacto`)
- Formulario de contacto funcional
- Información de contacto
- Mapa de ubicación

### Blog (`/blog`)
- Artículos sobre gestión financiera agropecuaria
- Categorías temáticas del sector rural
- Newsletter signup

## 🎨 Personalización

### Colores
Los colores principales se pueden modificar en `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
    // ...
  }
}
```

### Contenido
- **Textos**: Modificar directamente en los componentes
- **Imágenes**: Reemplazar en la carpeta `public/`
- **Enlaces**: Actualizar en `components/Header.tsx` y `components/Footer.tsx`

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conectar repositorio con Vercel
2. Configurar variables de entorno si es necesario
3. Desplegar automáticamente

### Otros Proveedores
- **Netlify**: Compatible con Next.js
- **AWS Amplify**: Soporte nativo
- **VPS**: Usar `npm run build` y `npm run start`

## 📈 SEO y Rendimiento

- **Meta tags** configurados en `app/layout.tsx`
- **Sitemap** generado automáticamente
- **Imágenes optimizadas** con Next.js Image
- **Lazy loading** implementado
- **Core Web Vitals** optimizados

## 🔧 Mantenimiento

### Actualizaciones Regulares
- Mantener dependencias actualizadas
- Revisar métricas de rendimiento
- Actualizar contenido del blog
- Monitorear formularios de contacto

### Monitoreo
- Google Analytics (configurar)
- Search Console (verificar indexación)
- Core Web Vitals (monitorear rendimiento)

## 📞 Soporte

Para soporte técnico o consultas sobre el sitio web:
- Email: soporte@aider.cloud
- Teléfono: +54 11 1234-5678

## 📄 Licencia

© 2024 AíDER. Todos los derechos reservados.