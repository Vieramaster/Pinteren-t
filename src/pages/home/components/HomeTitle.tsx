import { HOME_TITLES } from "../data/HOME_TITLES";

/**
 * HomeTitle
 *
 * @description Título principal del HomePage. Se actualiza automáticamente cada vez que
 * `currentCardBatch` cambia, sincronizado con el carrusel de imágenes.
 *
 * @param currentCardBatch - Índice actual que indica qué bloque de título mostrar.
 * @param cycleMs - Tiempo total de ciclo de animación del título (ms).
 *
 * @remarks
 * - Se importa `HOME_TITLES`, un array de objetos con las siguientes propiedades:
 *   - title: texto del bloque correspondiente.
 *   - color: color Tailwind para el título.
 * - La animación del título se controla mediante la variable CSS `--cycle`.
 *
 * @example
 * <HomeTitle currentCardBatch={index} cycleMs={5000} />
 *
 * @returns JSX.Element con el título principal de la página y estilo animado.
 */

interface HomeTitleProps {
  currentCardBatch: number;
  cycleMs: number;
}

export const HomeTitle = ({ currentCardBatch, cycleMs }: HomeTitleProps) => {
  if (!HOME_TITLES || !Array.isArray(HOME_TITLES))
    throw new Error("The array HOME_TTILES does not exist or is empty");

  const item = HOME_TITLES[currentCardBatch];

  if (!item) throw new Error("The array HOME_TTILES is empty");

  const { color, title } = item;

  return (
    <div className="w-full   h-1/3 font-semibold flex flex-col justify-center items-center gap-4 text-3xl md:text-4xl lg:text-5xl">
      <h1>Discover your next</h1>
      <h2
        className={`${color} card`}
        style={{ ["--cycle"]: `${cycleMs}ms` } as React.CSSProperties}
      >
        {title}
      </h2>
    </div>
  );
};
