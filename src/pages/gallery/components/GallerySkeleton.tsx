/**
 * GallerySkeleton
 *
 * @description Componente presentacional que renderiza un placeholder para una galería
 * de imágenes en formato Masonry mientras los datos reales están siendo cargados.
 *
 * @remarks
 * - Renderiza 12 "cards" con alturas aleatorias tomadas del array `heights`.
 * - Cada card tiene animación de pulsado (`animate-pulse`) para indicar carga.
 * - No recibe props; su único objetivo es visual, como indicador de loading.
 *
 * @example
 * <GallerySkeleton />
 *
 * @returns JSX.Element que muestra un skeleton de cards de carga.
 */
export const GallerySkeleton = () => {
  const heights = [
    "h-[32rem]",
    "h-[43rem]",
    "h-[22rem]",
    "h-[37rem]",
    "h-[20rem]",
    "h-[14rem]",
  ];
  return (
    <ul className="columns-[25rem] p-10 gap-10">
      {Array.from({ length: 12 }).map((_, i) => (
        <li
          key={i}
          className={`bg-soft animate-pulse break-inside-avoid mb-10 rounded-2xl shadow-md duration-200 ${
            heights[i % heights.length]
          }`}
        ></li>
      ))}
    </ul>
  );
};
