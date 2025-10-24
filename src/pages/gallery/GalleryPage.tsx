//HOOKS
import { useFetchPexels } from "../../shared/hooks/useFetchPexels";
import { useParams } from "react-router";
//COMPONENTS
import { GallerySkeleton } from "./components/GallerySkeleton";
import { GalleryMasonry } from "./components/GalleryMasonry";
import { StatusPage } from "../../shared/components/StatusPage";
//ILUSTRATIONS
import { EmptySearchIllustration } from "../../shared/illustrations/EmptySearchIllustration";
import { ErrorIllustration } from "../../shared/illustrations/ErrorIllustration";

/**
 * GalleryPage
 *
 * @description Renderiza una galería de imágenes según el parámetro de ruta dinámico "photos".
 *
 *  * Componentes:
 * @see GallerySkeleton - Placeholder que se muestra mientras los datos se cargan.
 * @see StatusPage - Componente para mostrar estado vacío o error.
 * @see GalleryMasonry - Presenta los resultados en un layout estilo Masonry.
 *
 * Logica:
 * @see useParams - Obtiene el parámetro de búsqueda desde la ruta.
 * @see useFetchPexels - Hace la petición a la API de Pexels y retorna un resultado paginado.
 *
 * ilustraciones:
 * @see EmptySearchIllustration - Ilustracion usada cuando no hay resultado de busqueda. (data.pages.length === 0 )
 * @see ErrorIllustration - Ilustracion usada cuando la API devuelve un error.
 *
 * @remarks
 * - Se espera que "data.pages" sea un array paginado de imágenes.
 * - Maneja tres estados principales: cargando, error, vacío.
 *
 * @returns JSX.Element representando la página principal de la galería.
 */

const GalleryPage = () => {
  const { photos } = useParams<{ photos?: string }>();

  if (!photos) throw new Error("lala");

  const { data, error, isLoading } = useFetchPexels(photos);
  console.log(data);

  return (
    <main className="w-full bg-surface h-screen pt-20 flex flex-col">
      {isLoading ? (
        <GallerySkeleton />
      ) : error ? (
        <StatusPage
          variant="error"
          Illustration={ErrorIllustration}
          title="Something went wrong"
          message="We couldn’t load the gallery. Please try again."
        />
      ) : !data?.pages || data.pages.flat().length === 0 ? (
        <StatusPage
          variant="empty"
          Illustration={EmptySearchIllustration}
          title="No results found"
          message="Try adjusting your filters or using different keywords. A small change in your search can make all the difference."
        />
      ) : (
        <GalleryMasonry cardData={data} />
      )}
    </main>
  );
};
export default GalleryPage;
