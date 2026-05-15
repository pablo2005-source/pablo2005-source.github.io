Despliegue a GitHub Pages (preparado para este repo)

Recomendado: usar el script `deploy` ya incluido en `package.json`.

Pasos rápidos:

1. Instala dependencias si no está hecho:

   npm install

2. Construir y publicar (script):

   npm run deploy

Qué hace el script:
- Ejecuta `ng build --configuration production` (usa la salida por defecto)
- Publica `dist/portafolio_pablo/browser` a la rama `gh-pages` usando `angular-cli-ghpages`

Notas importantes:
- NO uses `--output-path` manualmente porque puede crear una carpeta extra `browser/browser` y romper rutas de assets.
- Si necesitas servir desde `main` en lugar de `gh-pages`, cambia la rama en `package.json` o en GitHub Pages Settings.
- Si después del deploy ves contenido antiguo, prueba en ventana incógnito o usa "Empty Cache and Hard Reload" en DevTools.
- Para rutas, este proyecto usa HashLocation (`#/noticias`) para evitar 404 al recargar.
