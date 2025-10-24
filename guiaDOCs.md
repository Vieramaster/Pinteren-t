Para un JSDoc breve y profesional

````js
/**
 * NombreComponente — breve descripción en 1 línea.
 *
 * @description Resumen técnico del comportamiento clave (1–2 líneas).
 *
 * @param props — descripción de cada prop si aplica.
 *
 * @remarks Información adicional sobre expectativas, efectos secundarios o restricciones.
 *
 * @example
 * <NombreComponente prop1="valor" /> — ejemplo corto de uso.
 *
 * @returns JSX.Element o tipo devuelto.
 *
 * @see Referencias a hooks, componentes o tipos relevantes (opcional).
 */

 

 ejemplo en pages:

 /**
 * GalleryPage
 *
 * @description Renderiza una galería de imágenes según el parámetro de ruta dinámico `photos`.
 *
 * Logica:
 * @see useParams - Obtiene el parámetro de búsqueda desde la ruta.
 * @see useFetchPexels - Hace la petición a la API de Pexels y retorna un resultado paginado.
 *
 * Componentes:
 * @see GallerySkeleton - Placeholder que se muestra mientras los datos se cargan.
 * @see StatusPage - Componente para mostrar estado vacío o error.
 * @see GalleryMasonry - Presenta los resultados en un layout estilo Masonry.
 *
 * @remarks
 * - Se espera que `data.pages` sea un array paginado de imágenes.
 * - Maneja tres estados principales: cargando, error, vacío.
 *
 * @returns JSX.Element representando la página principal de la galería.
 */

para data

/**
 * HOME_IMAGES
 *
 * Colección de imágenes usadas en HomePage.
 *
 * Estructura: [bloque1, bloque2, bloque3, bloque4] -> HomeImages
 * - Cada bloque (ImageColumn) contiene exactamente 7 pares (ImagePair).
 * - Cada par (ImagePair) es un array con 2 rutas de imagen: [rutaPrimaria, rutaSecundaria].
 *
 * Reglas / expectativas:
 * - Cada ImageColumn debe tener exactamente 7 ImagePair.
 * - Cada ImagePair debe contener exactamente 2 rutas válidas (strings).
 * - Las rutas son relativas a `/public`.
 *
 * Ejemplo:
 * const firstPair: ImagePair = HOME_IMAGES[0][0];
 * const srcPrimary = HOME_IMAGES[1][3][0]; // bloque 2, fila 4, primera ruta
 *
 * @type {HomeImages}
 */

ejemplo para pages

/**
 * DiscoverPage
 *
 * @description Página principal de introducción de la app, mostrando dos carruseles coordinados:
 * uno para el título y otro para una cuadrícula de imágenes.
 * - "HomeTitle": muestra el título animado.
 * - "HomeGrid": muestra la grilla de imágenes.
 *
 * @remarks
 * - "CYCLE_MS" controla el tiempo total de cambio de animación de los dos carruseles.
 * - "STAGGER_MS" controla el retraso entre la animación de cada card individual.
 * - "carouselIndex" usa "useCycle" para rotar automáticamente la cuadrícula de imágenes cada 10s mediante un `setInterval`.
 * - Coordina las animaciones de `HomeTitle` y `HomeGrid` según el índice actual del carrusel.
 * - Ambos carruseles se mantienen sincronizados automáticamente a medida que el índice cambia.
 *
 * @returns El elemento principal de la página.
 */