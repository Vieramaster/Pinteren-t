//COMPONENTES
import { DiscoverCard } from "./DiscoverCard";
//DATOS
import { DISCOVER_IMAGES } from "../data/DISCOVER_IMAGES";

/**
 * DiscoverCardList
 *
 * @description Un listado de cards con temas actuales o de moda.
 *
 * @param images - Array de objetos con keys "imageUrl" y "title"
 *
 * Componentes:
 * @see DiscoverCard - Card genérica, envuelta en un <Link> de React-router.
 *
 * @remarks
 * - Renderiza un <ul> con <li> para cada card.
 *
 * @returns JSX.Element representando la lista de cards.
 */
interface DiscoverCardListProps {
  images: typeof DISCOVER_IMAGES;
}

export const DiscoverCardList = ({ images }: DiscoverCardListProps) => (
  <ul className="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-10 p-4">
    {images.map(({ imageUrl, title }) => (
      <DiscoverCard key={title} {...{ imageUrl, title }} />
    ))}
  </ul>
);
