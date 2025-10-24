// HomeGrid.tsx
import type { ImagePair } from "../types/home";
import { HomeCardItem } from "./HomeCardItem";

/**
 * HomeGrid
 *
 * @description Grilla de imagenes para el componente HomePage, Se actualiza automáticamente cada vez que
 * `currentCardBatch` cambia, sincronizado con el carrusel de imágenes.
 *  -HomeCardItem: Card donde contiene 2 imagenes para la grilla.
 *
 * @param images - Array de 2 imagenes proveniente de `HOME_IMAGES` y el index actual del hook principal (ImagePair)
 * @param cycleMs  - Tiempo total de ciclo de animación de la grilla (ms).
 * @param staggerMs - Tiempo total de ciclo de animación del card con sus 2 imagenes (ms).
 * @param currentCardBatch - Index actual que otorga el hook useCycle
 *
 * @remarks
 * - la grilla es dinamica, cambia de bloque cada vez que current
 * - CardClass es un array de strings, del cual el indice coincide con como tiene que estar posicionado  cada card en la grilla.
 * - En el componente HomeCardItem la key se utiliza de esta manera `key={`${currentCardBatch}-${index}`}`  para que cuando la grilla quede desfasada por cambios en el responsive, en la siguiente grilla, se reibicie adecuadameante y no tenga desfaces de de  tiempo
 *
 *
 * @example
 * const [index,setIndex] = useState(0)
 * <HomeGrid
         images={image.webp}
         currentCardBatch={index}
         cycleMs={15000} // ms
         staggerMs={200} // ms
       />
 *
 * @returns JSX.Element o tipo devuelto con la grilla completa de imagenes en carrousel
 */

const cardClass = [
  "hidden 2xl:flex",
  "hidden md:flex 2xl:translate-y-35",
  "md:translate-y-10 2xl:translate-y-15",
  "translate-y-15 md:translate-y-25 2xl:md:translate-y-35",
  "md:translate-y-10 2xl:translate-y-15",
  "hidden md:flex 2xl:translate-y-35",
  "hidden 2xl:flex",
] as const;

type HomeGridProps = {
  images: ImagePair[];
  cycleMs: number;
  staggerMs: number;
  currentCardBatch: number;
};
export const HomeGrid = ({
  images,
  cycleMs,
  staggerMs,
  currentCardBatch,
}: HomeGridProps) => {
  return (
    <>
      <span className="w-full bg-linear-to-b from-surface to-transparent absolute lg:h-32 z-20" />
      <ul className="grid gap-4 lg:gap-8 grid-cols-3 md:grid-cols-5 2xl:grid-cols-7 h-2/3 px-8 overflow-hidden shadow-ul-homepage">
        {images.map((item, index) => (
          <HomeCardItem
            key={`${currentCardBatch}-${index}`}
            objectItem={item}
            index={index}
            cycleMs={cycleMs}
            staggerMs={staggerMs}
            className={cardClass[index] ?? ""}
          />
        ))}
      </ul>
    </>
  );
};
