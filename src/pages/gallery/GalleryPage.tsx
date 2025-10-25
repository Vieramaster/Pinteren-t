//HOOKS
import { useFetchPexels } from "../../shared/hooks/useFetchPexels";
import { useParams } from "react-router";
//COMPONENTS
import { GallerySkeleton } from "./components/GallerySkeleton";
import { GalleryMasonry } from "./components/GalleryMasonry";
import { StatusPage } from "../../shared/components/StatusPage";
import { MainLayout } from "../../layout/base/MainLayout";
//STATUS
import { STATUS_PAGES } from "./data/STATUS_PAGE";

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

export default GalleryPage;
