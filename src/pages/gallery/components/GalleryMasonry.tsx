// TYPES
import type { InfiniteData } from "@tanstack/react-query";
import type { Photo } from "pexels";

/**
 * MasonryGallery
 *
 * Componente presentacional que muestra los resultados de búsqueda de imágenes.
 *
 * @param {InfiniteData<Photo, unknown>} cardData - Datos paginados devueltos por useFetchPexels.
 *   La estructura de `cardData`:
 *     - pages: array de páginas, cada página es un array de objetos Photo.
 *       Cada Photo contiene:
 *         - id: número único de la foto
 *         - url: URL de la foto en Pexels
 *         - photographer: nombre del fotógrafo
 *         - photographer_url: enlace al perfil del fotógrafo
 *         - alt: texto alternativo para la imagen
 *     - pageParams: array con parámetros de paginación
 * @example
 * <MasonryGallery cardData={cardData} />
 *
 * @see useFetchPexels
 *
 * @returns JSX.Element - Elemento <ul> con cada card renderizado dentro de un <li>.
 */
interface MasonryGalleryProps {
  cardData: InfiniteData<Photo, unknown>;
}
export const GalleryMasonry = ({ cardData }: MasonryGalleryProps) => (
  <ul className="columns-[25rem] p-10 gap-10" role="list">
    {cardData.pages
      .flat()
      .map(({ id, url, photographer, photographer_url, alt }) => (
        <li
          key={id}
          className="mb-10 rounded-2xl overflow-hidden"
          role="listitem"
        >
          {/** imagen */}
          <img
            src={url}
            alt={alt || photographer || "Image"}
            className="w-full h-auto object-cover"
          />
          {/** CARD */}
          <article className="w-full p-4 bg-soft">
            <h3 className="mb-3 font-semibold text-brand">
              Autor:
              <a
                className="ml-1 underline underline-offset-2"
                href={photographer_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {photographer}
              </a>
            </h3>

            <p className="italic">{alt}</p>
          </article>
        </li>
      ))}
  </ul>
);
