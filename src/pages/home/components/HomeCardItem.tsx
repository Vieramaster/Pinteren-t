// HomeCardItem.tsx
import type { ImagePair } from "../types/home";

/**
 * HomeCardItem
 *
 * @description Card de la grilla de imágenes reutilizable.
 *
 * @param objectItem - Par de imágenes a mostrar en la card.
 * @param index - Índice de la card dentro del bloque, usado para animación escalonada.
 * @param cycleMs - Tiempo total de ciclo de animación del carrusel.
 * @param staggerMs - Retraso entre la animación de cada card individual.
 * @param className - Clases tailwind adicionales que controlan visibilidad y posición.
 *
 * @remarks
 * - Se recomienda usar en la key `${blockIndex}-${index}` para forzar el remount
 *   cuando cambia el bloque de imágenes y reiniciar la animación.
 * - Cada card calcula sus propias variables CSS `--cycle` y `--delay` para animación.
 *
 * @example
 * <HomeCardItem
 *   key={`${blockIndex}-${index}`}
 *   objectItem={item}
 *   index={index}
 *   cycleMs={15000}
 *   staggerMs={200}
 *   className={cardClass ?? ""}
 * />
 *
 * @returns JSX.Element que representa una card de la grilla.
 */

interface HomeCardItemProps {
  objectItem: ImagePair;
  index: number;
  cycleMs: number;
  staggerMs: number;
  className: string;
}

export const HomeCardItem = ({
  objectItem,
  index,
  cycleMs,
  staggerMs,
  className,
}: HomeCardItemProps) => (
  <li
    className={`flex flex-col gap-4 card ${className ?? ""}`}
    style={
      {
        ["--cycle"]: `${cycleMs}ms`,
        ["--delay"]: `${index * staggerMs}ms`,
      } as React.CSSProperties
    }
  >
    {objectItem.map((src, i) => (
      <img
        key={i}
        src={src}
        alt="card"
        className="w-full object-cover rounded-2xl"
        loading="lazy"
      />
    ))}
  </li>
);
