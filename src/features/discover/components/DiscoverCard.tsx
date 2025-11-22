import { Link } from "react-router";

/**
 * DiscoverCard
 *
 * @description Card genérica de un tema actual o de moda, envuelta en un <Link> de React-router.
 *
 * @param title - Título del tema mostrado en la card y usado para la ruta dinámica.
 * @param imageUrl - URL de la imagen relacionada con el tema.
 *
 * @see Link - Componente de React-router usado para generar la ruta dinámica.
 *
 * @remarks
 * - El título (title) sirve tanto para mostrarlo en la card como para construir la ruta del Link.
 * - Se espera que ambos parámetros sean strings válidos.
 *
 * @returns JSX.Element de una card genérica para la presentación de los temas actuales.
 */
interface DiscoverCardProps {
  title: string;
  imageUrl: string;
}
export const DiscoverCard = ({ title, imageUrl }: DiscoverCardProps) => (
  <li
    key={title}
    className="rounded-2xl h-[400px] overflow-hidden group cursor-pointer duration-400"
  >
    <Link to={"/images/" + title} className="relative">
      <img
        src={imageUrl}
        alt={title}
        className="size-full object-cover duration-400 scale-101 group-hover:scale-[1.03] transform-gpu will-change-transform transition-transform"
      />
      <p className="absolute text-5xl font-semibold inset-x-0 bottom-8 text-shadow-lg text-center text-surface">
        {title}
      </p>
      <span
        className="pointer-events-none absolute inset-0 bg-black/30
                         transition-opacity duration-300 ease-out
                         group-hover:opacity-0 transform-gpu will-change-transform"
      />
    </Link>
  </li>
);
