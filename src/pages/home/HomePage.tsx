//HOOK
import { useCycle } from "./hooks/useCycle";
//UI
import { HomeGrid } from "./components/HomeGrid";
import { HOME_IMAGES } from "../home/data/HOME_IMAGES";
import { HomeTitle } from "./components/HomeTitle";

/**
 * HomePage
 *
 * @description Página principal de introducción de la app, mostrando dos carruseles coordinados:
 * uno para el título y otro para una cuadrícula de imágenes.
 *
 * Componentes:
 * @see HomeTitle -  Muestra el título animado.
 * @see HomeGrid - Muestra la grilla de imágenes.
 *
 * @remarks
 * - "CYCLE_MS" controla el tiempo total de cambio de animación de los dos carruseles.
 * - "STAGGER_MS" controla el retraso entre la animación de cada card individual.
 * - "carouselIndex" usa "useCycle" para rotar automáticamente la cuadrícula de imágenes cada 10s mediante un `setInterval`.
 * - Coordina las animaciones de `HomeTitle` y `HomeGrid` según el índice actual del carrusel.
 * - Ambos carruseles se mantienen sincronizados automáticamente a medida que el índice cambia.
 *
 * @returns El elemento principal de la página.
 */

const HomePage = () => {
  const CYCLE_MS = 10000; // 10s
  const STAGGER_MS = 100; // 0.1s
  const carouselIndex = useCycle(HOME_IMAGES.length, CYCLE_MS);

  return (
    <main className="w-full bg-surface h-screen pt-20 relative overflow-hidden p-10">
      <HomeTitle currentCardBatch={carouselIndex} cycleMs={CYCLE_MS} />

      <HomeGrid
        images={HOME_IMAGES[carouselIndex] ?? []}
        currentCardBatch={carouselIndex}
        cycleMs={CYCLE_MS}
        staggerMs={STAGGER_MS}
      />
    </main>
  );
};
export default HomePage;
