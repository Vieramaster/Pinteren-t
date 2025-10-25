```js

se pone en carpeta data

import { ErrorIllustration } from "../../../assets/illustrations/ErrorIllustration";
import { EmptySearchIllustration } from "../../../assets/illustrations/EmptySearchIllustration";
/**
 * STATUS_PAGES
 *
 * @description Objeto que centraliza la configuración de los distintos estados de las páginas
 * que usan el componente StatusPage. Permite pasar todos los datos necesarios
 * (variant, Illustration, title, message) de manera centralizada y reutilizable.
 *
 * Keys disponibles:
 * - `noPhotos`: se usa cuando no se recibe un parámetro válido de galería
 * - `fetchError`: se usa cuando ocurre un error al cargar los datos
 * - `empty`: se usa cuando la búsqueda no devuelve resultados
 *
 * Cada key contiene:
 * @property { "error" | "empty" | string } variant - tipo de estado para aplicar estilos o lógica
 * @property { React.ComponentType } Illustration - componente de ilustración asociado al estado
 * @property { string } title - título descriptivo del estado
 * @property { string } message - mensaje adicional explicativo
 *
 *
 * @example
 * ```ts
 * import { STATUS_PAGES } from "./data/statusPages";
 *
 * <StatusPage {...STATUS_PAGES.fetchError} />
 * ```
 *@remarks
 * - Evita duplicación de JSX y props en múltiples páginas
 * - Facilita mantenimiento y escalabilidad
 * - Centraliza todos los mensajes de estado en un solo lugar
 */
export const STATUS_PAGES = {
  noPhotos: {
    variant: "error",
    Illustration: ErrorIllustration,
    title: "Invalid URL",
    message: "No gallery specified.",
  },
  fetchError: {
    variant: "error",
    Illustration: ErrorIllustration,
    title: "Something went wrong",
    message: "We couldn’t load the gallery. Please try again.",
  },
  empty: {
    variant: "empty",
    Illustration: EmptySearchIllustration,
    title: "No results found",
    message:
      "Try adjusting your filters or using different keywords. A small change in your search can make all the difference.",
  },
} as const;

y despues se usa asi:

const GalleryPage = () => {
  const { photos } = useParams<{ photos?: string }>();

  const { data: photosData, error, isLoading } = useFetchPexels(photos || "");

  // Early return si no hay photos en la URL
  if (!photos) return <StatusPage {...STATUS_PAGES.noPhotos} />;

  // Loading
  if (isLoading) return <GallerySkeleton />;

  // Error al cargar
  if (error) return <StatusPage {...STATUS_PAGES.fetchError} />;

  // No hay resultados
  if (!photosData?.pages?.flat().length)
    return <StatusPage {...STATUS_PAGES.empty} />;

  // Render principal
  return (
    <MainLayout>
      <GalleryMasonry cardData={photosData} />
    </MainLayout>
  );
};


```
