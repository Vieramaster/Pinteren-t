//COMPONENTES
import { DiscoverCardList } from "../features/discover/components/DiscoverCardList"; 
//DATOS
import { DISCOVER_IMAGES } from "../features/discover/data/DISCOVER_IMAGES";

/**
 * DiscoverPage
 *
 * @description Página que muestra los temas más actuales o de moda mediante cards.
 *
 * Componentes:
 * @see DiscoverCardList - lista de Cards genéricas que recibe "imageUrl" y "title" de cada objeto de DISCOVER_IMAGES.
 *
 * Datos:
 * @see DISCOVER_IMAGES - Array de objetos que proporcionan:
 *   - imageUrl: ruta de la imagen (string)
 *   - title: título de la card (string)
 *
 * @remarks
 * - Cada card está envuelta en un <Link> de react-router, generando rutas dinámicas basadas en "title".
 * - Se espera que ambos campos de DISCOVER_IMAGES sean strings válidos.
 *
 * @returns JSX.Element representando la página principal de la sección Discover.
 */

const DiscoverPage = () => {
  return (
    <main className="w-full bg-surface h-screen pt-20 flex flex-col">
      <h1 className="text-4xl font-semibold my-10 m-auto lg:text-5xl 2xl:text-6xl">
        Latests <span className="text-brand">Topics</span>
      </h1>
      <DiscoverCardList images={DISCOVER_IMAGES} />
    </main>
  );
};
export default DiscoverPage;
