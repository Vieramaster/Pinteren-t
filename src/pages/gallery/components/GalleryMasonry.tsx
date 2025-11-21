import type { Photo } from "pexels";
import type { Ref } from "react";

//COMPONENTS
import { GalleryImage } from "./GalleryImage";
import { GalleryArticle } from "./GalleryArticle";
import { GalleryUl } from "./GalleryUl";

/**
 * GalleryMasonry
 *
 * @description Componente presentacional que muestra los resultados de búsqueda de imágenes.
 *
 * @param cardData - Datos paginados devueltos por useFetchPexels.
 * La estructura de "cardData":
 *         - id: número único de la foto
 *         - url: URL de la foto en Pexels
 *         - photographer: nombre del fotógrafo
 *         - photographer_url: enlace al perfil del fotógrafo
 *         - alt: texto alternativo para la imagen
 *
 * @param  Ref - Referencia al div sentinel que esta al final de la galeria.
 * 
 * //Componentes
 * @see GalleryImage - Componente para mostrar la imagen con carga diferida y esqueleto.
 * @see GalleryArticle - Componente para mostrar la información del fotógrafo y descripción.
 * @see GalleryUl - Componente estilizado para el contenedor <ul>.
 *
 * //TYPES:
 * @see Photo - Tipo importado de la librería "pexels" que define la estructura de una foto.
 * 
 @remarks 
    - Mapea "cardData" para renderizar cada imagen y su información dentro de un <li>.
    - el div al final actua como  sentinel para infinite scroll. 
 *
 * @returns JSX.Element - Elemento <ul> con cada card renderizado dentro de un <li> y un sentinel.
 */

interface MasonryGalleryProps {
  cardData: Photo[];
  sentinel: Ref<HTMLDivElement | null>;
}

export const GalleryMasonry = ({ cardData, sentinel }: MasonryGalleryProps) => {
  return (
    <GalleryUl>
      {cardData.map((photo, index) => {
        const { src, width, height, photographer, photographer_url, alt } =
          photo;

        return (
          <li
            key={index}
            className="mb-10 rounded-2xl overflow-hidden"
            role="listitem"
          >
            {/* Image */}
            <GalleryImage
              src={src}
              width={width}
              height={height}
              alt={alt || `Photo by ${photographer}`}
              photographer={photographer}
            />

            {/* Info */}
            <GalleryArticle
              photographer={photographer}
              photographer_url={photographer_url}
              alt={alt || "No description available"}
            />
          </li>
        );
      })}
      <div ref={sentinel} />
    </GalleryUl>
  );
};
