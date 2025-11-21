import { GalleryUl } from "./GalleryUl";

/**
 * GallerySkeleton
 *
 * @description Componente presentacional que renderiza un placeholder para una galería
 * de imágenes en formato Masonry mientras los datos reales están siendo cargados.
 *
 * @see GalleryUl - Componente estilizado para el contenedor <ul>.
 * 
 * @remarks
 * - Renderiza 12 "cards" con alturas aleatorias tomadas del array `heights`.
 * - Cada card tiene animación de pulsado (`animate-pulse`) para indicar carga.
 * - No recibe props; su único objetivo es visual, como indicador de loading.
 *
 * @returns JSX.Element que muestra un skeleton de cards de carga.
 */
export const GallerySkeleton = () => {
  const getRandomH = () => {
    const min = 200; // px
    const max = 600; // px
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <GalleryUl>
      {Array.from({ length: 12 }).map((_, i) => (
        <li
          key={i}
          style={{ height: getRandomH() + "px" }}
          className="bg-soft animate-pulse break-inside-avoid mb-10 rounded-2xl shadow-md duration-200"
        ></li>
      ))}
    </GalleryUl>
  );
};
