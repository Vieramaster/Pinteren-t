// HOOKS
import { useFetchPexels } from "../../shared/hooks/useFetchPexels";
import { useRef } from "react";
import { useParams } from "react-router";
import { useInfiniteScroll } from "./hooks/UseInfiniteScroll";

// COMPONENTS
import { GallerySkeleton } from "./components/GallerySkeleton";
import { GalleryMasonry } from "./components/GalleryMasonry";
import { StatusPage } from "../../shared/components/StatusPage";
import { MainLayout } from "../../layout/base/MainLayout";

// DATA
import { STATUS_PAGES } from "../../data/STATUS_PAGE";

/**
 * GalleryPage
 *
 * @description Renderiza una galería de imágenes según el parámetro de ruta dinámico "photos".
 *
 *  * Componentes:
 * @see GallerySkeleton - Placeholder que se muestra mientras los datos se cargan.
 * @see StatusPage - Componente para mostrar estado vacío o error.
 * @see GalleryMasonry - Presenta los resultados en un layout estilo Masonry.
 * @see MainLayout - contenedor <main> con los estilos definidos
 *
 * Logica:
 * @see useParams - Obtiene el parámetro de búsqueda desde la ruta.
 * @see useFetchPexels - Hace la petición a la API de Pexels y retorna un resultado paginado.
 *
 *
 * @remarks
 * - Se espera que "data.pages" sea un array paginado de imágenes.
 * - Maneja tres estados principales: cargando, error, vacío.
 *
 * @returns JSX.Element representando la página principal de la galería.
 */
const GalleryPage = () => {
  const { photos: URLPARAM } = useParams<{ photos?: string }>();
  const sentinel = useRef<HTMLDivElement | null>(null);

  const {
    photos,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    error,
    status,
  } = useFetchPexels(URLPARAM);

  const noData = status === "success" && photos?.length === 0;

  // Infinite scroll
  useInfiniteScroll({
    sentinel,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  });

  const renderContent = {
    pending: <GallerySkeleton />,
    error: <StatusPage {...STATUS_PAGES.fetchError} message={error?.message} />,

    success: noData ? (
      <StatusPage {...STATUS_PAGES.empty} />
    ) : (
      <MainLayout>
        <GalleryMasonry cardData={photos} sentinel={sentinel} />
      </MainLayout>
    ),
  };

  //Render principal
  return renderContent[status];
};
export default GalleryPage;
