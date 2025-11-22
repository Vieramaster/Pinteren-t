import { useState } from "react";
import type { Photo } from "pexels";

/**
 * GalleryImage
 *
 * @description Componente para mostrar una imagen de la galería con carga diferida y un skeleton para animar el loading.
 *
 * @param src - Objeto con diferentes tamaños de la imagen, en este caso se usa medium.
 * @param width - Ancho original de la imagen.
 * @param height - Alto original de la imagen.
 * @param alt - Texto alternativo para la imagen.
 * @param photographer - Nombre del fotógrafo de la imagen.
 *
 * @remarks
 * - Utiliza el estado interno "isLoaded" para gestionar la visibilidad de la imagen y el skeleton.
 * - Muestra un div con animación de pulsado mientras la imagen se está cargando.
 * - La imagen utiliza la propiedad `loading="lazy"` para optimizar la carga.
 * - El contenedor tiene un aspect ratio basado en las dimensiones originales de la imagen.
 * - el useState se usa para manejar el estado de carga de la imagen.
 *
 * TYPES
 * @see Photo - Tipo importado de la librería "pexels" que define la estructura de una foto.
 *
 * @returns JSX.Element que representa la imagen con carga diferida y skeleton.
 */

interface GalleryImageProps {
  src: Photo["src"];
  width: number;
  height: number;
  alt: string;
  photographer: string;
}

export const GalleryImage = ({
  src,
  width,
  height,
  photographer,
}: GalleryImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-t-2xl bg-neutral-200"
      style={{ aspectRatio: `${width}/${height}` }}
    >
      {/* Imagen */}
      <img
        src={src.medium}
        alt={photographer || "Image"}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-neutral-400/50 animate-pulse rounded-t-2xl z-10" />
      )}
    </div>
  );
};
